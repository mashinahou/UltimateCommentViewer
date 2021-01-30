declare module namespace {

    export interface Akashic {
        trustedChildOrigin: string;
    }

    export interface TrackingParams {
        siteId: string;
        pageId: string;
        mode: string;
        programStatus: string;
    }

    export interface Account {
        accountRegistrationPageUrl: string;
        loginPageUrl: string;
        logoutPageUrl: string;
        premiumMemberRegistrationPageUrl: string;
        trackingParams: TrackingParams;
        profileRegistrationPageUrl: string;
        contactsPageUrl: string;
        verifyEmailsPageUrl: string;
        accountSettingPageUrl: string;
        currentPageUrl: string;
    }

    export interface App {
        topPageUrl: string;
    }

    export interface Atsumaru {
        topPageUrl: string;
    }

    export interface Blomaga {
        topPageUrl: string;
    }

    export interface Channel {
        topPageUrl: string;
        forOrganizationAndCompanyPageUrl: string;
    }

    export interface Commons {
        topPageUrl: string;
    }

    export interface Community {
        topPageUrl: string;
    }

    export interface Denfaminicogamer {
        topPageUrl: string;
    }

    export interface Dic {
        topPageUrl: string;
    }

    export interface Help {
        liveHelpPageUrl: string;
        systemRequirementsPageUrl: string;
    }

    export interface Ichiba {
        configBaseUrl: string;
        scriptUrl: string;
        topPageUrl: string;
    }

    export interface Jk {
        topPageUrl: string;
    }

    export interface Mastodon {
        topPageUrl: string;
    }

    export interface News {
        topPageUrl: string;
    }

    export interface Nicoad {
        topPageUrl: string;
        apiBaseUrl: string;
    }

    export interface Niconico {
        topPageUrl: string;
        userPageBaseUrl: string;
    }

    export interface NiconicoQ {
        topPageUrl: string;
    }

    export interface Point {
        topPageUrl: string;
        purchasePageUrl: string;
    }

    export interface Seiga {
        topPageUrl: string;
        seigaPageBaseUrl: string;
        comicPageBaseUrl: string;
    }

    export interface Site2 {
        serviceListPageUrl: string;
        salesAdvertisingPageUrl: string;
        liveAppDownloadPageUrl: string;
    }

    export interface Solid {
        topPageUrl: string;
    }

    export interface Uad {
        topPageUrl: string;
    }

    export interface Video {
        topPageUrl: string;
        myPageUrl: string;
        watchPageBaseUrl: string;
    }

    export interface Faq {
        pageUrl: string;
    }

    export interface Bugreport {
        pageUrl: string;
    }

    export interface RightsControlProgram {
        pageUrl: string;
    }

    export interface LicenseSearch {
        pageUrl: string;
    }

    export interface Info {
        warnForPhishingPageUrl: string;
        nintendoGuidelinePageUrl: string;
    }

    export interface Search {
        suggestionApiUrl: string;
    }

    export interface Nicoex {
        apiBaseUrl: string;
    }

    export interface Akashic2 {
        untrustedFrameUrl: string;
    }

    export interface Superichiba {
        apiBaseUrl: string;
        launchApiBaseUrl: string;
        oroshiuriIchibaBaseUrl: string;
    }

    export interface NAir {
        topPageUrl: string;
    }

    export interface PrizeBox {
        topPageUrl: string;
    }

    export interface Emotion {
        baseUrl: string;
    }

    export interface FamilyService {
        account: Account;
        app: App;
        atsumaru: Atsumaru;
        blomaga: Blomaga;
        channel: Channel;
        commons: Commons;
        community: Community;
        denfaminicogamer: Denfaminicogamer;
        dic: Dic;
        help: Help;
        ichiba: Ichiba;
        jk: Jk;
        mastodon: Mastodon;
        news: News;
        nicoad: Nicoad;
        niconico: Niconico;
        niconicoQ: NiconicoQ;
        point: Point;
        seiga: Seiga;
        site: Site2;
        solid: Solid;
        uad: Uad;
        video: Video;
        faq: Faq;
        bugreport: Bugreport;
        rightsControlProgram: RightsControlProgram;
        licenseSearch: LicenseSearch;
        info: Info;
        search: Search;
        nicoex: Nicoex;
        akashic: Akashic2;
        superichiba: Superichiba;
        nAir: NAir;
        prizeBox: PrizeBox;
        emotion: Emotion;
    }

    export interface Environments {
        runningMode: string;
    }

    export interface Relive {
        apiBaseUrl: string;
        webSocketUrl: string;
        csrfToken: string;
    }

    export interface Information {
        html5PlayerInformationPageUrl: string;
        flashPlayerInstallInformationPageUrl: string;
        maintenanceInformationPageUrl: string;
    }

    export interface Rule {
        agreementPageUrl: string;
        guidelinePageUrl: string;
    }

    export interface Spec {
        watchUsageAndDevicePageUrl: string;
        broadcastUsageDevicePageUrl: string;
        minogashiProgramPageUrl: string;
        cruisePageUrl: string;
    }

    export interface Ad {
        adsApiBaseUrl: string;
    }

    export interface Program {
        liveCount: number;
    }

    export interface Tag {
        revisionCheckIntervalMs: number;
        registerHelpPageUrl: string;
        userRegistrableMax: number;
        textMaxLength: number;
    }

    export interface Coe {
        resourcesBaseUrl: string;
        coeContentBaseUrl: string;
    }

    export interface Timeshift {
        reservationDetailListApiUrl: string;
    }

    export interface NiconicoLiveEncoder {
        downloadPageUrl: string;
    }

    export interface Nair {
        downloadPageUrl: string;
    }

    export interface Broadcast {
        usageHelpPageUrl: string;
        stableBroadcastHelpPageUrl: string;
        niconicoLiveEncoder: NiconicoLiveEncoder;
        nair: Nair;
        broadcasterStreamHelpPageUrl: string;
    }

    export interface Enquete {
        usageHelpPageUrl: string;
    }

    export interface TrialWatch {
        usageHelpPageUrl: string;
    }

    export interface VideoQuote {
        usageHelpPageUrl: string;
    }

    export interface AutoExtend {
        usageHelpPageUrl: string;
    }

    export interface Nicobus {
        publicApiBaseUrl: string;
    }

    export interface WebRtc {
        stunServerUrls: any[];
    }

    export interface Dmc {
        webRtc: WebRtc;
    }

    export interface Gift {
        cantOpenPageCausedAdBlockHelpPageUrl: string;
    }

    export interface CreatorPromotionProgram {
        registrationHelpPageUrl: string;
    }

    export interface Stream {
        lowLatencyHelpPageUrl: string;
    }

    export interface CommentRender {
        liteModeHelpPageUrl: string;
    }

    export interface Performance {
        commentRender: CommentRender;
    }

    export interface Nico {
        webPushNotificationReceiveSettingHelpPageUrl: string;
    }

    export interface Akashic3 {
        switchRenderHelpPageUrl: string;
    }

    export interface Device {
        watchOnPlayStation4HelpPageUrl: string;
        safariCantWatchHelpPageUrl: string;
    }

    export interface Site {
        locale: string;
        serverTime: number;
        frontendVersion: string;
        apiBaseUrl: string;
        staticResourceBaseUrl: string;
        topPageUrl: string;
        programCreatePageUrl: string;
        programEditPageUrl: string;
        programWatchPageUrl: string;
        recentPageUrl: string;
        programArchivePageUrl: string;
        historyPageUrl: string;
        myPageUrl: string;
        rankingPageUrl: string;
        searchPageUrl: string;
        focusPageUrl: string;
        timetablePageUrl: string;
        followedProgramsPageUrl: string;
        frontendId: number;
        familyService: FamilyService;
        environments: Environments;
        relive: Relive;
        information: Information;
        rule: Rule;
        spec: Spec;
        ad: Ad;
        program: Program;
        tag: Tag;
        coe: Coe;
        timeshift: Timeshift;
        broadcast: Broadcast;
        enquete: Enquete;
        trialWatch: TrialWatch;
        videoQuote: VideoQuote;
        autoExtend: AutoExtend;
        nicobus: Nicobus;
        dmc: Dmc;
        frontendPublicApiUrl: string;
        commonResourcesBaseUrl: string;
        gift: Gift;
        creatorPromotionProgram: CreatorPromotionProgram;
        stream: Stream;
        performance: Performance;
        nico: Nico;
        akashic: Akashic3;
        device: Device;
        nicoCommonHeaderResourceBaseUrl: string;
    }

    export interface Superichiba2 {
        deletable: boolean;
        hasBroadcasterRole: boolean;
    }

    export interface User {
        id: string;
        nickname: string;
        birthday: Date;
        isExplicitlyLoginable: boolean;
        isMobileMailAddressRegistered: boolean;
        isMailRegistered: boolean;
        isProfileRegistered: boolean;
        isLoggedIn: boolean;
        accountType: string;
        isOperator: boolean;
        isBroadcaster: boolean;
        premiumOrigin: string;
        permissions: string[];
        nicosid: string;
        superichiba: Superichiba2;
        iconUrl: string;
    }

    export interface Allegation {
        commentAllegationApiUrl: string;
    }

    export interface Thumbnail {
        small: string;
    }

    export interface UrlSet {
        large: string;
        middle: string;
        small: string;
        micro: string;
    }

    export interface Screenshot {
        urlSet: UrlSet;
    }

    export interface NicopediaArticle {
        pageUrl: string;
        exists: boolean;
    }

    export interface Icons {
        uri50x50: string;
        uri150x150: string;
    }

    export interface Supplier {
        name: string;
        pageUrl: string;
        nicopediaArticle: NicopediaArticle;
        programProviderId: string;
        icons: Icons;
        level: number;
        accountType: string;
    }

    export interface Substitute {
    }

    export interface List {
        text: string;
        existsNicopediaArticle: boolean;
        nicopediaArticlePageUrl: string;
        type: string;
        isLocked: boolean;
        isDeletable: boolean;
    }

    export interface Tag2 {
        updateApiUrl: string;
        lockApiUrl: string;
        reportApiUrl: string;
        list: List[];
        isLocked: boolean;
    }

    export interface Links {
        feedbackPageUrl: string;
        contentsTreePageUrl: string;
        programReportPageUrl: string;
    }

    export interface Banner {
        apiUrl: string;
    }

    export interface Player {
        embedUrl: string;
        banner: Banner;
    }

    export interface Zapping {
        listApiUrl: string;
        listUpdateIntervalMs: number;
    }

    export interface Report {
        imageApiUrl: string;
    }

    export interface CueSheet {
        eventsApiUrl: string;
    }

    export interface CueSheetSnapshot {
        commentLocked: boolean;
        audienceCommentLayout: string;
    }

    export interface Nicoad2 {
        totalPoint: number;
        ranking: any[];
    }

    export interface Stream2 {
        maxQuality: string;
    }

    export interface Superichiba3 {
        allowAudienceToAddNeta: boolean;
        canSupplierUse: boolean;
    }

    export interface Statistics {
        watchCount: number;
        commentCount: number;
    }

    export interface Program2 {
        allegation: Allegation;
        nicoliveProgramId: string;
        reliveProgramId: string;
        providerType: string;
        visualProviderType: string;
        title: string;
        thumbnail: Thumbnail;
        screenshot: Screenshot;
        supplier: Supplier;
        openTime: number;
        beginTime: number;
        vposBaseTime: number;
        endTime: number;
        scheduledEndTime: number;
        status: string;
        description: string;
        substitute: Substitute;
        tag: Tag2;
        links: Links;
        player: Player;
        watchPageUrl: string;
        gatePageUrl: string;
        mediaServerType: string;
        isPrivate: boolean;
        isTest: boolean;
        zapping: Zapping;
        report: Report;
        isFollowerOnly: boolean;
        cueSheet: CueSheet;
        cueSheetSnapshot: CueSheetSnapshot;
        nicoad: Nicoad2;
        isGiftEnabled: boolean;
        stream: Stream2;
        superichiba: Superichiba3;
        isChasePlayEnabled: boolean;
        isTimeshiftDownloadEnabled: boolean;
        statistics: Statistics;
        isPremiumAppealBannerEnabled: boolean;
        isRecommendEnabled: boolean;
        isEmotionEnabled: boolean;
    }

    export interface SocialGroup {
        type: string;
        id: string;
        broadcastHistoryPageUrl: string;
        description: string;
        name: string;
        socialGroupPageUrl: string;
        thumbnailImageUrl: string;
        thumbnailSmallImageUrl: string;
        level: number;
        isFollowed: boolean;
        isJoined: boolean;
    }

    export interface Player2 {
        name: string;
        audienceToken: string;
        isJumpDisabled: boolean;
        disablePlayVideoAd: boolean;
        isRestrictedCommentPost: boolean;
        streamAllocationType: string;
    }

    export interface Ad2 {
        isBillboardEnabled: boolean;
        isSiteHeaderBannerEnabled: boolean;
        isProgramInformationEnabled: boolean;
        isFooterEnabled: boolean;
        adsJsUrl: string;
    }

    export interface Billboard {
    }

    export interface Scripts {
        vendor: string;
        nicolib: string;
        broadcasterTool: string;
        ichiba: string;
        operatorTools: string;
        pcWatch: string;
        pcWatchAll: string;
        polyfill: string;
    }

    export interface Stylesheets {
        broadcasterTool: string;
        ichiba: string;
        operatorTools: string;
        pcWatch: string;
        pcWatchAll: string;
    }

    export interface Assets {
        scripts: Scripts;
        stylesheets: Stylesheets;
    }

    export interface NicoEnquete {
        isEnabled: boolean;
    }

    export interface Community2 {
        id: string;
        followPageUrl: string;
        unfollowPageUrl: string;
    }

    export interface CommunityFollower {
        records: any[];
    }

    export interface UserProgramWatch {
        rejectedReasons: any[];
        expireTime?: any;
        canAutoRefresh: boolean;
    }

    export interface UserProgramReservation {
        isReserved: boolean;
    }

    export interface Condition {
        needLogin: boolean;
    }

    export interface ProgramWatch {
        condition: Condition;
    }

    export interface Publication {
        status: string;
        expireTime: number;
    }

    export interface Reservation {
        expireTime: number;
    }

    export interface ProgramTimeshift {
        watchLimit: string;
        publication: Publication;
        reservation: Reservation;
    }

    export interface Condition2 {
        needReservation: boolean;
    }

    export interface ProgramTimeshiftWatch {
        condition: Condition2;
    }

    export interface PremiumAppealBanner {
        premiumRegistrationUrl: string;
    }

    export interface Condition3 {
        isWithinUserTestTime: boolean;
    }

    export interface UserTest {
        condition: Condition3;
    }

    export interface Fmp4 {
        enabled: boolean;
        userTest: UserTest;
    }

    export interface Stream3 {
        fmp4: Fmp4;
    }

    export interface KonomiTag {
        text: string;
        nicopediaArticleId: number;
        nicopediaArticleUrl: string;
    }

    export interface ProgramBroadcaster {
        konomiTags: KonomiTag[];
    }

    export interface ProgramSuperichiba {
        programIsPermittedToRequestSpecificNeta: boolean;
    }

    export interface DataPropsJsonModel {
        akashic: Akashic;
        site: Site;
        user: User;
        program: Program2;
        socialGroup: SocialGroup;
        player: Player2;
        ad: Ad2;
        billboard: Billboard;
        assets: Assets;
        nicoEnquete: NicoEnquete;
        community: Community2;
        communityFollower: CommunityFollower;
        userProgramWatch: UserProgramWatch;
        userProgramReservation: UserProgramReservation;
        programWatch: ProgramWatch;
        programTimeshift: ProgramTimeshift;
        programTimeshiftWatch: ProgramTimeshiftWatch;
        premiumAppealBanner: PremiumAppealBanner;
        stream: Stream3;
        programBroadcaster: ProgramBroadcaster;
        programSuperichiba: ProgramSuperichiba;
    }

}

