import React, { type ReactElement } from 'react'
import './assets/Home.scss'
import useAxios from '@/libs/http/HTTPAxios'
import { HTTPRenderWrapper } from '@/libs/http/HTTPRenderWrapper'
import { type Statistics } from '@/objects/Statistics'

export function Home (): ReactElement {
  const stats = useAxios({
    method: 'GET',
    url: 'stats',
    isProtected: false
  })

  return (
        <div className={'home-wrapper-global'}>
            <HTTPRenderWrapper state={stats}>
                {(stats: Statistics) => (
                    <section className={'home-wrapper'}>
                        <div className={'card header'}>
                            <h1>Wiki DocZ</h1>
                            <p>Plateforme de gestion documentaire securisé</p>
                        </div>
                        <div className={'card stats-number'}>
                            <h2>Published document(s)</h2>
                            <p>{stats.totalPublishedDocument}</p>
                        </div>
                        <div className={'card stats-number'}>
                            <h2>Task(s)</h2>
                            <p>{stats.totalTodoDocument}</p>
                        </div>
                        <div className={'card stats-number'}>
                            <h2>User(s)</h2>
                            <p>{stats.userCount}</p>
                        </div>
                        <div className={'card description'}>
                            <h2>An awesome description !</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla congue sed dui ut
                                pharetra. Sed eget facilisis sapien, at fringilla magna. Nulla leo turpis, hendrerit sed
                                massa eget, tincidunt mollis lorem. Suspendisse sit amet lacinia sem. Nunc fringilla
                                ante ligula, nec euismod velit finibus eu. Curabitur dolor nibh, pellentesque nec ex
                                quis, pretium ornare diam. Quisque eu iaculis elit, eu venenatis sem. Aenean porta nulla
                                risus, in euismod ipsum varius vel. Pellentesque id laoreet tortor. Curabitur dui nunc,
                                semper sit amet lectus vel, euismod convallis dui. Phasellus blandit volutpat felis.
                                Vestibulum volutpat ante felis, a aliquam neque iaculis in. Fusce vestibulum viverra
                                lectus ac pretium. Aliquam mollis purus justo, tincidunt egestas enim consectetur sit
                                amet. Sed venenatis quam sit amet lectus condimentum, et semper erat vehicula. </p>
                        </div>
                        <div className={'card stats-number'}>
                            <h2>Task(s)</h2>
                            <p>{stats.totalTodoDocument}</p>
                        </div>unw
                        <div className={'card description'}>
                            <h2>An awesome description !</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla congue sed dui ut
                                pharetra. Sed eget facilisis sapien, at fringilla magna. Nulla leo turpis, hendrerit sed
                                massa eget, tincidunt mollis lorem. Suspendisse sit amet lacinia sem. Nunc fringilla
                                ante ligula, nec euismod velit finibus eu. Curabitur dolor nibh, pellentesque nec ex
                                quis, pretium ornare diam. Quisque eu iaculis elit, eu venenatis sem. Aenean porta nulla
                                risus, in euismod ipsum varius vel. Pellentesque id laoreet tortor. Curabitur dui nunc,
                                semper sit amet lectus vel, euismod convallis dui. Phasellus blandit volutpat felis.
                                Vestibulum volutpat ante felis, a aliquam neque iaculis in. Fusce vestibulum viverra
                                lectus ac pretium. Aliquam mollis purus justo, tincidunt egestas enim consectetur sit
                                amet. Sed venenatis quam sit amet lectus condimentum, et semper erat vehicula. </p>
                        </div>
                        <div className={'card stats-number'}>
                            <h2>Task(s)</h2>
                            <p>{stats.totalTodoDocument}</p>
                        </div>
                        <div className={'card stats-number'}>
                            <h2>User(s)</h2>
                            <p>{stats.userCount}</p>
                        </div>
                        <div className={'card stats-number'}>
                            <h2>Task(s)</h2>
                            <p>{stats.totalTodoDocument}</p>
                        </div>
                        <div className={'card stats-number'}>
                            <h2>User(s)</h2>
                            <p>{stats.userCount}</p>
                        </div> <div className={'card stats-number'}>
                        <h2>Task(s)</h2>
                        <p>{stats.totalTodoDocument}</p>
                    </div>
                        <div className={'card stats-number'}>
                            <h2>User(s)</h2>
                            <p>{stats.userCount}</p>
                        </div> <div className={'card stats-number'}>
                        <h2>Task(s)</h2>
                        <p>{stats.totalTodoDocument}</p>
                    </div>
                        <div className={'card stats-number'}>
                            <h2>User(s)</h2>
                            <p>{stats.userCount}</p>
                        </div>
                        <div className={'card description'}>
                            <h2>An awesome description !</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla congue sed dui ut
                                massa eget, tincidunt mollis lorem. Suspendisse sit amet lacinia sem. Nunc fringilla
                                </p>
                        </div>
                    </section>
                )}
            </HTTPRenderWrapper>
        </div>
  )
}
