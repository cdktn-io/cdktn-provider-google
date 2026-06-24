/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_deployment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface CesDeploymentConfig extends cdktn.TerraformMetaArguments {
  /**
  * Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_deployment#app CesDeployment#app}
  */
  readonly app: string;
  /**
  * The resource name of the app version to deploy.
  * Format:
  * projects/{project}/locations/{location}/apps/{app}/versions/{version}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_deployment#app_version CesDeployment#app_version}
  */
  readonly appVersion: string;
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_deployment#deletion_policy CesDeployment#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * Display name of the deployment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_deployment#display_name CesDeployment#display_name}
  */
  readonly displayName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_deployment#id CesDeployment#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_deployment#location CesDeployment#location}
  */
  readonly location: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_deployment#project CesDeployment#project}
  */
  readonly project?: string;
  /**
  * channel_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_deployment#channel_profile CesDeployment#channel_profile}
  */
  readonly channelProfile: CesDeploymentChannelProfile;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_deployment#timeouts CesDeployment#timeouts}
  */
  readonly timeouts?: CesDeploymentTimeouts;
}
export interface CesDeploymentChannelProfilePersonaProperty {
  /**
  * The persona of the channel.
  * Possible values:
  * UNKNOWN
  * CONCISE
  * CHATTY
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_deployment#persona CesDeployment#persona}
  */
  readonly persona?: string;
}

export function cesDeploymentChannelProfilePersonaPropertyToTerraform(struct?: CesDeploymentChannelProfilePersonaPropertyOutputReference | CesDeploymentChannelProfilePersonaProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    persona: cdktn.stringToTerraform(struct!.persona),
  }
}


export function cesDeploymentChannelProfilePersonaPropertyToHclTerraform(struct?: CesDeploymentChannelProfilePersonaPropertyOutputReference | CesDeploymentChannelProfilePersonaProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    persona: {
      value: cdktn.stringToHclTerraform(struct!.persona),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CesDeploymentChannelProfilePersonaPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CesDeploymentChannelProfilePersonaProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._persona !== undefined) {
      hasAnyValues = true;
      internalValueResult.persona = this._persona;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesDeploymentChannelProfilePersonaProperty | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._persona = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._persona = value.persona;
    }
  }

  // persona - computed: false, optional: true, required: false
  private _persona?: string; 
  public get persona() {
    return this.getStringAttribute('persona');
  }
  public set persona(value: string) {
    this._persona = value;
  }
  public resetPersona() {
    this._persona = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get personaInput() {
    return this._persona;
  }
}
export interface CesDeploymentChannelProfileWebWidgetConfigSecuritySettings {
  /**
  * The origins that are allowed to host the web widget. An origin is defined by RFC 6454. If empty, all origins are allowed. A maximum of 100 origins is allowed. Example: "https://example.com"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_deployment#allowed_origins CesDeployment#allowed_origins}
  */
  readonly allowedOrigins?: string[];
  /**
  * Indicates whether origin check for the web widget is enabled. If true, the web widget will check the origin of the website that loads the web widget and only allow it to be loaded in the same origin or any of the allowed origins.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_deployment#enable_origin_check CesDeployment#enable_origin_check}
  */
  readonly enableOriginCheck?: boolean | cdktn.IResolvable;
  /**
  * Indicates whether public access to the web widget is enabled. If true, the web widget will be publicly accessible. If false, the web widget must be integrated with your own authentication and authorization system to return valid credentials for accessing the CES agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_deployment#enable_public_access CesDeployment#enable_public_access}
  */
  readonly enablePublicAccess?: boolean | cdktn.IResolvable;
  /**
  * Indicates whether reCAPTCHA verification for the web widget is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_deployment#enable_recaptcha CesDeployment#enable_recaptcha}
  */
  readonly enableRecaptcha?: boolean | cdktn.IResolvable;
}

