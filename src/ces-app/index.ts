/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/ces_app
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface CesAppConfig extends cdktn.TerraformMetaArguments {
  /**
  * The ID to use for the app, which will become the final component of
  * the app's resource name. If not provided, a unique ID will be
  * automatically assigned for the app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/ces_app#app_id CesApp#app_id}
  */
  readonly appId: string;
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/ces_app#deletion_policy CesApp#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * Human-readable description of the app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/ces_app#description CesApp#description}
  */
  readonly description?: string;
  /**
  * Display name of the app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/ces_app#display_name CesApp#display_name}
  */
  readonly displayName: string;
  /**
  * Instructions for all the agents in the app.
  * You can use this instruction to set up a stable identity or personality
  * across all the agents.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/ces_app#global_instruction CesApp#global_instruction}
  */
  readonly globalInstruction?: string;
  /**
  * List of guardrails for the app.
  * Format:
  * 'projects/{project}/locations/{location}/apps/{app}/guardrails/{guardrail}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/ces_app#guardrails CesApp#guardrails}
  */
  readonly guardrails?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/ces_app#id CesApp#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/ces_app#location CesApp#location}
  */
  readonly location: string;
  /**
  * Metadata about the app. This field can be used to store additional
  * information relevant to the app's details or intended usages.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/ces_app#metadata CesApp#metadata}
  */
  readonly metadata?: { [key: string]: string };
  /**
  * Whether the app is pinned in the app list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/ces_app#pinned CesApp#pinned}
  */
  readonly pinned?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/ces_app#project CesApp#project}
  */
  readonly project?: string;
  /**
  * The root agent is the entry point of the app.
  * Format: 'projects/{project}/locations/{location}/apps/{app}/agents/{agent}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/ces_app#root_agent CesApp#root_agent}
  */
  readonly rootAgent?: string;
  /**
  * The tool execution mode for the app.
  * See the [API reference](https://docs.cloud.google.com/customer-engagement-ai/conversational-agents/ps/reference/rpc/google.cloud.ces.v1#google.cloud.ces.v1.App.ToolExecutionMode) for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/ces_app#tool_execution_mode CesApp#tool_execution_mode}
  */
  readonly toolExecutionMode?: string;
  /**
  * audio_processing_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/ces_app#audio_processing_config CesApp#audio_processing_config}
  */
  readonly audioProcessingConfig?: CesAppAudioProcessingConfig;
  /**
  * client_certificate_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/ces_app#client_certificate_settings CesApp#client_certificate_settings}
  */
  readonly clientCertificateSettings?: CesAppClientCertificateSettings;
  /**
  * data_store_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/ces_app#data_store_settings CesApp#data_store_settings}
  */
  readonly dataStoreSettings?: CesAppDataStoreSettings;
  /**
  * default_channel_profile block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/ces_app#default_channel_profile CesApp#default_channel_profile}
  */
  readonly defaultChannelProfile?: CesAppDefaultChannelProfile;
  /**
  * evaluation_metrics_thresholds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/ces_app#evaluation_metrics_thresholds CesApp#evaluation_metrics_thresholds}
  */
  readonly evaluationMetricsThresholds?: CesAppEvaluationMetricsThresholds;
  /**
  * language_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/ces_app#language_settings CesApp#language_settings}
  */
  readonly languageSettings?: CesAppLanguageSettings;
  /**
  * logging_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/ces_app#logging_settings CesApp#logging_settings}
  */
  readonly loggingSettings?: CesAppLoggingSettings;
  /**
  * model_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/ces_app#model_settings CesApp#model_settings}
  */
  readonly modelSettings?: CesAppModelSettings;
  /**
  * time_zone_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/ces_app#time_zone_settings CesApp#time_zone_settings}
  */
  readonly timeZoneSettings?: CesAppTimeZoneSettings;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/ces_app#timeouts CesApp#timeouts}
  */
  readonly timeouts?: CesAppTimeouts;
  /**
  * variable_declarations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/ces_app#variable_declarations CesApp#variable_declarations}
  */
  readonly variableDeclarations?: CesAppVariableDeclarations[] | cdktn.IResolvable;
}
export interface CesAppAudioProcessingConfigAmbientSoundConfig {
  /**
  * Ambient noise as a mono-channel, 16kHz WAV file stored in [Cloud
  * Storage](https://cloud.google.com/storage).
  * Note: Please make sure the CES service agent
  * 'service-@gcp-sa-ces.iam.gserviceaccount.com' has
  * 'storage.objects.get' permission to the Cloud Storage object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/ces_app#gcs_uri CesApp#gcs_uri}
  */
  readonly gcsUri?: string;
  /**
  * Name of the prebuilt ambient sound.
  * Valid values are: - "coffee_shop" - "keyboard" - "keypad" - "hum"
  * -"office_1" - "office_2" - "office_3"
  * -"room_1" - "room_2" - "room_3"
  * -"room_4" - "room_5" - "air_conditioner"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/ces_app#prebuilt_ambient_sound CesApp#prebuilt_ambient_sound}
  */
  readonly prebuiltAmbientSound?: string;
  /**
  * Volume gain (in dB) of the normal native volume supported by
  * ambient noise, in the range [-96.0, 16.0]. If unset, or set to a value of
  * 0.0 (dB), will play at normal native signal amplitude. A value of -6.0 (dB)
  * will play at approximately half the amplitude of the normal native signal
  * amplitude. A value of +6.0 (dB) will play at approximately twice the
  * amplitude of the normal native signal amplitude. We strongly recommend not
  * to exceed +10 (dB) as there's usually no effective increase in loudness for
  * any value greater than that.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/ces_app#volume_gain_db CesApp#volume_gain_db}
  */
  readonly volumeGainDb?: number;
}

export function cesAppAudioProcessingConfigAmbientSoundConfigToTerraform(struct?: CesAppAudioProcessingConfigAmbientSoundConfigOutputReference | CesAppAudioProcessingConfigAmbientSoundConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gcs_uri: cdktn.stringToTerraform(struct!.gcsUri),
    prebuilt_ambient_sound: cdktn.stringToTerraform(struct!.prebuiltAmbientSound),
    volume_gain_db: cdktn.numberToTerraform(struct!.volumeGainDb),
  }
}


