import { ReactElement, useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { useScrollAnimation } from "../../../hooks/userScrollAnimation";
import "./Section.css";

import { SectionProps } from "./types";

export function Section(props: SectionProps): ReactElement {
  const [backgroundGradient, setBackgroundGradient] = useState<string>();
  const [contentAlignment, setContentAlignment] = useState<string>();

  const [backgroundMediaPositionX, setBackgroundMediaPositionX] =
    useState<string>("0%");
  const [backgroundMediaPositionY, setBackgroundMediaPositionY] =
    useState<string>("0%");

  const scrollAnimationRef = useScrollAnimation();

  useEffect(() => {
    const gradientStart = props?.backgroundGradientStartColor;
    const gradientEnd = props?.backgroundGradientEndColor;
    const gradientAngle = props?.backgroundGradientAngle
      ? props?.backgroundGradientAngle
      : "1deg";

    const gradientString =
      "linear-gradient(" +
      gradientAngle +
      ", " +
      gradientStart +
      ", " +
      gradientEnd +
      ")";
    // const gradientString = "linear-gradient(45deg, #000F, #0000)";

    setContentAlignment(
      props.contentAlignment ? props.contentAlignment : "start"
    );
    setBackgroundGradient(gradientString);

    if (props.backgroundMediaPosition) {
      if (props.backgroundMediaPosition == "center") {
        setBackgroundMediaPositionX("50%");
        setBackgroundMediaPositionY("50%");
      } else if (props.backgroundMediaPosition == "left") {
        setBackgroundMediaPositionX("0%");
        setBackgroundMediaPositionY("50%");
      } else if (props.backgroundMediaPosition == "right") {
        setBackgroundMediaPositionX("100%");
        setBackgroundMediaPositionY("50%");
      }
    }
  }, [props]);

  return (
    <Row
      ref={scrollAnimationRef}
      className={
        "move-up-when-visible py-5 px-2 px-md-5 justify-content-center align-items-center " +
        (props.type != "hero-section"
          ? props.titlePosition == "start" ||
            props.imagePosition == "end" ||
            (!props.titlePosition && !props.imagePosition)
            ? "flex-row"
            : "flex-row-reverse"
          : "flex-row mt-5 ") +
        (props.transparentBackground ? " transparent-background " : "")
      }
      style={{
        // backgroundImage: "url(" + props?.heroBackground + ")",
        position: props.backgroundImage ? "relative" : "inherit",
        overflowY: props.spreadMediaAcrossSurroundingSections
          ? "visible"
          : "hidden",
        overflowX: "hidden",
        background: props.transparentBackground
          ? "rgba(0, 0, 0, 0)"
          : (props?.backgroundGradient ? backgroundGradient + ", " : "") +
            "url(" +
            props?.heroBackground +
            ") top left/cover no-repeat",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <img
        src={props.backgroundImage}
        className={(props.backgroundImage ? "d-inline" : "d-none") + " "}
        style={{
          width: props.backgroundImageWidth
            ? props.backgroundImageWidth
            : "100%",
          height: props.backgroundImageHeight
            ? props.backgroundImageHeight
            : "100%",
          position: "absolute",
          inset: 0,
          objectFit: "contain",
          top: backgroundMediaPositionY,
          left: backgroundMediaPositionX,
          // transform: "translate(" + backgroundMediaPositionX + ", " + backgroundMediaPositionY + ")",
          transform:
            "translate(-50%, -50%) rotate(" +
            (props.backgroundMediaRotation
              ? props.backgroundMediaRotation
              : "0deg") +
            ")",
          zIndex: -1,
        }}
      />

      {props.type != "hero-section" ? (
        <>
          <Col
            xs={12}
            lg={props?.singleSection ? 12 : 6}
            style={{
              background: props.transparentBackground ? "rgba(0, 0, 0, 0)" : "",
            }}
            className={
              "d-flex flex-column px-2 px-md-1 pb-3 pb-md-0 justify-content-" +
              contentAlignment +
              " align-items-" +
              contentAlignment +
              " "
            }
          >
            <Row
              className={
                (props.singleSection
                  ? "justify-content-center justify-content-lg-" +
                    contentAlignment +
                    "align-items-center align-items-lg-" +
                    contentAlignment
                  : " ") + " gap-2 ps-4 ps-md-1"
              }
            >
              <div
                className={
                  props.titlePosition
                    ? "text-md-" + props.titlePosition
                    : "text-md-center"
                }
              >
                <h2 className="" style={{ fontWeight: "bolder" }}>
                  {props.heading}
                </h2>
              </div>

              <div
                className={
                  props.subheadingPosition
                    ? "text-md-" + props.subheadingPosition
                    : "text-md-center"
                }
              >
                <h3 className="">{props.subheading}</h3>
              </div>
            </Row>
            <Row
              className={
                "ps-4 w-100 justify-content-center align-items-center " +
                (props.paragraphAlignment
                  ? "text-" + props.paragraphAlignment
                  : "text-start") +
                (props.contentAlignment
                  ? " justify-content-md-" + props.contentAlignment
                  : " justify-content-md-start")
              }
              style={{
                fontSize: props.paragraphFontSize
                  ? props.paragraphFontSize
                  : "inherit",
              }}
            >
              {props.paragraph ? (
                <div className="section-paragraph pb-4 pb-lg-0">
                  {props.paragraph}
                </div>
              ) : (
                props.content
              )}
            </Row>

            {!props.separateCTASection ? (
              /** Add a CTA section at the bottom of the section */
              <Row className={"ps-5 pt-4 " + (props.cta ? "d-flex" : "d-none")}>
                {props.cta ? (
                  <div
                    style={{
                      textWrap: "wrap",
                      width: props.cta.width ? props.cta.width : "auto",
                    }}
                  >
                    <a href={props.cta?.link} className=" text-decoration-none">
                      <button
                        className="cta-button"
                        style={{
                          width: "100%",
                          backgroundColor: props.cta?.backgroundColor,
                          color: props.cta?.textColor,
                        }}
                        onClick={
                          props.cta?.onClick ? props.cta.onClick() : () => {}
                        }
                      >
                        {props.cta?.text}
                      </button>
                    </a>
                    <div
                      className={
                        props.cta.subTextAlignment
                          ? "text-" + props.cta.subTextAlignment
                          : "text-" + "center"
                      }
                    >
                      {props.cta?.subText}
                    </div>
                  </div>
                ) : (
                  <></>
                )}
              </Row>
            ) : (
              <></>
            )}
          </Col>

          <Col
            xs={12}
            md={props?.singleSection ? 12 : 6}
            className={
              "flex-column pe-0 justify-content-center align-items-center justify-content-md-" +
              contentAlignment +
              " align-items-md-" +
              contentAlignment +
              " " +
              (props.singleSection ? "d-none" : "d-flex")
            }
          >
            {props.separateCTASection ? (
              /** Add a section with CTA next to paragraph */
              <>
                {props.cta ? (
                  <Row
                    className={
                      "ps-md-5 justify-content-center align-items-center " +
                      "justify-content-md-" +
                      contentAlignment +
                      " align-items-md-" +
                      contentAlignment +
                      " "
                    }
                  >
                    {props.cta ? (
                      <div
                        style={{
                          width: props.cta.width ? props.cta.width : "auto",
                        }}
                      >
                        <a
                          href={props.cta?.link}
                          className=" text-decoration-none"
                        >
                          <button
                            className="cta-button"
                            style={{
                              width: "100%",
                              padding: "10px 50px 10px 50px",
                              backgroundColor: props.cta?.backgroundColor,
                              color: props.cta?.textColor,
                            }}
                            onClick={
                              props.cta?.onClick
                                ? props.cta.onClick()
                                : () => {}
                            }
                          >
                            {props.cta?.text}
                          </button>
                        </a>
                        <div
                          className={
                            (props.cta.subTextAlignment
                              ? "text-" + props.cta.subTextAlignment
                              : "text-" + "center") + " pt-2"
                          }
                        >
                          {props.cta?.subText}
                        </div>
                      </div>
                    ) : (
                      <></>
                    )}
                  </Row>
                ) : (
                  <></>
                )}
              </>
            ) : (
              <img src={props.imageURL} />
            )}
          </Col>
        </>
      ) : (
        <>
          <Col
            xs={12}
            md={6}
            className={
              "vw-100 py-5 justify-content-" +
              contentAlignment +
              " align-items-" +
              contentAlignment +
              " "
            }
            style={{ color: props?.textColor ? props.textColor : "#000" }}
          >
            <Row className={"justify-content-center gap-5 "}>
              <Col xs={12}>
                <Row
                  className={
                    props.titlePosition
                      ? "justify-content-md-" + props.titlePosition
                      : "justify-content-center"
                  }
                >
                  <div
                    className={
                      props.titlePosition
                        ? "text-md-" + props.titlePosition
                        : "text-md-center"
                    }
                  >
                    <h1 style={{}} className={"py-1 "}>
                      <b>{props.heading}</b>
                    </h1>
                  </div>
                </Row>
                <Row
                  className={
                    (props.subheadingPosition
                      ? "justify-content-md-" + props.subheadingPosition
                      : "justify-content-center") + " py-3"
                  }
                >
                  <Col
                    xs={12}
                    md={
                      props.subheadingSpreadArea
                        ? props.subheadingSpreadArea
                        : 12
                    }
                  >
                    <div
                      className={
                        props.subheadingPosition
                          ? "text-md-" + props.subheadingPosition
                          : "text-md-center"
                      }
                    >
                      <h4 className={"header-subheading "}>
                        {props.subheading}
                      </h4>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row className="">
              <Col xs={12} className="">
                {props.cta ? (
                  <Row
                    className={
                      " justify-content-center pt-3 " +
                      (props.ctaAlignment
                        ? "justify-content-md-" + props.ctaAlignment
                        : "")
                    }
                  >
                    <div
                      className={
                        (props.ctaAlignmentDirection
                          ? "flex-" + props.ctaAlignmentDirection
                          : "flex-row") + " w-auto"
                      }
                    >
                      {props.cta ? (
                        <div
                          style={{
                            width: props.cta.width ? props.cta.width : "auto",
                          }}
                        >
                          <a
                            href={props.cta?.link}
                            className=" text-decoration-none ms-0"
                          >
                            <button
                              className={
                                "cta-button " +
                                (props.cta.type == "rounded"
                                  ? "cta-button-rounded"
                                  : "cta-button-rectangle")
                              }
                              style={{
                                width: "100%",
                                padding: "10px 50px 10px 50px",
                                backgroundColor: props.cta?.backgroundColor,
                                color: props.cta?.textColor,
                              }}
                              onClick={
                                props.cta?.onClick
                                  ? props.cta.onClick()
                                  : () => {}
                              }
                            >
                              {props.cta?.text}
                            </button>
                          </a>
                          <div
                            className={
                              (props.cta.subTextAlignment
                                ? "text-" + props.cta.subTextAlignment
                                : "text-" + "center") + " pt-2"
                            }
                          >
                            {props.cta?.subText}
                          </div>
                        </div>
                      ) : (
                        <></>
                      )}

                      {props.secondaryCta ? (
                        <div
                          style={{
                            width: props.secondaryCta.width
                              ? props.secondaryCta.width
                              : "auto",
                          }}
                        >
                          <a
                            href={props.secondaryCta?.link}
                            className=" text-decoration-none"
                          >
                            <button
                              className={
                                "cta-button " +
                                (props.secondaryCta.type == "rounded"
                                  ? "cta-button-rounded"
                                  : "cta-button-rectangle")
                              }
                              style={{
                                width: "100%",
                                padding: "10px 50px 10px 50px",
                                backgroundColor:
                                  props.secondaryCta?.backgroundColor,
                                color: props.secondaryCta?.textColor,
                              }}
                              onClick={
                                props.secondaryCta?.onClick
                                  ? props.secondaryCta.onClick()
                                  : () => {}
                              }
                            >
                              {props.secondaryCta?.text}
                            </button>
                          </a>
                          <div
                            className={
                              (props.secondaryCta.subTextAlignment
                                ? "text-" + props.secondaryCta.subTextAlignment
                                : "text-" + "center") + " pt-2"
                            }
                          >
                            {props.secondaryCta?.subText}
                          </div>
                        </div>
                      ) : (
                        <></>
                      )}
                    </div>
                  </Row>
                ) : (
                  <></>
                )}
              </Col>
            </Row>
          </Col>
        </>
      )}
    </Row>
  );
}