export function cesDeploymentChannelProfileWebWidgetConfigSecuritySettingsToTerraform(struct?: CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference | CesDeploymentChannelProfileWebWidgetConfigSecuritySettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    allowed_origins: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.allowedOrigins),
    enable_origin_check: cdktn.booleanToTerraform(struct!.enableOriginCheck),
    enable_public_access: cdktn.booleanToTerraform(struct!.enablePublicAccess),
    enable_recaptcha: cdktn.booleanToTerraform(struct!.enableRecaptcha),
  }
}


export function cesDeploymentChannelProfileWebWidgetConfigSecuritySettingsToHclTerraform(struct?: CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference | CesDeploymentChannelProfileWebWidgetConfigSecuritySettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    allowed_origins: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.allowedOrigins),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    enable_origin_check: {
      value: cdktn.booleanToHclTerraform(struct!.enableOriginCheck),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_public_access: {
      value: cdktn.booleanToHclTerraform(struct!.enablePublicAccess),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_recaptcha: {
      value: cdktn.booleanToHclTerraform(struct!.enableRecaptcha),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CesDeploymentChannelProfileWebWidgetConfigSecuritySettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowedOrigins !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowedOrigins = this._allowedOrigins;
    }
    if (this._enableOriginCheck !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableOriginCheck = this._enableOriginCheck;
    }
    if (this._enablePublicAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.enablePublicAccess = this._enablePublicAccess;
    }
    if (this._enableRecaptcha !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableRecaptcha = this._enableRecaptcha;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesDeploymentChannelProfileWebWidgetConfigSecuritySettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowedOrigins = undefined;
      this._enableOriginCheck = undefined;
      this._enablePublicAccess = undefined;
      this._enableRecaptcha = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowedOrigins = value.allowedOrigins;
      this._enableOriginCheck = value.enableOriginCheck;
      this._enablePublicAccess = value.enablePublicAccess;
      this._enableRecaptcha = value.enableRecaptcha;
    }
  }

  // allowed_origins - computed: false, optional: true, required: false
  private _allowedOrigins?: string[]; 
  public get allowedOrigins() {
    return this.getListAttribute('allowed_origins');
  }
  public set allowedOrigins(value: string[]) {
    this._allowedOrigins = value;
  }
  public resetAllowedOrigins() {
    this._allowedOrigins = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowedOriginsInput() {
    return this._allowedOrigins;
  }

  // enable_origin_check - computed: false, optional: true, required: false
  private _enableOriginCheck?: boolean | cdktn.IResolvable; 
  public get enableOriginCheck() {
    return this.getBooleanAttribute('enable_origin_check');
  }
  public set enableOriginCheck(value: boolean | cdktn.IResolvable) {
    this._enableOriginCheck = value;
  }
  public resetEnableOriginCheck() {
    this._enableOriginCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableOriginCheckInput() {
    return this._enableOriginCheck;
  }

  // enable_public_access - computed: false, optional: true, required: false
  private _enablePublicAccess?: boolean | cdktn.IResolvable; 
  public get enablePublicAccess() {
    return this.getBooleanAttribute('enable_public_access');
  }
  public set enablePublicAccess(value: boolean | cdktn.IResolvable) {
    this._enablePublicAccess = value;
  }
  public resetEnablePublicAccess() {
    this._enablePublicAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePublicAccessInput() {
    return this._enablePublicAccess;
  }

  // enable_recaptcha - computed: false, optional: true, required: false
  private _enableRecaptcha?: boolean | cdktn.IResolvable; 
  public get enableRecaptcha() {
    return this.getBooleanAttribute('enable_recaptcha');
  }
  public set enableRecaptcha(value: boolean | cdktn.IResolvable) {
    this._enableRecaptcha = value;
  }
  public resetEnableRecaptcha() {
    this._enableRecaptcha = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableRecaptchaInput() {
    return this._enableRecaptcha;
  }
}
export interface CesDeploymentChannelProfileWebWidgetConfig {
  /**
  * The modality of the web widget.
  * Possible values:
  * MODALITY_UNSPECIFIED
  * CHAT_AND_VOICE
  * VOICE_ONLY
  * CHAT_ONLY
  * CHAT_VOICE_AND_VIDEO
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_deployment#modality CesDeployment#modality}
  */
  readonly modality?: string;
  /**
  * The theme of the web widget.
  * Possible values:
  * THEME_UNSPECIFIED
  * LIGHT
  * DARK
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_deployment#theme CesDeployment#theme}
  */
  readonly theme?: string;
  /**
  * The title of the web widget.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_deployment#web_widget_title CesDeployment#web_widget_title}
  */
  readonly webWidgetTitle?: string;
  /**
  * security_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_deployment#security_settings CesDeployment#security_settings}
  */
  readonly securitySettings?: CesDeploymentChannelProfileWebWidgetConfigSecuritySettings;
}

export function cesDeploymentChannelProfileWebWidgetConfigToTerraform(struct?: CesDeploymentChannelProfileWebWidgetConfigOutputReference | CesDeploymentChannelProfileWebWidgetConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    modality: cdktn.stringToTerraform(struct!.modality),
    theme: cdktn.stringToTerraform(struct!.theme),
    web_widget_title: cdktn.stringToTerraform(struct!.webWidgetTitle),
    security_settings: cesDeploymentChannelProfileWebWidgetConfigSecuritySettingsToTerraform(struct!.securitySettings),
  }
}


export function cesDeploymentChannelProfileWebWidgetConfigToHclTerraform(struct?: CesDeploymentChannelProfileWebWidgetConfigOutputReference | CesDeploymentChannelProfileWebWidgetConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    modality: {
      value: cdktn.stringToHclTerraform(struct!.modality),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    theme: {
      value: cdktn.stringToHclTerraform(struct!.theme),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    web_widget_title: {
      value: cdktn.stringToHclTerraform(struct!.webWidgetTitle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security_settings: {
      value: cesDeploymentChannelProfileWebWidgetConfigSecuritySettingsToHclTerraform(struct!.securitySettings),
      isBlock: true,
      type: "list",
      storageClassType: "CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CesDeploymentChannelProfileWebWidgetConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CesDeploymentChannelProfileWebWidgetConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._modality !== undefined) {
      hasAnyValues = true;
      internalValueResult.modality = this._modality;
    }
    if (this._theme !== undefined) {
      hasAnyValues = true;
      internalValueResult.theme = this._theme;
    }
    if (this._webWidgetTitle !== undefined) {
      hasAnyValues = true;
      internalValueResult.webWidgetTitle = this._webWidgetTitle;
    }
    if (this._securitySettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.securitySettings = this._securitySettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesDeploymentChannelProfileWebWidgetConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._modality = undefined;
      this._theme = undefined;
      this._webWidgetTitle = undefined;
      this._securitySettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._modality = value.modality;
      this._theme = value.theme;
      this._webWidgetTitle = value.webWidgetTitle;
      this._securitySettings.internalValue = value.securitySettings;
    }
  }

  // modality - computed: false, optional: true, required: false
  private _modality?: string; 
  public get modality() {
    return this.getStringAttribute('modality');
  }
  public set modality(value: string) {
    this._modality = value;
  }
  public resetModality() {
    this._modality = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modalityInput() {
    return this._modality;
  }

  // theme - computed: false, optional: true, required: false
  private _theme?: string; 
  public get theme() {
    return this.getStringAttribute('theme');
  }
  public set theme(value: string) {
    this._theme = value;
  }
  public resetTheme() {
    this._theme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get themeInput() {
    return this._theme;
  }

  // web_widget_title - computed: false, optional: true, required: false
  private _webWidgetTitle?: string; 
  public get webWidgetTitle() {
    return this.getStringAttribute('web_widget_title');
  }
  public set webWidgetTitle(value: string) {
    this._webWidgetTitle = value;
  }
  public resetWebWidgetTitle() {
    this._webWidgetTitle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webWidgetTitleInput() {
    return this._webWidgetTitle;
  }

  // security_settings - computed: false, optional: true, required: false
  private _securitySettings = new CesDeploymentChannelProfileWebWidgetConfigSecuritySettingsOutputReference(this, "security_settings");
  public get securitySettings() {
    return this._securitySettings;
  }
  public putSecuritySettings(value: CesDeploymentChannelProfileWebWidgetConfigSecuritySettings) {
    this._securitySettings.internalValue = value;
  }
  public resetSecuritySettings() {
    this._securitySettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securitySettingsInput() {
    return this._securitySettings.internalValue;
  }
}
export interface CesDeploymentChannelProfile {
  /**
  * The type of the channel profile.
  * Possible values:
  * UNKNOWN
  * WEB_UI
  * API
  * TWILIO
  * GOOGLE_TELEPHONY_PLATFORM
  * CONTACT_CENTER_AS_A_SERVICE
  * FIVE9
  * CONTACT_CENTER_INTEGRATION
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_deployment#channel_type CesDeployment#channel_type}
  */
  readonly channelType?: string;
  /**
  * Whether to disable user barge-in control in the conversation.
  * - **true**: User interruptions are disabled while the agent is speaking.
  * - **false**: The agent retains automatic control over when the user can
  * interrupt.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_deployment#disable_barge_in_control CesDeployment#disable_barge_in_control}
  */
  readonly disableBargeInControl?: boolean | cdktn.IResolvable;
  /**
  * Whether to disable DTMF (dual-tone multi-frequency).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_deployment#disable_dtmf CesDeployment#disable_dtmf}
  */
  readonly disableDtmf?: boolean | cdktn.IResolvable;
  /**
  * The unique identifier of the channel profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_deployment#profile_id CesDeployment#profile_id}
  */
  readonly profileId?: string;
  /**
  * persona_property block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_deployment#persona_property CesDeployment#persona_property}
  */
  readonly personaProperty?: CesDeploymentChannelProfilePersonaProperty;
  /**
  * web_widget_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_deployment#web_widget_config CesDeployment#web_widget_config}
  */
  readonly webWidgetConfig?: CesDeploymentChannelProfileWebWidgetConfig;
}

export function cesDeploymentChannelProfileToTerraform(struct?: CesDeploymentChannelProfileOutputReference | CesDeploymentChannelProfile): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    channel_type: cdktn.stringToTerraform(struct!.channelType),
    disable_barge_in_control: cdktn.booleanToTerraform(struct!.disableBargeInControl),
    disable_dtmf: cdktn.booleanToTerraform(struct!.disableDtmf),
    profile_id: cdktn.stringToTerraform(struct!.profileId),
    persona_property: cesDeploymentChannelProfilePersonaPropertyToTerraform(struct!.personaProperty),
    web_widget_config: cesDeploymentChannelProfileWebWidgetConfigToTerraform(struct!.webWidgetConfig),
  }
}


export function cesDeploymentChannelProfileToHclTerraform(struct?: CesDeploymentChannelProfileOutputReference | CesDeploymentChannelProfile): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    channel_type: {
      value: cdktn.stringToHclTerraform(struct!.channelType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable_barge_in_control: {
      value: cdktn.booleanToHclTerraform(struct!.disableBargeInControl),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    disable_dtmf: {
      value: cdktn.booleanToHclTerraform(struct!.disableDtmf),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    profile_id: {
      value: cdktn.stringToHclTerraform(struct!.profileId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    persona_property: {
      value: cesDeploymentChannelProfilePersonaPropertyToHclTerraform(struct!.personaProperty),
      isBlock: true,
      type: "list",
      storageClassType: "CesDeploymentChannelProfilePersonaPropertyList",
    },
    web_widget_config: {
      value: cesDeploymentChannelProfileWebWidgetConfigToHclTerraform(struct!.webWidgetConfig),
      isBlock: true,
      type: "list",
      storageClassType: "CesDeploymentChannelProfileWebWidgetConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CesDeploymentChannelProfileOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CesDeploymentChannelProfile | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._channelType !== undefined) {
      hasAnyValues = true;
      internalValueResult.channelType = this._channelType;
    }
    if (this._disableBargeInControl !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableBargeInControl = this._disableBargeInControl;
    }
    if (this._disableDtmf !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableDtmf = this._disableDtmf;
    }
    if (this._profileId !== undefined) {
      hasAnyValues = true;
      internalValueResult.profileId = this._profileId;
    }
    if (this._personaProperty?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.personaProperty = this._personaProperty?.internalValue;
    }
    if (this._webWidgetConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.webWidgetConfig = this._webWidgetConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesDeploymentChannelProfile | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._channelType = undefined;
      this._disableBargeInControl = undefined;
      this._disableDtmf = undefined;
      this._profileId = undefined;
      this._personaProperty.internalValue = undefined;
      this._webWidgetConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._channelType = value.channelType;
      this._disableBargeInControl = value.disableBargeInControl;
      this._disableDtmf = value.disableDtmf;
      this._profileId = value.profileId;
      this._personaProperty.internalValue = value.personaProperty;
      this._webWidgetConfig.internalValue = value.webWidgetConfig;
    }
  }

  // channel_type - computed: false, optional: true, required: false
  private _channelType?: string; 
  public get channelType() {
    return this.getStringAttribute('channel_type');
  }
  public set channelType(value: string) {
    this._channelType = value;
  }
  public resetChannelType() {
    this._channelType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelTypeInput() {
    return this._channelType;
  }

  // disable_barge_in_control - computed: false, optional: true, required: false
  private _disableBargeInControl?: boolean | cdktn.IResolvable; 
  public get disableBargeInControl() {
    return this.getBooleanAttribute('disable_barge_in_control');
  }
  public set disableBargeInControl(value: boolean | cdktn.IResolvable) {
    this._disableBargeInControl = value;
  }
  public resetDisableBargeInControl() {
    this._disableBargeInControl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableBargeInControlInput() {
    return this._disableBargeInControl;
  }

  // disable_dtmf - computed: false, optional: true, required: false
  private _disableDtmf?: boolean | cdktn.IResolvable; 
  public get disableDtmf() {
    return this.getBooleanAttribute('disable_dtmf');
  }
  public set disableDtmf(value: boolean | cdktn.IResolvable) {
    this._disableDtmf = value;
  }
  public resetDisableDtmf() {
    this._disableDtmf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableDtmfInput() {
    return this._disableDtmf;
  }

  // profile_id - computed: false, optional: true, required: false
  private _profileId?: string; 
  public get profileId() {
    return this.getStringAttribute('profile_id');
  }
  public set profileId(value: string) {
    this._profileId = value;
  }
  public resetProfileId() {
    this._profileId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get profileIdInput() {
    return this._profileId;
  }

  // persona_property - computed: false, optional: true, required: false
  private _personaProperty = new CesDeploymentChannelProfilePersonaPropertyOutputReference(this, "persona_property");
  public get personaProperty() {
    return this._personaProperty;
  }
  public putPersonaProperty(value: CesDeploymentChannelProfilePersonaProperty) {
    this._personaProperty.internalValue = value;
  }
  public resetPersonaProperty() {
    this._personaProperty.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get personaPropertyInput() {
    return this._personaProperty.internalValue;
  }

  // web_widget_config - computed: false, optional: true, required: false
  private _webWidgetConfig = new CesDeploymentChannelProfileWebWidgetConfigOutputReference(this, "web_widget_config");
  public get webWidgetConfig() {
    return this._webWidgetConfig;
  }
  public putWebWidgetConfig(value: CesDeploymentChannelProfileWebWidgetConfig) {
    this._webWidgetConfig.internalValue = value;
  }
  public resetWebWidgetConfig() {
    this._webWidgetConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webWidgetConfigInput() {
    return this._webWidgetConfig.internalValue;
  }
}
export interface CesDeploymentTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_deployment#create CesDeployment#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_deployment#delete CesDeployment#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_deployment#update CesDeployment#update}
  */
  readonly update?: string;
}

export function cesDeploymentTimeoutsToTerraform(struct?: CesDeploymentTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    create: cdktn.stringToTerraform(struct!.create),
    delete: cdktn.stringToTerraform(struct!.delete),
    update: cdktn.stringToTerraform(struct!.update),
  }
}


export function cesDeploymentTimeoutsToHclTerraform(struct?: CesDeploymentTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    create: {
      value: cdktn.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktn.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktn.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CesDeploymentTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CesDeploymentTimeouts | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesDeploymentTimeouts | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_deployment google_ces_deployment}
*/
export class CesDeployment extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_ces_deployment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a CesDeployment resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CesDeployment to import
  * @param importFromId The id of the existing CesDeployment that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_deployment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CesDeployment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_ces_deployment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_deployment google_ces_deployment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CesDeploymentConfig
  */
  public constructor(scope: Construct, id: string, config: CesDeploymentConfig) {
    super(scope, id, {
      terraformResourceType: 'google_ces_deployment',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '7.38.0',
        providerVersionConstraint: '~> 7.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._app = config.app;
    this._appVersion = config.appVersion;
    this._deletionPolicy = config.deletionPolicy;
    this._displayName = config.displayName;
    this._id = config.id;
    this._location = config.location;
    this._project = config.project;
    this._channelProfile.internalValue = config.channelProfile;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app - computed: false, optional: false, required: true
  private _app?: string; 
  public get app() {
    return this.getStringAttribute('app');
  }
  public set app(value: string) {
    this._app = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appInput() {
    return this._app;
  }

  // app_version - computed: false, optional: false, required: true
  private _appVersion?: string; 
  public get appVersion() {
    return this.getStringAttribute('app_version');
  }
  public set appVersion(value: string) {
    this._appVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appVersionInput() {
    return this._appVersion;
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // deletion_policy - computed: true, optional: true, required: false
  private _deletionPolicy?: string; 
  public get deletionPolicy() {
    return this.getStringAttribute('deletion_policy');
  }
  public set deletionPolicy(value: string) {
    this._deletionPolicy = value;
  }
  public resetDeletionPolicy() {
    this._deletionPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deletionPolicyInput() {
    return this._deletionPolicy;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // etag - computed: true, optional: false, required: false
  public get etag() {
    return this.getStringAttribute('etag');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // location - computed: false, optional: false, required: true
  private _location?: string; 
  public get location() {
    return this.getStringAttribute('location');
  }
  public set location(value: string) {
    this._location = value;
  }
  // Temporarily expose input value. Use with caution.
  public get locationInput() {
    return this._location;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // project - computed: true, optional: true, required: false
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  public resetProject() {
    this._project = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // channel_profile - computed: false, optional: false, required: true
  private _channelProfile = new CesDeploymentChannelProfileOutputReference(this, "channel_profile");
  public get channelProfile() {
    return this._channelProfile;
  }
  public putChannelProfile(value: CesDeploymentChannelProfile) {
    this._channelProfile.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get channelProfileInput() {
    return this._channelProfile.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CesDeploymentTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CesDeploymentTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      app: cdktn.stringToTerraform(this._app),
      app_version: cdktn.stringToTerraform(this._appVersion),
      deletion_policy: cdktn.stringToTerraform(this._deletionPolicy),
      display_name: cdktn.stringToTerraform(this._displayName),
      id: cdktn.stringToTerraform(this._id),
      location: cdktn.stringToTerraform(this._location),
      project: cdktn.stringToTerraform(this._project),
      channel_profile: cesDeploymentChannelProfileToTerraform(this._channelProfile.internalValue),
      timeouts: cesDeploymentTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      app: {
        value: cdktn.stringToHclTerraform(this._app),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      app_version: {
        value: cdktn.stringToHclTerraform(this._appVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deletion_policy: {
        value: cdktn.stringToHclTerraform(this._deletionPolicy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktn.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktn.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      location: {
        value: cdktn.stringToHclTerraform(this._location),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project: {
        value: cdktn.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      channel_profile: {
        value: cesDeploymentChannelProfileToHclTerraform(this._channelProfile.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CesDeploymentChannelProfileList",
      },
      timeouts: {
        value: cesDeploymentTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CesDeploymentTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
