import React, { Component } from "react";
import "./MailsDefault.css";

class Mail20 extends Component {
  state = {};
  render() {
    return (
      <div>
        <div align="center">
          <table
            style={{ width: "450.0pt" }}
            width={600}
            cellSpacing={0}
            cellPadding={0}
            border={0}
          >
            <tbody>
              <tr style={{ height: "7.2pt" }}>
                <td style={{ padding: "0cm 0cm 0cm 0cm", height: "7.2pt" }}>
                  <table
                    style={{ width: "450.0pt" }}
                    width={600}
                    cellSpacing={0}
                    cellPadding={0}
                    border={0}
                  >
                    <tbody>
                      <tr style={{ height: "18.0pt" }}>
                        <td
                          style={{
                            width: "228.75pt",
                            padding: "0cm 0cm 0cm 0cm",
                            height: "18.0pt",
                          }}
                          width={305}
                        >
                          <p className="MsoNormal">
                            <span
                              style={{
                                fontSize: "8.0pt",
                                fontFamily: '"Helvetica",sans-serif',
                                color: "#383641",
                              }}
                            >
                              <a
                                href="https://email.myunidays.com/campaign/clicked/pxo_1i33a0CNTDjEr2OA9KI_Re86f4VEiVanjQDpBJX_sy-aORDZTLy6p40A6dc1aHR0cHM6Ly93d3cubXl1bmlkYXlzLmNvbS8_dXRtX2NhbXBhaWduPWp1bmVfMjAxNyZ1dG1fY29udGVudD0wMS4wNi4xN19GaXRuZXNzX0RFX00mdXRtX21lZGl1bT1lbWFpbCZ1dG1fc291cmNlPW9ubGluZQ=="
                                target="_blank"
                                data-saferedirecturl="https://www.google.com/url?hl=de&q=https://email.myunidays.com/campaign/clicked/pxo_1i33a0CNTDjEr2OA9KI_Re86f4VEiVanjQDpBJX_sy-aORDZTLy6p40A6dc1aHR0cHM6Ly93d3cubXl1bmlkYXlzLmNvbS8_dXRtX2NhbXBhaWduPWp1bmVfMjAxNyZ1dG1fY29udGVudD0wMS4wNi4xN19GaXRuZXNzX0RFX00mdXRtX21lZGl1bT1lbWFpbCZ1dG1fc291cmNlPW9ubGluZQ%3D%3D&source=gmail&ust=1597146657011000&usg=AFQjCNElxTlpwV3ikVEwqQdGhC9qKOm4vQ"
                                onMouseEnter={() => {
                                  this.props.insideEmailInfo(true, "InLink1");
                                }}
                                onMouseLeave={() => {
                                  this.props.insideEmailInfo(false, "InLink1");
                                }}
                                onMouseOver={() => {
                                  this.props.insideEmailInfo(true, "InLink1");
                                }}
                                onClick={() => {
                                  this.props.insideEmailInfo(
                                    true,
                                    "ClickedLink1"
                                  );
                                }}
                              >
                                Wir haben die perfekten Rabatte für eure
                                Fitness-Träume{" "}
                              </a>
                              <u />
                              <u />
                            </span>
                          </p>
                        </td>
                        <td
                          style={{
                            width: "228.75pt",
                            padding: "0cm 0cm 0cm 0cm",
                            height: "18.0pt",
                          }}
                          width={305}
                        >
                          <p
                            className="MsoNormal"
                            style={{ textAlign: "right" }}
                            align="right"
                          >
                            <span
                              style={{
                                fontSize: "8.0pt",
                                fontFamily: '"Helvetica",sans-serif',
                                color: "#383641",
                              }}
                            >
                              In deinem
                              <a
                                href="https://email.myunidays.com/campaign/view/_7MvmjkQ2Uy8uqeNAOnXNacaP9Yt92tAjUw4xK9jgPQjhPI5FWSzRLuSyNhBn1lT/A/eyJSRUNJUElFTlRJRCI6ImQ2M2YxYWE3LWY3MmQtNDA2Yi04ZDRjLTM4YzRhZjYzODBmNCIsIkZJUlNUTkFNRSI6IlJ5YW4iLCJMQVNUTkFNRSI6IlN0ZWltZXIiLCJSRUZFUlJBTENPREUiOiJDNW9jTzljOW9rdyIsIlNIQVJFVVJMIjoiaHR0cHM6Ly93d3cubXl1bmlkYXlzLmNvbS9yL0M1b2NPOWM5b2t3IiwiRkFDRUJPT0tVUkwiOiJodHRwczovL3d3dy5mYWNlYm9vay5jb20vc2hhcmVyLnBocD91PWh0dHBzJTNhJTJmJTJmd3d3Lm15dW5pZGF5cy5jb20lMmZyJTJmQzVvY085Yzlva3cmdD1BbmdlYm90ZStmJWMzJWJjcitTdHVkZW50ZW4rJWUyJTgwJTkzK3NjaG5lbGwlMmMra29zdGVubG9zK3VuZCtleGtsdXNpdiIsIlRXSVRURVJVUkwiOiJodHRwczovL3R3aXR0ZXIuY29tL2hvbWU_c3RhdHVzPUFscyUyMFN0dWRlbnQlMjBrYW5uc3QlMjBkdSUyMGJlaSUyMCU0ME15VU5pREFZUyUyMGRhcyUyMGdhbnplJTIwSmFociUyMFJhYmF0dGUlMjBnZW5pZSVjMyU5ZmVuLiUyME1lbGRlJTIwZGljaCUyMGpldHp0JTIwYW4lM2ElMjAlMjBodHRwcyUzYSUyZiUyZnd3dy5teXVuaWRheXMuY29tJTJmciUyZkM1b2NPOWM5b2t3IiwiV0hBVFNBUFBVUkwiOiJ3aGF0c2FwcDovL3NlbmQ_dGV4dD1IZXkhJTIwSGFzdCUyMGR1JTIwc2Nob24lMjB2b24lMjBVTmlEQVlTJTIwZ2VoJWMzJWI2cnQlM2YlMjBNZWxkJTIwZGljaCUyMGpldHp0JTIwa29zdGVubG9zJTIwYW4lMjB1bmQlMjBmYW5nJTIwc29mb3J0JTIwYW4lMjB6dSUyMHNwYXJlbi4lMjAlMjBodHRwcyUzYSUyZiUyZnd3dy5teXVuaWRheXMuY29tJTJmciUyZkM1b2NPOWM5b2t3IiwiRU1BSUwiOiJyeWFuLnNAaG90bWFpbC5kZSIsIlVOU1VCU0NSSUJFIjoiaHR0cHM6Ly93d3cubXl1bmlkYXlzLmNvbS9hY2NvdW50L3NldHRpbmdzL3Vuc3Vic2NyaWJlL3B4b18xaTMzYTBDTlREakVyMk9BOUNPRThqa1ZaTE5FdTVMSTJFR2ZXVlBfc3ktYU9SRFpUTHk2cDQwQTZkYzEvMSJ9/eyJIQVZFTkFNRSI6dHJ1ZSwiTk9OQU1FIjpmYWxzZX0=/uY9uGOJHXtC7XqnVrL0vOEHl1YsYSrMrBfeAG3Jn59-oy2fsYcGbFK6TEjTE-X_IkcCDBpzUMcMgKd4RR9_L3g=="
                                target="_blank"
                                data-saferedirecturl="https://www.google.com/url?hl=de&q=https://email.myunidays.com/campaign/view/_7MvmjkQ2Uy8uqeNAOnXNacaP9Yt92tAjUw4xK9jgPQjhPI5FWSzRLuSyNhBn1lT/A/eyJSRUNJUElFTlRJRCI6ImQ2M2YxYWE3LWY3MmQtNDA2Yi04ZDRjLTM4YzRhZjYzODBmNCIsIkZJUlNUTkFNRSI6IlJ5YW4iLCJMQVNUTkFNRSI6IlN0ZWltZXIiLCJSRUZFUlJBTENPREUiOiJDNW9jTzljOW9rdyIsIlNIQVJFVVJMIjoiaHR0cHM6Ly93d3cubXl1bmlkYXlzLmNvbS9yL0M1b2NPOWM5b2t3IiwiRkFDRUJPT0tVUkwiOiJodHRwczovL3d3dy5mYWNlYm9vay5jb20vc2hhcmVyLnBocD91PWh0dHBzJTNhJTJmJTJmd3d3Lm15dW5pZGF5cy5jb20lMmZyJTJmQzVvY085Yzlva3cmdD1BbmdlYm90ZStmJWMzJWJjcitTdHVkZW50ZW4rJWUyJTgwJTkzK3NjaG5lbGwlMmMra29zdGVubG9zK3VuZCtleGtsdXNpdiIsIlRXSVRURVJVUkwiOiJodHRwczovL3R3aXR0ZXIuY29tL2hvbWU_c3RhdHVzPUFscyUyMFN0dWRlbnQlMjBrYW5uc3QlMjBkdSUyMGJlaSUyMCU0ME15VU5pREFZUyUyMGRhcyUyMGdhbnplJTIwSmFociUyMFJhYmF0dGUlMjBnZW5pZSVjMyU5ZmVuLiUyME1lbGRlJTIwZGljaCUyMGpldHp0JTIwYW4lM2ElMjAlMjBodHRwcyUzYSUyZiUyZnd3dy5teXVuaWRheXMuY29tJTJmciUyZkM1b2NPOWM5b2t3IiwiV0hBVFNBUFBVUkwiOiJ3aGF0c2FwcDovL3NlbmQ_dGV4dD1IZXkhJTIwSGFzdCUyMGR1JTIwc2Nob24lMjB2b24lMjBVTmlEQVlTJTIwZ2VoJWMzJWI2cnQlM2YlMjBNZWxkJTIwZGljaCUyMGpldHp0JTIwa29zdGVubG9zJTIwYW4lMjB1bmQlMjBmYW5nJTIwc29mb3J0JTIwYW4lMjB6dSUyMHNwYXJlbi4lMjAlMjBodHRwcyUzYSUyZiUyZnd3dy5teXVuaWRheXMuY29tJTJmciUyZkM1b2NPOWM5b2t3IiwiRU1BSUwiOiJyeWFuLnNAaG90bWFpbC5kZSIsIlVOU1VCU0NSSUJFIjoiaHR0cHM6Ly93d3cubXl1bmlkYXlzLmNvbS9hY2NvdW50L3NldHRpbmdzL3Vuc3Vic2NyaWJlL3B4b18xaTMzYTBDTlREakVyMk9BOUNPRThqa1ZaTE5FdTVMSTJFR2ZXVlBfc3ktYU9SRFpUTHk2cDQwQTZkYzEvMSJ9/eyJIQVZFTkFNRSI6dHJ1ZSwiTk9OQU1FIjpmYWxzZX0%3D/uY9uGOJHXtC7XqnVrL0vOEHl1YsYSrMrBfeAG3Jn59-oy2fsYcGbFK6TEjTE-X_IkcCDBpzUMcMgKd4RR9_L3g%3D%3D&source=gmail&ust=1597146657012000&usg=AFQjCNHVHiqzTateIpALyj3KhAMMhok6Ew"
                                onMouseEnter={() => {
                                  this.props.insideEmailInfo(true, "InLink2");
                                }}
                                onMouseLeave={() => {
                                  this.props.insideEmailInfo(false, "InLink2");
                                }}
                                onMouseOver={() => {
                                  this.props.insideEmailInfo(true, "InLink2");
                                }}
                                onClick={() => {
                                  this.props.insideEmailInfo(
                                    true,
                                    "ClickedLink2"
                                  );
                                }}
                              >
                                <span style={{ color: "#383641" }}>
                                  web-browser
                                </span>
                              </a>{" "}
                              anzeigen
                              <u />
                              <u />
                            </span>
                          </p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr>
                <td style={{ padding: "0cm 0cm 0cm 0cm" }}>
                  <p className="MsoNormal">
                    <span
                      style={{
                        fontSize: "8.0pt",
                        fontFamily: '"Helvetica",sans-serif',
                        color: "#383641",
                      }}
                    >
                      &nbsp;
                    </span>
                    <span
                      style={{
                        fontSize: "8.0pt",
                        fontFamily: '"Helvetica",sans-serif',
                        color: "#383641",
                      }}
                    >
                      <u />
                      <u />
                    </span>
                  </p>
                </td>
              </tr>
              <tr style={{ height: "7.2pt" }}>
                <td
                  style={{
                    width: "452.25pt",
                    padding: "0cm 0cm 0cm 0cm",
                    height: "7.2pt",
                  }}
                  width={603}
                >
                  <table
                    style={{ width: "450.0pt" }}
                    width={600}
                    cellSpacing={0}
                    cellPadding={0}
                    border={0}
                  >
                    <tbody>
                      <tr>
                        <td
                          style={{
                            width: "6.75pt",
                            padding: "0cm 0cm 0cm 0cm",
                          }}
                          width={9}
                        />
                        <td
                          style={{
                            width: "132.0pt",
                            padding: "0cm 0cm 0cm 0cm",
                          }}
                          width={176}
                        >
                          <p className="MsoNormal">
                            <a
                              href="https://email.myunidays.com/campaign/clicked/pxo_1i33a0CNTDjEr2OA9PD89ppiOQlFrxynjQDpBJX_sy-aORDZTLy6p40A6dc1aHR0cHM6Ly93d3cubXl1bmlkYXlzLmNvbS8_dXRtX2NhbXBhaWduPWp1bmVfMjAxNyZ1dG1fY29udGVudD0wMS4wNi4xN19GaXRuZXNzX0RFX00mdXRtX21lZGl1bT1lbWFpbCZ1dG1fc291cmNlPW9ubGluZQ=="
                              target="_blank"
                              data-saferedirecturl="https://www.google.com/url?hl=de&q=https://email.myunidays.com/campaign/clicked/pxo_1i33a0CNTDjEr2OA9PD89ppiOQlFrxynjQDpBJX_sy-aORDZTLy6p40A6dc1aHR0cHM6Ly93d3cubXl1bmlkYXlzLmNvbS8_dXRtX2NhbXBhaWduPWp1bmVfMjAxNyZ1dG1fY29udGVudD0wMS4wNi4xN19GaXRuZXNzX0RFX00mdXRtX21lZGl1bT1lbWFpbCZ1dG1fc291cmNlPW9ubGluZQ%3D%3D&source=gmail&ust=1597146657012000&usg=AFQjCNF73cxu_GbnVcf0VjPEgay13Yoh1A"
                              onMouseEnter={() => {
                                this.props.insideEmailInfo(true, "InLink3");
                              }}
                              onMouseLeave={() => {
                                this.props.insideEmailInfo(false, "InLink3");
                              }}
                              onMouseOver={() => {
                                this.props.insideEmailInfo(true, "InLink3");
                              }}
                              onClick={() => {
                                this.props.insideEmailInfo(
                                  true,
                                  "ClickedLink3"
                                );
                              }}
                            >
                              <span
                                style={{
                                  fontSize: "8.0pt",
                                  fontFamily: '"Helvetica",sans-serif',
                                  color: "black",
                                  textDecoration: "none",
                                }}
                              >
                                <img
                                  style={{ width: "1.6666in", height: ".3in" }}
                                  id="m_-9063951616003314965_x0000_i1036"
                                  src="https://ci3.googleusercontent.com/proxy/kFk4-nXSfsuTb7c255OgStWGUpZRuZCvUbP2ygLciyPZNfKcvgrhR76GfpXwL7XmEnBJ4XPXL0J0Gg6rq7nY542fhdOtec2NzFJGHe-1YysVVQ28zIuqsWuOPz0kzfJyHbEN0cnh0v0=s0-d-e1-ft#https://assets-email1.unidays.world/common_files/68e52cd4-4bae-485d-8692-50d343016566"
                                  alt="Visit myunidays.com"
                                  width={160}
                                  height={29}
                                  border={0}
                                />
                              </span>
                            </a>
                            <span
                              style={{
                                fontSize: "8.0pt",
                                fontFamily: '"Helvetica",sans-serif',
                                color: "#383641",
                              }}
                            >
                              <u />
                              <u />
                            </span>
                          </p>
                        </td>
                        <td
                          style={{
                            width: "182.25pt",
                            padding: "0cm 0cm 0cm 0cm",
                          }}
                          width={243}
                        >
                          <p className="MsoNormal">
                            <span
                              style={{
                                fontSize: "8.0pt",
                                fontFamily: '"Helvetica",sans-serif',
                                color: "#383641",
                              }}
                            >
                              &nbsp;
                              <u />
                              <u />
                            </span>
                          </p>
                        </td>
                        <td
                          style={{
                            width: "136.5pt",
                            padding: "0cm 0cm 0cm 0cm",
                          }}
                          width={182}
                        >
                          <table
                            style={{ width: "135.0pt" }}
                            width={180}
                            cellSpacing={0}
                            cellPadding={0}
                            border={0}
                            align="right"
                          >
                            <tbody>
                              <tr>
                                <td
                                  style={{
                                    width: "25.5pt",
                                    padding: "0cm 0cm 0cm 0cm",
                                  }}
                                  width={34}
                                >
                                  <p className="MsoNormal">
                                    <a
                                      href="https://email.myunidays.com/campaign/clicked/pxo_1i33a0CNTDjEr2OA9GkzvjbMtxdMk9WnjQDpBJr_sy-aORDZTLy6p40A6dc1aHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL3VuaWRheXM="
                                      target="_blank"
                                      data-saferedirecturl="https://www.google.com/url?hl=de&q=https://email.myunidays.com/campaign/clicked/pxo_1i33a0CNTDjEr2OA9GkzvjbMtxdMk9WnjQDpBJr_sy-aORDZTLy6p40A6dc1aHR0cHM6Ly93d3cuZmFjZWJvb2suY29tL3VuaWRheXM%3D&source=gmail&ust=1597146657012000&usg=AFQjCNETyEk5ioSwwSwyNUd5oQDESYFIuw"
                                      onMouseEnter={() => {
                                        this.props.insideEmailInfo(
                                          true,
                                          "InLink4"
                                        );
                                      }}
                                      onMouseLeave={() => {
                                        this.props.insideEmailInfo(
                                          false,
                                          "InLink4"
                                        );
                                      }}
                                      onMouseOver={() => {
                                        this.props.insideEmailInfo(
                                          true,
                                          "InLink4"
                                        );
                                      }}
                                      onClick={() => {
                                        this.props.insideEmailInfo(
                                          true,
                                          "ClickedLink4"
                                        );
                                      }}
                                    >
                                      <span
                                        style={{
                                          fontSize: "8.0pt",
                                          fontFamily: '"Helvetica",sans-serif',
                                          color: "black",
                                          textDecoration: "none",
                                        }}
                                      >
                                        <img
                                          style={{
                                            width: ".35in",
                                            height: ".35in",
                                          }}
                                          id="m_-9063951616003314965_x0000_i1035"
                                          src="https://ci5.googleusercontent.com/proxy/Wsctrdoktem8t60A6rCoTkP6QMpyp9NftNkCKghbUmuLZmFRNVXboOxebOh5CGi5murlKUe29q76-guUs7PGYPyUfjXrae7ssbV6kGySxhdyO1hrnWRuM2Y64AoklVk9zP5PA9hzT1n5MqUGfsi_=s0-d-e1-ft#https://d5qghzrpweeg.cloudfront.net/common_files/social/57f9b4a4-c61b-47d1-87b9-bd4941fd413d"
                                          alt="Facebook"
                                          width={34}
                                          height={34}
                                          border={0}
                                        />
                                      </span>
                                    </a>
                                    <span
                                      style={{
                                        fontSize: "8.0pt",
                                        fontFamily: '"Helvetica",sans-serif',
                                        color: "#383641",
                                      }}
                                    >
                                      <u />
                                      <u />
                                    </span>
                                  </p>
                                </td>
                                <td
                                  style={{
                                    width: "7.5pt",
                                    padding: "0cm 0cm 0cm 0cm",
                                  }}
                                  width={10}
                                />
                                <td
                                  style={{
                                    width: "25.5pt",
                                    padding: "0cm 0cm 0cm 0cm",
                                  }}
                                  width={34}
                                >
                                  <p className="MsoNormal">
                                    <a
                                      href="https://email.myunidays.com/campaign/clicked/pxo_1i33a0CNTDjEr2OA9Jn4Kjl8DdpGhxmnjQDpBJr_sy-aORDZTLy6p40A6dc1aHR0cHM6Ly90d2l0dGVyLmNvbS9VTmlEQVlTX0RF"
                                      target="_blank"
                                      data-saferedirecturl="https://www.google.com/url?hl=de&q=https://email.myunidays.com/campaign/clicked/pxo_1i33a0CNTDjEr2OA9Jn4Kjl8DdpGhxmnjQDpBJr_sy-aORDZTLy6p40A6dc1aHR0cHM6Ly90d2l0dGVyLmNvbS9VTmlEQVlTX0RF&source=gmail&ust=1597146657012000&usg=AFQjCNF56Iag4kDCAnLu8pJQ_44xe_y74g"
                                      onMouseEnter={() => {
                                        this.props.insideEmailInfo(
                                          true,
                                          "InLink5"
                                        );
                                      }}
                                      onMouseLeave={() => {
                                        this.props.insideEmailInfo(
                                          false,
                                          "InLink5"
                                        );
                                      }}
                                      onMouseOver={() => {
                                        this.props.insideEmailInfo(
                                          true,
                                          "InLink5"
                                        );
                                      }}
                                      onClick={() => {
                                        this.props.insideEmailInfo(
                                          true,
                                          "ClickedLink5"
                                        );
                                      }}
                                    >
                                      <span
                                        style={{
                                          fontSize: "8.0pt",
                                          fontFamily: '"Helvetica",sans-serif',
                                          color: "black",
                                          textDecoration: "none",
                                        }}
                                      >
                                        <img
                                          style={{
                                            width: ".35in",
                                            height: ".35in",
                                          }}
                                          id="m_-9063951616003314965_x0000_i1034"
                                          src="https://ci6.googleusercontent.com/proxy/oeCt9TilLDccnykx7MpzOEr7sgMS6DUvCGCuv3fimC4omF3JKGssj0OKZ8dLMIjNUGayT9Akokild5jj1-VXEC4M2RMQb7Y-Zzgus7TjWUjGLM2aWzXE2gb4whpG_m73t7jO43bxovhbv34-BMnc=s0-d-e1-ft#https://d5qghzrpweeg.cloudfront.net/common_files/social/99bb6208-04de-4bb4-b862-f625e877e22a"
                                          alt="Twitter"
                                          width={34}
                                          height={34}
                                          border={0}
                                        />
                                      </span>
                                    </a>
                                    <span
                                      style={{
                                        fontSize: "8.0pt",
                                        fontFamily: '"Helvetica",sans-serif',
                                        color: "#383641",
                                      }}
                                    >
                                      <u />
                                      <u />
                                    </span>
                                  </p>
                                </td>
                                <td
                                  style={{
                                    width: "7.5pt",
                                    padding: "0cm 0cm 0cm 0cm",
                                  }}
                                  width={10}
                                />
                                <td
                                  style={{
                                    width: "25.5pt",
                                    padding: "0cm 0cm 0cm 0cm",
                                  }}
                                  width={34}
                                >
                                  <p className="MsoNormal">
                                    <a
                                      href="https://email.myunidays.com/campaign/clicked/pxo_1i33a0CNTDjEr2OA9CPGekrLPjNNtPCnjQDpBJr_sy-aORDZTLy6p40A6dc1aHR0cDovL3d3dy5waW50ZXJlc3QuY29tL3VuaWRheXM="
                                      target="_blank"
                                      data-saferedirecturl="https://www.google.com/url?hl=de&q=https://email.myunidays.com/campaign/clicked/pxo_1i33a0CNTDjEr2OA9CPGekrLPjNNtPCnjQDpBJr_sy-aORDZTLy6p40A6dc1aHR0cDovL3d3dy5waW50ZXJlc3QuY29tL3VuaWRheXM%3D&source=gmail&ust=1597146657012000&usg=AFQjCNEwh3e28pynKI7XDBGhRLk-9VanAQ"
                                      onMouseEnter={() => {
                                        this.props.insideEmailInfo(
                                          true,
                                          "InLink6"
                                        );
                                      }}
                                      onMouseLeave={() => {
                                        this.props.insideEmailInfo(
                                          false,
                                          "InLink6"
                                        );
                                      }}
                                      onMouseOver={() => {
                                        this.props.insideEmailInfo(
                                          true,
                                          "InLink7"
                                        );
                                      }}
                                      onClick={() => {
                                        this.props.insideEmailInfo(
                                          true,
                                          "ClickedLink8"
                                        );
                                      }}
                                    >
                                      <span
                                        style={{
                                          fontSize: "8.0pt",
                                          fontFamily: '"Helvetica",sans-serif',
                                          color: "black",
                                          textDecoration: "none",
                                        }}
                                      >
                                        <img
                                          style={{
                                            width: ".35in",
                                            height: ".35in",
                                          }}
                                          id="m_-9063951616003314965_x0000_i1033"
                                          src="https://ci5.googleusercontent.com/proxy/Du3bwy8LYsW7e7IL-YPSidmR6W3bmrbJ3gs5SYj4m_Lh1DUSGaVmmZDNiEogCcdImp31J-h_-K6T9WORGiFOsDvXNAPf2D0QVtwSZgdThQcTXZ3f8Vm95AoykQP6GTTQehMLGd8r5duim1Y8WRJ6=s0-d-e1-ft#https://d5qghzrpweeg.cloudfront.net/common_files/social/5406e526-2d87-4023-bc55-7acc824f0671"
                                          alt="Pinterest"
                                          width={34}
                                          height={34}
                                          border={0}
                                        />
                                      </span>
                                    </a>
                                    <span
                                      style={{
                                        fontSize: "8.0pt",
                                        fontFamily: '"Helvetica",sans-serif',
                                        color: "#383641",
                                      }}
                                    >
                                      <u />
                                      <u />
                                    </span>
                                  </p>
                                </td>
                                <td
                                  style={{
                                    width: "7.5pt",
                                    padding: "0cm 0cm 0cm 0cm",
                                  }}
                                  width={10}
                                />
                                <td
                                  style={{
                                    width: "33.75pt",
                                    padding: "0cm 0cm 0cm 0cm",
                                  }}
                                  width={45}
                                >
                                  <p className="MsoNormal">
                                    <a
                                      href="https://email.myunidays.com/campaign/clicked/pxo_1i33a0CNTDjEr2OA9FLEVTIq68VBlyunjQDpBJr_sy-aORDZTLy6p40A6dc1aHR0cDovL2luc3RhZ3JhbS5jb20vbXl1bmlkYXlz"
                                      target="_blank"
                                      data-saferedirecturl="https://www.google.com/url?hl=de&q=https://email.myunidays.com/campaign/clicked/pxo_1i33a0CNTDjEr2OA9FLEVTIq68VBlyunjQDpBJr_sy-aORDZTLy6p40A6dc1aHR0cDovL2luc3RhZ3JhbS5jb20vbXl1bmlkYXlz&source=gmail&ust=1597146657012000&usg=AFQjCNGZO3R33IFAcIWRQGdAlMSIL-i1jw"
                                      onMouseEnter={() => {
                                        this.props.insideEmailInfo(
                                          true,
                                          "InLink7"
                                        );
                                      }}
                                      onMouseLeave={() => {
                                        this.props.insideEmailInfo(
                                          false,
                                          "InLink7"
                                        );
                                      }}
                                      onMouseOver={() => {
                                        this.props.insideEmailInfo(
                                          true,
                                          "InLink7"
                                        );
                                      }}
                                      onClick={() => {
                                        this.props.insideEmailInfo(
                                          true,
                                          "ClickedLink7"
                                        );
                                      }}
                                    >
                                      <span
                                        style={{
                                          fontSize: "8.0pt",
                                          fontFamily: '"Helvetica",sans-serif',
                                          color: "black",
                                          textDecoration: "none",
                                        }}
                                      >
                                        <img
                                          style={{
                                            width: ".35in",
                                            height: ".35in",
                                          }}
                                          id="m_-9063951616003314965_x0000_i1032"
                                          src="https://ci4.googleusercontent.com/proxy/Z7qAhDv_UYW1Xhjo6Z7sL2nT082BzTMI7CwUQXmzgVoHq4kr2zgv0n8auYQrIlEQNWiQaEloBFxuBAcPJvlNyiCiyrZJxU2NBehfhu48jAkUiXtrT6hoCQcmDftCrQ3tQlQlUxJ8JjxZ3VIoCYxV=s0-d-e1-ft#https://d5qghzrpweeg.cloudfront.net/common_files/social/353ef561-67f1-4d1d-aeb1-01abfd56545c"
                                          alt="Instagram"
                                          width={34}
                                          height={34}
                                          border={0}
                                        />
                                      </span>
                                    </a>
                                    <span
                                      style={{
                                        fontSize: "8.0pt",
                                        fontFamily: '"Helvetica",sans-serif',
                                        color: "#383641",
                                      }}
                                    >
                                      <u />
                                      <u />
                                    </span>
                                  </p>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr>
                <td style={{ padding: "0cm 0cm 0cm 0cm" }}>
                  <p className="MsoNormal">
                    <span
                      style={{
                        fontSize: "8.0pt",
                        fontFamily: '"Helvetica",sans-serif',
                        color: "#383641",
                      }}
                    >
                      &nbsp;
                    </span>
                    <span
                      style={{
                        fontSize: "8.0pt",
                        fontFamily: '"Helvetica",sans-serif',
                        color: "#383641",
                      }}
                    >
                      <u />
                      <u />
                    </span>
                  </p>
                </td>
              </tr>
              <tr>
                <td style={{ background: "white", padding: "0cm 0cm 0cm 0cm" }}>
                  <table
                    style={{ width: "450.0pt" }}
                    width={600}
                    cellSpacing={0}
                    cellPadding={0}
                    border={0}
                  >
                    <tbody>
                      <tr>
                        <td
                          style={{
                            background: "white",
                            padding: "0cm 0cm 0cm 0cm",
                          }}
                        />
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr>
                <td
                  style={{ background: "white", padding: "0cm 0cm 0cm 0cm" }}
                />
              </tr>
              <tr>
                <td style={{ padding: "0cm 0cm 0cm 0cm" }}>
                  <table
                    style={{ width: "450.0pt" }}
                    width={600}
                    cellSpacing={0}
                    cellPadding={0}
                    border={0}
                  >
                    <tbody>
                      <tr>
                        <td style={{ padding: "0cm 0cm 0cm 0cm" }}>
                          <p className="MsoNormal">
                            <a
                              href="https://email.myunidays.com/campaign/clicked/pxo_1i33a0CNTDjEr2OA9E3hYhgJxctImBmnjQDpBJr_sy-aORDZTLy6p40A6dc1aHR0cHM6Ly93d3cubXl1bmlkYXlzLmNvbS8_dXRtX2NhbXBhaWduPWp1bmVfMjAxNyZ1dG1fY29udGVudD0wMS4wNi4xN19GaXRuZXNzX0RFX00mdXRtX21lZGl1bT1lbWFpbCZ1dG1fc291cmNlPW9ubGluZQ=="
                              target="_blank"
                              data-saferedirecturl="https://www.google.com/url?hl=de&q=https://email.myunidays.com/campaign/clicked/pxo_1i33a0CNTDjEr2OA9E3hYhgJxctImBmnjQDpBJr_sy-aORDZTLy6p40A6dc1aHR0cHM6Ly93d3cubXl1bmlkYXlzLmNvbS8_dXRtX2NhbXBhaWduPWp1bmVfMjAxNyZ1dG1fY29udGVudD0wMS4wNi4xN19GaXRuZXNzX0RFX00mdXRtX21lZGl1bT1lbWFpbCZ1dG1fc291cmNlPW9ubGluZQ%3D%3D&source=gmail&ust=1597146657012000&usg=AFQjCNFZEBmtrHun_Z7RCqKUkftcIs3w5A"
                              onMouseEnter={() => {
                                this.props.insideEmailInfo(true, "InLink8");
                              }}
                              onMouseLeave={() => {
                                this.props.insideEmailInfo(false, "InLink8");
                              }}
                              onMouseOver={() => {
                                this.props.insideEmailInfo(true, "InLink8");
                              }}
                              onClick={() => {
                                this.props.insideEmailInfo(
                                  true,
                                  "ClickedLink8"
                                );
                              }}
                            >
                              <span
                                style={{
                                  fontSize: "8.0pt",
                                  fontFamily: '"Helvetica",sans-serif',
                                  color: "black",
                                  textDecoration: "none",
                                }}
                              >
                                <img
                                  style={{
                                    width: "6.25in",
                                    height: "5.1583in",
                                  }}
                                  id="m_-9063951616003314965_x0000_i1031"
                                  src="https://ci3.googleusercontent.com/proxy/ZR9Gc8Tpqrf6_zmtYi4Mmq9JnU4uOiHXSk5gtqnCuDToyLk8OVIfrqK9DUfeHziy7vmSHQdkTa0uZuFH-k_Zeu6FAESARb8ngmX8y6AYXfmdgjykmwYHCtVsMW6MavGglfeWIlwv2EjybA=s0-d-e1-ft#https://assets-email1.unidays.world/2017/FItnessDE/d023e1ad-a391-4681-be33-0199321b2218"
                                  alt="Fitness-Motivation gefällig? - Jetzt einlösen"
                                  width={600}
                                  height={495}
                                  border={0}
                                />
                              </span>
                            </a>
                            <span
                              style={{
                                fontSize: "8.0pt",
                                fontFamily: '"Helvetica",sans-serif',
                                color: "#383641",
                              }}
                            >
                              <u />
                              <u />
                            </span>
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td style={{ padding: "0cm 0cm 0cm 0cm" }}>
                          <p className="MsoNormal">
                            <a
                              href="https://email.myunidays.com/campaign/clicked/pxo_1i33a0CNTDjEr2OA9KneHPYTgrpHt7enjQDpBJr_sy-aORDZTLy6p40A6dc1aHR0cHM6Ly93d3cubXl1bmlkYXlzLmNvbS9wYXJ0bmVycy9teXByb3RlaW4vdmlldy9vbmxpbmU_dXRtX2NhbXBhaWduPUp1bmVfMjAxOCZ1dG1fY29udGVudD00Mjg5NS1NeVByb3RlaW4mdXRtX21lZGl1bT11bl9jcm0mdXRtX3NvdXJjZT1uZXdzbGV0dGVy"
                              target="_blank"
                              data-saferedirecturl="https://www.google.com/url?hl=de&q=https://email.myunidays.com/campaign/clicked/pxo_1i33a0CNTDjEr2OA9KneHPYTgrpHt7enjQDpBJr_sy-aORDZTLy6p40A6dc1aHR0cHM6Ly93d3cubXl1bmlkYXlzLmNvbS9wYXJ0bmVycy9teXByb3RlaW4vdmlldy9vbmxpbmU_dXRtX2NhbXBhaWduPUp1bmVfMjAxOCZ1dG1fY29udGVudD00Mjg5NS1NeVByb3RlaW4mdXRtX21lZGl1bT11bl9jcm0mdXRtX3NvdXJjZT1uZXdzbGV0dGVy&source=gmail&ust=1597146657012000&usg=AFQjCNFET7sPLIJ2pZlhidIhCGf9eKXpUg"
                              onMouseEnter={() => {
                                this.props.insideEmailInfo(true, "InLink9");
                              }}
                              onMouseLeave={() => {
                                this.props.insideEmailInfo(false, "InLink9");
                              }}
                              onMouseOver={() => {
                                this.props.insideEmailInfo(true, "InLink9");
                              }}
                              onClick={() => {
                                this.props.insideEmailInfo(
                                  true,
                                  "ClickedLink9"
                                );
                              }}
                            >
                              <span
                                style={{
                                  fontSize: "8.0pt",
                                  fontFamily: '"Helvetica",sans-serif',
                                  color: "black",
                                  textDecoration: "none",
                                }}
                              >
                                <img
                                  style={{ width: "6.25in", height: "4.575in" }}
                                  id="m_-9063951616003314965_x0000_i1030"
                                  src="https://ci6.googleusercontent.com/proxy/nIG1y9sQtfxUQiwjbNCNiCM3RU5snaQzwPYbeeG9bCON74OgtgE6yd3GzQbrV2o0HZEAI5asmnp_LDJuFlhycVNof-2yBygiWCM616wvuQf81NSdlwWFH6jzeBb0TeJpmi_WGa7ueFco_w=s0-d-e1-ft#https://assets-email1.unidays.world/2017/FItnessDE/d1d042b2-0aa4-419d-994d-0d9eba2e3c5c"
                                  alt="MyProtein - 15 % Rabatt - Jetzt einlösen"
                                  width={600}
                                  height={439}
                                  border={0}
                                />
                              </span>
                            </a>
                            <span
                              style={{
                                fontSize: "8.0pt",
                                fontFamily: '"Helvetica",sans-serif',
                                color: "#383641",
                              }}
                            >
                              <u />
                              <u />
                            </span>
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td style={{ padding: "0cm 0cm 0cm 0cm" }}>
                          <p className="MsoNormal">
                            <a
                              href="https://email.myunidays.com/campaign/clicked/pxo_1i33a0CNTDjEr2OA9FsT2I4ql0JApBunjQDpBJr_sy-aORDZTLy6p40A6dc1aHR0cHM6Ly93d3cubXl1bmlkYXlzLmNvbS9wYXJ0bmVycy9hZGlkYXMvdmlldy9vbmxpbmU_dXRtX2NhbXBhaWduPUp1bmVfMjAxNyZ1dG1fY29udGVudD00Mjg5NC1hZGlkYXMmdXRtX21lZGl1bT11bl9jcm0mdXRtX3NvdXJjZT1uZXdzbGV0dGVy"
                              target="_blank"
                              data-saferedirecturl="https://www.google.com/url?hl=de&q=https://email.myunidays.com/campaign/clicked/pxo_1i33a0CNTDjEr2OA9FsT2I4ql0JApBunjQDpBJr_sy-aORDZTLy6p40A6dc1aHR0cHM6Ly93d3cubXl1bmlkYXlzLmNvbS9wYXJ0bmVycy9hZGlkYXMvdmlldy9vbmxpbmU_dXRtX2NhbXBhaWduPUp1bmVfMjAxNyZ1dG1fY29udGVudD00Mjg5NC1hZGlkYXMmdXRtX21lZGl1bT11bl9jcm0mdXRtX3NvdXJjZT1uZXdzbGV0dGVy&source=gmail&ust=1597146657012000&usg=AFQjCNGNAAGgrgAFWmQMiOUv1QLwLAb18A"
                              onMouseEnter={() => {
                                this.props.insideEmailInfo(true, "InLink10");
                              }}
                              onMouseLeave={() => {
                                this.props.insideEmailInfo(false, "InLink10");
                              }}
                              onMouseOver={() => {
                                this.props.insideEmailInfo(true, "InLink10");
                              }}
                              onClick={() => {
                                this.props.insideEmailInfo(
                                  true,
                                  "ClickedLink10"
                                );
                              }}
                            >
                              <span
                                style={{
                                  fontSize: "8.0pt",
                                  fontFamily: '"Helvetica",sans-serif',
                                  color: "black",
                                  textDecoration: "none",
                                }}
                              >
                                <img
                                  style={{ width: "6.25in", height: "4.325in" }}
                                  id="m_-9063951616003314965_x0000_i1029"
                                  src="https://ci3.googleusercontent.com/proxy/aHlLQvM_CRp69vK7KPvg9-cJuJeHUNABimt90UPB2V8fJXdD0gXCkdU5b9OACFFN8_tSn4mzPadQarPjm9n4-LMMGL42s0ybxIFXsVRUZHwVoW9VbZ0u0C16aXkMEkgH6KGmjl2vAe536Q=s0-d-e1-ft#https://assets-email1.unidays.world/2017/FItnessDE/980842b6-03ed-48e1-9f2b-cf72ba9d3791"
                                  alt="Adidas - 15 % Rabatt - Jetzt einlösen"
                                  width={600}
                                  height={415}
                                  border={0}
                                />
                              </span>
                            </a>
                            <span
                              style={{
                                fontSize: "8.0pt",
                                fontFamily: '"Helvetica",sans-serif',
                                color: "#383641",
                              }}
                            >
                              <u />
                              <u />
                            </span>
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td style={{ padding: "0cm 0cm 0cm 0cm" }}>
                          <p className="MsoNormal">
                            <a
                              href="https://email.myunidays.com/campaign/clicked/pxo_1i33a0CNTDjEr2OA9P8r2B5Hl0pNsrWnjQDpBJr_sy-aORDZTLy6p40A6dc1aHR0cHM6Ly93d3cubXl1bmlkYXlzLmNvbS9wYXJ0bmVycy9yZWVib2svdmlldy9vbmxpbmU_dXRtX2NhbXBhaWduPUp1bmVfMjAxNyZ1dG1fY29udGVudD00Mjg5NC1SZWVib2smdXRtX21lZGl1bT11bl9jcm0mdXRtX3NvdXJjZT1uZXdzbGV0dGVy"
                              target="_blank"
                              data-saferedirecturl="https://www.google.com/url?hl=de&q=https://email.myunidays.com/campaign/clicked/pxo_1i33a0CNTDjEr2OA9P8r2B5Hl0pNsrWnjQDpBJr_sy-aORDZTLy6p40A6dc1aHR0cHM6Ly93d3cubXl1bmlkYXlzLmNvbS9wYXJ0bmVycy9yZWVib2svdmlldy9vbmxpbmU_dXRtX2NhbXBhaWduPUp1bmVfMjAxNyZ1dG1fY29udGVudD00Mjg5NC1SZWVib2smdXRtX21lZGl1bT11bl9jcm0mdXRtX3NvdXJjZT1uZXdzbGV0dGVy&source=gmail&ust=1597146657012000&usg=AFQjCNGbvQXbCigklkhzkEW-4C-VLNi9fQ"
                              onMouseEnter={() => {
                                this.props.insideEmailInfo(true, "InLink11");
                              }}
                              onMouseLeave={() => {
                                this.props.insideEmailInfo(false, "InLink11");
                              }}
                              onMouseOver={() => {
                                this.props.insideEmailInfo(true, "InLink11");
                              }}
                              onClick={() => {
                                this.props.insideEmailInfo(
                                  true,
                                  "ClickedLink11"
                                );
                              }}
                            >
                              <span
                                style={{
                                  fontSize: "8.0pt",
                                  fontFamily: '"Helvetica",sans-serif',
                                  color: "black",
                                  textDecoration: "none",
                                }}
                              >
                                <img
                                  style={{ width: "6.25in", height: "4.3in" }}
                                  id="m_-9063951616003314965_x0000_i1028"
                                  src="https://ci3.googleusercontent.com/proxy/_SWpK7DvVjJmWlilNGy14-ctz8TiYXj3NnP82ycLG-iMFBhfDJPj0dwUEc2aaa3lCjR-mCCb7EcuWqK_cg3c7W3VqFq9cl7NnL8TzBWnIi9oGR94f4DPeT66xRo8p7dPXpAWSewt6XOVCA=s0-d-e1-ft#https://assets-email1.unidays.world/2017/FItnessDE/c4e88d1c-63c4-4282-9199-434a94939e69"
                                  alt="Reebok - 10% Rabatt - Jetzt einlösen"
                                  width={600}
                                  height={413}
                                  border={0}
                                />
                              </span>
                            </a>
                            <span
                              style={{
                                fontSize: "8.0pt",
                                fontFamily: '"Helvetica",sans-serif',
                                color: "#383641",
                              }}
                            >
                              <u />
                              <u />
                            </span>
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td style={{ padding: "0cm 0cm 0cm 0cm" }}>
                          <p className="MsoNormal">
                            <a
                              href="https://email.myunidays.com/campaign/clicked/pxo_1i33a0CNTDjEr2OA9O05VKkCP4pMh3KnjQDpBJr_sy-aORDZTLy6p40A6dc1aHR0cHM6Ly93d3cubXl1bmlkYXlzLmNvbS9wYXJ0bmVycy90aGVwcm90ZWlud29ya3Mvdmlldy9vbmxpbmU_dXRtX2NhbXBhaWduPUp1bmVfMjAxNyZ1dG1fY29udGVudD00Mjg5NC1UUFcmdXRtX21lZGl1bT11bl9jcm0mdXRtX3NvdXJjZT1uZXdzbGV0dGVy"
                              target="_blank"
                              data-saferedirecturl="https://www.google.com/url?hl=de&q=https://email.myunidays.com/campaign/clicked/pxo_1i33a0CNTDjEr2OA9O05VKkCP4pMh3KnjQDpBJr_sy-aORDZTLy6p40A6dc1aHR0cHM6Ly93d3cubXl1bmlkYXlzLmNvbS9wYXJ0bmVycy90aGVwcm90ZWlud29ya3Mvdmlldy9vbmxpbmU_dXRtX2NhbXBhaWduPUp1bmVfMjAxNyZ1dG1fY29udGVudD00Mjg5NC1UUFcmdXRtX21lZGl1bT11bl9jcm0mdXRtX3NvdXJjZT1uZXdzbGV0dGVy&source=gmail&ust=1597146657012000&usg=AFQjCNGPXTURja0WWWfUM4E_RA_EuhxwXg"
                              onMouseEnter={() => {
                                this.props.insideEmailInfo(true, "InLink12");
                              }}
                              onMouseLeave={() => {
                                this.props.insideEmailInfo(false, "InLink12");
                              }}
                              onMouseOver={() => {
                                this.props.insideEmailInfo(true, "InLink12");
                              }}
                              onClick={() => {
                                this.props.insideEmailInfo(
                                  true,
                                  "ClickedLink12"
                                );
                              }}
                            >
                              <span
                                style={{
                                  fontSize: "8.0pt",
                                  fontFamily: '"Helvetica",sans-serif',
                                  color: "black",
                                  textDecoration: "none",
                                }}
                              >
                                <img
                                  style={{
                                    width: "6.25in",
                                    height: "4.5916in",
                                  }}
                                  id="m_-9063951616003314965_x0000_i1027"
                                  src="https://ci4.googleusercontent.com/proxy/QyaAyn4rgAiR2j9AEhD3_GBZS6hkxCySSfLhEg0kQYTTRsrzyh7cLGyrl7PcJJOh_HMLu3EmvoE_X4-B_55h14EcIWWA0RAEGdD97ZmWUpsNEk5yI9AZkgdDLGzOjQnNRqexolhXoG-K4A=s0-d-e1-ft#https://assets-email1.unidays.world/2017/FItnessDE/e6997e97-36d5-40e1-a21f-26cc7908ed90"
                                  alt="The Protein works - 25 % Rabatt - Jetzt einlösen"
                                  width={600}
                                  height={441}
                                  border={0}
                                />
                              </span>
                            </a>
                            <span
                              style={{
                                fontSize: "8.0pt",
                                fontFamily: '"Helvetica",sans-serif',
                                color: "#383641",
                              }}
                            >
                              <u />
                              <u />
                            </span>
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td style={{ padding: "0cm 0cm 0cm 0cm" }}>
                          <p className="MsoNormal">
                            <a
                              href="https://email.myunidays.com/campaign/clicked/pxo_1i33a0CNTDjEr2OA9AAx10ON5lBBmvGnjQDpBJr_sy-aORDZTLy6p40A6dc1aHR0cHM6Ly93d3cubXl1bmlkYXlzLmNvbS8_dXRtX2NhbXBhaWduPWp1bmVfMjAxNyZ1dG1fY29udGVudD0wMS4wNi4xN19GaXRuZXNzX0RFX00mdXRtX21lZGl1bT1lbWFpbCZ1dG1fc291cmNlPW9ubGluZQ=="
                              target="_blank"
                              data-saferedirecturl="https://www.google.com/url?hl=de&q=https://email.myunidays.com/campaign/clicked/pxo_1i33a0CNTDjEr2OA9AAx10ON5lBBmvGnjQDpBJr_sy-aORDZTLy6p40A6dc1aHR0cHM6Ly93d3cubXl1bmlkYXlzLmNvbS8_dXRtX2NhbXBhaWduPWp1bmVfMjAxNyZ1dG1fY29udGVudD0wMS4wNi4xN19GaXRuZXNzX0RFX00mdXRtX21lZGl1bT1lbWFpbCZ1dG1fc291cmNlPW9ubGluZQ%3D%3D&source=gmail&ust=1597146657013000&usg=AFQjCNFh144pfjvUZaqxrbaXWyJrAs-9hQ"
                              onMouseEnter={() => {
                                this.props.insideEmailInfo(true, "InLink13");
                              }}
                              onMouseLeave={() => {
                                this.props.insideEmailInfo(false, "InLink13");
                              }}
                              onMouseOver={() => {
                                this.props.insideEmailInfo(true, "InLink13");
                              }}
                              onClick={() => {
                                this.props.insideEmailInfo(
                                  true,
                                  "ClickedLink13"
                                );
                              }}
                            >
                              <span
                                style={{
                                  fontSize: "8.0pt",
                                  fontFamily: '"Helvetica",sans-serif',
                                  color: "black",
                                  textDecoration: "none",
                                }}
                              >
                                <img
                                  style={{ width: "6.25in", height: ".525in" }}
                                  id="m_-9063951616003314965_x0000_i1026"
                                  src="https://ci6.googleusercontent.com/proxy/hUdnIh0bUyI8w608JXd8-CBom13XnuwfZnLGPqw5nrU1NTO3uBJhkA-l7elTFptPG4M0EIIbwttWf0aWN15-GaKdWGSHoO1Fyyd8EsL7iXmpTRCfyT6RlAyYPta3om1jR67iqKv7dgIyMQ=s0-d-e1-ft#https://assets-email1.unidays.world/2017/FItnessDE/8da45873-f2c2-44ab-aa09-cee8bf1475b8"
                                  alt="Jetzt einlösen >"
                                  width={600}
                                  height={50}
                                  border={0}
                                />
                              </span>
                            </a>
                            <span
                              style={{
                                fontSize: "8.0pt",
                                fontFamily: '"Helvetica",sans-serif',
                                color: "#383641",
                              }}
                            >
                              <u />
                              <u />
                            </span>
                          </p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr>
                <td style={{ padding: "0cm 0cm 0cm 0cm" }}>
                  <p>
                    <span
                      style={{
                        fontSize: "8.5pt",
                        fontFamily: '"Helvetica",sans-serif',
                        color: "#383641",
                      }}
                    >
                      Erhalte direkten Zugriff auf alle aktuellen Vorteile für
                      Studenten, indem du dich auf
                      <a
                        href="https://email.myunidays.com/campaign/clicked/pxo_1i33a0CNTDjEr2OA9KGs76eF51VFplCnjQDpBJr_sy-aORDZTLy6p40A6dc1aHR0cHM6Ly93d3cubXl1bmlkYXlzLmNvbS8_bG9naW4mdXRtX2NhbXBhaWduPWp1bmVfMjAxNyZ1dG1fY29udGVudD0wMS4wNi4xN19GaXRuZXNzX0RFX00mdXRtX21lZGl1bT1lbWFpbCZ1dG1fc291cmNlPW9ubGluZQ=="
                        target="_blank"
                        data-saferedirecturl="https://www.google.com/url?hl=de&q=https://email.myunidays.com/campaign/clicked/pxo_1i33a0CNTDjEr2OA9KGs76eF51VFplCnjQDpBJr_sy-aORDZTLy6p40A6dc1aHR0cHM6Ly93d3cubXl1bmlkYXlzLmNvbS8_bG9naW4mdXRtX2NhbXBhaWduPWp1bmVfMjAxNyZ1dG1fY29udGVudD0wMS4wNi4xN19GaXRuZXNzX0RFX00mdXRtX21lZGl1bT1lbWFpbCZ1dG1fc291cmNlPW9ubGluZQ%3D%3D&source=gmail&ust=1597146657013000&usg=AFQjCNGv0DW3vBpV16tR6h5rkQpplm8O4w"
                        onMouseEnter={() => {
                          this.props.insideEmailInfo(true, "InLink14");
                        }}
                        onMouseLeave={() => {
                          this.props.insideEmailInfo(false, "InLink14");
                        }}
                        onMouseOver={() => {
                          this.props.insideEmailInfo(true, "InLink14");
                        }}
                        onClick={() => {
                          this.props.insideEmailInfo(true, "ClickedLink14");
                        }}
                      >
                        myunidays.com
                      </a>
                      . einloggst. Stelle deine Benachrichtigungen ab oder
                      aktualisiere deine Präferenzen
                      <a
                        href="https://email.myunidays.com/campaign/clicked/pxo_1i33a0CNTDjEr2OA9OfblOFfXGVCjUWnjQDpBJr_sy-aORDZTLy6p40A6dc1aHR0cHM6Ly93d3cubXl1bmlkYXlzLmNvbS9hY2NvdW50L3NldHRpbmdzL3Vuc3Vic2NyaWJlL3B4b18xaTMzYTBDTlREakVyMk9BOUNPRThqa1ZaTE5FdTVMSTJFR2ZXVlBfc3ktYU9SRFpUTHk2cDQwQTZkYzEvMT91dG1fY2FtcGFpZ249anVuZV8yMDE3JnV0bV9jb250ZW50PTAxLjA2LjE3X0ZpdG5lc3NfREVfTSZ1dG1fbWVkaXVtPWVtYWlsJnV0bV9zb3VyY2U9b25saW5l"
                        target="_blank"
                        data-saferedirecturl="https://www.google.com/url?hl=de&q=https://email.myunidays.com/campaign/clicked/pxo_1i33a0CNTDjEr2OA9OfblOFfXGVCjUWnjQDpBJr_sy-aORDZTLy6p40A6dc1aHR0cHM6Ly93d3cubXl1bmlkYXlzLmNvbS9hY2NvdW50L3NldHRpbmdzL3Vuc3Vic2NyaWJlL3B4b18xaTMzYTBDTlREakVyMk9BOUNPRThqa1ZaTE5FdTVMSTJFR2ZXVlBfc3ktYU9SRFpUTHk2cDQwQTZkYzEvMT91dG1fY2FtcGFpZ249anVuZV8yMDE3JnV0bV9jb250ZW50PTAxLjA2LjE3X0ZpdG5lc3NfREVfTSZ1dG1fbWVkaXVtPWVtYWlsJnV0bV9zb3VyY2U9b25saW5l&source=gmail&ust=1597146657013000&usg=AFQjCNG1v9kJ86rgVUswtSavFtQPg5pElg"
                        onMouseEnter={() => {
                          this.props.insideEmailInfo(true, "InLink15");
                        }}
                        onMouseLeave={() => {
                          this.props.insideEmailInfo(false, "InLink15");
                        }}
                        onMouseOver={() => {
                          this.props.insideEmailInfo(true, "InLink15");
                        }}
                        onClick={() => {
                          this.props.insideEmailInfo(true, "ClickedLink15");
                        }}
                      >
                        hier
                      </a>
                      . UNiDAYS ist in England und Wales unter der folgenden
                      Adresse registriert:{" "}
                      <a
                        href="https://www.google.com/maps/search/2+Castle+Boulevard,+Nottingham,+NG7+1FB,+Gro%C3%9Fbritannien?entry=gmail&source=g"
                        onMouseEnter={() => {
                          this.props.insideEmailInfo(true, "InLink16");
                        }}
                        onMouseLeave={() => {
                          this.props.insideEmailInfo(false, "InLink16");
                        }}
                        onMouseOver={() => {
                          this.props.insideEmailInfo(true, "InLink16");
                        }}
                        onClick={() => {
                          this.props.insideEmailInfo(true, "ClickedLink16");
                        }}
                      >
                        2 Castle Boulevard, Nottingham, NG7 1FB, Großbritannien
                      </a>
                      .<u />
                      <u />
                    </span>
                  </p>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

Mail20.defaultProps = {
  senderName: "UNiDAYS",
  sender: "Angebote@myunidays.com",
  date: "August 10, 2020, 12:27",
  subject: "Fitness-Motivation gefällig?",
  capital: "U",
  keyID: 20,
  avatarColor: "black",
  unseen: true,
};

export default Mail20;
