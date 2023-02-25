package com.rtncheckversion

import com.facebook.react.bridge.ReactApplicationContext
import com.rtncheckversion.NativeCheckVersionSpec

class CheckVersionModule(context: ReactApplicationContext?): NativeCheckVersionSpec(context) {

    override fun getName(): String {
        return NAME
    }

    override fun getAppVersion(): String {
        val info = currentActivity?.packageName?.let { currentActivity?.packageManager?.getPackageInfoCompat(it) }
        return info?.versionName ?: ""
    }

    companion object {
        const val NAME = "RTNCheckVersion"
    }
}