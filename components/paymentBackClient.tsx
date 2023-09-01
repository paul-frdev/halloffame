"use client";

import { Breadcrumbs } from "./breadcrumbs";
import { Container } from "./ui/container";
import { Title } from "./ui/title";
import { Typography } from "./ui/typography";
import React from "react";

export const PaymentBackClient = () => {
  const breadcrumbs = [
    { label: "Головна", url: "/" },
    { label: "Доставка та повернення товару", url: "/payment-back" },
  ];

  return (
    <section className="bg-white pt-12 text-black pb-12">
      <Container className="flex-col justify-start items-start">
        <Breadcrumbs breadcrumbs={breadcrumbs} />
        <div className="w-full flex justify-between items-center mt-8 pb-12 border-b border-[#999999]">
          <Title className="uppercase text-[48px] text-black font-oswaldBold">Оплата, доставка та повернення</Title>
        </div>
        <div className="mb-4">
          <Title className="uppercase text-[48px] text-black font-oswaldBold my-12">ОПЛАТА КВИТКІВ</Title>
          <Typography className="text-2xl tracking-wide leading-snug">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim convallis molestie gravida fermentum facilisi luctus nam dui. Massa etiam
            lorem fames morbi id morbi in. Est adipiscing at vitae mattis. Iaculis justo ullamcorper risus mi, egestas pharetra cras odio amet. Vitae
            ut diam amet diam. Amet tristique adipiscing tincidunt est mattis fermentum ornare accumsan, massa. Et gravida lorem fames leo. Hendrerit
            phasellus arcu odio sit turpis. Vitae, lacus, vestibulum pellentesque odio id cras. Consectetur vel nunc, feugiat feugiat duis integer
            elit. Sit luctus imperdiet vulputate congue arcu tortor, pharetra. Hendrerit adipiscing accumsan et proin in sit bibendum ac. Aliquet
            feugiat a a arcu molestie nec. Et amet, facilisis vulputate egestas. Egestas in lectus est lacus parturient. Adipiscing eu neque ipsum
            tortor tincidunt urna quam blandit habitasse. Tortor sed purus consectetur in dictumst orci malesuada. Non accumsan dolor neque, praesent
            pharetra, integer ultrices ac. Turpis id cras vitae gravida luctus. Justo scelerisque diam eu urna, nunc, at orci eleifend posuere.
          </Typography>
        </div>
        <div className="mb-4">
          <Title className="uppercase text-[48px] text-black font-oswaldBold my-12">ОПЛАТА ТА ДОСТАВКА ТОВАРІВ ПО КИЄВУ та УКРАЇНІ</Title>
          <Typography className="text-2xl tracking-wide leading-snug">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim convallis molestie gravida fermentum facilisi luctus nam dui. Massa etiam
            lorem fames morbi id morbi in. Est adipiscing at vitae mattis. Iaculis justo ullamcorper risus mi, egestas pharetra cras odio amet. Vitae
            ut diam amet diam. Amet tristique adipiscing tincidunt est mattis fermentum ornare accumsan, massa. Et gravida lorem fames leo. Hendrerit
            phasellus arcu odio sit turpis. Vitae, lacus, vestibulum pellentesque odio id cras. Consectetur vel nunc, feugiat feugiat duis integer
            elit. Sit luctus imperdiet vulputate congue arcu tortor, pharetra. Hendrerit adipiscing accumsan et proin in sit bibendum ac. Aliquet
            feugiat a a arcu molestie nec. Et amet, facilisis vulputate egestas. Egestas in lectus est lacus parturient. Adipiscing eu neque ipsum
            tortor tincidunt urna quam blandit habitasse. Tortor sed purus consectetur in dictumst orci malesuada. Non accumsan dolor neque, praesent
            pharetra, integer ultrices ac. Turpis id cras vitae gravida luctus. Justo scelerisque diam eu urna, nunc, at orci eleifend posuere.
          </Typography>
        </div>
        <div className="mb-4">
          <Title className="uppercase text-[48px] text-black font-oswaldBold my-12">ПОВЕРНЕННЯ ТОВАРІВ</Title>
          <Typography className="text-2xl tracking-wide leading-snug">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim convallis molestie gravida fermentum facilisi luctus nam dui. Massa etiam
            lorem fames morbi id morbi in. Est adipiscing at vitae mattis. Iaculis justo ullamcorper risus mi, egestas pharetra cras odio amet. Vitae
            ut diam amet diam. Amet tristique adipiscing tincidunt est mattis fermentum ornare accumsan, massa. Et gravida lorem fames leo. Hendrerit
            phasellus arcu odio sit turpis. Vitae, lacus, vestibulum pellentesque odio id cras. Consectetur vel nunc, feugiat feugiat duis integer
            elit. Sit luctus imperdiet vulputate congue arcu tortor, pharetra. Hendrerit adipiscing accumsan et proin in sit bibendum ac. Aliquet
            feugiat a a arcu molestie nec. Et amet, facilisis vulputate egestas. Egestas in lectus est lacus parturient. Adipiscing eu neque ipsum
            tortor tincidunt urna quam blandit habitasse. Tortor sed purus consectetur in dictumst orci malesuada. Non accumsan dolor neque, praesent
            pharetra, integer ultrices ac. Turpis id cras vitae gravida luctus. Justo scelerisque diam eu urna, nunc, at orci eleifend posuere.
          </Typography>
        </div>
        <div className="mb-4">
          <Title className="uppercase text-[48px] text-black font-oswaldBold my-12">ЗАЛИШИЛИСь ПИТАННЯ?</Title>
          <Typography className="text-2xl tracking-wide leading-snug">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim convallis molestie gravida fermentum facilisi luctus nam dui. Massa etiam
            lorem fames morbi id morbi in. Est adipiscing at vitae mattis. Iaculis justo ullamcorper risus mi, egestas pharetra cras odio amet. Vitae
            ut diam amet diam. Amet tristique adipiscing tincidunt est mattis fermentum ornare accumsan, massa. Et gravida lorem fames leo. Hendrerit
            phasellus arcu odio sit turpis. Vitae, lacus, vestibulum pellentesque odio id cras. Consectetur vel nunc, feugiat feugiat duis integer
            elit. Sit luctus imperdiet vulputate congue arcu tortor, pharetra. Hendrerit adipiscing accumsan et proin in sit bibendum ac. Aliquet
            feugiat a a arcu molestie nec. Et amet, facilisis vulputate egestas. Egestas in lectus est lacus parturient. Adipiscing eu neque ipsum
            tortor tincidunt urna quam blandit habitasse. Tortor sed purus consectetur in dictumst orci malesuada. Non accumsan dolor neque, praesent
            pharetra, integer ultrices ac. Turpis id cras vitae gravida luctus. Justo scelerisque diam eu urna, nunc, at orci eleifend posuere.
          </Typography>
        </div>
      </Container>
    </section>
  );
};
