import React from 'react'
import { Global, css } from '@emotion/react'

const Reset = () => (
  <>
    <Global
      styles={css`
        html,
        body,
        div,
        span,
        applet,
        object,
        iframe,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        p,
        blockquote,
        pre,
        a,
        abbr,
        acronym,
        address,
        big,
        cite,
        code,
        del,
        dfn,
        em,
        img,
        ins,
        kbd,
        q,
        s,
        samp,
        small,
        strike,
        strong,
        sub,
        sup,
        tt,
        var,
        b,
        u,
        i,
        center,
        dl,
        dt,
        dd,
        ol,
        ul,
        li,
        fieldset,
        form,
        label,
        legend,
        table,
        caption,
        tbody,
        tfoot,
        thead,
        tr,
        th,
        td,
        article,
        aside,
        canvas,
        details,
        embed,
        figure,
        figcaption,
        footer,
        header,
        hgroup,
        menu,
        nav,
        output,
        ruby,
        section,
        summary,
        time,
        mark,
        audio,
        video {
          margin: 0;
          padding: 0;
          border: 0;
          font-size: 100%;
          font: inherit;
          vertical-align: baseline;
        }
        article,
        aside,
        details,
        figcaption,
        figure,
        footer,
        header,
        hgroup,
        menu,
        nav,
        section {
          display: block;
        }
        body {
          line-height: 1;
        }
        ol,
        ul {
          list-style: none;
        }
        blockquote,
        q {
          quotes: none;
        }
        blockquote:before,
        blockquote:after,
        q:before,
        q:after {
          content: '';
          content: none;
        }
        table {
          border-collapse: collapse;
          border-spacing: 0;
        }

        @font-face {
          font-family: 'Roboto';
          font-style: normal;
          font-weight: 400;
          src: url('/fonts/roboto/roboto-v29-latin-regular.eot'); /* IE9 Compat Modes */
          src: local(''),
            url('/fonts/roboto/roboto-v29-latin-regular.eot?#iefix')
              format('embedded-opentype'),
            /* IE6-IE8 */ url('/fonts/roboto/roboto-v29-latin-regular.woff2')
              format('woff2'),
            /* Super Modern Browsers */
              url('/fonts/roboto/roboto-v29-latin-regular.woff') format('woff'),
            /* Modern Browsers */
              url('/fonts/roboto/roboto-v29-latin-regular.ttf')
              format('truetype'),
            /* Safari, Android, iOS */
              url('/fonts/roboto/roboto-v29-latin-regular.svg#Roboto')
              format('svg'); /* Legacy iOS */
        }
        html,
        body {
          font-family: 'Roboto', sans-serif;
          font-size: 16px;
          font-weight: 400;
          line-height: 1.75;
        }
      `}
    />
  </>
)

export default Reset
