import React from "react";
import { CustomeIcon } from "../../components/CustomeIcon";
import { Logo } from "../../components/Logo";
import { PropertySmall } from "../../components/PropertySmall";
import { SidebarItems } from "../../components/SidebarItems";
import { SizeSmall } from "../../components/SizeSmall";
import { SizeSmallActive } from "../../components/SizeSmallActive";
import { StatusBadge } from "../../components/StatusBadge";
import { CustomeIconCalendarIcon6 } from "../../icons/CustomeIconCalendarIcon6";
import { CustomeIconCalendarIcon7 } from "../../icons/CustomeIconCalendarIcon7";
import { CustomeIconCalendarIcon8 } from "../../icons/CustomeIconCalendarIcon8";
import { CustomeIconCalendarIcon9 } from "../../icons/CustomeIconCalendarIcon9";
import { CustomeIconCheckIcon } from "../../icons/CustomeIconCheckIcon";
import { CustomeIconExportIcon5 } from "../../icons/CustomeIconExportIcon5";
import { CustomeIconFeaturesIcon2 } from "../../icons/CustomeIconFeaturesIcon2";
import { CustomeIconHome } from "../../icons/CustomeIconHome";
import { CustomeIconIntegrationsIcon1 } from "../../icons/CustomeIconIntegrationsIcon1";
import { CustomeIconSalesIcon2 } from "../../icons/CustomeIconSalesIcon2";
import { CustomeIconSessionsIcon2 } from "../../icons/CustomeIconSessionsIcon2";
import { CustomeIconUsersIcon3 } from "../../icons/CustomeIconUsersIcon3";
import { CustomeIconWebflowIcon } from "../../icons/CustomeIconWebflowIcon";
import { DotsThreeIcon1 } from "../../icons/DotsThreeIcon1";
import { LineRoundedArrowExternalRight5 } from "../../icons/LineRoundedArrowExternalRight5";
import { LineRoundedArrowExternalRight6 } from "../../icons/LineRoundedArrowExternalRight6";
import { LineRoundedArrowExternalRight15 } from "../../icons/LineRoundedArrowExternalRight15";
import { LineRoundedArrowRight2 } from "../../icons/LineRoundedArrowRight2";
import { LineRoundedChevronDown5 } from "../../icons/LineRoundedChevronDown5";
import { LineRoundedChevronRight5 } from "../../icons/LineRoundedChevronRight5";
import { LineRoundedChevronRight8 } from "../../icons/LineRoundedChevronRight8";
import { LineRoundedLess2 } from "../../icons/LineRoundedLess2";
import "./style.css";

