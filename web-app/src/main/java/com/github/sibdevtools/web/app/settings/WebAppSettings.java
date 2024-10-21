package com.github.sibdevtools.web.app.settings;

import com.github.sibdevtools.localization.api.dto.LocalizationId;
import com.github.sibdevtools.localization.api.dto.LocalizationSourceId;
import com.github.sibdevtools.localization.mutable.api.source.LocalizationJsonSource;
import com.github.sibdevtools.webapp.api.dto.HealthStatus;
import com.github.sibdevtools.webapp.api.dto.WebApplication;
import jakarta.annotation.Nonnull;
import lombok.Getter;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Component;

import java.util.Set;

/**
 * @author sibmaks
 * @since 0.0.1
 */
@Getter
@Component
@LocalizationJsonSource(
        systemCode = "WEB.APP.SETTINGS",
        path = "classpath:/web/app/settings/content/localizations/eng.json",
        iso3Code = "eng"
)
@LocalizationJsonSource(
        systemCode = "WEB.APP.SETTINGS",
        path = "classpath:/web/app/settings/content/localizations/rus.json",
        iso3Code = "rus"
)
public class WebAppSettings implements WebApplication {
    private static final LocalizationSourceId LOCALIZATION_SOURCE_ID = new LocalizationSourceId("WEB.APP.SETTINGS");

    @Value("${web.app.settings.version}")
    private String version;

    @Nonnull
    @Override
    public String getCode() {
        return "web.app.settings";
    }

    @Nonnull
    @Override
    public String getFrontendUrl() {
        return "/web/app/settings/ui/";
    }

    @Nonnull
    @Override
    public LocalizationId getIconCode() {
        return new LocalizationId(LOCALIZATION_SOURCE_ID, "web.app.settings.icon");
    }

    @Nonnull
    @Override
    public LocalizationId getTitleCode() {
        return new LocalizationId(LOCALIZATION_SOURCE_ID, "web.app.settings.title");
    }

    @Nonnull
    @Override
    public LocalizationId getDescriptionCode() {
        return new LocalizationId(LOCALIZATION_SOURCE_ID, "web.app.settings.description");
    }

    @Nonnull
    @Override
    public Set<String> getTags() {
        return Set.of(
                "settings"
        );
    }

    @Nonnull
    @Override
    public HealthStatus getHealthStatus() {
        return HealthStatus.UP;
    }
}
