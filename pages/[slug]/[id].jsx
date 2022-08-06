import React, { useState, useEffect } from "react";
import Router from "next/router";
import { useRouter } from "next/router";

const Post = () => {
  const router = useRouter();
  const pid = router.query;
  console.log(router.query.slug, "hey");
  const listSlug = [
    "danh-muc-310",
    "danh-muc-311",
    "danh-muc-312",
    "danh-muc-313",
    "danh-muc-314",
    "danh-muc-315",
  ];
  const listId = [
    "may-van-phong",
    "may-van-phong-z",
    "may-van-phong-kli",
    "may-van-phong",
    "may-van-phong",
    "may-van-phong",
  ];
  console.log(router.query.slug);
  useEffect(() => {
    console.log(listId.includes(router.query.id), "test");
    if (router.query.slug != undefined) {
      if (
        listSlug.includes(router.query.slug) == true &&
        listId.includes(router.query.id) == true
      ) {
        console.log("oke");
      } else {
        Router.push("/404");
      }
    }
  });

  return (
    <>
      <div>
        Slug của bạn là {pid.slug} và id trang của bạn là {pid.id}
      </div>
    </>
  );
};

export default Post;