export function cesAppAudioProcessingConfigAmbientSoundConfigToHclTerraform(struct?: CesAppAudioProcessingConfigAmbientSoundConfigOutputReference | CesAppAudioProcessingConfigAmbientSoundConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gcs_uri: {
      value: cdktn.stringToHclTerraform(struct!.gcsUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    prebuilt_ambient_sound: {
      value: cdktn.stringToHclTerraform(struct!.prebuiltAmbientSound),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    volume_gain_db: {
      value: cdktn.numberToHclTerraform(struct!.volumeGainDb),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CesAppAudioProcessingConfigAmbientSoundConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CesAppAudioProcessingConfigAmbientSoundConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gcsUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcsUri = this._gcsUri;
    }
    if (this._prebuiltAmbientSound !== undefined) {
      hasAnyValues = true;
      internalValueResult.prebuiltAmbientSound = this._prebuiltAmbientSound;
    }
    if (this._volumeGainDb !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeGainDb = this._volumeGainDb;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesAppAudioProcessingConfigAmbientSoundConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._gcsUri = undefined;
      this._prebuiltAmbientSound = undefined;
      this._volumeGainDb = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._gcsUri = value.gcsUri;
      this._prebuiltAmbientSound = value.prebuiltAmbientSound;
      this._volumeGainDb = value.volumeGainDb;
    }
  }

  // gcs_uri - computed: false, optional: true, required: false
  private _gcsUri?: string; 
  public get gcsUri() {
    return this.getStringAttribute('gcs_uri');
  }
  public set gcsUri(value: string) {
    this._gcsUri = value;
  }
  public resetGcsUri() {
    this._gcsUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcsUriInput() {
    return this._gcsUri;
  }

  // prebuilt_ambient_sound - computed: false, optional: true, required: false
  private _prebuiltAmbientSound?: string; 
  public get prebuiltAmbientSound() {
    return this.getStringAttribute('prebuilt_ambient_sound');
  }
  public set prebuiltAmbientSound(value: string) {
    this._prebuiltAmbientSound = value;
  }
  public resetPrebuiltAmbientSound() {
    this._prebuiltAmbientSound = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prebuiltAmbientSoundInput() {
    return this._prebuiltAmbientSound;
  }

  // volume_gain_db - computed: false, optional: true, required: false
  private _volumeGainDb?: number; 
  public get volumeGainDb() {
    return this.getNumberAttribute('volume_gain_db');
  }
  public set volumeGainDb(value: number) {
    this._volumeGainDb = value;
  }
  public resetVolumeGainDb() {
    this._volumeGainDb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeGainDbInput() {
    return this._volumeGainDb;
  }
}
export interface CesAppAudioProcessingConfigBargeInConfig {
  /**
  * If enabled, the agent will adapt its next response based on the assumption
  * that the user hasn't heard the full preceding agent message.
  * This should not be used in scenarios where agent responses are displayed
  * visually.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/ces_app#barge_in_awareness CesApp#barge_in_awareness}
  */
  readonly bargeInAwareness?: boolean | cdktn.IResolvable;
}

export function cesAppAudioProcessingConfigBargeInConfigToTerraform(struct?: CesAppAudioProcessingConfigBargeInConfigOutputReference | CesAppAudioProcessingConfigBargeInConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    barge_in_awareness: cdktn.booleanToTerraform(struct!.bargeInAwareness),
  }
}


export function cesAppAudioProcessingConfigBargeInConfigToHclTerraform(struct?: CesAppAudioProcessingConfigBargeInConfigOutputReference | CesAppAudioProcessingConfigBargeInConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    barge_in_awareness: {
      value: cdktn.booleanToHclTerraform(struct!.bargeInAwareness),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CesAppAudioProcessingConfigBargeInConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CesAppAudioProcessingConfigBargeInConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bargeInAwareness !== undefined) {
      hasAnyValues = true;
      internalValueResult.bargeInAwareness = this._bargeInAwareness;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesAppAudioProcessingConfigBargeInConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bargeInAwareness = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bargeInAwareness = value.bargeInAwareness;
    }
  }

  // barge_in_awareness - computed: false, optional: true, required: false
  private _bargeInAwareness?: boolean | cdktn.IResolvable; 
  public get bargeInAwareness() {
    return this.getBooleanAttribute('barge_in_awareness');
  }
  public set bargeInAwareness(value: boolean | cdktn.IResolvable) {
    this._bargeInAwareness = value;
  }
  public resetBargeInAwareness() {
    this._bargeInAwareness = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bargeInAwarenessInput() {
    return this._bargeInAwareness;
  }
}
export interface CesAppAudioProcessingConfigSynthesizeSpeechConfigs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/ces_app#language_code CesApp#language_code}
  */
  readonly languageCode: string;
  /**
  * The speaking rate/speed in the range [0.25, 2.0]. 1.0 is the normal native
  * speed supported by the specific voice. 2.0 is twice as fast, and 0.5 is
  * half as fast. Values outside of the range [0.25, 2.0] will return an error.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/ces_app#speaking_rate CesApp#speaking_rate}
  */
  readonly speakingRate?: number;
  /**
  * The name of the voice. If not set, the service will choose a
  * voice based on the other parameters such as language_code.
  * For the list of available voices, please refer to Supported voices and
  * languages from Cloud Text-to-Speech.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/ces_app#voice CesApp#voice}
  */
  readonly voice?: string;
}

export function cesAppAudioProcessingConfigSynthesizeSpeechConfigsToTerraform(struct?: CesAppAudioProcessingConfigSynthesizeSpeechConfigs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    language_code: cdktn.stringToTerraform(struct!.languageCode),
    speaking_rate: cdktn.numberToTerraform(struct!.speakingRate),
    voice: cdktn.stringToTerraform(struct!.voice),
  }
}


export function cesAppAudioProcessingConfigSynthesizeSpeechConfigsToHclTerraform(struct?: CesAppAudioProcessingConfigSynthesizeSpeechConfigs | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    language_code: {
      value: cdktn.stringToHclTerraform(struct!.languageCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    speaking_rate: {
      value: cdktn.numberToHclTerraform(struct!.speakingRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    voice: {
      value: cdktn.stringToHclTerraform(struct!.voice),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CesAppAudioProcessingConfigSynthesizeSpeechConfigs | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._languageCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.languageCode = this._languageCode;
    }
    if (this._speakingRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.speakingRate = this._speakingRate;
    }
    if (this._voice !== undefined) {
      hasAnyValues = true;
      internalValueResult.voice = this._voice;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesAppAudioProcessingConfigSynthesizeSpeechConfigs | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._languageCode = undefined;
      this._speakingRate = undefined;
      this._voice = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._languageCode = value.languageCode;
      this._speakingRate = value.speakingRate;
      this._voice = value.voice;
    }
  }

  // language_code - computed: false, optional: false, required: true
  private _languageCode?: string; 
  public get languageCode() {
    return this.getStringAttribute('language_code');
  }
  public set languageCode(value: string) {
    this._languageCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get languageCodeInput() {
    return this._languageCode;
  }

  // speaking_rate - computed: false, optional: true, required: false
  private _speakingRate?: number; 
  public get speakingRate() {
    return this.getNumberAttribute('speaking_rate');
  }
  public set speakingRate(value: number) {
    this._speakingRate = value;
  }
  public resetSpeakingRate() {
    this._speakingRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get speakingRateInput() {
    return this._speakingRate;
  }

  // voice - computed: false, optional: true, required: false
  private _voice?: string; 
  public get voice() {
    return this.getStringAttribute('voice');
  }
  public set voice(value: string) {
    this._voice = value;
  }
  public resetVoice() {
    this._voice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get voiceInput() {
    return this._voice;
  }
}

export class CesAppAudioProcessingConfigSynthesizeSpeechConfigsList extends cdktn.ComplexList {
  public internalValue? : CesAppAudioProcessingConfigSynthesizeSpeechConfigs[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference {
    return new CesAppAudioProcessingConfigSynthesizeSpeechConfigsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CesAppAudioProcessingConfig {
  /**
  * The duration of user inactivity (no speech or interaction) before the agent
  * prompts the user for reengagement. If not set, the agent will not prompt
  * the user for reengagement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/ces_app#inactivity_timeout CesApp#inactivity_timeout}
  */
  readonly inactivityTimeout?: string;
  /**
  * ambient_sound_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/ces_app#ambient_sound_config CesApp#ambient_sound_config}
  */
  readonly ambientSoundConfig?: CesAppAudioProcessingConfigAmbientSoundConfig;
  /**
  * barge_in_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/ces_app#barge_in_config CesApp#barge_in_config}
  */
  readonly bargeInConfig?: CesAppAudioProcessingConfigBargeInConfig;
  /**
  * synthesize_speech_configs block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/ces_app#synthesize_speech_configs CesApp#synthesize_speech_configs}
  */
  readonly synthesizeSpeechConfigs?: CesAppAudioProcessingConfigSynthesizeSpeechConfigs[] | cdktn.IResolvable;
}

export function cesAppAudioProcessingConfigToTerraform(struct?: CesAppAudioProcessingConfigOutputReference | CesAppAudioProcessingConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inactivity_timeout: cdktn.stringToTerraform(struct!.inactivityTimeout),
    ambient_sound_config: cesAppAudioProcessingConfigAmbientSoundConfigToTerraform(struct!.ambientSoundConfig),
    barge_in_config: cesAppAudioProcessingConfigBargeInConfigToTerraform(struct!.bargeInConfig),
    synthesize_speech_configs: cdktn.listMapper(cesAppAudioProcessingConfigSynthesizeSpeechConfigsToTerraform, true)(struct!.synthesizeSpeechConfigs),
  }
}


export function cesAppAudioProcessingConfigToHclTerraform(struct?: CesAppAudioProcessingConfigOutputReference | CesAppAudioProcessingConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    inactivity_timeout: {
      value: cdktn.stringToHclTerraform(struct!.inactivityTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ambient_sound_config: {
      value: cesAppAudioProcessingConfigAmbientSoundConfigToHclTerraform(struct!.ambientSoundConfig),
      isBlock: true,
      type: "list",
      storageClassType: "CesAppAudioProcessingConfigAmbientSoundConfigList",
    },
    barge_in_config: {
      value: cesAppAudioProcessingConfigBargeInConfigToHclTerraform(struct!.bargeInConfig),
      isBlock: true,
      type: "list",
      storageClassType: "CesAppAudioProcessingConfigBargeInConfigList",
    },
    synthesize_speech_configs: {
      value: cdktn.listMapperHcl(cesAppAudioProcessingConfigSynthesizeSpeechConfigsToHclTerraform, true)(struct!.synthesizeSpeechConfigs),
      isBlock: true,
      type: "set",
      storageClassType: "CesAppAudioProcessingConfigSynthesizeSpeechConfigsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CesAppAudioProcessingConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CesAppAudioProcessingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inactivityTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.inactivityTimeout = this._inactivityTimeout;
    }
    if (this._ambientSoundConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ambientSoundConfig = this._ambientSoundConfig?.internalValue;
    }
    if (this._bargeInConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bargeInConfig = this._bargeInConfig?.internalValue;
    }
    if (this._synthesizeSpeechConfigs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.synthesizeSpeechConfigs = this._synthesizeSpeechConfigs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesAppAudioProcessingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._inactivityTimeout = undefined;
      this._ambientSoundConfig.internalValue = undefined;
      this._bargeInConfig.internalValue = undefined;
      this._synthesizeSpeechConfigs.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._inactivityTimeout = value.inactivityTimeout;
      this._ambientSoundConfig.internalValue = value.ambientSoundConfig;
      this._bargeInConfig.internalValue = value.bargeInConfig;
      this._synthesizeSpeechConfigs.internalValue = value.synthesizeSpeechConfigs;
    }
  }

  // inactivity_timeout - computed: false, optional: true, required: false
  private _inactivityTimeout?: string; 
  public get inactivityTimeout() {
    return this.getStringAttribute('inactivity_timeout');
  }
  public set inactivityTimeout(value: string) {
    this._inactivityTimeout = value;
  }
  public resetInactivityTimeout() {
    this._inactivityTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inactivityTimeoutInput() {
    return this._inactivityTimeout;
  }

  // ambient_sound_config - computed: false, optional: true, required: false
  private _ambientSoundConfig = new CesAppAudioProcessingConfigAmbientSoundConfigOutputReference(this, "ambient_sound_config");
  public get ambientSoundConfig() {
    return this._ambientSoundConfig;
  }
  public putAmbientSoundConfig(value: CesAppAudioProcessingConfigAmbientSoundConfig) {
    this._ambientSoundConfig.internalValue = value;
  }
  public resetAmbientSoundConfig() {
    this._ambientSoundConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ambientSoundConfigInput() {
    return this._ambientSoundConfig.internalValue;
  }

  // barge_in_config - computed: false, optional: true, required: false
  private _bargeInConfig = new CesAppAudioProcessingConfigBargeInConfigOutputReference(this, "barge_in_config");
  public get bargeInConfig() {
    return this._bargeInConfig;
  }
  public putBargeInConfig(value: CesAppAudioProcessingConfigBargeInConfig) {
    this._bargeInConfig.internalValue = value;
  }
  public resetBargeInConfig() {
    this._bargeInConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bargeInConfigInput() {
    return this._bargeInConfig.internalValue;
  }

  // synthesize_speech_configs - computed: false, optional: true, required: false
  private _synthesizeSpeechConfigs = new CesAppAudioProcessingConfigSynthesizeSpeechConfigsList(this, "synthesize_speech_configs", true);
  public get synthesizeSpeechConfigs() {
    return this._synthesizeSpeechConfigs;
  }
  public putSynthesizeSpeechConfigs(value: CesAppAudioProcessingConfigSynthesizeSpeechConfigs[] | cdktn.IResolvable) {
    this._synthesizeSpeechConfigs.internalValue = value;
  }
  public resetSynthesizeSpeechConfigs() {
    this._synthesizeSpeechConfigs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synthesizeSpeechConfigsInput() {
    return this._synthesizeSpeechConfigs.internalValue;
  }
}
export interface CesAppClientCertificateSettings {
  /**
  * The passphrase to decrypt the private key.
  * Should be left unset if the private key is not encrypted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/ces_app#passphrase CesApp#passphrase}
  */
  readonly passphrase?: string;
  /**
  * The name of the SecretManager secret version resource
  * storing the private key encoded in PEM format.
  * Format: projects/{project}/secrets/{secret}/versions/{version}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/ces_app#private_key CesApp#private_key}
  */
  readonly privateKey: string;
  /**
  * The TLS certificate encoded in PEM format.
  * This string must include the begin header and end footer lines.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/ces_app#tls_certificate CesApp#tls_certificate}
  */
  readonly tlsCertificate: string;
}

export function cesAppClientCertificateSettingsToTerraform(struct?: CesAppClientCertificateSettingsOutputReference | CesAppClientCertificateSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    passphrase: cdktn.stringToTerraform(struct!.passphrase),
    private_key: cdktn.stringToTerraform(struct!.privateKey),
    tls_certificate: cdktn.stringToTerraform(struct!.tlsCertificate),
  }
}


export function cesAppClientCertificateSettingsToHclTerraform(struct?: CesAppClientCertificateSettingsOutputReference | CesAppClientCertificateSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    passphrase: {
      value: cdktn.stringToHclTerraform(struct!.passphrase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    private_key: {
      value: cdktn.stringToHclTerraform(struct!.privateKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_certificate: {
      value: cdktn.stringToHclTerraform(struct!.tlsCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CesAppClientCertificateSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CesAppClientCertificateSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._passphrase !== undefined) {
      hasAnyValues = true;
      internalValueResult.passphrase = this._passphrase;
    }
    if (this._privateKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.privateKey = this._privateKey;
    }
    if (this._tlsCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsCertificate = this._tlsCertificate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesAppClientCertificateSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._passphrase = undefined;
      this._privateKey = undefined;
      this._tlsCertificate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._passphrase = value.passphrase;
      this._privateKey = value.privateKey;
      this._tlsCertificate = value.tlsCertificate;
    }
  }

  // passphrase - computed: false, optional: true, required: false
  private _passphrase?: string; 
  public get passphrase() {
    return this.getStringAttribute('passphrase');
  }
  public set passphrase(value: string) {
    this._passphrase = value;
  }
  public resetPassphrase() {
    this._passphrase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passphraseInput() {
    return this._passphrase;
  }

  // private_key - computed: false, optional: false, required: true
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }

  // tls_certificate - computed: false, optional: false, required: true
  private _tlsCertificate?: string; 
  public get tlsCertificate() {
    return this.getStringAttribute('tls_certificate');
  }
  public set tlsCertificate(value: string) {
    this._tlsCertificate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsCertificateInput() {
    return this._tlsCertificate;
  }
}
export interface CesAppDataStoreSettingsEngines {
}

export function cesAppDataStoreSettingsEnginesToTerraform(struct?: CesAppDataStoreSettingsEngines): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cesAppDataStoreSettingsEnginesToHclTerraform(struct?: CesAppDataStoreSettingsEngines): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CesAppDataStoreSettingsEnginesOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CesAppDataStoreSettingsEngines | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesAppDataStoreSettingsEngines | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class CesAppDataStoreSettingsEnginesList extends cdktn.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CesAppDataStoreSettingsEnginesOutputReference {
    return new CesAppDataStoreSettingsEnginesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CesAppDataStoreSettings {
}

export function cesAppDataStoreSettingsToTerraform(struct?: CesAppDataStoreSettingsOutputReference | CesAppDataStoreSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function cesAppDataStoreSettingsToHclTerraform(struct?: CesAppDataStoreSettingsOutputReference | CesAppDataStoreSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class CesAppDataStoreSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CesAppDataStoreSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesAppDataStoreSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // engines - computed: true, optional: false, required: false
  private _engines = new CesAppDataStoreSettingsEnginesList(this, "engines", false);
  public get engines() {
    return this._engines;
  }
}
export interface CesAppDefaultChannelProfilePersonaProperty {
  /**
  * The persona of the channel.
  * Possible values:
  * UNKNOWN
  * CONCISE
  * CHATTY
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/ces_app#persona CesApp#persona}
  */
  readonly persona?: string;
}

export function cesAppDefaultChannelProfilePersonaPropertyToTerraform(struct?: CesAppDefaultChannelProfilePersonaPropertyOutputReference | CesAppDefaultChannelProfilePersonaProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    persona: cdktn.stringToTerraform(struct!.persona),
  }
}


export function cesAppDefaultChannelProfilePersonaPropertyToHclTerraform(struct?: CesAppDefaultChannelProfilePersonaPropertyOutputReference | CesAppDefaultChannelProfilePersonaProperty): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class CesAppDefaultChannelProfilePersonaPropertyOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CesAppDefaultChannelProfilePersonaProperty | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._persona !== undefined) {
      hasAnyValues = true;
      internalValueResult.persona = this._persona;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesAppDefaultChannelProfilePersonaProperty | undefined) {
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
export interface CesAppDefaultChannelProfileWebWidgetConfig {
  /**
  * The modality of the web widget.
  * Possible values:
  * UNKNOWN_MODALITY
  * CHAT_AND_VOICE
  * VOICE_ONLY
  * CHAT_ONLY
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/ces_app#modality CesApp#modality}
  */
  readonly modality?: string;
  /**
  * The theme of the web widget.
  * Possible values:
  * UNKNOWN_THEME
  * LIGHT
  * DARK
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/ces_app#theme CesApp#theme}
  */
  readonly theme?: string;
  /**
  * The title of the web widget.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/ces_app#web_widget_title CesApp#web_widget_title}
  */
  readonly webWidgetTitle?: string;
}

export function cesAppDefaultChannelProfileWebWidgetConfigToTerraform(struct?: CesAppDefaultChannelProfileWebWidgetConfigOutputReference | CesAppDefaultChannelProfileWebWidgetConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    modality: cdktn.stringToTerraform(struct!.modality),
    theme: cdktn.stringToTerraform(struct!.theme),
    web_widget_title: cdktn.stringToTerraform(struct!.webWidgetTitle),
  }
}


export function cesAppDefaultChannelProfileWebWidgetConfigToHclTerraform(struct?: CesAppDefaultChannelProfileWebWidgetConfigOutputReference | CesAppDefaultChannelProfileWebWidgetConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CesAppDefaultChannelProfileWebWidgetConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CesAppDefaultChannelProfileWebWidgetConfig | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesAppDefaultChannelProfileWebWidgetConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._modality = undefined;
      this._theme = undefined;
      this._webWidgetTitle = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._modality = value.modality;
      this._theme = value.theme;
      this._webWidgetTitle = value.webWidgetTitle;
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
}
export interface CesAppDefaultChannelProfile {
  /**
  * The type of the channel profile.
  * Possible values:
  * UNKNOWN
  * WEB_UI
  * API
  * TWILIO
  * GOOGLE_TELEPHONY_PLATFORM
  * CONTACT_CENTER_AS_A_SERVICE
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/ces_app#channel_type CesApp#channel_type}
  */
  readonly channelType?: string;
  /**
  * Whether to disable user barge-in in the conversation.
  * - true: User interruptions are disabled while the agent is speaking.
  * - false: The agent retains automatic control over when the user can interrupt.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/ces_app#disable_barge_in_control CesApp#disable_barge_in_control}
  */
  readonly disableBargeInControl?: boolean | cdktn.IResolvable;
  /**
  * Whether to disable DTMF (dual-tone multi-frequency).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/ces_app#disable_dtmf CesApp#disable_dtmf}
  */
  readonly disableDtmf?: boolean | cdktn.IResolvable;
  /**
  * The unique identifier of the channel profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/ces_app#profile_id CesApp#profile_id}
  */
  readonly profileId?: string;
  /**
  * persona_property block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/ces_app#persona_property CesApp#persona_property}
  */
  readonly personaProperty?: CesAppDefaultChannelProfilePersonaProperty;
  /**
  * web_widget_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/ces_app#web_widget_config CesApp#web_widget_config}
  */
  readonly webWidgetConfig?: CesAppDefaultChannelProfileWebWidgetConfig;
}

export function cesAppDefaultChannelProfileToTerraform(struct?: CesAppDefaultChannelProfileOutputReference | CesAppDefaultChannelProfile): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    channel_type: cdktn.stringToTerraform(struct!.channelType),
    disable_barge_in_control: cdktn.booleanToTerraform(struct!.disableBargeInControl),
    disable_dtmf: cdktn.booleanToTerraform(struct!.disableDtmf),
    profile_id: cdktn.stringToTerraform(struct!.profileId),
    persona_property: cesAppDefaultChannelProfilePersonaPropertyToTerraform(struct!.personaProperty),
    web_widget_config: cesAppDefaultChannelProfileWebWidgetConfigToTerraform(struct!.webWidgetConfig),
  }
}


export function cesAppDefaultChannelProfileToHclTerraform(struct?: CesAppDefaultChannelProfileOutputReference | CesAppDefaultChannelProfile): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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
      value: cesAppDefaultChannelProfilePersonaPropertyToHclTerraform(struct!.personaProperty),
      isBlock: true,
      type: "list",
      storageClassType: "CesAppDefaultChannelProfilePersonaPropertyList",
    },
    web_widget_config: {
      value: cesAppDefaultChannelProfileWebWidgetConfigToHclTerraform(struct!.webWidgetConfig),
      isBlock: true,
      type: "list",
      storageClassType: "CesAppDefaultChannelProfileWebWidgetConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CesAppDefaultChannelProfileOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CesAppDefaultChannelProfile | undefined {
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

  public set internalValue(value: CesAppDefaultChannelProfile | undefined) {
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
  private _personaProperty = new CesAppDefaultChannelProfilePersonaPropertyOutputReference(this, "persona_property");
  public get personaProperty() {
    return this._personaProperty;
  }
  public putPersonaProperty(value: CesAppDefaultChannelProfilePersonaProperty) {
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
  private _webWidgetConfig = new CesAppDefaultChannelProfileWebWidgetConfigOutputReference(this, "web_widget_config");
  public get webWidgetConfig() {
    return this._webWidgetConfig;
  }
  public putWebWidgetConfig(value: CesAppDefaultChannelProfileWebWidgetConfig) {
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
export interface CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds {
  /**
  * The success threshold for individual tool invocation parameter
  * correctness. Must be a float between 0 and 1. Default is 1.0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/ces_app#tool_invocation_parameter_correctness_threshold CesApp#tool_invocation_parameter_correctness_threshold}
  */
  readonly toolInvocationParameterCorrectnessThreshold?: number;
}

export function cesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsToTerraform(struct?: CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference | CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tool_invocation_parameter_correctness_threshold: cdktn.numberToTerraform(struct!.toolInvocationParameterCorrectnessThreshold),
  }
}


export function cesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsToHclTerraform(struct?: CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference | CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tool_invocation_parameter_correctness_threshold: {
      value: cdktn.numberToHclTerraform(struct!.toolInvocationParameterCorrectnessThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._toolInvocationParameterCorrectnessThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.toolInvocationParameterCorrectnessThreshold = this._toolInvocationParameterCorrectnessThreshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._toolInvocationParameterCorrectnessThreshold = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._toolInvocationParameterCorrectnessThreshold = value.toolInvocationParameterCorrectnessThreshold;
    }
  }

  // tool_invocation_parameter_correctness_threshold - computed: false, optional: true, required: false
  private _toolInvocationParameterCorrectnessThreshold?: number; 
  public get toolInvocationParameterCorrectnessThreshold() {
    return this.getNumberAttribute('tool_invocation_parameter_correctness_threshold');
  }
  public set toolInvocationParameterCorrectnessThreshold(value: number) {
    this._toolInvocationParameterCorrectnessThreshold = value;
  }
  public resetToolInvocationParameterCorrectnessThreshold() {
    this._toolInvocationParameterCorrectnessThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toolInvocationParameterCorrectnessThresholdInput() {
    return this._toolInvocationParameterCorrectnessThreshold;
  }
}
export interface CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds {
  /**
  * The success threshold for overall tool invocation correctness. Must be
  * a float between 0 and 1. Default is 1.0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/ces_app#overall_tool_invocation_correctness_threshold CesApp#overall_tool_invocation_correctness_threshold}
  */
  readonly overallToolInvocationCorrectnessThreshold?: number;
  /**
  * The success threshold for semantic similarity. Must be an integer
  * between 0 and 4. Default is >= 3.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/ces_app#semantic_similarity_success_threshold CesApp#semantic_similarity_success_threshold}
  */
  readonly semanticSimilaritySuccessThreshold?: number;
}

export function cesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsToTerraform(struct?: CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference | CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    overall_tool_invocation_correctness_threshold: cdktn.numberToTerraform(struct!.overallToolInvocationCorrectnessThreshold),
    semantic_similarity_success_threshold: cdktn.numberToTerraform(struct!.semanticSimilaritySuccessThreshold),
  }
}


export function cesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsToHclTerraform(struct?: CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference | CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    overall_tool_invocation_correctness_threshold: {
      value: cdktn.numberToHclTerraform(struct!.overallToolInvocationCorrectnessThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    semantic_similarity_success_threshold: {
      value: cdktn.numberToHclTerraform(struct!.semanticSimilaritySuccessThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._overallToolInvocationCorrectnessThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.overallToolInvocationCorrectnessThreshold = this._overallToolInvocationCorrectnessThreshold;
    }
    if (this._semanticSimilaritySuccessThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.semanticSimilaritySuccessThreshold = this._semanticSimilaritySuccessThreshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._overallToolInvocationCorrectnessThreshold = undefined;
      this._semanticSimilaritySuccessThreshold = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._overallToolInvocationCorrectnessThreshold = value.overallToolInvocationCorrectnessThreshold;
      this._semanticSimilaritySuccessThreshold = value.semanticSimilaritySuccessThreshold;
    }
  }

  // overall_tool_invocation_correctness_threshold - computed: false, optional: true, required: false
  private _overallToolInvocationCorrectnessThreshold?: number; 
  public get overallToolInvocationCorrectnessThreshold() {
    return this.getNumberAttribute('overall_tool_invocation_correctness_threshold');
  }
  public set overallToolInvocationCorrectnessThreshold(value: number) {
    this._overallToolInvocationCorrectnessThreshold = value;
  }
  public resetOverallToolInvocationCorrectnessThreshold() {
    this._overallToolInvocationCorrectnessThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overallToolInvocationCorrectnessThresholdInput() {
    return this._overallToolInvocationCorrectnessThreshold;
  }

  // semantic_similarity_success_threshold - computed: false, optional: true, required: false
  private _semanticSimilaritySuccessThreshold?: number; 
  public get semanticSimilaritySuccessThreshold() {
    return this.getNumberAttribute('semantic_similarity_success_threshold');
  }
  public set semanticSimilaritySuccessThreshold(value: number) {
    this._semanticSimilaritySuccessThreshold = value;
  }
  public resetSemanticSimilaritySuccessThreshold() {
    this._semanticSimilaritySuccessThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get semanticSimilaritySuccessThresholdInput() {
    return this._semanticSimilaritySuccessThreshold;
  }
}
export interface CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds {
  /**
  * expectation_level_metrics_thresholds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/ces_app#expectation_level_metrics_thresholds CesApp#expectation_level_metrics_thresholds}
  */
  readonly expectationLevelMetricsThresholds?: CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds;
  /**
  * turn_level_metrics_thresholds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/ces_app#turn_level_metrics_thresholds CesApp#turn_level_metrics_thresholds}
  */
  readonly turnLevelMetricsThresholds?: CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds;
}

export function cesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsToTerraform(struct?: CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference | CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expectation_level_metrics_thresholds: cesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsToTerraform(struct!.expectationLevelMetricsThresholds),
    turn_level_metrics_thresholds: cesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsToTerraform(struct!.turnLevelMetricsThresholds),
  }
}


export function cesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsToHclTerraform(struct?: CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference | CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expectation_level_metrics_thresholds: {
      value: cesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsToHclTerraform(struct!.expectationLevelMetricsThresholds),
      isBlock: true,
      type: "list",
      storageClassType: "CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsList",
    },
    turn_level_metrics_thresholds: {
      value: cesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsToHclTerraform(struct!.turnLevelMetricsThresholds),
      isBlock: true,
      type: "list",
      storageClassType: "CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expectationLevelMetricsThresholds?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.expectationLevelMetricsThresholds = this._expectationLevelMetricsThresholds?.internalValue;
    }
    if (this._turnLevelMetricsThresholds?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.turnLevelMetricsThresholds = this._turnLevelMetricsThresholds?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._expectationLevelMetricsThresholds.internalValue = undefined;
      this._turnLevelMetricsThresholds.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._expectationLevelMetricsThresholds.internalValue = value.expectationLevelMetricsThresholds;
      this._turnLevelMetricsThresholds.internalValue = value.turnLevelMetricsThresholds;
    }
  }

  // expectation_level_metrics_thresholds - computed: false, optional: true, required: false
  private _expectationLevelMetricsThresholds = new CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholdsOutputReference(this, "expectation_level_metrics_thresholds");
  public get expectationLevelMetricsThresholds() {
    return this._expectationLevelMetricsThresholds;
  }
  public putExpectationLevelMetricsThresholds(value: CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsExpectationLevelMetricsThresholds) {
    this._expectationLevelMetricsThresholds.internalValue = value;
  }
  public resetExpectationLevelMetricsThresholds() {
    this._expectationLevelMetricsThresholds.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expectationLevelMetricsThresholdsInput() {
    return this._expectationLevelMetricsThresholds.internalValue;
  }

  // turn_level_metrics_thresholds - computed: false, optional: true, required: false
  private _turnLevelMetricsThresholds = new CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholdsOutputReference(this, "turn_level_metrics_thresholds");
  public get turnLevelMetricsThresholds() {
    return this._turnLevelMetricsThresholds;
  }
  public putTurnLevelMetricsThresholds(value: CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsTurnLevelMetricsThresholds) {
    this._turnLevelMetricsThresholds.internalValue = value;
  }
  public resetTurnLevelMetricsThresholds() {
    this._turnLevelMetricsThresholds.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get turnLevelMetricsThresholdsInput() {
    return this._turnLevelMetricsThresholds.internalValue;
  }
}
export interface CesAppEvaluationMetricsThresholds {
  /**
  * golden_evaluation_metrics_thresholds block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/ces_app#golden_evaluation_metrics_thresholds CesApp#golden_evaluation_metrics_thresholds}
  */
  readonly goldenEvaluationMetricsThresholds?: CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds;
}

export function cesAppEvaluationMetricsThresholdsToTerraform(struct?: CesAppEvaluationMetricsThresholdsOutputReference | CesAppEvaluationMetricsThresholds): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    golden_evaluation_metrics_thresholds: cesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsToTerraform(struct!.goldenEvaluationMetricsThresholds),
  }
}


export function cesAppEvaluationMetricsThresholdsToHclTerraform(struct?: CesAppEvaluationMetricsThresholdsOutputReference | CesAppEvaluationMetricsThresholds): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    golden_evaluation_metrics_thresholds: {
      value: cesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsToHclTerraform(struct!.goldenEvaluationMetricsThresholds),
      isBlock: true,
      type: "list",
      storageClassType: "CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CesAppEvaluationMetricsThresholdsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CesAppEvaluationMetricsThresholds | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._goldenEvaluationMetricsThresholds?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.goldenEvaluationMetricsThresholds = this._goldenEvaluationMetricsThresholds?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesAppEvaluationMetricsThresholds | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._goldenEvaluationMetricsThresholds.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._goldenEvaluationMetricsThresholds.internalValue = value.goldenEvaluationMetricsThresholds;
    }
  }

  // golden_evaluation_metrics_thresholds - computed: false, optional: true, required: false
  private _goldenEvaluationMetricsThresholds = new CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholdsOutputReference(this, "golden_evaluation_metrics_thresholds");
  public get goldenEvaluationMetricsThresholds() {
    return this._goldenEvaluationMetricsThresholds;
  }
  public putGoldenEvaluationMetricsThresholds(value: CesAppEvaluationMetricsThresholdsGoldenEvaluationMetricsThresholds) {
    this._goldenEvaluationMetricsThresholds.internalValue = value;
  }
  public resetGoldenEvaluationMetricsThresholds() {
    this._goldenEvaluationMetricsThresholds.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get goldenEvaluationMetricsThresholdsInput() {
    return this._goldenEvaluationMetricsThresholds.internalValue;
  }
}
export interface CesAppLanguageSettings {
  /**
  * The default language code of the app.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/ces_app#default_language_code CesApp#default_language_code}
  */
  readonly defaultLanguageCode?: string;
  /**
  * Enables multilingual support. If true, agents in the app will use pre-built
  * instructions to improve handling of multilingual input.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/ces_app#enable_multilingual_support CesApp#enable_multilingual_support}
  */
  readonly enableMultilingualSupport?: boolean | cdktn.IResolvable;
  /**
  * The action to perform when an agent receives input in an unsupported
  * language.
  * This can be a predefined action or a custom tool call.
  * Valid values are:
  * - A tool's full resource name, which triggers a specific tool execution.
  * - A predefined system action, such as "escalate" or "exit", which triggers
  * an EndSession signal with corresponding metadata
  * to terminate the conversation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/ces_app#fallback_action CesApp#fallback_action}
  */
  readonly fallbackAction?: string;
  /**
  * List of languages codes supported by the app, in addition to the
  * 'default_language_code'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/ces_app#supported_language_codes CesApp#supported_language_codes}
  */
  readonly supportedLanguageCodes?: string[];
}

export function cesAppLanguageSettingsToTerraform(struct?: CesAppLanguageSettingsOutputReference | CesAppLanguageSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_language_code: cdktn.stringToTerraform(struct!.defaultLanguageCode),
    enable_multilingual_support: cdktn.booleanToTerraform(struct!.enableMultilingualSupport),
    fallback_action: cdktn.stringToTerraform(struct!.fallbackAction),
    supported_language_codes: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.supportedLanguageCodes),
  }
}


export function cesAppLanguageSettingsToHclTerraform(struct?: CesAppLanguageSettingsOutputReference | CesAppLanguageSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_language_code: {
      value: cdktn.stringToHclTerraform(struct!.defaultLanguageCode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_multilingual_support: {
      value: cdktn.booleanToHclTerraform(struct!.enableMultilingualSupport),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    fallback_action: {
      value: cdktn.stringToHclTerraform(struct!.fallbackAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    supported_language_codes: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.supportedLanguageCodes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CesAppLanguageSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CesAppLanguageSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultLanguageCode !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultLanguageCode = this._defaultLanguageCode;
    }
    if (this._enableMultilingualSupport !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableMultilingualSupport = this._enableMultilingualSupport;
    }
    if (this._fallbackAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.fallbackAction = this._fallbackAction;
    }
    if (this._supportedLanguageCodes !== undefined) {
      hasAnyValues = true;
      internalValueResult.supportedLanguageCodes = this._supportedLanguageCodes;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesAppLanguageSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultLanguageCode = undefined;
      this._enableMultilingualSupport = undefined;
      this._fallbackAction = undefined;
      this._supportedLanguageCodes = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultLanguageCode = value.defaultLanguageCode;
      this._enableMultilingualSupport = value.enableMultilingualSupport;
      this._fallbackAction = value.fallbackAction;
      this._supportedLanguageCodes = value.supportedLanguageCodes;
    }
  }

  // default_language_code - computed: false, optional: true, required: false
  private _defaultLanguageCode?: string; 
  public get defaultLanguageCode() {
    return this.getStringAttribute('default_language_code');
  }
  public set defaultLanguageCode(value: string) {
    this._defaultLanguageCode = value;
  }
  public resetDefaultLanguageCode() {
    this._defaultLanguageCode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultLanguageCodeInput() {
    return this._defaultLanguageCode;
  }

  // enable_multilingual_support - computed: false, optional: true, required: false
  private _enableMultilingualSupport?: boolean | cdktn.IResolvable; 
  public get enableMultilingualSupport() {
    return this.getBooleanAttribute('enable_multilingual_support');
  }
  public set enableMultilingualSupport(value: boolean | cdktn.IResolvable) {
    this._enableMultilingualSupport = value;
  }
  public resetEnableMultilingualSupport() {
    this._enableMultilingualSupport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableMultilingualSupportInput() {
    return this._enableMultilingualSupport;
  }

  // fallback_action - computed: false, optional: true, required: false
  private _fallbackAction?: string; 
  public get fallbackAction() {
    return this.getStringAttribute('fallback_action');
  }
  public set fallbackAction(value: string) {
    this._fallbackAction = value;
  }
  public resetFallbackAction() {
    this._fallbackAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackActionInput() {
    return this._fallbackAction;
  }

  // supported_language_codes - computed: false, optional: true, required: false
  private _supportedLanguageCodes?: string[]; 
  public get supportedLanguageCodes() {
    return this.getListAttribute('supported_language_codes');
  }
  public set supportedLanguageCodes(value: string[]) {
    this._supportedLanguageCodes = value;
  }
  public resetSupportedLanguageCodes() {
    this._supportedLanguageCodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportedLanguageCodesInput() {
    return this._supportedLanguageCodes;
  }
}
export interface CesAppLoggingSettingsAudioRecordingConfig {
  /**
  * The [Cloud Storage](https://cloud.google.com/storage) bucket to store the
  * session audio recordings. The URI must start with "gs://".
  * Note: If the Cloud Storage bucket is in a different project from the app,
  * you should grant 'storage.objects.create' permission to the CES service
  * agent 'service-@gcp-sa-ces.iam.gserviceaccount.com'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/ces_app#gcs_bucket CesApp#gcs_bucket}
  */
  readonly gcsBucket?: string;
  /**
  * The Cloud Storage path prefix for audio recordings.
  * This prefix can include the following placeholders, which will be
  * dynamically substituted at serving time:
  * - $project:   project ID
  * - $location:  app location
  * - $app:       app ID
  * - $date:      session date in YYYY-MM-DD format
  * - $session:   session ID
  * If the path prefix is not specified, the default prefix
  * '$project/$location/$app/$date/$session/' will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/ces_app#gcs_path_prefix CesApp#gcs_path_prefix}
  */
  readonly gcsPathPrefix?: string;
}

export function cesAppLoggingSettingsAudioRecordingConfigToTerraform(struct?: CesAppLoggingSettingsAudioRecordingConfigOutputReference | CesAppLoggingSettingsAudioRecordingConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gcs_bucket: cdktn.stringToTerraform(struct!.gcsBucket),
    gcs_path_prefix: cdktn.stringToTerraform(struct!.gcsPathPrefix),
  }
}


export function cesAppLoggingSettingsAudioRecordingConfigToHclTerraform(struct?: CesAppLoggingSettingsAudioRecordingConfigOutputReference | CesAppLoggingSettingsAudioRecordingConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gcs_bucket: {
      value: cdktn.stringToHclTerraform(struct!.gcsBucket),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gcs_path_prefix: {
      value: cdktn.stringToHclTerraform(struct!.gcsPathPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CesAppLoggingSettingsAudioRecordingConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CesAppLoggingSettingsAudioRecordingConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gcsBucket !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcsBucket = this._gcsBucket;
    }
    if (this._gcsPathPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.gcsPathPrefix = this._gcsPathPrefix;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesAppLoggingSettingsAudioRecordingConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._gcsBucket = undefined;
      this._gcsPathPrefix = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._gcsBucket = value.gcsBucket;
      this._gcsPathPrefix = value.gcsPathPrefix;
    }
  }

  // gcs_bucket - computed: false, optional: true, required: false
  private _gcsBucket?: string; 
  public get gcsBucket() {
    return this.getStringAttribute('gcs_bucket');
  }
  public set gcsBucket(value: string) {
    this._gcsBucket = value;
  }
  public resetGcsBucket() {
    this._gcsBucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcsBucketInput() {
    return this._gcsBucket;
  }

  // gcs_path_prefix - computed: false, optional: true, required: false
  private _gcsPathPrefix?: string; 
  public get gcsPathPrefix() {
    return this.getStringAttribute('gcs_path_prefix');
  }
  public set gcsPathPrefix(value: string) {
    this._gcsPathPrefix = value;
  }
  public resetGcsPathPrefix() {
    this._gcsPathPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gcsPathPrefixInput() {
    return this._gcsPathPrefix;
  }
}
export interface CesAppLoggingSettingsBigqueryExportSettings {
  /**
  * The BigQuery dataset to export the data to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/ces_app#dataset CesApp#dataset}
  */
  readonly dataset?: string;
  /**
  * Indicates whether the BigQuery export is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/ces_app#enabled CesApp#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * The project ID of the BigQuery dataset to export the data to.
  * Note: If the BigQuery dataset is in a different project from the app, you should grant
  * roles/bigquery.admin role to the CES service agent service-<PROJECT-
  * NUMBER>@gcp-sa-ces.iam.gserviceaccount.com.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/ces_app#project CesApp#project}
  */
  readonly project?: string;
}

export function cesAppLoggingSettingsBigqueryExportSettingsToTerraform(struct?: CesAppLoggingSettingsBigqueryExportSettingsOutputReference | CesAppLoggingSettingsBigqueryExportSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dataset: cdktn.stringToTerraform(struct!.dataset),
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    project: cdktn.stringToTerraform(struct!.project),
  }
}


export function cesAppLoggingSettingsBigqueryExportSettingsToHclTerraform(struct?: CesAppLoggingSettingsBigqueryExportSettingsOutputReference | CesAppLoggingSettingsBigqueryExportSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dataset: {
      value: cdktn.stringToHclTerraform(struct!.dataset),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    project: {
      value: cdktn.stringToHclTerraform(struct!.project),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CesAppLoggingSettingsBigqueryExportSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CesAppLoggingSettingsBigqueryExportSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dataset !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataset = this._dataset;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._project !== undefined) {
      hasAnyValues = true;
      internalValueResult.project = this._project;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesAppLoggingSettingsBigqueryExportSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dataset = undefined;
      this._enabled = undefined;
      this._project = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dataset = value.dataset;
      this._enabled = value.enabled;
      this._project = value.project;
    }
  }

  // dataset - computed: false, optional: true, required: false
  private _dataset?: string; 
  public get dataset() {
    return this.getStringAttribute('dataset');
  }
  public set dataset(value: string) {
    this._dataset = value;
  }
  public resetDataset() {
    this._dataset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasetInput() {
    return this._dataset;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktn.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktn.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // project - computed: false, optional: true, required: false
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
}
export interface CesAppLoggingSettingsCloudLoggingSettings {
  /**
  * Whether to enable Cloud Logging for the sessions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/ces_app#enable_cloud_logging CesApp#enable_cloud_logging}
  */
  readonly enableCloudLogging?: boolean | cdktn.IResolvable;
}

export function cesAppLoggingSettingsCloudLoggingSettingsToTerraform(struct?: CesAppLoggingSettingsCloudLoggingSettingsOutputReference | CesAppLoggingSettingsCloudLoggingSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_cloud_logging: cdktn.booleanToTerraform(struct!.enableCloudLogging),
  }
}


export function cesAppLoggingSettingsCloudLoggingSettingsToHclTerraform(struct?: CesAppLoggingSettingsCloudLoggingSettingsOutputReference | CesAppLoggingSettingsCloudLoggingSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_cloud_logging: {
      value: cdktn.booleanToHclTerraform(struct!.enableCloudLogging),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CesAppLoggingSettingsCloudLoggingSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CesAppLoggingSettingsCloudLoggingSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableCloudLogging !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableCloudLogging = this._enableCloudLogging;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesAppLoggingSettingsCloudLoggingSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableCloudLogging = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableCloudLogging = value.enableCloudLogging;
    }
  }

  // enable_cloud_logging - computed: false, optional: true, required: false
  private _enableCloudLogging?: boolean | cdktn.IResolvable; 
  public get enableCloudLogging() {
    return this.getBooleanAttribute('enable_cloud_logging');
  }
  public set enableCloudLogging(value: boolean | cdktn.IResolvable) {
    this._enableCloudLogging = value;
  }
  public resetEnableCloudLogging() {
    this._enableCloudLogging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableCloudLoggingInput() {
    return this._enableCloudLogging;
  }
}
export interface CesAppLoggingSettingsConversationLoggingSettings {
  /**
  * Whether to disable conversation logging for the sessions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/ces_app#disable_conversation_logging CesApp#disable_conversation_logging}
  */
  readonly disableConversationLogging?: boolean | cdktn.IResolvable;
}

export function cesAppLoggingSettingsConversationLoggingSettingsToTerraform(struct?: CesAppLoggingSettingsConversationLoggingSettingsOutputReference | CesAppLoggingSettingsConversationLoggingSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    disable_conversation_logging: cdktn.booleanToTerraform(struct!.disableConversationLogging),
  }
}


export function cesAppLoggingSettingsConversationLoggingSettingsToHclTerraform(struct?: CesAppLoggingSettingsConversationLoggingSettingsOutputReference | CesAppLoggingSettingsConversationLoggingSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    disable_conversation_logging: {
      value: cdktn.booleanToHclTerraform(struct!.disableConversationLogging),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CesAppLoggingSettingsConversationLoggingSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CesAppLoggingSettingsConversationLoggingSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._disableConversationLogging !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableConversationLogging = this._disableConversationLogging;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesAppLoggingSettingsConversationLoggingSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._disableConversationLogging = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._disableConversationLogging = value.disableConversationLogging;
    }
  }

  // disable_conversation_logging - computed: false, optional: true, required: false
  private _disableConversationLogging?: boolean | cdktn.IResolvable; 
  public get disableConversationLogging() {
    return this.getBooleanAttribute('disable_conversation_logging');
  }
  public set disableConversationLogging(value: boolean | cdktn.IResolvable) {
    this._disableConversationLogging = value;
  }
  public resetDisableConversationLogging() {
    this._disableConversationLogging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableConversationLoggingInput() {
    return this._disableConversationLogging;
  }
}
export interface CesAppLoggingSettingsRedactionConfig {
  /**
  * [DLP](https://cloud.google.com/dlp/docs) deidentify template name to
  * instruct on how to de-identify content.
  * Format:
  * 'projects/{project}/locations/{location}/deidentifyTemplates/{deidentify_template}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/ces_app#deidentify_template CesApp#deidentify_template}
  */
  readonly deidentifyTemplate?: string;
  /**
  * If true, redaction will be applied in various logging scenarios, including
  * conversation history, Cloud Logging and audio recording.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/ces_app#enable_redaction CesApp#enable_redaction}
  */
  readonly enableRedaction?: boolean | cdktn.IResolvable;
  /**
  * [DLP](https://cloud.google.com/dlp/docs) inspect template name to configure
  * detection of sensitive data types.
  * Format:
  * 'projects/{project}/locations/{location}/inspectTemplates/{inspect_template}'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/ces_app#inspect_template CesApp#inspect_template}
  */
  readonly inspectTemplate?: string;
}

export function cesAppLoggingSettingsRedactionConfigToTerraform(struct?: CesAppLoggingSettingsRedactionConfigOutputReference | CesAppLoggingSettingsRedactionConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    deidentify_template: cdktn.stringToTerraform(struct!.deidentifyTemplate),
    enable_redaction: cdktn.booleanToTerraform(struct!.enableRedaction),
    inspect_template: cdktn.stringToTerraform(struct!.inspectTemplate),
  }
}


export function cesAppLoggingSettingsRedactionConfigToHclTerraform(struct?: CesAppLoggingSettingsRedactionConfigOutputReference | CesAppLoggingSettingsRedactionConfig): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    deidentify_template: {
      value: cdktn.stringToHclTerraform(struct!.deidentifyTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_redaction: {
      value: cdktn.booleanToHclTerraform(struct!.enableRedaction),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    inspect_template: {
      value: cdktn.stringToHclTerraform(struct!.inspectTemplate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CesAppLoggingSettingsRedactionConfigOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CesAppLoggingSettingsRedactionConfig | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._deidentifyTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.deidentifyTemplate = this._deidentifyTemplate;
    }
    if (this._enableRedaction !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableRedaction = this._enableRedaction;
    }
    if (this._inspectTemplate !== undefined) {
      hasAnyValues = true;
      internalValueResult.inspectTemplate = this._inspectTemplate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesAppLoggingSettingsRedactionConfig | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._deidentifyTemplate = undefined;
      this._enableRedaction = undefined;
      this._inspectTemplate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._deidentifyTemplate = value.deidentifyTemplate;
      this._enableRedaction = value.enableRedaction;
      this._inspectTemplate = value.inspectTemplate;
    }
  }

  // deidentify_template - computed: false, optional: true, required: false
  private _deidentifyTemplate?: string; 
  public get deidentifyTemplate() {
    return this.getStringAttribute('deidentify_template');
  }
  public set deidentifyTemplate(value: string) {
    this._deidentifyTemplate = value;
  }
  public resetDeidentifyTemplate() {
    this._deidentifyTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deidentifyTemplateInput() {
    return this._deidentifyTemplate;
  }

  // enable_redaction - computed: false, optional: true, required: false
  private _enableRedaction?: boolean | cdktn.IResolvable; 
  public get enableRedaction() {
    return this.getBooleanAttribute('enable_redaction');
  }
  public set enableRedaction(value: boolean | cdktn.IResolvable) {
    this._enableRedaction = value;
  }
  public resetEnableRedaction() {
    this._enableRedaction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableRedactionInput() {
    return this._enableRedaction;
  }

  // inspect_template - computed: false, optional: true, required: false
  private _inspectTemplate?: string; 
  public get inspectTemplate() {
    return this.getStringAttribute('inspect_template');
  }
  public set inspectTemplate(value: string) {
    this._inspectTemplate = value;
  }
  public resetInspectTemplate() {
    this._inspectTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inspectTemplateInput() {
    return this._inspectTemplate;
  }
}
export interface CesAppLoggingSettings {
  /**
  * audio_recording_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/ces_app#audio_recording_config CesApp#audio_recording_config}
  */
  readonly audioRecordingConfig?: CesAppLoggingSettingsAudioRecordingConfig;
  /**
  * bigquery_export_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/ces_app#bigquery_export_settings CesApp#bigquery_export_settings}
  */
  readonly bigqueryExportSettings?: CesAppLoggingSettingsBigqueryExportSettings;
  /**
  * cloud_logging_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/ces_app#cloud_logging_settings CesApp#cloud_logging_settings}
  */
  readonly cloudLoggingSettings?: CesAppLoggingSettingsCloudLoggingSettings;
  /**
  * conversation_logging_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/ces_app#conversation_logging_settings CesApp#conversation_logging_settings}
  */
  readonly conversationLoggingSettings?: CesAppLoggingSettingsConversationLoggingSettings;
  /**
  * redaction_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/ces_app#redaction_config CesApp#redaction_config}
  */
  readonly redactionConfig?: CesAppLoggingSettingsRedactionConfig;
}

export function cesAppLoggingSettingsToTerraform(struct?: CesAppLoggingSettingsOutputReference | CesAppLoggingSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audio_recording_config: cesAppLoggingSettingsAudioRecordingConfigToTerraform(struct!.audioRecordingConfig),
    bigquery_export_settings: cesAppLoggingSettingsBigqueryExportSettingsToTerraform(struct!.bigqueryExportSettings),
    cloud_logging_settings: cesAppLoggingSettingsCloudLoggingSettingsToTerraform(struct!.cloudLoggingSettings),
    conversation_logging_settings: cesAppLoggingSettingsConversationLoggingSettingsToTerraform(struct!.conversationLoggingSettings),
    redaction_config: cesAppLoggingSettingsRedactionConfigToTerraform(struct!.redactionConfig),
  }
}


export function cesAppLoggingSettingsToHclTerraform(struct?: CesAppLoggingSettingsOutputReference | CesAppLoggingSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    audio_recording_config: {
      value: cesAppLoggingSettingsAudioRecordingConfigToHclTerraform(struct!.audioRecordingConfig),
      isBlock: true,
      type: "list",
      storageClassType: "CesAppLoggingSettingsAudioRecordingConfigList",
    },
    bigquery_export_settings: {
      value: cesAppLoggingSettingsBigqueryExportSettingsToHclTerraform(struct!.bigqueryExportSettings),
      isBlock: true,
      type: "list",
      storageClassType: "CesAppLoggingSettingsBigqueryExportSettingsList",
    },
    cloud_logging_settings: {
      value: cesAppLoggingSettingsCloudLoggingSettingsToHclTerraform(struct!.cloudLoggingSettings),
      isBlock: true,
      type: "list",
      storageClassType: "CesAppLoggingSettingsCloudLoggingSettingsList",
    },
    conversation_logging_settings: {
      value: cesAppLoggingSettingsConversationLoggingSettingsToHclTerraform(struct!.conversationLoggingSettings),
      isBlock: true,
      type: "list",
      storageClassType: "CesAppLoggingSettingsConversationLoggingSettingsList",
    },
    redaction_config: {
      value: cesAppLoggingSettingsRedactionConfigToHclTerraform(struct!.redactionConfig),
      isBlock: true,
      type: "list",
      storageClassType: "CesAppLoggingSettingsRedactionConfigList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CesAppLoggingSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CesAppLoggingSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audioRecordingConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.audioRecordingConfig = this._audioRecordingConfig?.internalValue;
    }
    if (this._bigqueryExportSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bigqueryExportSettings = this._bigqueryExportSettings?.internalValue;
    }
    if (this._cloudLoggingSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cloudLoggingSettings = this._cloudLoggingSettings?.internalValue;
    }
    if (this._conversationLoggingSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.conversationLoggingSettings = this._conversationLoggingSettings?.internalValue;
    }
    if (this._redactionConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.redactionConfig = this._redactionConfig?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesAppLoggingSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._audioRecordingConfig.internalValue = undefined;
      this._bigqueryExportSettings.internalValue = undefined;
      this._cloudLoggingSettings.internalValue = undefined;
      this._conversationLoggingSettings.internalValue = undefined;
      this._redactionConfig.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._audioRecordingConfig.internalValue = value.audioRecordingConfig;
      this._bigqueryExportSettings.internalValue = value.bigqueryExportSettings;
      this._cloudLoggingSettings.internalValue = value.cloudLoggingSettings;
      this._conversationLoggingSettings.internalValue = value.conversationLoggingSettings;
      this._redactionConfig.internalValue = value.redactionConfig;
    }
  }

  // audio_recording_config - computed: false, optional: true, required: false
  private _audioRecordingConfig = new CesAppLoggingSettingsAudioRecordingConfigOutputReference(this, "audio_recording_config");
  public get audioRecordingConfig() {
    return this._audioRecordingConfig;
  }
  public putAudioRecordingConfig(value: CesAppLoggingSettingsAudioRecordingConfig) {
    this._audioRecordingConfig.internalValue = value;
  }
  public resetAudioRecordingConfig() {
    this._audioRecordingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audioRecordingConfigInput() {
    return this._audioRecordingConfig.internalValue;
  }

  // bigquery_export_settings - computed: false, optional: true, required: false
  private _bigqueryExportSettings = new CesAppLoggingSettingsBigqueryExportSettingsOutputReference(this, "bigquery_export_settings");
  public get bigqueryExportSettings() {
    return this._bigqueryExportSettings;
  }
  public putBigqueryExportSettings(value: CesAppLoggingSettingsBigqueryExportSettings) {
    this._bigqueryExportSettings.internalValue = value;
  }
  public resetBigqueryExportSettings() {
    this._bigqueryExportSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bigqueryExportSettingsInput() {
    return this._bigqueryExportSettings.internalValue;
  }

  // cloud_logging_settings - computed: false, optional: true, required: false
  private _cloudLoggingSettings = new CesAppLoggingSettingsCloudLoggingSettingsOutputReference(this, "cloud_logging_settings");
  public get cloudLoggingSettings() {
    return this._cloudLoggingSettings;
  }
  public putCloudLoggingSettings(value: CesAppLoggingSettingsCloudLoggingSettings) {
    this._cloudLoggingSettings.internalValue = value;
  }
  public resetCloudLoggingSettings() {
    this._cloudLoggingSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudLoggingSettingsInput() {
    return this._cloudLoggingSettings.internalValue;
  }

  // conversation_logging_settings - computed: false, optional: true, required: false
  private _conversationLoggingSettings = new CesAppLoggingSettingsConversationLoggingSettingsOutputReference(this, "conversation_logging_settings");
  public get conversationLoggingSettings() {
    return this._conversationLoggingSettings;
  }
  public putConversationLoggingSettings(value: CesAppLoggingSettingsConversationLoggingSettings) {
    this._conversationLoggingSettings.internalValue = value;
  }
  public resetConversationLoggingSettings() {
    this._conversationLoggingSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conversationLoggingSettingsInput() {
    return this._conversationLoggingSettings.internalValue;
  }

  // redaction_config - computed: false, optional: true, required: false
  private _redactionConfig = new CesAppLoggingSettingsRedactionConfigOutputReference(this, "redaction_config");
  public get redactionConfig() {
    return this._redactionConfig;
  }
  public putRedactionConfig(value: CesAppLoggingSettingsRedactionConfig) {
    this._redactionConfig.internalValue = value;
  }
  public resetRedactionConfig() {
    this._redactionConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redactionConfigInput() {
    return this._redactionConfig.internalValue;
  }
}
export interface CesAppModelSettings {
  /**
  * The LLM model that the agent should use.
  * If not set, the agent will inherit the model from its parent agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/ces_app#model CesApp#model}
  */
  readonly model?: string;
  /**
  * If set, this temperature will be used for the LLM model. Temperature
  * controls the randomness of the model's responses. Lower temperatures
  * produce responses that are more predictable. Higher temperatures produce
  * responses that are more creative.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/ces_app#temperature CesApp#temperature}
  */
  readonly temperature?: number;
}

export function cesAppModelSettingsToTerraform(struct?: CesAppModelSettingsOutputReference | CesAppModelSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    model: cdktn.stringToTerraform(struct!.model),
    temperature: cdktn.numberToTerraform(struct!.temperature),
  }
}


export function cesAppModelSettingsToHclTerraform(struct?: CesAppModelSettingsOutputReference | CesAppModelSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    model: {
      value: cdktn.stringToHclTerraform(struct!.model),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    temperature: {
      value: cdktn.numberToHclTerraform(struct!.temperature),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CesAppModelSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CesAppModelSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._model !== undefined) {
      hasAnyValues = true;
      internalValueResult.model = this._model;
    }
    if (this._temperature !== undefined) {
      hasAnyValues = true;
      internalValueResult.temperature = this._temperature;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesAppModelSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._model = undefined;
      this._temperature = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._model = value.model;
      this._temperature = value.temperature;
    }
  }

  // model - computed: false, optional: true, required: false
  private _model?: string; 
  public get model() {
    return this.getStringAttribute('model');
  }
  public set model(value: string) {
    this._model = value;
  }
  public resetModel() {
    this._model = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelInput() {
    return this._model;
  }

  // temperature - computed: false, optional: true, required: false
  private _temperature?: number; 
  public get temperature() {
    return this.getNumberAttribute('temperature');
  }
  public set temperature(value: number) {
    this._temperature = value;
  }
  public resetTemperature() {
    this._temperature = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get temperatureInput() {
    return this._temperature;
  }
}
export interface CesAppTimeZoneSettings {
  /**
  * The time zone of the app from the time zone database, e.g., America/Los_Angeles, Europe/Paris.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/ces_app#time_zone CesApp#time_zone}
  */
  readonly timeZone?: string;
}

export function cesAppTimeZoneSettingsToTerraform(struct?: CesAppTimeZoneSettingsOutputReference | CesAppTimeZoneSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    time_zone: cdktn.stringToTerraform(struct!.timeZone),
  }
}


export function cesAppTimeZoneSettingsToHclTerraform(struct?: CesAppTimeZoneSettingsOutputReference | CesAppTimeZoneSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    time_zone: {
      value: cdktn.stringToHclTerraform(struct!.timeZone),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CesAppTimeZoneSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CesAppTimeZoneSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._timeZone !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeZone = this._timeZone;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesAppTimeZoneSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._timeZone = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._timeZone = value.timeZone;
    }
  }

  // time_zone - computed: false, optional: true, required: false
  private _timeZone?: string; 
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }
  public set timeZone(value: string) {
    this._timeZone = value;
  }
  public resetTimeZone() {
    this._timeZone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeZoneInput() {
    return this._timeZone;
  }
}
export interface CesAppTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/ces_app#create CesApp#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/ces_app#delete CesApp#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/ces_app#update CesApp#update}
  */
  readonly update?: string;
}

export function cesAppTimeoutsToTerraform(struct?: CesAppTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktn.stringToTerraform(struct!.create),
    delete: cdktn.stringToTerraform(struct!.delete),
    update: cdktn.stringToTerraform(struct!.update),
  }
}


export function cesAppTimeoutsToHclTerraform(struct?: CesAppTimeouts | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
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

export class CesAppTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CesAppTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: CesAppTimeouts | cdktn.IResolvable | undefined) {
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
export interface CesAppVariableDeclarationsSchema {
  /**
  * Optional. Defines the schema for additional properties allowed in an object.
  * The value must be a valid JSON string representing the Schema object.
  * (Note: OpenAPI also allows a boolean, this definition expects a Schema JSON).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/ces_app#additional_properties CesApp#additional_properties}
  */
  readonly additionalProperties?: string;
  /**
  * Optional. The instance value should be valid against at least one of the schemas in this list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/ces_app#any_of CesApp#any_of}
  */
  readonly anyOf?: string;
  /**
  * Optional. Default value of the data. Represents a dynamically typed value
  * which can be either null, a number, a string, a boolean, a struct,
  * or a list of values. The provided default value must be encoded as a JSON string.
  * Use 'jsonencode' in Terraform HCL to encode the default value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/ces_app#default CesApp#default}
  */
  readonly default?: string;
  /**
  * A map of definitions for use by ref. Only allowed at the root of the schema.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/ces_app#defs CesApp#defs}
  */
  readonly defs?: string;
  /**
  * The description of the data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/ces_app#description CesApp#description}
  */
  readonly description?: string;
  /**
  * Possible values of the element of primitive type with enum format.
  * Examples:
  * 1. We can define direction as :
  * {type:STRING, format:enum, enum:["EAST", NORTH", "SOUTH", "WEST"]}
  * 2. We can define apartment number as :
  * {type:INTEGER, format:enum, enum:["101", "201", "301"]}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/ces_app#enum CesApp#enum}
  */
  readonly enum?: string[];
  /**
  * Schema of the elements of Type.ARRAY.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/ces_app#items CesApp#items}
  */
  readonly items?: string;
  /**
  * Indicates if the value may be null.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/ces_app#nullable CesApp#nullable}
  */
  readonly nullable?: boolean | cdktn.IResolvable;
  /**
  * Optional. Schemas of initial elements of Type.ARRAY.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/ces_app#prefix_items CesApp#prefix_items}
  */
  readonly prefixItems?: string;
  /**
  * Properties of Type.OBJECT.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/ces_app#properties CesApp#properties}
  */
  readonly properties?: string;
  /**
  * Allows indirect references between schema nodes. The value should be a
  * valid reference to a child of the root 'defs'.
  * For example, the following schema defines a reference to a schema node
  * named "Pet":
  * type: object
  * properties:
  *   pet:
  *     ref: #/defs/Pet
  * defs:
  *   Pet:
  *     type: object
  *     properties:
  *       name:
  *         type: string
  * The value of the "pet" property is a reference to the schema node
  * named "Pet".
  * See details in
  * https://json-schema.org/understanding-json-schema/structuring.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/ces_app#ref CesApp#ref}
  */
  readonly ref?: string;
  /**
  * Required properties of Type.OBJECT.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/ces_app#required CesApp#required}
  */
  readonly required?: string[];
  /**
  * The title of the schema.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/ces_app#title CesApp#title}
  */
  readonly title?: string;
  /**
  * The type of the data.
  * Possible values:
  * STRING
  * INTEGER
  * NUMBER
  * BOOLEAN
  * OBJECT
  * ARRAY
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/ces_app#type CesApp#type}
  */
  readonly type: string;
  /**
  * Indicate the items in the array must be unique. Only applies to TYPE.ARRAY.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/ces_app#unique_items CesApp#unique_items}
  */
  readonly uniqueItems?: boolean | cdktn.IResolvable;
}

export function cesAppVariableDeclarationsSchemaToTerraform(struct?: CesAppVariableDeclarationsSchemaOutputReference | CesAppVariableDeclarationsSchema): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_properties: cdktn.stringToTerraform(struct!.additionalProperties),
    any_of: cdktn.stringToTerraform(struct!.anyOf),
    default: cdktn.stringToTerraform(struct!.default),
    defs: cdktn.stringToTerraform(struct!.defs),
    description: cdktn.stringToTerraform(struct!.description),
    enum: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.enum),
    items: cdktn.stringToTerraform(struct!.items),
    nullable: cdktn.booleanToTerraform(struct!.nullable),
    prefix_items: cdktn.stringToTerraform(struct!.prefixItems),
    properties: cdktn.stringToTerraform(struct!.properties),
    ref: cdktn.stringToTerraform(struct!.ref),
    required: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.required),
    title: cdktn.stringToTerraform(struct!.title),
    type: cdktn.stringToTerraform(struct!.type),
    unique_items: cdktn.booleanToTerraform(struct!.uniqueItems),
  }
}


export function cesAppVariableDeclarationsSchemaToHclTerraform(struct?: CesAppVariableDeclarationsSchemaOutputReference | CesAppVariableDeclarationsSchema): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_properties: {
      value: cdktn.stringToHclTerraform(struct!.additionalProperties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    any_of: {
      value: cdktn.stringToHclTerraform(struct!.anyOf),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default: {
      value: cdktn.stringToHclTerraform(struct!.default),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    defs: {
      value: cdktn.stringToHclTerraform(struct!.defs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enum: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.enum),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    items: {
      value: cdktn.stringToHclTerraform(struct!.items),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nullable: {
      value: cdktn.booleanToHclTerraform(struct!.nullable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    prefix_items: {
      value: cdktn.stringToHclTerraform(struct!.prefixItems),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    properties: {
      value: cdktn.stringToHclTerraform(struct!.properties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ref: {
      value: cdktn.stringToHclTerraform(struct!.ref),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    required: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.required),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    title: {
      value: cdktn.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktn.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unique_items: {
      value: cdktn.booleanToHclTerraform(struct!.uniqueItems),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CesAppVariableDeclarationsSchemaOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CesAppVariableDeclarationsSchema | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalProperties !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalProperties = this._additionalProperties;
    }
    if (this._anyOf !== undefined) {
      hasAnyValues = true;
      internalValueResult.anyOf = this._anyOf;
    }
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    if (this._defs !== undefined) {
      hasAnyValues = true;
      internalValueResult.defs = this._defs;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._enum !== undefined) {
      hasAnyValues = true;
      internalValueResult.enum = this._enum;
    }
    if (this._items !== undefined) {
      hasAnyValues = true;
      internalValueResult.items = this._items;
    }
    if (this._nullable !== undefined) {
      hasAnyValues = true;
      internalValueResult.nullable = this._nullable;
    }
    if (this._prefixItems !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixItems = this._prefixItems;
    }
    if (this._properties !== undefined) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties;
    }
    if (this._ref !== undefined) {
      hasAnyValues = true;
      internalValueResult.ref = this._ref;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._uniqueItems !== undefined) {
      hasAnyValues = true;
      internalValueResult.uniqueItems = this._uniqueItems;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesAppVariableDeclarationsSchema | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalProperties = undefined;
      this._anyOf = undefined;
      this._default = undefined;
      this._defs = undefined;
      this._description = undefined;
      this._enum = undefined;
      this._items = undefined;
      this._nullable = undefined;
      this._prefixItems = undefined;
      this._properties = undefined;
      this._ref = undefined;
      this._required = undefined;
      this._title = undefined;
      this._type = undefined;
      this._uniqueItems = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalProperties = value.additionalProperties;
      this._anyOf = value.anyOf;
      this._default = value.default;
      this._defs = value.defs;
      this._description = value.description;
      this._enum = value.enum;
      this._items = value.items;
      this._nullable = value.nullable;
      this._prefixItems = value.prefixItems;
      this._properties = value.properties;
      this._ref = value.ref;
      this._required = value.required;
      this._title = value.title;
      this._type = value.type;
      this._uniqueItems = value.uniqueItems;
    }
  }

  // additional_properties - computed: false, optional: true, required: false
  private _additionalProperties?: string; 
  public get additionalProperties() {
    return this.getStringAttribute('additional_properties');
  }
  public set additionalProperties(value: string) {
    this._additionalProperties = value;
  }
  public resetAdditionalProperties() {
    this._additionalProperties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalPropertiesInput() {
    return this._additionalProperties;
  }

  // any_of - computed: false, optional: true, required: false
  private _anyOf?: string; 
  public get anyOf() {
    return this.getStringAttribute('any_of');
  }
  public set anyOf(value: string) {
    this._anyOf = value;
  }
  public resetAnyOf() {
    this._anyOf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anyOfInput() {
    return this._anyOf;
  }

  // default - computed: false, optional: true, required: false
  private _default?: string; 
  public get default() {
    return this.getStringAttribute('default');
  }
  public set default(value: string) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
  }

  // defs - computed: false, optional: true, required: false
  private _defs?: string; 
  public get defs() {
    return this.getStringAttribute('defs');
  }
  public set defs(value: string) {
    this._defs = value;
  }
  public resetDefs() {
    this._defs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defsInput() {
    return this._defs;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // enum - computed: false, optional: true, required: false
  private _enum?: string[]; 
  public get enum() {
    return this.getListAttribute('enum');
  }
  public set enum(value: string[]) {
    this._enum = value;
  }
  public resetEnum() {
    this._enum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enumInput() {
    return this._enum;
  }

  // items - computed: false, optional: true, required: false
  private _items?: string; 
  public get items() {
    return this.getStringAttribute('items');
  }
  public set items(value: string) {
    this._items = value;
  }
  public resetItems() {
    this._items = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get itemsInput() {
    return this._items;
  }

  // nullable - computed: false, optional: true, required: false
  private _nullable?: boolean | cdktn.IResolvable; 
  public get nullable() {
    return this.getBooleanAttribute('nullable');
  }
  public set nullable(value: boolean | cdktn.IResolvable) {
    this._nullable = value;
  }
  public resetNullable() {
    this._nullable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nullableInput() {
    return this._nullable;
  }

  // prefix_items - computed: false, optional: true, required: false
  private _prefixItems?: string; 
  public get prefixItems() {
    return this.getStringAttribute('prefix_items');
  }
  public set prefixItems(value: string) {
    this._prefixItems = value;
  }
  public resetPrefixItems() {
    this._prefixItems = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixItemsInput() {
    return this._prefixItems;
  }

  // properties - computed: false, optional: true, required: false
  private _properties?: string; 
  public get properties() {
    return this.getStringAttribute('properties');
  }
  public set properties(value: string) {
    this._properties = value;
  }
  public resetProperties() {
    this._properties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties;
  }

  // ref - computed: false, optional: true, required: false
  private _ref?: string; 
  public get ref() {
    return this.getStringAttribute('ref');
  }
  public set ref(value: string) {
    this._ref = value;
  }
  public resetRef() {
    this._ref = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refInput() {
    return this._ref;
  }

  // required - computed: false, optional: true, required: false
  private _required?: string[]; 
  public get required() {
    return this.getListAttribute('required');
  }
  public set required(value: string[]) {
    this._required = value;
  }
  public resetRequired() {
    this._required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // unique_items - computed: false, optional: true, required: false
  private _uniqueItems?: boolean | cdktn.IResolvable; 
  public get uniqueItems() {
    return this.getBooleanAttribute('unique_items');
  }
  public set uniqueItems(value: boolean | cdktn.IResolvable) {
    this._uniqueItems = value;
  }
  public resetUniqueItems() {
    this._uniqueItems = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uniqueItemsInput() {
    return this._uniqueItems;
  }
}
export interface CesAppVariableDeclarations {
  /**
  * The description of the variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/ces_app#description CesApp#description}
  */
  readonly description: string;
  /**
  * The name of the variable. The name must start with a letter or underscore
  * and contain only letters, numbers, or underscores.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/ces_app#name CesApp#name}
  */
  readonly name: string;
  /**
  * schema block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/ces_app#schema CesApp#schema}
  */
  readonly schema: CesAppVariableDeclarationsSchema;
}

export function cesAppVariableDeclarationsToTerraform(struct?: CesAppVariableDeclarations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktn.stringToTerraform(struct!.description),
    name: cdktn.stringToTerraform(struct!.name),
    schema: cesAppVariableDeclarationsSchemaToTerraform(struct!.schema),
  }
}


export function cesAppVariableDeclarationsToHclTerraform(struct?: CesAppVariableDeclarations | cdktn.IResolvable): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktn.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktn.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schema: {
      value: cesAppVariableDeclarationsSchemaToHclTerraform(struct!.schema),
      isBlock: true,
      type: "list",
      storageClassType: "CesAppVariableDeclarationsSchemaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CesAppVariableDeclarationsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CesAppVariableDeclarations | cdktn.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._schema?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schema = this._schema?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CesAppVariableDeclarations | cdktn.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._name = undefined;
      this._schema.internalValue = undefined;
    }
    else if (cdktn.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._name = value.name;
      this._schema.internalValue = value.schema;
    }
  }

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // schema - computed: false, optional: false, required: true
  private _schema = new CesAppVariableDeclarationsSchemaOutputReference(this, "schema");
  public get schema() {
    return this._schema;
  }
  public putSchema(value: CesAppVariableDeclarationsSchema) {
    this._schema.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema.internalValue;
  }
}

export class CesAppVariableDeclarationsList extends cdktn.ComplexList {
  public internalValue? : CesAppVariableDeclarations[] | cdktn.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet);
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CesAppVariableDeclarationsOutputReference {
    return new CesAppVariableDeclarationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/ces_app google_ces_app}
*/
export class CesApp extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_ces_app";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a CesApp resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CesApp to import
  * @param importFromId The id of the existing CesApp that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/ces_app#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CesApp to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_ces_app", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/ces_app google_ces_app} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CesAppConfig
  */
  public constructor(scope: Construct, id: string, config: CesAppConfig) {
    super(scope, id, {
      terraformResourceType: 'google_ces_app',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '7.35.0',
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
    this._appId = config.appId;
    this._deletionPolicy = config.deletionPolicy;
    this._description = config.description;
    this._displayName = config.displayName;
    this._globalInstruction = config.globalInstruction;
    this._guardrails = config.guardrails;
    this._id = config.id;
    this._location = config.location;
    this._metadata = config.metadata;
    this._pinned = config.pinned;
    this._project = config.project;
    this._rootAgent = config.rootAgent;
    this._toolExecutionMode = config.toolExecutionMode;
    this._audioProcessingConfig.internalValue = config.audioProcessingConfig;
    this._clientCertificateSettings.internalValue = config.clientCertificateSettings;
    this._dataStoreSettings.internalValue = config.dataStoreSettings;
    this._defaultChannelProfile.internalValue = config.defaultChannelProfile;
    this._evaluationMetricsThresholds.internalValue = config.evaluationMetricsThresholds;
    this._languageSettings.internalValue = config.languageSettings;
    this._loggingSettings.internalValue = config.loggingSettings;
    this._modelSettings.internalValue = config.modelSettings;
    this._timeZoneSettings.internalValue = config.timeZoneSettings;
    this._timeouts.internalValue = config.timeouts;
    this._variableDeclarations.internalValue = config.variableDeclarations;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // app_id - computed: false, optional: false, required: true
  private _appId?: string; 
  public get appId() {
    return this.getStringAttribute('app_id');
  }
  public set appId(value: string) {
    this._appId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get appIdInput() {
    return this._appId;
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

  // deployment_count - computed: true, optional: false, required: false
  public get deploymentCount() {
    return this.getNumberAttribute('deployment_count');
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // global_instruction - computed: false, optional: true, required: false
  private _globalInstruction?: string; 
  public get globalInstruction() {
    return this.getStringAttribute('global_instruction');
  }
  public set globalInstruction(value: string) {
    this._globalInstruction = value;
  }
  public resetGlobalInstruction() {
    this._globalInstruction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get globalInstructionInput() {
    return this._globalInstruction;
  }

  // guardrails - computed: false, optional: true, required: false
  private _guardrails?: string[]; 
  public get guardrails() {
    return this.getListAttribute('guardrails');
  }
  public set guardrails(value: string[]) {
    this._guardrails = value;
  }
  public resetGuardrails() {
    this._guardrails = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guardrailsInput() {
    return this._guardrails;
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

  // metadata - computed: false, optional: true, required: false
  private _metadata?: { [key: string]: string }; 
  public get metadata() {
    return this.getStringMapAttribute('metadata');
  }
  public set metadata(value: { [key: string]: string }) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // pinned - computed: false, optional: true, required: false
  private _pinned?: boolean | cdktn.IResolvable; 
  public get pinned() {
    return this.getBooleanAttribute('pinned');
  }
  public set pinned(value: boolean | cdktn.IResolvable) {
    this._pinned = value;
  }
  public resetPinned() {
    this._pinned = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pinnedInput() {
    return this._pinned;
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

  // root_agent - computed: false, optional: true, required: false
  private _rootAgent?: string; 
  public get rootAgent() {
    return this.getStringAttribute('root_agent');
  }
  public set rootAgent(value: string) {
    this._rootAgent = value;
  }
  public resetRootAgent() {
    this._rootAgent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rootAgentInput() {
    return this._rootAgent;
  }

  // tool_execution_mode - computed: false, optional: true, required: false
  private _toolExecutionMode?: string; 
  public get toolExecutionMode() {
    return this.getStringAttribute('tool_execution_mode');
  }
  public set toolExecutionMode(value: string) {
    this._toolExecutionMode = value;
  }
  public resetToolExecutionMode() {
    this._toolExecutionMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get toolExecutionModeInput() {
    return this._toolExecutionMode;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // audio_processing_config - computed: false, optional: true, required: false
  private _audioProcessingConfig = new CesAppAudioProcessingConfigOutputReference(this, "audio_processing_config");
  public get audioProcessingConfig() {
    return this._audioProcessingConfig;
  }
  public putAudioProcessingConfig(value: CesAppAudioProcessingConfig) {
    this._audioProcessingConfig.internalValue = value;
  }
  public resetAudioProcessingConfig() {
    this._audioProcessingConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audioProcessingConfigInput() {
    return this._audioProcessingConfig.internalValue;
  }

  // client_certificate_settings - computed: false, optional: true, required: false
  private _clientCertificateSettings = new CesAppClientCertificateSettingsOutputReference(this, "client_certificate_settings");
  public get clientCertificateSettings() {
    return this._clientCertificateSettings;
  }
  public putClientCertificateSettings(value: CesAppClientCertificateSettings) {
    this._clientCertificateSettings.internalValue = value;
  }
  public resetClientCertificateSettings() {
    this._clientCertificateSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificateSettingsInput() {
    return this._clientCertificateSettings.internalValue;
  }

  // data_store_settings - computed: false, optional: true, required: false
  private _dataStoreSettings = new CesAppDataStoreSettingsOutputReference(this, "data_store_settings");
  public get dataStoreSettings() {
    return this._dataStoreSettings;
  }
  public putDataStoreSettings(value: CesAppDataStoreSettings) {
    this._dataStoreSettings.internalValue = value;
  }
  public resetDataStoreSettings() {
    this._dataStoreSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataStoreSettingsInput() {
    return this._dataStoreSettings.internalValue;
  }

  // default_channel_profile - computed: false, optional: true, required: false
  private _defaultChannelProfile = new CesAppDefaultChannelProfileOutputReference(this, "default_channel_profile");
  public get defaultChannelProfile() {
    return this._defaultChannelProfile;
  }
  public putDefaultChannelProfile(value: CesAppDefaultChannelProfile) {
    this._defaultChannelProfile.internalValue = value;
  }
  public resetDefaultChannelProfile() {
    this._defaultChannelProfile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultChannelProfileInput() {
    return this._defaultChannelProfile.internalValue;
  }

  // evaluation_metrics_thresholds - computed: false, optional: true, required: false
  private _evaluationMetricsThresholds = new CesAppEvaluationMetricsThresholdsOutputReference(this, "evaluation_metrics_thresholds");
  public get evaluationMetricsThresholds() {
    return this._evaluationMetricsThresholds;
  }
  public putEvaluationMetricsThresholds(value: CesAppEvaluationMetricsThresholds) {
    this._evaluationMetricsThresholds.internalValue = value;
  }
  public resetEvaluationMetricsThresholds() {
    this._evaluationMetricsThresholds.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluationMetricsThresholdsInput() {
    return this._evaluationMetricsThresholds.internalValue;
  }

  // language_settings - computed: false, optional: true, required: false
  private _languageSettings = new CesAppLanguageSettingsOutputReference(this, "language_settings");
  public get languageSettings() {
    return this._languageSettings;
  }
  public putLanguageSettings(value: CesAppLanguageSettings) {
    this._languageSettings.internalValue = value;
  }
  public resetLanguageSettings() {
    this._languageSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get languageSettingsInput() {
    return this._languageSettings.internalValue;
  }

  // logging_settings - computed: false, optional: true, required: false
  private _loggingSettings = new CesAppLoggingSettingsOutputReference(this, "logging_settings");
  public get loggingSettings() {
    return this._loggingSettings;
  }
  public putLoggingSettings(value: CesAppLoggingSettings) {
    this._loggingSettings.internalValue = value;
  }
  public resetLoggingSettings() {
    this._loggingSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingSettingsInput() {
    return this._loggingSettings.internalValue;
  }

  // model_settings - computed: false, optional: true, required: false
  private _modelSettings = new CesAppModelSettingsOutputReference(this, "model_settings");
  public get modelSettings() {
    return this._modelSettings;
  }
  public putModelSettings(value: CesAppModelSettings) {
    this._modelSettings.internalValue = value;
  }
  public resetModelSettings() {
    this._modelSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelSettingsInput() {
    return this._modelSettings.internalValue;
  }

  // time_zone_settings - computed: false, optional: true, required: false
  private _timeZoneSettings = new CesAppTimeZoneSettingsOutputReference(this, "time_zone_settings");
  public get timeZoneSettings() {
    return this._timeZoneSettings;
  }
  public putTimeZoneSettings(value: CesAppTimeZoneSettings) {
    this._timeZoneSettings.internalValue = value;
  }
  public resetTimeZoneSettings() {
    this._timeZoneSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeZoneSettingsInput() {
    return this._timeZoneSettings.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CesAppTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CesAppTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // variable_declarations - computed: false, optional: true, required: false
  private _variableDeclarations = new CesAppVariableDeclarationsList(this, "variable_declarations", false);
  public get variableDeclarations() {
    return this._variableDeclarations;
  }
  public putVariableDeclarations(value: CesAppVariableDeclarations[] | cdktn.IResolvable) {
    this._variableDeclarations.internalValue = value;
  }
  public resetVariableDeclarations() {
    this._variableDeclarations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variableDeclarationsInput() {
    return this._variableDeclarations.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      app_id: cdktn.stringToTerraform(this._appId),
      deletion_policy: cdktn.stringToTerraform(this._deletionPolicy),
      description: cdktn.stringToTerraform(this._description),
      display_name: cdktn.stringToTerraform(this._displayName),
      global_instruction: cdktn.stringToTerraform(this._globalInstruction),
      guardrails: cdktn.listMapper(cdktn.stringToTerraform, false)(this._guardrails),
      id: cdktn.stringToTerraform(this._id),
      location: cdktn.stringToTerraform(this._location),
      metadata: cdktn.hashMapper(cdktn.stringToTerraform)(this._metadata),
      pinned: cdktn.booleanToTerraform(this._pinned),
      project: cdktn.stringToTerraform(this._project),
      root_agent: cdktn.stringToTerraform(this._rootAgent),
      tool_execution_mode: cdktn.stringToTerraform(this._toolExecutionMode),
      audio_processing_config: cesAppAudioProcessingConfigToTerraform(this._audioProcessingConfig.internalValue),
      client_certificate_settings: cesAppClientCertificateSettingsToTerraform(this._clientCertificateSettings.internalValue),
      data_store_settings: cesAppDataStoreSettingsToTerraform(this._dataStoreSettings.internalValue),
      default_channel_profile: cesAppDefaultChannelProfileToTerraform(this._defaultChannelProfile.internalValue),
      evaluation_metrics_thresholds: cesAppEvaluationMetricsThresholdsToTerraform(this._evaluationMetricsThresholds.internalValue),
      language_settings: cesAppLanguageSettingsToTerraform(this._languageSettings.internalValue),
      logging_settings: cesAppLoggingSettingsToTerraform(this._loggingSettings.internalValue),
      model_settings: cesAppModelSettingsToTerraform(this._modelSettings.internalValue),
      time_zone_settings: cesAppTimeZoneSettingsToTerraform(this._timeZoneSettings.internalValue),
      timeouts: cesAppTimeoutsToTerraform(this._timeouts.internalValue),
      variable_declarations: cdktn.listMapper(cesAppVariableDeclarationsToTerraform, true)(this._variableDeclarations.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      app_id: {
        value: cdktn.stringToHclTerraform(this._appId),
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
      description: {
        value: cdktn.stringToHclTerraform(this._description),
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
      global_instruction: {
        value: cdktn.stringToHclTerraform(this._globalInstruction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      guardrails: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._guardrails),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
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
      metadata: {
        value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(this._metadata),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      pinned: {
        value: cdktn.booleanToHclTerraform(this._pinned),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      project: {
        value: cdktn.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      root_agent: {
        value: cdktn.stringToHclTerraform(this._rootAgent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tool_execution_mode: {
        value: cdktn.stringToHclTerraform(this._toolExecutionMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      audio_processing_config: {
        value: cesAppAudioProcessingConfigToHclTerraform(this._audioProcessingConfig.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CesAppAudioProcessingConfigList",
      },
      client_certificate_settings: {
        value: cesAppClientCertificateSettingsToHclTerraform(this._clientCertificateSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CesAppClientCertificateSettingsList",
      },
      data_store_settings: {
        value: cesAppDataStoreSettingsToHclTerraform(this._dataStoreSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CesAppDataStoreSettingsList",
      },
      default_channel_profile: {
        value: cesAppDefaultChannelProfileToHclTerraform(this._defaultChannelProfile.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CesAppDefaultChannelProfileList",
      },
      evaluation_metrics_thresholds: {
        value: cesAppEvaluationMetricsThresholdsToHclTerraform(this._evaluationMetricsThresholds.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CesAppEvaluationMetricsThresholdsList",
      },
      language_settings: {
        value: cesAppLanguageSettingsToHclTerraform(this._languageSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CesAppLanguageSettingsList",
      },
      logging_settings: {
        value: cesAppLoggingSettingsToHclTerraform(this._loggingSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CesAppLoggingSettingsList",
      },
      model_settings: {
        value: cesAppModelSettingsToHclTerraform(this._modelSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CesAppModelSettingsList",
      },
      time_zone_settings: {
        value: cesAppTimeZoneSettingsToHclTerraform(this._timeZoneSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CesAppTimeZoneSettingsList",
      },
      timeouts: {
        value: cesAppTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CesAppTimeouts",
      },
      variable_declarations: {
        value: cdktn.listMapperHcl(cesAppVariableDeclarationsToHclTerraform, true)(this._variableDeclarations.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CesAppVariableDeclarationsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
