import React, { useEffect, useMemo, useState } from "react";
import { CpIcon } from "../../assets/Icons";

const Home = () => {
  type Candidate = {
    id: number;
    firstName: string;
    lastName: string;
    location: string;
    education: string;
    hashtags: string[];
    badges: string[];
    video?: number;
    programs?: number;
  };

  type Select = {
    label: string;
    number: number;
  };

  const [selectAll, setSelectAll] = useState<boolean>(false);
  const [selectedCandidates, setSelectedCandidates] = useState<Candidate[]>([]);
  const [toggleSelect, setToggleSelect] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<Select>({
    label: "Opportunity Browsing",
    number: 243,
  });

  const accordions = [
    {
      title: "Personal Information",
      description: "This is about the personal info",
    },
    {
      title: "Education",
      description: "This is about the Education info",
    },
    {
      title: "Work Experience",
      description: "This is about the Work Experience info",
    },
    {
      title: "Activity Filter",
      description: "This is about the Activity Filter info",
    },
    {
      title: "Advanced Filter",
      description: "This is about the Advanced Filter info",
    },
  ];

  const candidates: Candidate[] = useMemo(
    () => [
      {
        id: 1,
        firstName: "Aaliyah",
        lastName: "Sanderson",
        location: "Riyadh, Saudi Arabia",
        education: "Bachelor - Cambridge University (2023 - 2023)",
        hashtags: ["#top_candidate", "#top_candidate"],
        badges: ["New York", "Marketing", "London"],
      },
      {
        id: 2,
        firstName: "John",
        lastName: "Doe",
        location: "Bostom, USA",
        education: "Bachelor - MIT (2023 - 2023)",
        hashtags: ["#top_candidate", "#top_candidate"],
        badges: ["New York", "Marketing", "London"],
      },
      {
        id: 3,
        firstName: "Thomas",
        lastName: "Matt",
        location: "Edinburgh, UK",
        education: "Bachelor - Harvard University (2023 - 2023)",
        hashtags: ["#top_candidate", "#top_candidate"],
        badges: ["New York", "Marketing", "London"],
      },
      {
        id: 4,
        firstName: "Kamilia",
        lastName: "Smith",
        location: "London, UK",
        education: "Bachelor - Boston University (2023 - 2023)",
        hashtags: ["#top_candidate", "#top_candidate"],
        badges: ["New York", "Marketing", "London"],
      },
      {
        id: 5,
        firstName: "Roy",
        lastName: "Jade",
        location: "Cambridge,UK",
        education: "Bachelor - Yale (2023 - 2023)",
        hashtags: ["#top_candidate", "#top_candidate"],
        badges: ["New York", "Marketing", "London"],
      },
      {
        id: 6,
        firstName: "Ahmed",
        lastName: "Salman",
        location: "New York, USA",
        education: "Bachelor - Cambridge University (2023 - 2023)",
        hashtags: ["#top_candidate", "#top_candidate"],
        badges: ["New York", "Marketing", "London"],
        video: 4,
        programs: 5,
      },
    ],
    []
  );

  const select: Select[] = [
    {
      label: "Applied",
      number: 1745,
    },
    {
      label: "Shortlisted",
      number: 453,
    },
    {
      label: "Technical Interview",
      number: 123,
    },
    {
      label: "Opportunity Browsing",
      number: 243,
    },
    {
      label: "Video Interview I",
      number: 25,
    },
    {
      label: "Video Interview II",
      number: 25,
    },
    {
      label: "Video Interview III",
      number: 25,
    },
    {
      label: "Offer",
      number: 25,
    },
    {
      label: "Withdrawn",
      number: 25,
    },
  ];

  const handleSelectAllChange = () => {
    if (selectAll) {
      // Uncheck all checkboxes
      setSelectedCandidates([]);
    } else {
      // Check all checkboxes
      setSelectedCandidates(candidates);
    }

    // Toggle the "Select All" checkbox
    setSelectAll(!selectAll);
  };

  const handleCheckboxChange = (candidate: Candidate) => {
    if (selectedCandidates.some((checked) => checked?.id === candidate?.id)) {
      // If candidate is selected, remove it from the array
      const updatedSelectedCandidates = selectedCandidates.filter(
        (selectedCandidate) => selectedCandidate?.id !== candidate?.id
      );
      setSelectedCandidates(updatedSelectedCandidates);
    } else {
      // If candidate is not selected, add the candidate details to the array
      setSelectedCandidates([...selectedCandidates, candidate]);
    }
  };

  const [searchCandidates, setSearchCandidates] = useState<Candidate[]>([
    {
      id: 1,
      firstName: "Aaliyah",
      lastName: "Sanderson",
      location: "Riyadh, Saudi Arabia",
      education: "Bachelor - Cambridge University (2023 - 2023)",
      hashtags: ["#top_candidate", "#top_candidate"],
      badges: ["New York", "Marketing", "London"],
    },
    {
      id: 2,
      firstName: "John",
      lastName: "Doe",
      location: "Bostom, USA",
      education: "Bachelor - MIT (2023 - 2023)",
      hashtags: ["#top_candidate", "#top_candidate"],
      badges: ["New York", "Marketing", "London"],
    },
    {
      id: 3,
      firstName: "Thomas",
      lastName: "Matt",
      location: "Edinburgh, UK",
      education: "Bachelor - Harvard University (2023 - 2023)",
      hashtags: ["#top_candidate", "#top_candidate"],
      badges: ["New York", "Marketing", "London"],
    },
    {
      id: 4,
      firstName: "Kamilia",
      lastName: "Smith",
      location: "London, UK",
      education: "Bachelor - Boston University (2023 - 2023)",
      hashtags: ["#top_candidate", "#top_candidate"],
      badges: ["New York", "Marketing", "London"],
    },
    {
      id: 5,
      firstName: "Roy",
      lastName: "Jade",
      location: "Cambridge,UK",
      education: "Bachelor - Yale (2023 - 2023)",
      hashtags: ["#top_candidate", "#top_candidate"],
      badges: ["New York", "Marketing", "London"],
    },
    {
      id: 6,
      firstName: "Ahmed",
      lastName: "Salman",
      location: "New York, USA",
      education: "Bachelor - Cambridge University (2023 - 2023)",
      hashtags: ["#top_candidate", "#top_candidate"],
      badges: ["New York", "Marketing", "London"],
      video: 4,
      programs: 5,
    },
  ]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.toLowerCase();
    let filteredData = candidates.filter((candidate) => {
      const { firstName, lastName, location, education, hashtags, badges } =
        candidate;

      return (
        firstName.toLowerCase().includes(value) ||
        lastName.toLowerCase().includes(value) ||
        location.toLowerCase().includes(value) ||
        education.toLowerCase().includes(value) ||
        hashtags.some((tag) => tag.toLowerCase().includes(value)) ||
        badges.some((badge) => badge.toLowerCase().includes(value))
      );
    });

    setSearchCandidates(filteredData);
  };

  useEffect(() => {
    if (selectedCandidates.length === candidates.length) {
      setSelectAll(true);
    } else {
      setSelectAll(false);
    }
  }, [selectedCandidates, candidates]);

  // console.log(selectedCandidates);

  return (
    <div>
      <div
        className={` block md:flex gap-[32px] pr-[10px] md:pr-[36px] pt-[32px] `}
      >
        {/*  */}
        <div className="w-full md:w-[30%]">
          <p className="pb-2 text-xl text-[#1D4ED8] font-semibold">
            London Internship Program
          </p>
          <p className="text-sm  font-light text-[#0B0B0B] mb-[32px]">London</p>

          <div className="flex items-center justify-between bg-white border-[#F3F3F3] rounded-[8px] p-4 mb-6">
            <div className="flex items-center w-full relative">
              <div className="absolute">
                <CpIcon
                  width="20"
                  height="20"
                  d="M13.0303 11.9697C12.7374 11.6768 12.2626 11.6768 11.9697 11.9697C11.6768 12.2626 11.6768 12.7374 11.9697 13.0303L13.0303 11.9697ZM16.9697 18.0303C17.2626 18.3232 17.7374 18.3232 18.0303 18.0303C18.3232 17.7374 18.3232 17.2626 18.0303 16.9697L16.9697 18.0303ZM8.33333 13.4167C5.52589 13.4167 3.25 11.1408 3.25 8.33333H1.75C1.75 11.9692 4.69746 14.9167 8.33333 14.9167V13.4167ZM3.25 8.33333C3.25 5.52589 5.52589 3.25 8.33333 3.25V1.75C4.69746 1.75 1.75 4.69746 1.75 8.33333H3.25ZM8.33333 3.25C11.1408 3.25 13.4167 5.52589 13.4167 8.33333H14.9167C14.9167 4.69746 11.9692 1.75 8.33333 1.75V3.25ZM13.4167 8.33333C13.4167 11.1408 11.1408 13.4167 8.33333 13.4167V14.9167C11.9692 14.9167 14.9167 11.9692 14.9167 8.33333H13.4167ZM11.9697 13.0303L16.9697 18.0303L18.0303 16.9697L13.0303 11.9697L11.9697 13.0303Z"
                  fill="#B0BABF"
                  viewBox="0 0 20 20"
                />
              </div>
              <input
                onChange={handleSearch}
                className="outline-none bg-[transparent] pl-[10px] border-none ml-[10px] text-sm font-normal w-full leading-[22px] placeholder:text-[#9AA6AC] text-[#9AA6AC]"
                placeholder=" Search by name, edu, exp or #tag"
              />
            </div>
            <CpIcon
              width="20"
              height="20"
              fill="#9AA6AC"
              viewBox="0 0 20 20"
              d="M10.0415 12.875H10.3415C10.3415 12.7093 10.2072 12.575 10.0415 12.575V12.875ZM10.0415 12.9583L10.0414 13.2583C10.121 13.2583 10.1973 13.2267 10.2536 13.1705C10.3099 13.1142 10.3415 13.0379 10.3415 12.9583H10.0415ZM9.9585 12.9583H9.6585C9.6585 13.1239 9.79276 13.2582 9.95842 13.2583L9.9585 12.9583ZM9.9585 12.875V12.575C9.79281 12.575 9.6585 12.7093 9.6585 12.875H9.9585ZM10.3 7.04163C10.3 6.87594 10.1657 6.74163 10 6.74163C9.83431 6.74163 9.7 6.87594 9.7 7.04163H10.3ZM9.7 10.375C9.7 10.5406 9.83431 10.675 10 10.675C10.1657 10.675 10.3 10.5406 10.3 10.375H9.7ZM10 17.2C6.02355 17.2 2.8 13.9764 2.8 10H2.2C2.2 14.3078 5.69218 17.8 10 17.8V17.2ZM2.8 10C2.8 6.02355 6.02355 2.8 10 2.8V2.2C5.69218 2.2 2.2 5.69218 2.2 10H2.8ZM10 2.8C13.9764 2.8 17.2 6.02355 17.2 10H17.8C17.8 5.69218 14.3078 2.2 10 2.2V2.8ZM17.2 10C17.2 13.9764 13.9764 17.2 10 17.2V17.8C14.3078 17.8 17.8 14.3078 17.8 10H17.2ZM9.7415 12.875V12.9583H10.3415V12.875H9.7415ZM10.0416 12.6583L9.95857 12.6583L9.95842 13.2583L10.0414 13.2583L10.0416 12.6583ZM10.2585 12.9583V12.875H9.6585V12.9583H10.2585ZM9.9585 13.175H10.0415V12.575H9.9585V13.175ZM9.7 7.04163V10.375H10.3V7.04163H9.7Z"
            />
          </div>

          <div className="flex flex-col bg-white rounded-[8px]">
            <div className="flex items-center justify-between py-[18px] px-4 border-b-[#F2F2F2] border-b-[1px]">
              <p className="text-sm font-medium leading-[22px] text-[#0B0B0B]">
                Filters
              </p>
              <p className="text-sm font-normal leading-[22px] text-[#0B0B0B]">
                0 Selected
              </p>
            </div>
            {/* ACCORDIONS */}
            <>
              {accordions?.map((accordion, index) => {
                return (
                  <div
                    key={index}
                    className={`flex items-center cursor-pointer justify-between py-[18px] px-4 ${
                      accordion?.title === "Advanced Filter"
                        ? " border-b-[none]"
                        : "border-b-[#F2F2F2] border-b-[1px]"
                    } `}
                  >
                    <div className="flex items-center gap-2">
                      <CpIcon
                        width="16"
                        height="16"
                        fill="none"
                        viewBox="0 0 16 16"
                        stroke="#0B0B0B"
                        d="M6.00016 11.3333H10.0002M6.00016 9.33333H10.0002M12.6666 6H9.73324C9.35987 6 9.17337 5.99999 9.03076 5.92733C8.90532 5.86341 8.80341 5.76145 8.73949 5.63601C8.66683 5.4934 8.66683 5.3067 8.66683 4.93333V2M12.6668 11.8667V6.43599C12.6668 6.12699 12.667 5.97248 12.6336 5.82621C12.6041 5.6965 12.5554 5.57192 12.489 5.45666C12.414 5.32668 12.309 5.21331 12.099 4.98657L9.96696 2.68392C9.73363 2.43192 9.61686 2.30592 9.47803 2.21562C9.35497 2.13558 9.21926 2.07643 9.07693 2.04052C8.91635 2 8.74497 2 8.40154 2H5.46696C4.72022 2 4.34658 2 4.06136 2.14532C3.81048 2.27316 3.60665 2.47714 3.47882 2.72803C3.3335 3.01324 3.3335 3.3866 3.3335 4.13334V11.8667C3.3335 12.6134 3.3335 12.9868 3.47882 13.272C3.60665 13.5229 3.81048 13.7268 4.06136 13.8547C4.34658 14 4.72022 14 5.46696 14H10.5336C11.2804 14 11.6535 14 11.9387 13.8547C12.1896 13.7268 12.3938 13.5229 12.5216 13.272C12.667 12.9868 12.6668 12.6134 12.6668 11.8667Z"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <p className="text-sm font-normal leading-[22px] text-[#0B0B0B]">
                        {accordion?.title}
                      </p>
                    </div>
                    {accordion?.title !== "Advanced Filter" && (
                      <CpIcon
                        viewBox="0 0 18 18"
                        width="18"
                        height="18"
                        stroke="#1D4ED8"
                        d="M12 7.5L9 10.5L6 7.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    )}
                  </div>
                );
              })}
            </>
          </div>
        </div>
        {/*  */}
        <div className="w-full md:w-[70%]">
          <div className="block lg:flex justify-between gap-[20px] mb-[32px]">
            {/* SELECT */}
            <div className="relative">
              <div
                onClick={() => setToggleSelect(!toggleSelect)}
                className={`px-4 ${
                  toggleSelect ? "rounded-t-[16px]" : "rounded-[16px]"
                } cursor-pointer py-2 flex justify-between bg-white mt-3 lg:mt-0  w-full lg:w-[321px]`}
                style={{
                  boxShadow: "0px 4px 25px 0px rgba(29, 78, 216, 0.05)",
                }}
              >
                <p className="text-base font-medium leading-[22px] text-[#1D4ED8] rounded-[16px]">
                  {selectedOption?.label || "Select an option"}
                </p>
                <CpIcon
                  width="24"
                  height="24"
                  fill="none"
                  d="M16 10L12 14L8 10"
                  stroke="#1D4ED8"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                />
              </div>

              {/* SELECT OPTIONS */}
              {toggleSelect && (
                <div
                  className="mt-1 fixed inset-0 flex items-center justify-center bg-[#F6F6F94D]"
                  onClick={() => setToggleSelect(false)}
                >
                  <div
                    className="absolute ml-[-6.5%] lg:w-[321px] bg-white  w-full py-2"
                    style={{
                      boxShadow: "0px 4px 25px 0px rgba(29, 78, 216, 0.05)",
                    }}
                  >
                    {select?.map((item, index) => {
                      return (
                        <div
                          key={index}
                          className={`h-[72px] cursor-pointer w-full px-4 flex items-center justify-between border-b-[1px] border-b-[#EEEEEE] ${
                            selectedOption?.label === item?.label
                              ? "bg-[#EDF2FF] "
                              : "bg-[none]"
                          }`}
                          onClick={() => {
                            setSelectedOption(item);
                            setToggleSelect(false);
                          }}
                        >
                          <p
                            className={` ${
                              selectedOption?.label === item?.label
                                ? "text-[#1D4ED8]"
                                : "text-[#444444]"
                            }  text-base font-normal leading-[22px]`}
                          >
                            {item?.label}
                          </p>
                          <div
                            className={`px-[10px] ${
                              selectedOption?.label === item?.label
                                ? "bg-[#D1DDFF]"
                                : "bg-[#F8F8F8]"
                            }   rounded-[16px] py-[2px] flex justify-center items-center`}
                          >
                            <p
                              className={` ${
                                selectedOption?.label === item?.label
                                  ? "text-[#1D4ED8]"
                                  : "text-[#444444]"
                              }  text-[14px] font-medium`}
                            >
                              {item?.number}
                            </p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </div>

            <div className="flex flex-wrap xl:flex-nowrap gap-2 pt-3 lg:pt-0">
              <div
                className="rounded-[8px] p-2 flex justify-center items-center bg-white border-[#ECECEC] border-[0.5px]"
                style={{
                  boxShadow: " 0px 4px 25px 0px rgba(141, 141, 141, 0.05)",
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M12.9601 5.28003L19.3426 11.6625C20.1001 12.42 20.1001 13.6425 19.3426 14.4L13.7701 19.9725C13.0126 20.73 11.7901 20.73 11.0326 19.9725L4.65008 13.59C4.29008 13.23 4.08008 12.735 4.08008 12.225V6.65253C4.08008 5.58753 4.95008 4.71753 6.01508 4.71753H11.5876C12.1051 4.71753 12.6001 4.92003 12.9601 5.28003Z"
                    stroke="#444444"
                    stroke-width="0.7"
                    strokeMiterlimit="10"
                    stroke-linecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8.5801 10.2525C9.15585 10.2525 9.6226 9.7858 9.6226 9.21004C9.6226 8.63428 9.15585 8.16754 8.5801 8.16754C8.00434 8.16754 7.5376 8.63428 7.5376 9.21004C7.5376 9.7858 8.00434 10.2525 8.5801 10.2525Z"
                    stroke="#444444"
                    stroke-width="0.7"
                    strokeMiterlimit="10"
                    stroke-linecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>

              <div
                className="rounded-[8px] p-2 flex justify-center items-center bg-white border-[#ECECEC] border-[0.5px]"
                style={{
                  boxShadow: " 0px 4px 25px 0px rgba(141, 141, 141, 0.05)",
                }}
              >
                <CpIcon
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="#A80000"
                  d="M15 19C15 16.7909 12.3137 15 9 15C5.68629 15 3 16.7909 3 19M17 14L21 10M17 10L21 14M9 12C6.79086 12 5 10.2091 5 8C5 5.79086 6.79086 4 9 4C11.2091 4 13 5.79086 13 8C13 10.2091 11.2091 12 9 12Z"
                  strokeWidth="0.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </div>

              <div
                className="rounded-[8px] p-2 flex justify-center items-center bg-white border-[#ECECEC] border-[0.5px]"
                style={{
                  boxShadow: " 0px 4px 25px 0px rgba(141, 141, 141, 0.05)",
                }}
              >
                <CpIcon
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="#0B0B0B"
                  d="M15 19C15 16.7909 12.3137 15 9 15C5.68629 15 3 16.7909 3 19M21 10L17 14L15 12M9 12C6.79086 12 5 10.2091 5 8C5 5.79086 6.79086 4 9 4C11.2091 4 13 5.79086 13 8C13 10.2091 11.2091 12 9 12Z"
                  strokeWidth="0.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </div>

              <div
                className="rounded-[8px] p-2 flex justify-center items-center bg-white border-[#ECECEC] border-[0.5px]"
                style={{
                  boxShadow: " 0px 4px 25px 0px rgba(141, 141, 141, 0.05)",
                }}
              >
                <CpIcon
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="#0B0B0B"
                  d="M15 19C15 16.7909 12.3137 15 9 15C5.68629 15 3 16.7909 3 19M16.8281 5.17163C17.1996 5.54307 17.4942 5.98402 17.6952 6.46932C17.8962 6.95463 17.9998 7.47469 17.9998 7.99997C17.9998 8.52526 17.8963 9.04543 17.6953 9.53073C17.4943 10.016 17.1996 10.457 16.8281 10.8285M19 3C19.6566 3.65661 20.1775 4.43612 20.5328 5.29402C20.8882 6.15192 21.071 7.07134 21.071 7.99993C21.071 8.92851 20.8881 9.84808 20.5327 10.706C20.1774 11.5639 19.6566 12.3435 19 13.0001M9 12C6.79086 12 5 10.2091 5 8C5 5.79086 6.79086 4 9 4C11.2091 4 13 5.79086 13 8C13 10.2091 11.2091 12 9 12Z"
                  strokeWidth="0.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </div>

              <div
                className="rounded-[8px] p-2 flex justify-center items-center bg-white border-[#ECECEC] border-[0.5px]"
                style={{
                  boxShadow: " 0px 4px 25px 0px rgba(141, 141, 141, 0.05)",
                }}
              >
                <CpIcon
                  viewBox="0 0 24 24"
                  width="24"
                  height="24"
                  fill="none"
                  stroke="#0B0B0B"
                  d="M4 6L12.2286 12L19.9999 6M21 8.19995V15.8C21 16.9201 21.0002 17.4802 20.7822 17.908C20.5905 18.2844 20.2841 18.5902 19.9078 18.782C19.48 19 18.9203 19 17.8002 19H6.2002C5.08009 19 4.51962 19 4.0918 18.782C3.71547 18.5902 3.40973 18.2844 3.21799 17.908C3 17.4802 3 16.9201 3 15.8V8.19995C3 7.07985 3 6.51986 3.21799 6.09204C3.40973 5.71572 3.71547 5.40973 4.0918 5.21799C4.51962 5 5.08009 5 6.2002 5H17.8002C18.9203 5 19.48 5 19.9078 5.21799C20.2841 5.40973 20.5905 5.71572 20.7822 6.09204C21.0002 6.51986 21 7.07985 21 8.19995Z"
                  strokeWidth="0.7"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </div>

              <div className="ml-2 flex cursor-pointer">
                <div
                  className=" bg-[#1D5ECD] px-4 py-2 flex items-center"
                  style={{ borderRadius: "8px 0px 0px 8px" }}
                >
                  <p className="text-[13px] text-white font-normal leading-[22px]">
                    Move To Video Interview
                  </p>
                </div>

                <div
                  className="bg-[#1D5ECD] px-[10px] py-3 ml-[1px] flex items-center "
                  style={{ borderRadius: "0px 8px 8px 0px" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <g clipPath="url(#clip0_28_2623)">
                      <path
                        d="M11.06 5.72668L8 8.78002L4.94 5.72668L4 6.66668L8 10.6667L12 6.66668L11.06 5.72668Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_28_2623">
                        <rect width="16" height="16" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* TABLE */}
          <div className="px-4 py-2 bg-white rounded-[16px] w-full overflow-y-auto">
            <div className="pb-1 border-b-[1px] border-b-[#EEEEEE] flex flex-wrap lg:flex-nowrap w-full items-center  justify-between">
              <div className="py-4 flex items-center gap-[32px]">
                <input
                  type="checkbox"
                  className="w-4 h-4"
                  checked={selectAll}
                  onChange={handleSelectAllChange}
                />
                <p className="text-[#1D4ED8] text-sm font-semibold leading-[22px]">
                  {searchCandidates?.length} Candidates
                </p>
              </div>
              <div className="flex flex-wrap lg:flex-nowrap items-center gap-4">
                <div>
                  <p className="text-[#1D4ED8] text-sm font-medium leading-[22px]">
                    Qualified
                  </p>
                </div>

                <div className="w-[2px] bg-[#F3F3F4]"></div>

                <div className="flex items-center gap-2">
                  <p className="text-[#0B0B0B] text-sm font-medium leading-[22px]">
                    Task
                  </p>
                  <div className="flex justify-center items-center rounded-[40px] bg-[#F7F8FD] px-[6px]">
                    <p className="text-[#22215B] text-[10px] font-normal leading-[22px]">
                      25
                    </p>
                  </div>
                </div>

                <div className="w-[2px] bg-[#F3F3F4]"></div>

                <div className="flex items-center gap-2">
                  <p className="text-[#0B0B0B] text-sm font-medium leading-[22px]">
                    Disqualified
                  </p>
                  <div className="flex justify-center items-center rounded-[40px] bg-[#F7F8FD] px-[6px]">
                    <p className="text-[#22215B] text-[10px] font-normal leading-[22px]">
                      78
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="h-full lg:max-h-[630px] w-full overflow-auto">
              {searchCandidates?.map((candidate, index) => {
                const isChecked = selectedCandidates.some(
                  (checked) => checked?.id === candidate?.id
                );

                return (
                  <div
                    key={index}
                    className="flex w-full items-center gap-2  pb-1 border-b-[#EEEEEE] border-b-[1px]"
                  >
                    <input
                      type="checkbox"
                      className="w-4 h-4 accent-[#1D5ECD] border-[#8492A7]"
                      checked={isChecked}
                      onChange={() => handleCheckboxChange(candidate)}
                    />
                    <div className="p-4 w-full bg-white flex gap-6 items-center">
                      <div className="pl-[14px] pr-[15px] pt-[12.5px] pb-[13.5px] rounded-[100px] bg-[#EDF4FF] flex justify-center items-center">
                        <p className="text-xl font-semibold text-[#D0E1FF] uppercase">
                          {candidate?.firstName?.charAt(0) +
                            candidate?.lastName?.charAt(0)}
                        </p>
                      </div>

                      <div className="flex w-full flex-col gap-2">
                        <div className="flex w-full justify-between items-center">
                          <p className="text-[#000000] text-sm font-semibold">
                            {`${candidate?.firstName} ${candidate?.lastName}`}
                          </p>
                          <div className="flex gap-2">
                            {candidate?.video && (
                              <div className="flex gap-1 rounded-[16px] bg-[#F7F8FD] px-2 py-1">
                                <CpIcon
                                  width="14"
                                  fill="none"
                                  height="14"
                                  d="M1.75 7C1.75 9.8995 4.1005 12.25 7 12.25C9.8995 12.25 12.25 9.8995 12.25 7C12.25 4.1005 9.8995 1.75 7 1.75C4.1005 1.75 1.75 4.1005 1.75 7Z"
                                  stroke="#305DC6"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  viewBox="0 0 14 14"
                                  pathFill="none"
                                />
                                <p className="text-[#305DC6] text-[10px] font-normal">
                                  4
                                </p>
                              </div>
                            )}

                            {candidate?.programs && (
                              <div className="flex gap-1 rounded-[16px] bg-[#E3EBFF] px-4 py-1">
                                <CpIcon
                                  width="14"
                                  fill="#1D4ED8"
                                  height="14"
                                  d="M2.46066 2.97036L2.90616 3.19735L2.46066 2.97036ZM2.97038 2.46049L3.19737 2.906L2.97038 2.46049ZM2.97038 11.5395L3.19737 11.094H3.19737L2.97038 11.5395ZM2.46066 11.0296L2.01515 11.2566L2.46066 11.0296ZM11.5398 11.0296L11.0943 10.8027L11.5398 11.0296ZM11.0297 11.5395L10.8027 11.094L11.0297 11.5395ZM11.5398 2.97036L11.0943 3.19735L11.5398 2.97036ZM11.0297 2.46049L11.2567 2.01499L11.0297 2.46049ZM7.00016 5.91667C6.72402 5.91667 6.50016 6.14052 6.50016 6.41667C6.50016 6.69281 6.72402 6.91667 7.00016 6.91667V5.91667ZM9.3335 6.91667C9.60964 6.91667 9.8335 6.69281 9.8335 6.41667C9.8335 6.14052 9.60964 5.91667 9.3335 5.91667V6.91667ZM7.00016 4.16667C6.72402 4.16667 6.50016 4.39052 6.50016 4.66667C6.50016 4.94281 6.72402 5.16667 7.00016 5.16667V4.16667ZM9.3335 5.16667C9.60964 5.16667 9.8335 4.94281 9.8335 4.66667C9.8335 4.39052 9.60964 4.16667 9.3335 4.16667V5.16667ZM4.16683 11.6667C4.16683 11.9428 4.39069 12.1667 4.66683 12.1667C4.94297 12.1667 5.16683 11.9428 5.16683 11.6667H4.16683ZM5.16683 2.33333C5.16683 2.05719 4.94297 1.83333 4.66683 1.83333C4.39069 1.83333 4.16683 2.05719 4.16683 2.33333L5.16683 2.33333ZM11.1668 4.20001V9.80001H12.1668V4.20001H11.1668ZM9.80028 11.1667H4.20028V12.1667H9.80028V11.1667ZM2.8335 9.80001V4.20001H1.8335V9.80001H2.8335ZM4.20028 2.83333H9.80028V1.83333H4.20028V2.83333ZM2.8335 4.20001C2.8335 3.86506 2.83388 3.64392 2.84773 3.47446C2.8611 3.31084 2.88448 3.2399 2.90616 3.19735L2.01515 2.74336C1.90967 2.95038 1.86947 3.16756 1.85105 3.39303C1.83311 3.61266 1.8335 3.88156 1.8335 4.20001H2.8335ZM4.20028 1.83333C3.88182 1.83333 3.61287 1.83294 3.39319 1.85089C3.1677 1.8693 2.95043 1.90949 2.74338 2.01499L3.19737 2.906C3.23989 2.88433 3.31087 2.86094 3.47459 2.84757C3.64412 2.83372 3.86533 2.83333 4.20028 2.83333V1.83333ZM2.90616 3.19735C2.97014 3.07178 3.07206 2.96985 3.19737 2.906L2.74338 2.01499C2.42965 2.17484 2.17487 2.42989 2.01515 2.74336L2.90616 3.19735ZM4.20028 11.1667C3.86534 11.1667 3.64413 11.1663 3.47461 11.1524C3.31088 11.139 3.2399 11.1157 3.19737 11.094L2.74338 11.985C2.95042 12.0905 3.16769 12.1307 3.39318 12.1491C3.61286 12.1671 3.88182 12.1667 4.20028 12.1667V11.1667ZM1.8335 9.80001C1.8335 10.1185 1.83311 10.3874 1.85105 10.607C1.86947 10.8324 1.90967 11.0496 2.01515 11.2566L2.90616 10.8027C2.88448 10.7601 2.8611 10.6892 2.84773 10.5255C2.83388 10.3561 2.8335 10.135 2.8335 9.80001H1.8335ZM3.19737 11.094C3.07204 11.0301 2.97013 10.9282 2.90616 10.8027L2.01515 11.2566C2.17489 11.5701 2.42967 11.8251 2.74338 11.985L3.19737 11.094ZM11.1668 9.80001C11.1668 10.135 11.1665 10.3561 11.1527 10.5256C11.1393 10.6893 11.1159 10.7602 11.0943 10.8027L11.9853 11.2566C12.0908 11.0496 12.131 10.8323 12.1493 10.6069C12.1672 10.3873 12.1668 10.1184 12.1668 9.80001H11.1668ZM9.80028 12.1667C10.1187 12.1667 10.3876 12.1671 10.6072 12.1491C10.8326 12.1307 11.0497 12.0905 11.2567 11.985L10.8027 11.094C10.7601 11.1157 10.6892 11.1391 10.5257 11.1524C10.3563 11.1663 10.1352 11.1667 9.80028 11.1667V12.1667ZM11.0943 10.8027C11.0305 10.9279 10.9284 11.03 10.8027 11.094L11.2567 11.985C11.5701 11.8253 11.8254 11.5705 11.9853 11.2566L11.0943 10.8027ZM12.1668 4.20001C12.1668 3.88161 12.1672 3.6127 12.1493 3.39311C12.131 3.16767 12.0908 2.95043 11.9853 2.74336L11.0943 3.19735C11.1159 3.23984 11.1393 3.31073 11.1527 3.47438C11.1665 3.64387 11.1668 3.86501 11.1668 4.20001H12.1668ZM9.80028 2.83333C10.1352 2.83333 10.3563 2.83372 10.5257 2.84757C10.6892 2.86093 10.7601 2.8843 10.8027 2.906L11.2567 2.01499C11.0497 1.90952 10.8326 1.86931 10.6072 1.85089C10.3876 1.83294 10.1187 1.83333 9.80028 1.83333V2.83333ZM11.9853 2.74336C11.8254 2.42955 11.5701 2.17467 11.2567 2.01499L10.8027 2.906C10.9284 2.97002 11.0305 3.07212 11.0943 3.19735L11.9853 2.74336ZM7.00016 6.91667H9.3335V5.91667H7.00016V6.91667ZM7.00016 5.16667H9.3335V4.16667H7.00016V5.16667ZM5.16683 11.6667L5.16683 2.33333L4.16683 2.33333L4.16683 11.6667H5.16683Z"
                                  viewBox="0 0 14 14"
                                />
                                <p className="text-[#305DC6] text-[10px] font-normal">
                                  5 Programs
                                </p>
                              </div>
                            )}
                          </div>
                        </div>
                        <p className="text-[#000000] text-[10px] font-medium">
                          {candidate?.location}
                        </p>
                        <p className="text-[#000000] text-[10px] font-light">
                          {candidate?.education}
                        </p>

                        <div className="flex gap-2">
                          {candidate?.hashtags?.map((hashtag, index) => {
                            return (
                              <p
                                key={index}
                                className="text-[#1D4ED8] text-[8px] font-normal"
                              >
                                {hashtag}
                              </p>
                            );
                          })}
                        </div>

                        <div className="flex gap-2">
                          {/* BADGES */}
                          {candidate?.badges?.map((badge, index) => {
                            return (
                              <div
                                key={index}
                                className="px-[10px] bg-[#F3FAFC] rounded-[16px] py-[2px] flex justify-center items-center"
                              >
                                <p className="text-[#037092] text-[8px] font-medium">
                                  {badge}
                                </p>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
