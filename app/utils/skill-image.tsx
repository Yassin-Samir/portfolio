import adobeXd from "@/app/assets/skills/adobe-xd.svg";
import adobeaudition from "@/app/assets/skills/adobeaudition.svg";
import afterEffects from "@/app/assets/skills/after-effects.svg";
import angular from "@/app/assets/skills/angular.svg";
import aws from "@/app/assets/skills/aws.svg";
import azure from "@/app/assets/skills/azure.svg";
import blender from "@/app/assets/skills/blender.svg";
import bootstrap from "@/app/assets/skills/bootstrap.svg";
import bulma from "@/app/assets/skills/bulma.svg";
import c from "@/app/assets/skills/c.svg";
import canva from "@/app/assets/skills/canva.svg";
import capacitorjs from "@/app/assets/skills/capacitorjs.svg";
import coffeescript from "@/app/assets/skills/coffeescript.svg";
import cplusplus from "@/app/assets/skills/cplusplus.svg";
import csharp from "@/app/assets/skills/csharp.svg";
import css from "@/app/assets/skills/css.svg";
import dart from "@/app/assets/skills/dart.svg";
import deno from "@/app/assets/skills/deno.svg";
import django from "@/app/assets/skills/django.svg";
import docker from "@/app/assets/skills/docker.svg";
import fastify from "@/app/assets/skills/fastify.svg";
import figma from "@/app/assets/skills/figma.svg";
import firebase from "@/app/assets/skills/firebase.svg";
import flutter from "@/app/assets/skills/flutter.svg";
import gcp from "@/app/assets/skills/gcp.svg";
import gimp from "@/app/assets/skills/gimp.svg";
import git from "@/app/assets/skills/git.svg";
import go from "@/app/assets/skills/go.svg";
import graphql from "@/app/assets/skills/graphql.svg";
import haxe from "@/app/assets/skills/haxe.svg";
import html from "@/app/assets/skills/html.svg";
import illustrator from "@/app/assets/skills/illustrator.svg";
import ionic from "@/app/assets/skills/ionic.svg";
import java from "@/app/assets/skills/java.svg";
import javascript from "@/app/assets/skills/javascript.svg";
import julia from "@/app/assets/skills/julia.svg";
import kotlin from "@/app/assets/skills/kotlin.svg";
import lightroom from "@/app/assets/skills/lightroom.svg";
import markdown from "@/app/assets/skills/markdown.svg";
import materialui from "@/app/assets/skills/materialui.svg";
import matlab from "@/app/assets/skills/matlab.svg";
import memsql from "@/app/assets/skills/memsql.svg";
import microsoftoffice from "@/app/assets/skills/microsoftoffice.svg";
import mongoDB from "@/app/assets/skills/mongoDB.svg";
import mysql from "@/app/assets/skills/mysql.svg";
import nextJS from "@/app/assets/skills/nextJS.svg";
import nginx from "@/app/assets/skills/nginx.svg";
import numpy from "@/app/assets/skills/numpy.svg";
import nuxtJS from "@/app/assets/skills/nuxtJS.svg";
import opencv from "@/app/assets/skills/opencv.svg";
import photoshop from "@/app/assets/skills/photoshop.svg";
import php from "@/app/assets/skills/php.svg";
import picsart from "@/app/assets/skills/picsart.svg";
import postgresql from "@/app/assets/skills/postgresql.svg";
import premierepro from "@/app/assets/skills/premierepro.svg";
import python from "@/app/assets/skills/python.svg";
import pytorch from "@/app/assets/skills/pytorch.svg";
import react from "@/app/assets/skills/react.svg";
import ruby from "@/app/assets/skills/ruby.svg";
import selenium from "@/app/assets/skills/selenium.svg";
import sketch from "@/app/assets/skills/sketch.svg";
import strapi from "@/app/assets/skills/strapi.svg";
import svelte from "@/app/assets/skills/svelte.svg";
import swift from "@/app/assets/skills/swift.svg";
import tailwind from "@/app/assets/skills/tailwind.svg";
import tensorflow from "@/app/assets/skills/tensorflow.svg";
import typescript from "@/app/assets/skills/typescript.svg";
import unity from "@/app/assets/skills/unity.svg";
import vitejs from "@/app/assets/skills/vitejs.svg";
import vue from "@/app/assets/skills/vue.svg";
import vuetifyjs from "@/app/assets/skills/vuetifyjs.svg";
import webix from "@/app/assets/skills/webix.svg";
import wolframalpha from "@/app/assets/skills/wolframalpha.svg";
import wordpress from "@/app/assets/skills/wordpress.svg";