export const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="sidebar-wrapper">
        <div className="overlap">
          <div className="overlap-group">
            <img
              className="divider"
              alt="Divider"
              src="https://c.animaapp.com/v7xIVJH6/img/divider-1.svg"
            />

            <div className="menu-links">
              <div className="link-wrapper">
                <div className="dropdowns-wrapper">
                  <div className="dropdown-container">
                    <div className="link">
                      <LineRoundedChevronDown5 className="icon-instance-node" />
                      <div className="group-2">
                        <CustomeIconHome className="icon-instance-node-2" />
                        <div className="text-wrapper-3">Dashboard</div>
                      </div>
                    </div>

                    <div className="element">
                      <SidebarItems
                        sidebarItemActive={false}
                        text="All pages"
                      />
                      <SidebarItems
                        className="sidebar-items-instance"
                        overlapGroupClassName="design-component-instance-node"
                        sidebarItemActive
                        text="Reports"
                      />
                      <SidebarItems sidebarItemActive={false} text="Products" />
                      <SidebarItems sidebarItemActive={false} text="Task" />
                    </div>
                  </div>

                  <div className="dropdown-container">
                    <div className="link">
                      <div className="group-3">
                        <CustomeIconFeaturesIcon2
                          className="icon-instance-node-2"
                          color="#AEB9E1"
                        />
                        <div className="text-wrapper-4">Features</div>
                      </div>

                      <LineRoundedChevronRight5 className="icon-instance-node" />
                    </div>
                  </div>

                  <div className="dropdown-container">
                    <div className="link">
                      <div className="group-4">
                        <CustomeIconUsersIcon3
                          className="icon-instance-node-2"
                          color="#AEB9E1"
                        />
                        <div className="text-wrapper-5">Users</div>
                      </div>

                      <LineRoundedChevronRight5 className="icon-instance-node" />
                    </div>
                  </div>

                  <div className="dropdown-container">
                    <div className="link">
                      <div className="group-5">
                        <div className="icon-instance-node-2">
                          <img
                            className="vector"
                            alt="Vector"
                            src="/img/vector.svg"
                          />

                          <div className="group-6" />
                        </div>

                        <div className="text-wrapper-6">Pricing</div>
                      </div>

                      <LineRoundedChevronRight5 className="line-rounded-chevron-right-5" />
                    </div>
                  </div>

                  <div className="div-wrapper">
                    <div className="link">
                      <div className="group-7">
                        <CustomeIconIntegrationsIcon1
                          className="icon-instance-node-2"
                          color="#AEB9E1"
                        />
                        <div className="text-wrapper-7">Integrations</div>
                      </div>

                      <LineRoundedChevronRight5 className="line-rounded-chevron-right-5" />
                    </div>
                  </div>
                </div>

                <img
                  className="line"
                  alt="Line"
                  src="https://c.animaapp.com/v7xIVJH6/img/line-15-1.svg"
                />

                <div className="dropdowns-wrapper">
                  <div className="dropdown-container">
                    <div className="link">
                      <div className="group-8">
                        <CustomeIcon className="custome-icon-settings-icon" />
                        <div className="text-wrapper-8">Settings</div>
                      </div>

                      <LineRoundedChevronRight5 className="line-rounded-chevron-right-5" />
                    </div>
                  </div>

                  <div className="dropdown-container">
                    <div className="link">
                      <LineRoundedChevronRight5 className="line-rounded-chevron-right-5" />
                      <div className="group-9">
                        <CustomeIconWebflowIcon
                          className="icon-instance-node-2"
                          color="#AEB9E1"
                        />
                        <div className="text-wrapper-9">Template pages</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="dropdowns-wrapper-2">
                  <div className="group-10">
                    <img
                      className="group-11"
                      alt="Group"
                      src="https://c.animaapp.com/v7xIVJH6/img/group-39488-1@2x.png"
                    />

                    <div className="group-12">
                      <div className="input-placeholder-4">John Carter</div>

                      <div className="input-placeholder-5">
                        Account settings
                      </div>
                    </div>

                    <LineRoundedChevronRight5 className="line-rounded-chevron-right-6" />
                  </div>
                </div>
              </div>

              <div className="master-primary">
                <div className="button-text">Get template</div>

                <LineRoundedArrowRight2 className="line-rounded-arrow" />
              </div>
            </div>
          </div>

          <div className="master-input-text">
            <img
              className="input-content"
              alt="Input content"
              src="https://c.animaapp.com/v7xIVJH6/img/input-content-1@2x.png"
            />
          </div>

          <div className="frame-4">
            <div className="group-13">
              <div className="overlap-group-wrapper">
                <div className="overlap-group-2">
                  <LineRoundedChevronRight5 className="line-rounded-chevron-right-7" />
                  <LineRoundedChevronRight8 className="line-rounded-chevron-right-8" />
                </div>
              </div>

              <Logo
                className="design-component-instance-node-2"
                color="logo-white"
                logoIconColorDarkClassName="logo-instance"
                logoIconExclude="https://c.animaapp.com/v7xIVJH6/img/exclude-11.svg"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="dashboard-v">
        <div className="group-14">
          <div className="overlap-wrapper">
            <div className="div-2">
              <div className="monthly-pageviews-wrapper">
                <div className="div-2">
                  <div className="group-15">
                    <div className="group-16">
                      <div className="overlap-2">
                        <div className="rectangle-2" />

                        <div className="group-17">
                          <div className="group-18">
                            <div className="div-3">
                              <div className="div-3">
                                <img
                                  className="group-19"
                                  alt="Group"
                                  src="https://c.animaapp.com/v7xIVJH6/img/group-1000004530-1@2x.png"
                                />

                                <div className="input-placeholder-6">0</div>

                                <div className="input-placeholder-7">100</div>

                                <div className="input-placeholder-8">250</div>

                                <div className="input-placeholder-9">500</div>
                              </div>

                              <img
                                className="vector-2"
                                alt="Vector"
                                src="https://c.animaapp.com/v7xIVJH6/img/vector-743-1.svg"
                              />
                            </div>

                            <div className="frame-5">
                              <div className="input-placeholder-10">12 AM</div>

                              <div className="input-placeholder-10">8 AM</div>

                              <div className="input-placeholder-10">4 PM</div>

                              <div className="input-placeholder-10">11 PM</div>
                            </div>
                          </div>

                          <div className="group-20">
                            <div className="frame-6">
                              <CustomeIconSessionsIcon2 className="icon-instance-node-3" />
                              <div className="text-wrapper-10">
                                Total sessions
                              </div>
                            </div>

                            <div className="frame-7">
                              <div className="group-21">
                                <div className="text-wrapper-11">400</div>
                              </div>

                              <div className="component-positive">
                                <div className="frame-wrapper">
                                  <div className="frame-8">
                                    <div className="default-3">16.8%</div>

                                    <LineRoundedArrowExternalRight15 className="line-rounded-arrow-2" />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="group-22">
                            <div className="input-placeholder-11">
                              View report
                            </div>

                            <div className="frame-9">
                              <StatusBadge
                                className="status-badge-instance"
                                color="green"
                                size="small"
                                text="Live"
                              />
                              <div className="input-placeholder-12">
                                10k visitors
                              </div>
                            </div>

                            <img
                              className="vector-3"
                              alt="Vector"
                              src="https://c.animaapp.com/v7xIVJH6/img/vector-737-3.svg"
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="group-23">
                      <div className="overlap-3">
                        <div className="rectangle-3" />

                        <div className="group-24">
                          <div className="overlap-4">
                            <div className="group-25">
                              <div className="group-26">
                                <div className="group-27">
                                  <div className="group-28">
                                    <div className="input-placeholder-13">
                                      View report
                                    </div>

                                    <div className="text-wrapper-12">
                                      Last 12 months
                                    </div>
                                  </div>

                                  <img
                                    className="vector-4"
                                    alt="Vector"
                                    src="https://c.animaapp.com/v7xIVJH6/img/vector-737-4.svg"
                                  />
                                </div>
                              </div>

                              <div className="group-29">
                                <div className="group-30">
                                  <div className="frame-10">
                                    <div className="frame-11">
                                      <div className="frame-12">
                                        <CustomeIconSalesIcon2 className="icon-instance-node-3" />
                                        <div className="text-wrapper-10">
                                          Total profit
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="group-31">
                                    <div className="group-32">
                                      <div className="img-wrapper">
                                        <img
                                          className="group-33"
                                          alt="Group"
                                          src="https://c.animaapp.com/v7xIVJH6/img/group-1000004519-1@2x.png"
                                        />
                                      </div>
                                    </div>

                                    <div className="frame-13">
                                      <div className="input-placeholder-10">
                                        12 AM
                                      </div>

                                      <div className="input-placeholder-10">
                                        8 AM
                                      </div>

                                      <div className="input-placeholder-10">
                                        4 PM
                                      </div>

                                      <div className="input-placeholder-10">
                                        11 PM
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div className="group-34">
                              <div className="frame-14">
                                <div className="text-wrapper-13">$144.6K</div>

                                <div className="component-positive">
                                  <div className="group-35">
                                    <div className="frame-8">
                                      <div className="default-3">28.5%</div>

                                      <LineRoundedArrowExternalRight6 className="line-rounded-arrow-2" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="group-36">
                    <div className="overlap-5">
                      <div className="group-37">
                        <div className="group-38">
                          <div className="group-39">
                            <div className="frame-15">
                              <div className="text-wrapper-14">Jan</div>

                              <div className="text-wrapper-14">Feb</div>

                              <div className="text-wrapper-14">Mar</div>

                              <div className="text-wrapper-14">Apr</div>

                              <div className="text-wrapper-14">May</div>

                              <div className="text-wrapper-14">Jun</div>

                              <div className="text-wrapper-14">Jul</div>

                              <div className="text-wrapper-14">Aug</div>

                              <div className="text-wrapper-14">Sep</div>

                              <div className="text-wrapper-14">Oct</div>

                              <div className="text-wrapper-14">Nov</div>

                              <div className="text-wrapper-14">Dec</div>
                            </div>

                            <div className="group-40">
                              <div className="text-wrapper-15">0K</div>

                              <img
                                className="line-2"
                                alt="Line"
                                src="https://c.animaapp.com/v7xIVJH6/img/line-26-2.svg"
                              />
                            </div>

                            <div className="group-41">
                              <div className="text-wrapper-16">25K</div>

                              <img
                                className="line-3"
                                alt="Line"
                                src="https://c.animaapp.com/v7xIVJH6/img/line-26-3.svg"
                              />
                            </div>

                            <div className="group-42">
                              <div className="text-wrapper-16">50K</div>

                              <img
                                className="line-3"
                                alt="Line"
                                src="https://c.animaapp.com/v7xIVJH6/img/line-27-1.svg"
                              />
                            </div>

                            <div className="group-43">
                              <div className="text-wrapper-17">100K</div>

                              <img
                                className="line-4"
                                alt="Line"
                                src="https://c.animaapp.com/v7xIVJH6/img/line-28-1.svg"
                              />
                            </div>

                            <div className="group-44">
                              <div className="text-wrapper-17">150K</div>

                              <img
                                className="line-5"
                                alt="Line"
                                src="https://c.animaapp.com/v7xIVJH6/img/line-29-1.svg"
                              />
                            </div>

                            <div className="group-45">
                              <div className="text-wrapper-18">200K</div>

                              <img
                                className="line-6"
                                alt="Line"
                                src="https://c.animaapp.com/v7xIVJH6/img/line-30-2.svg"
                              />
                            </div>

                            <div className="group-46">
                              <div className="text-wrapper-18">250K</div>

                              <img
                                className="line-6"
                                alt="Line"
                                src="https://c.animaapp.com/v7xIVJH6/img/line-30-3.svg"
                              />
                            </div>
                          </div>
                        </div>

                        <div className="group-47">
                          <div className="group-48">
                            <div className="group-49">
                              <div className="group-50">
                                <div className="text-wrapper-19">
                                  Total revenue
                                </div>

                                <div className="frame-16">
                                  <div className="text-wrapper-13">$240.8K</div>

                                  <div className="component-positive">
                                    <div className="group-35">
                                      <div className="frame-8">
                                        <div className="default-3">24.6%</div>

                                        <LineRoundedArrowExternalRight15 className="line-rounded-arrow-2" />
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="group-51">
                            <div className="group-52">
                              <div className="frame-17">
                                <div className="rectangle-4" />

                                <div className="text-wrapper-10">Expenses</div>
                              </div>

                              <div className="frame-18">
                                <div className="rectangle-5" />

                                <div className="text-wrapper-10">Revenue</div>
                              </div>
                            </div>

                            <PropertySmall
                              className="input-text"
                              icon={
                                <CustomeIconCalendarIcon6 className="custome-icon-2" />
                              }
                              text="Jan 2024 - Dec 2024"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group-53">
                <div className="overlap-6">
                  <img
                    className="group-54"
                    alt="Group"
                    src="https://c.animaapp.com/v7xIVJH6/img/group-1000004461-1.png"
                  />

                  <img
                    className="group-55"
                    alt="Group"
                    src="https://c.animaapp.com/v7xIVJH6/img/group-1000004464-1.png"
                  />

                  <div className="ellipse-2" />

                  <div className="ellipse-3" />

                  <div className="ellipse-4" />
                </div>
              </div>

              <div className="group-56">
                <div className="overlap-7">
                  <div className="group-57">
                    <div className="group-58">
                      <div className="text-wrapper-20">June 21, 2023</div>

                      <div className="frame-19">
                        <div className="text-wrapper-21">$125.2k</div>

                        <div className="component-positive">
                          <div className="frame-wrapper">
                            <div className="frame-8">
                              <div className="default-3">12.5%</div>

                              <LineRoundedArrowExternalRight15 className="line-rounded-arrow-2" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="group-59">
            <div className="pageviews-card">
              <div className="group-60">
                <div className="frame-20">
                  <div className="custome-icon-views">
                    <img
                      className="vector-5"
                      alt="Vector"
                      src="/img/image.svg"
                    />

                    <img
                      className="subtract"
                      alt="Subtract"
                      src="https://c.animaapp.com/v7xIVJH6/img/subtract-7.svg"
                    />
                  </div>

                  <div className="text-wrapper-10">Pageviews</div>
                </div>

                <div className="frame-21">
                  <div className="text-wrapper-13">50.8K</div>

                  <div className="component-positive">
                    <div className="group-35">
                      <div className="frame-8">
                        <div className="default-3">28.4%</div>

                        <LineRoundedArrowExternalRight15 className="line-rounded-arrow-2" />
                      </div>
                    </div>
                  </div>
                </div>

                <DotsThreeIcon1 className="dots-three-icon" color="#D9E1FA" />
              </div>
            </div>

            <div className="pageviews-card-2">
              <div className="group-61">
                <div className="frame-22">
                  <CustomeIconUsersIcon3
                    className="icon-instance-node-3"
                    color="#AEB9E1"
                  />
                  <div className="text-wrapper-10">Monthly users</div>
                </div>

                <div className="frame-21">
                  <div className="text-wrapper-13">23.6K</div>

                  <div className="component-negative">
                    <div className="frame-wrapper">
                      <div className="frame-8">
                        <div className="default-4">12.6%</div>

                        <LineRoundedArrowExternalRight5 className="line-rounded-arrow-2" />
                      </div>
                    </div>
                  </div>
                </div>

                <DotsThreeIcon1 className="dots-three-icon-1" color="#D9E1FA" />
              </div>
            </div>

            <div className="pageviews-card-3">
              <div className="group-60">
                <div className="frame-22">
                  <div className="icon-instance-node-3">
                    <img
                      className="vector-6"
                      alt="Vector"
                      src="/img/vector-2.svg"
                    />

                    <img
                      className="subtract-2"
                      alt="Subtract"
                      src="https://c.animaapp.com/v7xIVJH6/img/subtract-8.svg"
                    />
                  </div>

                  <div className="text-wrapper-10">New sign ups</div>
                </div>

                <div className="frame-21">
                  <div className="text-wrapper-13">756</div>

                  <div className="component-positive">
                    <div className="group-62">
                      <div className="frame-8">
                        <div className="default-3">3.1%</div>

                        <LineRoundedArrowExternalRight15 className="line-rounded-arrow-2" />
                      </div>
                    </div>
                  </div>
                </div>

                <DotsThreeIcon1 className="dots-three-icon" color="#D9E1FA" />
              </div>
            </div>

            <div className="pageviews-card-4">
              <div className="group-60">
                <div className="group-63">
                  <div className="frame-23">
                    <CustomeIconFeaturesIcon2
                      className="icon-instance-node-3"
                      color="#AEB9E1"
                    />
                    <div className="text-wrapper-10">Subscriptions</div>
                  </div>
                </div>

                <div className="frame-21">
                  <div className="text-wrapper-13">2.3K</div>

                  <div className="component-positive">
                    <div className="group-64">
                      <div className="frame-8">
                        <div className="default-3">11.3%</div>

                        <LineRoundedArrowExternalRight6 className="line-rounded-arrow-2" />
                      </div>
                    </div>
                  </div>
                </div>

                <DotsThreeIcon1 className="dots-three-icon" color="#D9E1FA" />
              </div>
            </div>
          </div>
        </div>

        <div className="page-top">
          <div className="page-title">
            <div className="text-wrapper-11">Reports overview</div>
          </div>

          <div className="group-65">
            <PropertySmall
              className="design-component-instance-node-2"
              icon={<CustomeIconCalendarIcon7 className="custome-icon-2" />}
              text="Select date"
            />
            <div className="frame-24">
              <div className="master-secondary">
                <div className="button-text-2">Export data</div>

                <CustomeIconExportIcon5 className="custome-icon-export" />
              </div>

              <div className="button-text-wrapper">
                <div className="button-text-2">Create report</div>
              </div>
            </div>
          </div>
        </div>

        <div className="group-66">
          <div className="text-wrapper-11">Welcome back, John</div>

          <p className="p">
            Measure your advertising ROI and report website traffic.
          </p>

          <div className="frame-25">
            <div className="master-secondary">
              <div className="button-text-2">Export data</div>

              <CustomeIconExportIcon5 className="custome-icon-export" />
            </div>

            <div className="button-text-wrapper">
              <div className="button-text-2">Create report</div>
            </div>
          </div>
        </div>

        <div className="group-67">
          <div className="group-68">
            <div className="overlap-8">
              <div className="rectangle-6" />

              <div className="group-69">
                <div className="overlap-9">
                  <div className="group-70">
                    <div className="group-71">
                      <div className="overlap-10">
                        <div className="group-72">
                          <div className="overlap-group-3">
                            <img
                              className="ellipse-5"
                              alt="Ellipse"
                              src="https://c.animaapp.com/v7xIVJH6/img/ellipse-796-2.svg"
                            />

                            <img
                              className="ellipse-6"
                              alt="Ellipse"
                              src="https://c.animaapp.com/v7xIVJH6/img/ellipse-798-2.svg"
                            />

                            <img
                              className="ellipse-7"
                              alt="Ellipse"
                              src="https://c.animaapp.com/v7xIVJH6/img/ellipse-799-1.svg"
                            />

                            <img
                              className="ellipse-8"
                              alt="Ellipse"
                              src="https://c.animaapp.com/v7xIVJH6/img/ellipse-800-1.svg"
                            />
                          </div>
                        </div>

                        <div className="group-73">
                          <div className="text-wrapper-22">23,648</div>

                          <div className="text-wrapper-23">Users by device</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="frame-26">
                    <div className="group-74">
                      <div className="frame-27">
                        <div className="rectangle-5" />

                        <div className="text-wrapper-24">Desktop users</div>
                      </div>

                      <div className="text-wrapper-25">15,624</div>
                    </div>

                    <img
                      className="vector-7"
                      alt="Vector"
                      src="https://c.animaapp.com/v7xIVJH6/img/vector-737-5.svg"
                    />

                    <div className="group-75">
                      <div className="frame-27">
                        <div className="rectangle-7" />

                        <div className="text-wrapper-24">Phone app users</div>
                      </div>

                      <div className="text-wrapper-26">5,546</div>
                    </div>

                    <img
                      className="vector-7"
                      alt="Vector"
                      src="https://c.animaapp.com/v7xIVJH6/img/vector-737-5.svg"
                    />

                    <div className="group-75">
                      <div className="frame-27">
                        <div className="rectangle-4" />

                        <div className="text-wrapper-24">Laptop users</div>
                      </div>

                      <div className="text-wrapper-27">2,478</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="group-76">
            <div className="overlap-8">
              <div className="rectangle-6" />

              <div className="rectangle-8" />

              <div className="rectangle-9" />

              <div className="rectangle-10" />

              <div className="group-77">
                <img
                  className="vector-8"
                  alt="Vector"
                  src="https://c.animaapp.com/v7xIVJH6/img/vector-758-1.svg"
                />

                <div className="group-78">
                  <div className="input-placeholder-14">Dec 30, 10:06 AM</div>

                  <div className="input-placeholder-15">$ 329.40</div>

                  <SizeSmall
                    className="checkbox"
                    groupClassName="size-small-instance"
                    text="#1532"
                  />
                  <StatusBadge
                    className="status-badge-2"
                    color="green"
                    size="small"
                    text="Paid"
                  />
                </div>

                <img
                  className="vector-9"
                  alt="Vector"
                  src="https://c.animaapp.com/v7xIVJH6/img/vector-762-1.svg"
                />

                <div className="group-79">
                  <div className="input-placeholder-16">Dec 29, 2:59 AM</div>

                  <div className="input-placeholder-17">$ 117.24</div>

                  <SizeSmallActive className="checkbox" text="#1531" />
                  <StatusBadge
                    className="status-badge-3"
                    color="yellow"
                    size="small"
                    text="Pending"
                  />
                </div>

                <img
                  className="vector-10"
                  alt="Vector"
                  src="https://c.animaapp.com/v7xIVJH6/img/vector-762-1.svg"
                />

                <div className="group-80">
                  <div className="input-placeholder-16">Dec 29, 12:54 AM</div>

                  <div className="input-placeholder-18">$ 52.16</div>

                  <SizeSmallActive className="checkbox" text="#1530" />
                  <StatusBadge
                    className="status-badge-3"
                    color="yellow"
                    size="small"
                    text="Pending"
                  />
                </div>

                <img
                  className="vector-11"
                  alt="Vector"
                  src="https://c.animaapp.com/v7xIVJH6/img/vector-762-1.svg"
                />

                <div className="group-81">
                  <div className="input-placeholder-14">Dec 28, 2:32 PM</div>

                  <div className="input-placeholder-15">$ 350.52</div>

                  <SizeSmall
                    className="checkbox"
                    groupClassName="size-small-instance"
                    text="#1529"
                  />
                  <StatusBadge
                    className="status-badge-2"
                    color="green"
                    size="small"
                    text="Paid"
                  />
                </div>

                <img
                  className="vector-12"
                  alt="Vector"
                  src="https://c.animaapp.com/v7xIVJH6/img/vector-762-1.svg"
                />

                <div className="group-82">
                  <div className="input-placeholder-16">Dec 27, 2:20 PM</div>

                  <div className="input-placeholder-19">$ 246.78</div>

                  <StatusBadge
                    className="status-badge-3"
                    color="yellow"
                    size="small"
                    text="Pending"
                  />
                  <SizeSmallActive className="checkbox" text="#1528" />
                </div>

                <img
                  className="vector-13"
                  alt="Vector"
                  src="https://c.animaapp.com/v7xIVJH6/img/vector-762-1.svg"
                />

                <div className="group-83">
                  <img
                    className="input-placeholder-20"
                    alt="Input placeholder"
                    src="https://c.animaapp.com/v7xIVJH6/img/input-placeholder-1.svg"
                  />

                  <div className="input-placeholder-21">$ 64.00</div>

                  <SizeSmall
                    className="checkbox"
                    groupClassName="size-small-instance"
                    text="#1527"
                  />
                  <StatusBadge
                    className="status-badge-2"
                    color="green"
                    size="small"
                    text="Paid"
                  />
                </div>

                <div className="group-84">
                  <div className="frame-28">
                    <CustomeIconCalendarIcon8 className="custome-icon-calendar-icon-8" />
                    <div className="input-placeholder-wrapper">
                      <div className="input-placeholder-22">Date</div>
                    </div>
                  </div>

                  <div className="input-placeholder-23">Total</div>

                  <div className="group-85">
                    <div className="input-placeholder-24">Order</div>

                    <div className="line-rounded-less-wrapper">
                      <LineRoundedLess2 className="line-rounded-less" />
                    </div>
                  </div>

                  <div className="frame-29">
                    <CustomeIconCheckIcon className="custome-icon-check" />
                    <div className="input-placeholder-wrapper">
                      <div className="input-placeholder-22">Status</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="group-86">
                <div className="text-wrapper-28">Recent orders</div>

                <PropertySmall
                  className="property-1-small-property-2-true"
                  icon={<CustomeIconCalendarIcon9 className="custome-icon-2" />}
                  text="Jan 2024"
                />
              </div>

              <div className="rectangle-11" />
            </div>
          </div>
        </div>

        <div className="group-87">
          <div className="overlap-11">
            <div className="rectangle-wrapper">
              <div className="rectangle-12" />
            </div>

            <div className="group-88">
              <div className="group-89">
                <div className="group-90">
                  <div className="text-wrapper-29">Users by country</div>

                  <div className="frame-30">
                    <div className="group-91">
                      <div className="text-wrapper-11">12.4 K</div>
                    </div>

                    <div className="component-positive">
                      <div className="group-35">
                        <div className="frame-8">
                          <div className="default-3">28.5%</div>

                          <LineRoundedArrowExternalRight15 className="line-rounded-arrow-2" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="master-secondary-2">
                    <button className="button">Export</button>

                    <CustomeIconExportIcon5 className="custome-icon-export" />
                  </div>
                </div>

                <div className="group-92">
                  <div className="text-wrapper-30">30%</div>

                  <div className="text-wrapper-31">20%</div>

                  <div className="text-wrapper-32">20%</div>

                  <div className="text-wrapper-33">15%</div>

                  <div className="text-wrapper-34">15%</div>

                  <div className="group-93">
                    <div className="text-wrapper-12">United states</div>

                    <div className="group-94">
                      <div className="rectangle-13" />

                      <div className="rectangle-14" />
                    </div>
                  </div>

                  <div className="group-95">
                    <div className="text-wrapper-12">United Kigdom</div>

                    <div className="group-96">
                      <div className="rectangle-13" />

                      <div className="rectangle-15" />
                    </div>
                  </div>

                  <div className="group-97">
                    <div className="text-wrapper-12">Canada</div>

                    <div className="group-96">
                      <div className="rectangle-13" />

                      <div className="rectangle-16" />
                    </div>
                  </div>

                  <div className="group-98">
                    <div className="text-wrapper-12">Australia</div>

                    <div className="group-96">
                      <div className="rectangle-13" />

                      <div className="rectangle-17" />
                    </div>
                  </div>

                  <div className="group-99">
                    <div className="text-wrapper-12">Spain</div>

                    <div className="group-96">
                      <div className="rectangle-13" />

                      <div className="rectangle-18" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="group-100">
                <div className="overlap-12">
                  <div className="group-101">
                    <div className="overlap-group-4">
                      <img
                        className="rectangle-19"
                        alt="Rectangle"
                        src="https://c.animaapp.com/v7xIVJH6/img/rectangle-739-6.svg"
                      />

                      <div className="rectangle-20" />
                    </div>
                  </div>

                  <div className="group-102">
                    <div className="overlap-13">
                      <img
                        className="rectangle-19"
                        alt="Rectangle"
                        src="https://c.animaapp.com/v7xIVJH6/img/rectangle-739-7.svg"
                      />

                      <div className="rectangle-20" />
                    </div>
                  </div>

                  <div className="group-103">
                    <div className="overlap-14">
                      <img
                        className="rectangle-19"
                        alt="Rectangle"
                        src="https://c.animaapp.com/v7xIVJH6/img/rectangle-739-8.svg"
                      />

                      <div className="rectangle-20" />
                    </div>
                  </div>

                  <div className="group-104">
                    <div className="overlap-15">
                      <img
                        className="rectangle-19"
                        alt="Rectangle"
                        src="https://c.animaapp.com/v7xIVJH6/img/rectangle-739-9.svg"
                      />

                      <div className="rectangle-20" />
                    </div>
                  </div>

                  <div className="group-105">
                    <div className="overlap-16">
                      <img
                        className="rectangle-19"
                        alt="Rectangle"
                        src="https://c.animaapp.com/v7xIVJH6/img/rectangle-739-10.svg"
                      />

                      <div className="rectangle-21" />
                    </div>
                  </div>

                  <div className="overlap-17">
                    <div className="group-106">
                      <div className="overlap-18">
                        <img
                          className="rectangle-19"
                          alt="Rectangle"
                          src="https://c.animaapp.com/v7xIVJH6/img/rectangle-739-11.svg"
                        />

                        <div className="rectangle-20" />
                      </div>
                    </div>

                    <div className="group-107">
                      <div className="overlap-19">
                        <div className="group-108">
                          <div className="overlap-20">
                            <div className="group-109">
                              <div className="ellipse-wrapper">
                                <img
                                  className="ellipse-9"
                                  alt="Ellipse"
                                  src="https://c.animaapp.com/v7xIVJH6/img/ellipse-798-3.svg"
                                />
                              </div>
                            </div>

                            <div className="group-110">
                              <div className="overlap-group-5">
                                <div className="text-wrapper-35">Australia</div>

                                <div className="text-wrapper-36">1.86 K</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <img
                  className="vector-14"
                  alt="Vector"
                  src="https://c.animaapp.com/v7xIVJH6/img/vector-764-1.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
