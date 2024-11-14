import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function People() {
    return (
        <div className="p-32 text-black text-lg font-[family-name:var(--font-raleway)]">
            <div className="pb-8">
                <Image
                    src="/images/Currie resized.jpg.jfif"
                    alt="Mark Currie"
                    width="300"
                    height="300"
                    className="mr-6 float-left"
                />
                <div className="text-2xl ">
                    Mark Currie, PhD
                </div>
                <div className="text-lg italic pt-2">
                    Principal Investigator
                </div>

                <p className="mt-1">
                    Cell & Systems Biology, University of Toronto
                </p>

                <div className="mt-4">
                    <h3 className="font-bold">Research Areas</h3>
                    <p className="">
                        Cell Biology, Developmental Biology, Genetics / Genomics, Molecular Biology, Pathology, Proteomics, Structural Biology
                    </p>
                </div>

                <div className="my-4">
                    <h3 className="font-bold">Education</h3>
                    <p className="">
                        B.Sc. (Hons.) Queen’s University
                    </p>
                    <p className="">
                        Ph.D. Queen’s University
                    </p>
                </div>

                <div className="text-justify">
                    Mauris tempus, ligula id suscipit pulvinar, ligula mi vehicula massa, sit amet porta enim diam vel tortor. Donec euismod, augue maximus fringilla lacinia, leo sem sagittis augue, luctus posuere nunc nisi eget est. Sed ornare suscipit enim ut maximus. In eleifend et ante quis hendrerit. Mauris eget mi libero. Morbi semper in quam vitae condimentum. Quisque nisl magna, interdum sed tincidunt vulputate, tempor in purus. Maecenas eros nulla, elementum sit amet nulla ut, dapibus feugiat lacus. Aenean consequat sit amet nunc non luctus. Vestibulum efficitur velit nec purus posuere, at maximus ligula porta. Morbi dictum sagittis leo, nec eleifend erat pharetra vel. Aenean eget malesuada arcu. Pellentesque faucibus, erat vitae faucibus malesuada, diam tellus accumsan ex, sit amet gravida nulla libero id nisi. Aliquam nec mattis orci. Donec semper dolor nec posuere tristique.
                    <br></br><br></br>
                    Phasellus lobortis at urna ut pellentesque. Ut vel luctus sem. Aenean dignissim et massa vitae facilisis. Integer viverra metus et leo rhoncus, ac maximus arcu consequat. Phasellus eu feugiat risus. Suspendisse eu euismod orci. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Donec quis quam sagittis, finibus eros sed, semper sem.
                </div>
            </div>
            <div className="text-3xl text-center py-8">Lab Members</div>
            <div className="w-full flex p-8 items-center">
                <Image
                    src="/images/Elise.jpg"
                    alt="Logo"
                    width="175"
                    height="74"
                    className=""
                />
                <div className="leading-normal pl-4">
                    <div className="text-2xl ">
                        Elise Name
                    </div>
                    <div className="text-lg italic py-2">
                        Graduate Student
                    </div>
                    <div className="text-justify">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id porta libero. Duis ligula lorem, egestas ac ligula vel, auctor fringilla erat. Morbi viverra neque sed nibh cursus volutpat. Nulla maximus laoreet varius. Suspendisse convallis diam ut nibh lobortis vestibulum. Morbi aliquet tempus felis. Vestibulum et velit lectus. In hac habitasse platea dictumst. Nunc ut metus vitae leo fermentum commodo ut vitae dui.
                    </div>
                </div>
            </div>

            <div className="w-full flex p-4 items-center p-8">
                <div className="text-right pr-6">
                    <div className="text-2xl ">
                        Name Lastname
                    </div>
                    <div className="text-lg italic py-2">
                        Undergraduate Student
                    </div>
                    <div className="text-justify">
                        Nunc magna nulla, accumsan nec eros in, consequat semper nisi. Integer volutpat bibendum velit, et sollicitudin libero eleifend non. Donec tempor pharetra quam ut sagittis. Etiam vehicula vel enim varius sollicitudin. Duis accumsan maximus laoreet. Aenean malesuada odio vitae ullamcorper fringilla. Aenean ut nisi vitae diam ullamcorper aliquet. Proin et vehicula ipsum. Morbi tempor, eros non commodo dapibus.
                    </div>
                </div>
                <Image
                    src="/images/JUN_1004 copy.jpg"
                    alt="Logo"
                    width="175"
                    height="74"
                    className=""
                />
            </div>

            <div className="w-full flex p-8 items-center">
                <Image
                    src="/images/JUN_1033 copy.jpg"
                    alt="Logo"
                    width="175"
                    height="74"
                    className=""
                />
                <div className="leading-normal pl-4">
                    <div className="text-2xl ">
                        Name Name
                    </div>
                    <div className="text-lg italic py-2">
                        Graduate Student
                    </div>
                    <div className="text-justify">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id porta libero. Duis ligula lorem, egestas ac ligula vel, auctor fringilla erat. Morbi viverra neque sed nibh cursus volutpat. Nulla maximus laoreet varius. Suspendisse convallis diam ut nibh lobortis vestibulum. Morbi aliquet tempus felis. Vestibulum et velit lectus. In hac habitasse platea dictumst. Nunc ut metus vitae leo fermentum commodo ut vitae dui.
                    </div>
                </div>
            </div>

            <div className="w-full flex p-4 items-center p-8">
                <div className="text-right pr-6">
                    <div className="text-2xl ">
                        Name Lastname
                    </div>
                    <div className="text-lg italic py-2">
                        Undergraduate Student
                    </div>
                    <div className="text-justify">
                        Nunc magna nulla, accumsan nec eros in, consequat semper nisi. Integer volutpat bibendum velit, et sollicitudin libero eleifend non. Donec tempor pharetra quam ut sagittis. Etiam vehicula vel enim varius sollicitudin. Duis accumsan maximus laoreet. Aenean malesuada odio vitae ullamcorper fringilla. Aenean ut nisi vitae diam ullamcorper aliquet. Proin et vehicula ipsum. Morbi tempor, eros non commodo dapibus.
                    </div>
                </div>
                <Image
                    src="/images/JUN_1014 copy[17691].jpg"
                    alt="Logo"
                    width="175"
                    height="74"
                    className=""
                />
            </div>

            <div className="w-full flex p-8 items-center">
                <Image
                    src="/images/JUN_1040 copy.jpg"
                    alt="Logo"
                    width="175"
                    height="74"
                    className=""
                />
                <div className="leading-normal pl-4">
                    <div className="text-2xl ">
                        Name Name
                    </div>
                    <div className="text-lg italic py-2">
                        Graduate Student
                    </div>
                    <div className="text-justify">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id porta libero. Duis ligula lorem, egestas ac ligula vel, auctor fringilla erat. Morbi viverra neque sed nibh cursus volutpat. Nulla maximus laoreet varius. Suspendisse convallis diam ut nibh lobortis vestibulum. Morbi aliquet tempus felis. Vestibulum et velit lectus. In hac habitasse platea dictumst. Nunc ut metus vitae leo fermentum commodo ut vitae dui.
                    </div>
                </div>
            </div>

            <div className="w-full flex p-4 items-center p-8">
                <div className="text-right pr-6">
                    <div className="text-2xl ">
                        Name Lastname
                    </div>
                    <div className="text-lg italic py-2">
                        Undergraduate Student
                    </div>
                    <div className="text-justify">
                        Nunc magna nulla, accumsan nec eros in, consequat semper nisi. Integer volutpat bibendum velit, et sollicitudin libero eleifend non. Donec tempor pharetra quam ut sagittis. Etiam vehicula vel enim varius sollicitudin. Duis accumsan maximus laoreet. Aenean malesuada odio vitae ullamcorper fringilla. Aenean ut nisi vitae diam ullamcorper aliquet. Proin et vehicula ipsum. Morbi tempor, eros non commodo dapibus.
                    </div>
                </div>
                <Image
                    src="/images/JUN_1055 copy.jpg"
                    alt="Logo"
                    width="175"
                    height="74"
                    className=""
                />
            </div>
        </div>
    );
}