export type skill =
  | "gcp"
  | "html"
  | "photoshop"
  | "illustrator"
  | "docker"
  | "adobe xd"
  | "after effects"
  | "css"
  | "angular"
  | "javascript"
  | "next js"
  | "nuxt js"
  | "react"
  | "svelte"
  | "typescript"
  | "vue"
  | "bootstrap"
  | "bulma"
  | "capacitorjs"
  | "coffeescript"
  | "memsql"
  | "mongodb"
  | "mysql"
  | "postgresql"
  | "tailwind"
  | "vitejs"
  | "vuetifyjs"
  | "c"
  | "c++"
  | "c#"
  | "dart"
  | "go"
  | "java"
  | "kotlin"
  | "julia"
  | "matlab"
  | "php"
  | "python"
  | "ruby"
  | "swift"
  | "adobe audition"
  | "aws"
  | "deno"
  | "django"
  | "firebase"
  | "gimp"
  | "git"
  | "graphql"
  | "lightroom"
  | "materialui"
  | "nginx"
  | "numpy"
  | "opencv"
  | "premiere pro"
  | "pytorch"
  | "selenium"
  | "strapi"
  | "tensorflow"
  | "webix"
  | "wordpress"
  | "azure"
  | "blender"
  | "fastify"
  | "figma"
  | "flutter"
  | "haxe"
  | "ionic"
  | "markdown"
  | "microsoft office"
  | "picsart"
  | "sketch"
  | "unity"
  | "wolframalpha"
  | "canva";
export const skillsImage = (skill: skill) => {
  const skillID: skill = skill.toLowerCase() as skill;
  switch (skillID) {
    case "gcp":
      return gcp;
    case "html":
      return html;
    case "photoshop":
      return photoshop;
    case "docker":
      return docker;
    case "illustrator":
      return illustrator;
    case "adobe xd":
      return adobeXd;
    case "after effects":
      return afterEffects;
    case "css":
      return css;
    case "angular":
      return angular;
    case "javascript":
      return javascript;
    case "next js":
      return nextJS;
    case "nuxt js":
      return nuxtJS;
    case "react":
      return react;
    case "svelte":
      return svelte;
    case "typescript":
      return typescript;
    case "vue":
      return vue;
    case "bootstrap":
      return bootstrap;
    case "bulma":
      return bulma;
    case "capacitorjs":
      return capacitorjs;
    case "coffeescript":
      return coffeescript;
    case "memsql":
      return memsql;
    case "mongodb":
      return mongoDB;
    case "mysql":
      return mysql;
    case "postgresql":
      return postgresql;
    case "tailwind":
      return tailwind;
    case "vitejs":
      return vitejs;
    case "vuetifyjs":
      return vuetifyjs;
    case "c":
      return c;
    case "c++":
      return cplusplus;
    case "c#":
      return csharp;
    case "dart":
      return dart;
    case "go":
      return go;
    case "java":
      return java;
    case "kotlin":
      return kotlin;
    case "julia":
      return julia;
    case "matlab":
      return matlab;
    case "php":
      return php;
    case "python":
      return python;
    case "ruby":
      return ruby;
    case "swift":
      return swift;
    case "adobe audition":
      return adobeaudition;
    case "aws":
      return aws;
    case "deno":
      return deno;
    case "django":
      return django;
    case "firebase":
      return firebase;
    case "gimp":
      return gimp;
    case "git":
      return git;
    case "graphql":
      return graphql;
    case "lightroom":
      return lightroom;
    case "materialui":
      return materialui;
    case "nginx":
      return nginx;
    case "numpy":
      return numpy;
    case "opencv":
      return opencv;
    case "premiere pro":
      return premierepro;
    case "pytorch":
      return pytorch;
    case "selenium":
      return selenium;
    case "strapi":
      return strapi;
    case "tensorflow":
      return tensorflow;
    case "webix":
      return webix;
    case "wordpress":
      return wordpress;
    case "azure":
      return azure;
    case "blender":
      return blender;
    case "fastify":
      return fastify;
    case "figma":
      return figma;
    case "flutter":
      return flutter;
    case "haxe":
      return haxe;
    case "ionic":
      return ionic;
    case "markdown":
      return markdown;
    case "microsoft office":
      return microsoftoffice;
    case "picsart":
      return picsart;
    case "sketch":
      return sketch;
    case "unity":
      return unity;
    case "wolframalpha":
      return wolframalpha;
    case "canva":
      return canva;
    default:
      break;
  }
};
