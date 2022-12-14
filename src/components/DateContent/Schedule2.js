import "./Schedule2.scss";

import { useState } from "react";

export default function () {
  const [changepage1, setchagepage1] = useState(false);
  const [changepage2, setchagepage2] = useState(false);
  const [changepage3, setchagepage3] = useState(false);
  const [changepage4, setchagepage4] = useState(false);
  const [changepage5, setchagepage5] = useState(false);
  const [changepage6, setchagepage6] = useState(false);
  const [changepage, setchagepage] = useState(true);

  function toggle_Exam_Date() {
    setchagepage(true);
    setchagepage1(false);
    setchagepage2(false);
    setchagepage3(false);
    setchagepage4(false);
    setchagepage5(false);
    setchagepage6(false);
  }

  function toggle_Exam_Date1() {
    setchagepage(false);
    setchagepage1(true);
    setchagepage2(false);
    setchagepage3(false);
    setchagepage4(false);
    setchagepage5(false);
    setchagepage6(false);
  }

  function toggle_Exam_Date2() {
    setchagepage(false);
    setchagepage1(false);
    setchagepage2(true);
    setchagepage3(false);
    setchagepage4(false);
    setchagepage5(false);
    setchagepage6(false);
  }
  function toggle_Exam_Date3() {
    setchagepage(false);
    setchagepage1(false);
    setchagepage2(false);
    setchagepage3(true);
    setchagepage4(false);
    setchagepage5(false);
    setchagepage6(false);
  }
  function toggle_Exam_Date4() {
    setchagepage(false);
    setchagepage1(false);
    setchagepage2(false);
    setchagepage3(false);
    setchagepage4(true);
    setchagepage5(false);
    setchagepage6(false);
  }

  function toggle_Exam_Date5() {
    setchagepage(false);
    setchagepage1(false);
    setchagepage2(false);
    setchagepage3(false);
    setchagepage4(false);
    setchagepage5(true);
    setchagepage6(false);
  }

  function toggle_Exam_Date6() {
    setchagepage(false);
    setchagepage1(false);
    setchagepage2(false);
    setchagepage3(false);
    setchagepage4(false);
    setchagepage5(false);
    setchagepage6(true);
  }
  return (
    <div className="schedule">
      <div className="exam_schedule">
        <h2>??????????????? ????????????</h2>
      </div>
      <div id="section_outer">
        <div className="section_inner">
          <div className="list_lang_box">
            <ul>
              <li className="tab" onClick={toggle_Exam_Date}>
                <span
                  id="menua"
                  style={{
                    borderBottom:
                      changepage === true ? "0.0002vw solid #0abe16" : "none",
                    fontWeight: changepage === true ? "550" : "100",
                  }}
                  className="menu_a"
                >
                  18???
                </span>
              </li>
              <li className="tab" onClick={toggle_Exam_Date1}>
                <span
                  id="menub"
                  style={{
                    borderBottom:
                      changepage1 === true ? "0.0002vw solid #0abe16" : "none",
                    fontWeight: changepage1 === true ? "550" : "100",
                  }}
                  className="menu_b"
                >
                  19???
                </span>
              </li>
              <li className="tab" onClick={toggle_Exam_Date2}>
                <span
                  id="menuc"
                  style={{
                    borderBottom:
                      changepage2 === true ? "0.0002vw solid #0abe16" : "none",
                    fontWeight: changepage2 === true ? "550" : "100",
                  }}
                  className="menu_c"
                >
                  20???
                </span>
              </li>
              <li className="tab" onClick={toggle_Exam_Date3}>
                <span
                  id="menud"
                  style={{
                    borderBottom:
                      changepage3 === true ? "0.0002vw solid #0abe16" : "none",
                    fontWeight: changepage3 === true ? "550" : "100",
                  }}
                  className="menu_d"
                >
                  21???
                </span>
              </li>
              <li className="tab" onClick={toggle_Exam_Date4}>
                <span
                  id="menue"
                  style={{
                    borderBottom:
                      changepage4 === true ? "0.0002vw solid #0abe16" : "none",
                    fontWeight: changepage4 === true ? "550" : "100",
                  }}
                  className="menu_e"
                >
                  22???
                </span>
              </li>
              <li className="tab" onClick={toggle_Exam_Date5}>
                <span
                  id="menuf"
                  style={{
                    borderBottom:
                      changepage5 === true ? "0.0002vw solid #0abe16" : "none",
                    fontWeight: changepage5 === true ? "550" : "100",
                  }}
                  className="menu_f"
                >
                  23???
                </span>
              </li>
              <li className="tab" onClick={toggle_Exam_Date6}>
                <span
                  id="menug"
                  style={{
                    borderBottom:
                      changepage6 === true ? "0.0002vw solid #0abe16" : "none",
                    fontWeight: changepage6 === true ? "550" : "100",
                  }}
                  className="menu_g"
                >
                  24???
                </span>
              </li>
            </ul>
          </div>
        </div>
        {changepage === true ? (
          <div id="zero" className="schedule_area">
            <div className="n">
              <h4>2022 ?????? ????????? 18???</h4>
            </div>
            <div className="schedule_box">
              <div className="schedule_inner">
                <table>
                  <colgroup>
                    <col width="200px" />
                    <col width="227px" />
                  </colgroup>

                  <thead>
                    <tr>
                      <th className="division">??????</th>
                      <th className="period">??????</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>???????????? ????????????</td>
                      <td className="td2">2022.07.14.(???) ~ 2022.07.15.(???)</td>
                    </tr>
                    <tr>
                      <td>????????????</td>
                      <td className="td2">2022.07.25.(???) ~ 2022.07.29(???)</td>
                    </tr>
                    <tr>
                      <td>???????????? ???????????????</td>
                      <td className="td2">2022.07.25.(???)</td>
                    </tr>
                    <tr>
                      <td>???????????? ????????????</td>
                      <td className="td2">2022.09.15.(???) ~ 2022.09.16.(???)</td>
                    </tr>
                    <tr>
                      <td>????????????</td>
                      <td className="td2">2022.09.26.(???) ~ 2022.09.16(???)</td>
                    </tr>
                    <tr>
                      <td>???????????????</td>
                      <td className="td2">2022.10.13.(???) ~ 2022.12.12.(???)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ) : null}

        {changepage1 === true ? (
          <div id="a" className="first">
            <div className="n">
              <h4>2022 ?????? ????????? 19???</h4>
            </div>
            <div className="schedule_box">
              <div className="schedule_inner">
                <table>
                  <colgroup>
                    <col width="221px" />
                    <col width="227px" />
                  </colgroup>

                  <thead>
                    <tr>
                      <th className="division">??????</th>
                      <th className="period">??????</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>???????????? ????????????</td>
                      <td className="td2">2022.07.21.(???) ~ 2022.07.22.(???)</td>
                    </tr>
                    <tr>
                      <td>????????????</td>
                      <td className="td2">2022.08.01.(???) ~ 2022.08.05(???)</td>
                    </tr>
                    <tr>
                      <td>???????????? ???????????????</td>
                      <td className="td2">2022.08.01.(???)</td>
                    </tr>
                    <tr>
                      <td>???????????? ????????????</td>
                      <td className="td2">2022.09.21.(???) ~ 2022.09.30.(???)</td>
                    </tr>
                    <tr>
                      <td>????????????</td>
                      <td className="td2">2022.10.12.(???) ~ 2022.12.22(???)</td>
                    </tr>
                    <tr>
                      <td>???????????????</td>
                      <td className="td2">2022.10.27.(???) ~ 2022.12.26.(???)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ) : null}

        {changepage2 === true ? (
          <div id="b" className="second">
            <div className="n">
              <h4>2022 ?????? ????????? 20???</h4>
            </div>
            <div className="schedule_box">
              <div className="schedule_inner">
                <table>
                  <colgroup>
                    <col width="221px" />
                    <col width="227px" />
                  </colgroup>

                  <thead>
                    <tr>
                      <th className="division">??????</th>
                      <th className="period">??????</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>???????????? ????????????</td>
                      <td className="td2">2022.07.28.(???) ~ 2022.07.29.(???)</td>
                    </tr>
                    <tr>
                      <td>????????????</td>
                      <td className="td2">2022.08.08.(???) ~ 2022.08.12(???)</td>
                    </tr>
                    <tr>
                      <td>???????????? ???????????????</td>
                      <td className="td2">2022.08.08.(???)</td>
                    </tr>
                    <tr>
                      <td>???????????? ????????????</td>
                      <td className="td2">2022.10.13.(???) ~ 2022.10.14.(???)</td>
                    </tr>
                    <tr>
                      <td>????????????</td>
                      <td className="td2">2022.10.24.(???) ~ 2022.11.05(???)</td>
                    </tr>
                    <tr>
                      <td>???????????????</td>
                      <td className="td2">2022.11.10.(???) ~ 2023.01.09.(???)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ) : null}
        {changepage3 === true ? (
          <div id="c" className="third">
            <div className="n">
              <h4>2022 ?????? ????????? 21???</h4>
            </div>
            <div className="schedule_box">
              <div className="schedule_inner">
                <table>
                  <colgroup>
                    <col width="221px" />
                    <col width="227px" />
                  </colgroup>

                  <thead>
                    <tr>
                      <th className="division">??????</th>
                      <th className="period">??????</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>???????????? ????????????</td>
                      <td className="td2">2022.08.04.(???) ~ 2022.08.05.(???)</td>
                    </tr>
                    <tr>
                      <td>????????????</td>
                      <td className="td2">2022.08.16.(???) ~ 2022.08.19(???)</td>
                    </tr>
                    <tr>
                      <td>???????????? ???????????????</td>
                      <td className="td2">2022.08.16.(???)</td>
                    </tr>
                    <tr>
                      <td>???????????? ????????????</td>
                      <td className="td2">2022.10.27.(???) ~ 2022.10.28.(???)</td>
                    </tr>
                    <tr>
                      <td>????????????</td>
                      <td className="td2">2022.11.12.(???) ~ 2022.11.18(???)</td>
                    </tr>
                    <tr>
                      <td>???????????????</td>
                      <td className="td2">2022.11.24.(???) ~ 2022.01.23.(???)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ) : null}
        {changepage4 == true ? (
          <div id="d" className="fourth">
            <div className="n">
              <h4>2022 ?????? ????????? 22???</h4>
            </div>
            <div className="schedule_box">
              <div className="schedule_inner">
                <table>
                  <colgroup>
                    <col width="221px" />
                    <col width="227px" />
                  </colgroup>

                  <thead>
                    <tr>
                      <th className="division">??????</th>
                      <th className="period">??????</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>???????????? ????????????</td>
                      <td className="td2">2022.08.11.(???) ~ 2022.08.12.(???)</td>
                    </tr>
                    <tr>
                      <td>????????????</td>
                      <td className="td2">2022.08.22.(???) ~ 2022.08.26(???)</td>
                    </tr>
                    <tr>
                      <td>???????????? ???????????????</td>
                      <td className="td2">2022.08.22.(???)</td>
                    </tr>
                    <tr>
                      <td>???????????? ????????????</td>
                      <td className="td2">2022.11.10.(???) ~ 2022.11.11.(???)</td>
                    </tr>
                    <tr>
                      <td>????????????</td>
                      <td className="td2">2022.11.20.(???) ~ 2022.12.02(???)</td>
                    </tr>
                    <tr>
                      <td>???????????????</td>
                      <td className="td2">2022.12.08.(???) ~ 2022.02.07.(???)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ) : null}
        {changepage5 === true ? (
          <div id="e" className="fifth">
            <div className="n">
              <h4>2022 ?????? ????????? 23???</h4>
            </div>
            <div className="schedule_box">
              <div className="schedule_inner">
                <table>
                  <colgroup>
                    <col width="221px" />
                    <col width="227px" />
                  </colgroup>

                  <thead>
                    <tr>
                      <th className="division">??????</th>
                      <th className="period">??????</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>???????????? ????????????</td>
                      <td className="td2">2022.08.25.(???) ~ 2022.08.26.(???)</td>
                    </tr>
                    <tr>
                      <td>????????????</td>
                      <td className="td2">2022.09.05.(???) ~ 2022.09.13(???)</td>
                    </tr>
                    <tr>
                      <td>???????????? ???????????????</td>
                      <td className="td2">2022.09.05.(???)</td>
                    </tr>
                    <tr>
                      <td>???????????? ????????????</td>
                      <td className="td2">2022.11.24.(???) ~ 2022.11.25.(???)</td>
                    </tr>
                    <tr>
                      <td>????????????</td>
                      <td className="td2">2022.12.04.(???) ~ 2022.12.10(???)</td>
                    </tr>
                    <tr>
                      <td>???????????????</td>
                      <td className="td2">2022.12.15.(???) ~ 2022.02.14.(???)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ) : null}

        {changepage6 === true ? (
          <div id="f" className="sixth">
            <div className="n">
              <h4>2022 ?????? ????????? 24???</h4>
            </div>
            <div className="schedule_box">
              <div className="schedule_inner">
                <table>
                  <colgroup>
                    <col width="221px" />
                    <col width="227px" />
                  </colgroup>

                  <thead>
                    <tr>
                      <th className="division">??????</th>
                      <th className="period">??????</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>???????????? ????????????</td>
                      <td className="td2">2022.09.22.(???) ~ 2022.09.23.(???)</td>
                    </tr>
                    <tr>
                      <td>????????????</td>
                      <td className="td2">2022.10.04.(???) ~ 2022.10.07(???)</td>
                    </tr>
                    <tr>
                      <td>???????????? ???????????????</td>
                      <td className="td2">2022.10.04.(???)</td>
                    </tr>
                    <tr>
                      <td>???????????? ????????????</td>
                      <td className="td2">2022.12.08.(???) ~ 2022.12.09.(???)</td>
                    </tr>
                    <tr>
                      <td>????????????</td>
                      <td className="td2">2022.12.17.(???) ~ 2022.12.23(???)</td>
                    </tr>
                    <tr>
                      <td>???????????????</td>
                      <td className="td2">2022.12.29.(???) ~ 2022.02.28.(???)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
