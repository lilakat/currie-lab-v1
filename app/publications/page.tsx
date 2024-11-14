import React from "react";
import Link from "next/link";
import Image from "next/image";

export default function Publications() {
    return (<>
        <div className="px-32 py-12 text-black font-[family-name:var(--font-raleway)]">
            <h2  className="text-4xl py-8">Publications</h2>
            <h3 className="h2 font-bold pt-4 text-3xl">2024</h3>
            <div className="t-entry pubmed py-4">
                <h4 className="font-opensans h5 font-normal pb-1">
                    <Link className="text-2xl hover:text-emerald-500" href="https://doi.org/10.1038/s41598-024-70652-8">Mint/X11 PDZ domains from non-bilaterian animals recognize and bind CaV2 calcium channel C-termini in vitro</Link>
                </h4>
                <p className="text-lg">Harracksingh AN, Singh A, Mayorova TD, Bejoy B, Hornbeck J, Elkhatib W, McEdwards G, Gauberg J, Taha A, Islam IM, Erclik T, Currie MA, Noyes M, Senatore A <br />2024, Scientific Reports, 10.1038/s41598-024-70652-8</p>
            </div >


            <div className="t-entry pubmed py-4">
                <h4 className="font-opensans h5 font-normal pb-1">
                    <Link className="text-2xl hover:text-emerald-500" href="https://doi.org/10.1101/2024.02.26.582151">The binding of Mint/X11 PDZ domains to CaV2 calcium channels predates bilaterian animals</Link>
                </h4>
                <p className="text-lg">Harracksingh AN, Singh A, Mayorova T, Bejoy B, Hornbeck J, Elkhatib W, McEdwards G, Gauberg J, Taha ARW, Islam IM, Erclik T, Currie MA, Noyes M, Senatore A <br />2024, Cold Spring Harbor Laboratory - bioRxiv, 10.1101/2024.02.26.582151</p>
            </div >

            <div className="t-entry pubmed py-4">
                <h4 className="font-opensans h5 font-normal pb-1">
                    <Link className="text-2xl hover:text-emerald-500" href="https://doi.org/10.1038/s41467-024-45384-y">Plastid ancestors lacked a complete Entner-Doudoroff pathway, limiting plants to glycolysis and the pentose phosphate pathway</Link>
                </h4>
                <p className="text-lg">Evans SE, Franks AE, Bergman ME, Sethna NS, Currie MA, Phillips MA <br />2024, Nature Communications, 10.1038/s41467-024-45384-y</p>
            </div >

            <div className="t-entry pubmed py-4">
                <h4 className="font-opensans h5 font-normal pb-1">
                    <Link className="text-2xl hover:text-emerald-500" href="https://doi.org/10.1021/acs.jmedchem.3c01850">Tight-Binding Small-Molecule Carboxylesterase 2 Inhibitors Reduce Intracellular Irinotecan Activation</Link>
                </h4>
                <p className="text-lg">Kailass K, Casalena D, Jenane L, McEdwards G, Auld DS, Sadovski O, Kaye EG, Hudson E, Nettleton D, Currie MA, Beharry AA <br />2024, Journal of Medicinal Chemistry, 10.1021/acs.jmedchem.3c01850</p>
            </div >

            <h3 className="h2 font-bold pt-4 text-3xl">2023</h3>

            <div className="t-entry pubmed py-4"><h4 className="font-opensans h5 font-normal pb-1">
                <Link className="text-2xl hover:text-emerald-500" href="https://doi.org/10.1016/B978-0-12-823376-4.00006-9">The BAH domain: A versatile histone modification reader</Link>
            </h4>
                <p className="text-lg">Currie MA, Behrouzi R, Moazed D <br />2023, Chromatin Readers in Health and Disease, 10.1016/B978-0-12-823376-4.00006-9</p>
            </div >

            <div className="t-entry pubmed py-4"><h4 className="font-opensans h5 font-normal pb-1">
                <Link className="text-2xl hover:text-emerald-500" href="https://doi.org/10.1038/s42003-023-05312-0">Function and phylogeny support the independent evolution of an ASIC-like Deg/ENaC channel in the Placozoa</Link>
            </h4>
                <p className="text-lg">Elkhatib W, Yanez-Guerra LA, Mayorova TD, Currie MA, Singh A, Perera M, Gauberg J, Senatore A <br />2023, Communications Biology, 10.1038/s42003-023-05312-0</p>
            </div >

            <h3 className="h2 font-bold pt-4 text-3xl">2022</h3>

            <div className="t-entry pubmed py-4">
                <h4 className="font-opensans h5 font-normal pb-1">
                    <Link className="text-2xl hover:text-emerald-500" href="https://doi.org/10.3389/fcell.2022.1026406">Targets of histone H3 lysine 9 methyltransferases</Link>
                </h4>
                <p className="text-lg">Levinsky AJ, McEdwards G, Sethna N, Currie MA <br />2022, Frontiers in Cell and Developmental Biology, 10.3389/fcell.2022.1026406</p>
            </div >

            <div className="t-entry pubmed py-4">
                <h4 className="font-opensans h5 font-normal pb-1">
                    <Link className="text-2xl hover:text-emerald-500" href="https://doi.org/10.1101/2022.06.28.497943" >Function and phylogeny support the independent evolution of acid-sensing ion channels in the Placozoa</Link>
            </h4>
            <p className="text-lg">Elkhatib W, Yanez-Guerra L, Mayorova TD, Currie MA, Perera M, Singh A, Gauberg J, Senatore A <br />2022, Cold Spring Harbor Laboratory - bioRxiv, 10.1101/2022.06.28.497943</p>
        </div >

        <h3 className="h2 font-bold pt-4 text-3xl">2021</h3>

        <div className="t-entry pubmed py-4">
            <h4 className="font-opensans h5 font-normal pb-1">
                <Link className="text-2xl hover:text-emerald-500" href="https://doi.org/10.1016/j.jbc.2021.100397">Development of a colorimetric α-ketoglutarate detection assay for prolyl hydroxylase domain (PHD) proteins</Link>
            </h4>
            <p className="text-lg">Wong SJ, Ringel AE, Yuan W, Paulo JA, Yoon H, Currie MA, Haigis MC <br />2021, Journal of Biological Chemistry, 10.1016/j.jbc.2021.100397</p>
        </div >


        <h3 className="h2 font-bold pt-4 text-3xl">2018</h3>

        <div className="t-entry pubmed py-4">
            <h4 className="font-opensans h5 font-normal pb-1">
                <Link className="text-2xl hover:text-emerald-500" href="https://doi.org/10.1038/s41586-018-0398-2">Automethylation-induced conformational switch in Clr4 (Suv39h) maintains epigenetic stability</Link>
            </h4>
            <p className="text-lg">Iglesias N, Currie MA, Jih G, Paulo JA, Siuti N, Kalocsay M, Gygi SP, Moazed D <br />2018, Nature, 10.1038/s41586-018-0398-2</p>
        </div >

        <h3 className="h2 font-bold pt-4 text-3xl">2017</h3>

        <div className="t-entry pubmed py-4">
            <h4 className="font-opensans h5 font-normal pb-1">
                <Link className="text-2xl hover:text-emerald-500" href="https://doi.org/10.1261/rna.057943.116">Structural and functional characterization of the TYW3/Taw3 className of SAM-dependent methyltransferases</Link>
            </h4>
            <p className="text-lg">Currie MA, Brown G, Wong A, Ohira T, Sugiyama K, Suzuki T, Yakunin AF, Jia Z <br />2017, RNA, 10.1261/rna.057943.116</p>
        </div >

        <div className="t-entry pubmed py-4"><h4 className="font-opensans h5 font-normal pb-1">
            <Link className="text-2xl hover:text-emerald-500" href="https://doi.org/10.1038/nature23267">Unique roles for histone H3K9me states in RNAi and heritable silencing of transcription</Link>
        </h4>
            <p className="text-lg">Jih G, Iglesias N, Currie MA, Bhanu NV, Paulo JA, Gygi SP, Garcia BA, Moazed D <br />2017, Nature, 10.1038/nature23267</p>
        </div >

        <h3 className="h2 font-bold pt-4 text-3xl">2016</h3>

        <div className="t-entry pubmed py-4"><h4 className="font-opensans h5 font-normal pb-1">
            <Link className="text-2xl hover:text-emerald-500" href="https://doi.org/10.7554/eLife.17556">Heterochromatin assembly by interrupted Sir3 bridges across neighboring nucleosomes</Link>
        </h4>
            <p className="text-lg">Behrouzi R, Lu C, Currie MA, Jih G, Iglesias N, Moazed D <br />2016, eLife, 10.7554/eLife.17556</p>
        </div >

        <h3 className="h2 font-bold pt-4 text-3xl">2013</h3>

        <div className="t-entry pubmed py-4"><h4 className="font-opensans h5 font-normal pb-1">
            <Link className="text-2xl hover:text-emerald-500" href="https://doi.org/10.1074/jbc.M112.408757">Small Angle X-ray Scattering Analysis ofClostridium thermocellumCellulosome N-terminal Complexes Reveals a Highly Dynamic Structure</Link>
        </h4>
            <p className="text-lg">Currie MA, Cameron K, Dias FMV, Spencer HL, Bayer EA, Fontes CMGA, Smith SP, Jia Z <br />2013, Journal of Biological Chemistry, 10.1074/jbc.M112.408757</p>
        </div >

        <div className="t-entry pubmed py-4">
            <h4 className="font-opensans h5 font-normal pb-1">
                <Link className="text-2xl hover:text-emerald-500" href="https://doi.org/10.1073/pnas.1300126110">Heterochromatin protein Sir3 induces contacts between the amino terminus of histone H4 and nucleosomal DNA</Link>
            </h4>
            <p className="text-lg">Wang F, Li G, Altaf M, Lu C, Currie MA, Johnson A, Moazed D <br />2013, Proceedings of the National Academy of Sciences, 10.1073/pnas.1300126110</p>
        </div >

        <div className="t-entry pubmed py-4"><h4 className="font-opensans h5 font-normal pb-1">
            <Link className="text-2xl hover:text-emerald-500" href="https://doi.org/10.1016/j.cellsig.2013.08.033">Structural basis of calcineurin activation by calmodulin</Link>
        </h4>
            <p className="text-lg">Ye Q, Feng Y, Yin Y, Faucher F, Currie MA, Rahman MN, Jin J, Li S, Wei Q, Jia Z <br />2013, Cellular Signalling, 10.1016/j.cellsig.2013.08.033</p>
        </div >

        <h3 className="h2 font-bold pt-4 text-3xl">2012</h3>

        <div className="t-entry pubmed py-4"><h4 className="font-opensans h5 font-normal pb-1">
            <Link className="text-2xl hover:text-emerald-500" href="https://doi.org/10.1074/jbc.M112.343897">Scaffoldin Conformation and Dynamics Revealed by a Ternary Complex from theClostridium thermocellumCellulosome</Link>
        </h4>
            <p className="text-lg">Currie MA, Adams JJ, Faucher F, Bayer EA, Jia Z, Smith SP <br />2012, Journal of Biological Chemistry, 10.1074/jbc.M112.343897</p>
        </div >

        <h3 className="h2 font-bold pt-4 text-3xl">2010</h3>

        <div className="t-entry pubmed py-4"><h4 className="font-opensans h5 font-normal pb-1">
            <Link className="text-2xl hover:text-emerald-500" href="https://doi.org/10.1016/j.jmb.2010.01.015">Insights into Higher-Order Organization of the Cellulosome Revealed by a Dissect-and-Build Approach: Crystal Structure of Interacting Clostridium thermocellum Multimodular Components</Link>
        </h4>
            <p className="text-lg">Adams JJ, Currie MA, Ali S, Bayer EA, Jia Z, Smith SP <br />2010, Journal of Molecular Biology, 10.1016/j.jmb.2010.01.015</p>
        </div >

        <div className="t-entry pubmed py-4"><h4 className="font-opensans h5 font-normal pb-1">
            <Link className="text-2xl hover:text-emerald-500" href="https://doi.org/10.1107/S1744309110001375">Purification and crystallization of a multimodular heterotrimeric complex containing both type I and type II cohesin–dockerin interactions from the cellulosome ofClostridium thermocellum</Link>
        </h4>
            <p className="text-lg">Currie MA, Adams JJ, Ali S, Smith SP, Jia Z <br />2010, Acta Crystallographica Section F Structural Biology and Crystallization Communications, 10.1107/S1744309110001375</p>
        </div >

        <h3 className="h2 font-bold pt-4 text-3xl">2009</h3>

        <div className="t-entry pubmed py-4"><h4 className="font-opensans h5 font-normal pb-1">
            <Link className="text-2xl hover:text-emerald-500" href="https://doi.org/10.1016/S1876-1623(08)76001-2">Preparation and Characterization of Bacterial Protein Complexes for Structural Analysis</Link>
        </h4>
            <p className="text-lg">Matte A, Kozlov G, Trempe J, Currie MA, Burk D, Jia Z, Gehring K, Ekiel I, Berghuis AM, Cygler M <br />2009, , 10.1016/S1876-1623(08)76001-2</p>
        </div >

        <div className="t-entry pubmed py-4"><h4 className="font-opensans h5 font-normal pb-1">
            <Link className="text-2xl hover:text-emerald-500" href="https://doi.org/10.1074/jbc.M109.012401">ADP-dependent 6-Phosphofructokinase fromPyrococcus horikoshiiOT3</Link>
        </h4>
            <p className="text-lg">Currie MA, Merino F, Skarina T, Wong AHY, Singer A, Brown G, Savchenko A, Caniuguir A, Guixé V, Yakunin AF, Jia Z <br />2009, Journal of Biological Chemistry, 10.1074/jbc.M109.012401</p>
        </div >
    </div >
  </>);
}