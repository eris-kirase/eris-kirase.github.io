'use client'
import { CSSProperties, FunctionComponent, useState } from 'react'
import { SubSection } from './section'
import { MyImage } from '@/components/image'
import { ProfileImageList } from './profile_images'
import styles from './profile.module.css'
import cx from '@/tools/cx'
import { imageList } from '@/components/image/images'
import Link from 'next/link'
import { useInView } from 'react-intersection-observer'
import { getFading } from '@/styles/getAnimation'

export const ProfileSection: FunctionComponent = () => {
  return (
    <SubSection title="PROFILE" titleRuby="プロフィール">
      <div className={styles.sectionContainer}>
        <ProfilePictures />
        <ProfileInfo />
      </div>
      <ProfileData />
    </SubSection>
  )
}

const ProfilePictures: FunctionComponent = () => {
  const [target, setTarget] = useState(1)
  const isViewIconList = useInView({
    rootMargin: '-15%',
    triggerOnce: true,
  })
  const isViewPicList = useInView({
    rootMargin: '-20%',
    triggerOnce: true,
  })
  const backgroundStyle: CSSProperties = {
    backgroundImage: `url(${imageList.picFrame.src})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 100%',
    height: 'fit-content',
  }
  return (
    <div ref={isViewIconList.ref} className={styles.pictureContainer} style={backgroundStyle}>
      <ul className={cx(styles.pictureIconList, getFading(isViewIconList.inView, 'fadeInUp'))}>
        {ProfileImageList.map((icon, index) => {
          return (
            <li
              key={index}
              className={styles.pictureIconItem}
              onClick={() => {
                setTarget(icon.id)
              }}
            >
              <figure className={styles.pictureIconBoeder}>
                <MyImage className={styles.pictureIcon} name={icon.iconName} alt={icon.alt} />
              </figure>
            </li>
          )
        })}
      </ul>
      <ul ref={isViewPicList.ref} className={cx(styles.picturesList, getFading(isViewPicList.inView, 'fadeIn'))}>
        {ProfileImageList.map((icon, index) => {
          return (
            <li key={index} className={cx(styles.pictureItem, icon.id === target && styles.isActive)}>
              <MyImage className={styles.picture} name={icon.imageName} alt={icon.alt} />
            </li>
          )
        })}
      </ul>
    </div>
  )
}

const ProfileInfo: FunctionComponent = () => {
  const isViewName = useInView({
    rootMargin: '-20%',
    triggerOnce: true,
  })
  const isViewComment = useInView({
    rootMargin: '-20%',
    triggerOnce: true,
  })
  const isViewMemo = useInView({
    rootMargin: '-20%',
    triggerOnce: true,
  })
  const isViewVideo = useInView({
    rootMargin: '-20%',
    triggerOnce: true,
  })
  const erisComment = `「こんきら～！壊れかけのお人形に生命が宿った！ "奇跡の人形" 綺羅世ヱリスです！人間さんにきょ～みしんしん！仲良くしてね♥」`

  const memo = `人間さんのホットなニュースを人形目線でズバッと切り込む！！見た目からは想像できない鋭い毒舌で時にはリスナーとバトルをすることも！？ぜひ配信に遊びに来てくださいね！`
  return (
    <div className={styles.infoContainer}>
      <h3 ref={isViewName.ref} className={cx(styles.infoName, getFading(isViewName.inView, 'fadeInUp'))}>
        <span className={styles.infoNameSub}>Kirase Eris</span>
        <span className={styles.infoNameMain}>綺羅世ヱリス</span>
      </h3>
      <p ref={isViewComment.ref} className={cx(styles.infoErisComment, getFading(isViewComment.inView, 'fadeInLeft'))}>
        {erisComment}
      </p>
      <p ref={isViewMemo.ref} className={cx(styles.infoMemo, getFading(isViewMemo.inView, 'fadeInLeft'))}>
        {memo}
      </p>
      <div ref={isViewVideo.ref} className={cx(styles.infoImageContainer, getFading(isViewVideo.inView, 'fadeInUp'))}>
        <Link href="https://twitter.com/Ellie_doll__/status/1641034622350811137" target="_blank">
          <MyImage name="lastRun" alt="ラスラン" width={'100%'} className={styles.infoImage} />
        </Link>
      </div>
    </div>
  )
}
type Profile = { title: string; value?: string }
type ProfileList = Array<Profile>
const ProfileData: FunctionComponent = () => {
  const { ref, inView } = useInView({
    rootMargin: '-20%',
    triggerOnce: true,
  })
  const dataList: ProfileList = [
    { title: '誕生日', value: '7月16日' },
    { title: '身長', value: 'ちっちゃい' },
    { title: '体重', value: '薔薇108本分' },
    { title: 'ニックネーム', value: 'ヱちゃん、ヱーちゃん' },
    { title: 'デビュー日', value: '2022年2月9日' },
    { title: '好きなもの', value: 'カシスオレンジ、サラダ軍艦(※諸説あり)' },
    { title: '嫌いなもの', value: 'おかか' },
    { title: 'ファンネーム', value: 'ヱリニスト、異常者' },
    { title: '推しマーク', value: '🌹💫' },
  ]
  return (
    <div className={styles.dataContainer}>
      <h4 ref={ref} className={cx(styles.dataSectionTitle, getFading(inView, 'fadeInLeft'))}>
        DATA
      </h4>
      <ul className={styles.dataList}>
        {dataList.map((data, index) => {
          return <ProfileItem key={index} title={data.title} value={data.value} />
        })}
      </ul>
    </div>
  )
}

const ProfileItem: FunctionComponent<Profile> = (profile) => {
  const { ref, inView } = useInView({
    rootMargin: '-20%',
    triggerOnce: true,
  })
  return (
    <li ref={ref} className={cx(styles.dataItem, 'animate__animated', inView && 'animate__fadeInLeft')}>
      <dl className={styles.profileData}>
        <dt className={styles.dataTitle}>{profile.title}</dt>
        <dd className={styles.dataValue}>{profile.value}</dd>
      </dl>
    </li>
  )
}
