const styles = {
    boxWidth: "xl:max-w-[1280px] w-full",

    heading2: "font-poppins font-bold xs:text-[55px] text-[40px] text-dimWhite xs:leading-[76.8px] leading-[66.8px] w-full text-center",
    heading4: "font-poppins text-primary text-[20px] md:text-[26px] xs:leading-[30.8px] leading-[25.8px] w-full align-left",
    paragraph: "font-poppins font-normal text-dullGray text-[18px]",

    flexCenter: "flex justify-center items-center",
    flexStart: "flex justify-center items-start",

    paddingX: "sm:px-12 px-6",
    paddingY: "sm:py-12 py-6",
    padding: "sm:px-12 px-6 sm:py-10 py-4",

    marginX: "sm:mx-12 mx-6",
    marginY: "sm:my-12 my-6",

    section: "container mx-auto flex px-5 py-8 flex-col"
};

export const layout = {
    section: `flex md:flex-row flex-col ${styles.paddingY}`,
    sectionReverse: `flex md:flex-row flex-col-reverse ${styles.paddingY}`,

    sectionImgReverse: `flex-1 flex ${styles.flexCenter} md:mr-10 mr-0 md:mt-0 mt-10 relative`,
    sectionImg: `flex-1 flex ${styles.flexCenter} md:ml-10 ml-0 md:mt-0 mt-10 relative`,

    sectionInfo: `flex-1 ${styles.flexStart} flex-col`,
};

export default styles;