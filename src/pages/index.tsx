import React, { ReactElement } from "react";
import Layout from "@/Components/layout";
import Link from "next/link";
import { NextPageWithLayout } from "./_app";
import { Upload, QuestionButton } from "@/Components";

const Home: NextPageWithLayout = () => {
  return (
    <div
      style={{
        paddingTop: "65px",
      }}
    >
      <Link href="/quizdemo">
        <button>test</button>
      </Link>
      <QuestionButton
        questionName="Question 1"
        questionText="when did I start pooing apples like what"
        onClick={() => {}}
        questionNumber={1}
      />
      <Upload label={""} maxSize={0} accept={""} />
    </div>
  );
};

Home.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Home;
