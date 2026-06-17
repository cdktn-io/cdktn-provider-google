/**
 * Copyright IBM Corp. 2021, 2026
 * SPDX-License-Identifier: MPL-2.0
 */

// https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/dialogflow_cx_agent
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktn from 'cdktn';

// Configuration

export interface DialogflowCxAgentConfig extends cdktn.TerraformMetaArguments {
  /**
  * The URI of the agent's avatar. Avatars are used throughout the Dialogflow console and in the self-hosted Web Demo integration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/dialogflow_cx_agent#avatar_uri DialogflowCxAgent#avatar_uri}
  */
  readonly avatarUri?: string;
  /**
  * The default language of the agent as a language tag. [See Language Support](https://cloud.google.com/dialogflow/cx/docs/reference/language)
  * for a list of the currently supported language codes. This field cannot be updated after creation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/dialogflow_cx_agent#default_language_code DialogflowCxAgent#default_language_code}
  */
  readonly defaultLanguageCode: string;
  /**
  * If set to 'true', Terraform will delete the chat engine associated with the agent when the agent is destroyed.
  * Otherwise, the chat engine will persist.
  * 
  * This virtual field addresses a critical dependency chain: 'agent' -> 'engine' -> 'data store'. The chat engine is automatically
  * provisioned when a data store is linked to the agent, meaning Terraform doesn't have direct control over its lifecycle as a managed
  * resource. This creates a problem when both the agent and data store are managed by Terraform and need to be destroyed. Without
  * delete_chat_engine_on_destroy set to true, the data store's deletion would fail because the unmanaged chat engine would still be
  * using it. This setting ensures that the entire dependency chain can be properly torn down.
  * See 'mmv1/templates/terraform/examples/dialogflowcx_tool_data_store.tf.tmpl' as an example.
  * 
  * Data store can be linked to an agent through the 'knowledgeConnectorSettings' field of a [flow](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/projects.locations.agents.flows#resource:-flow)
  * or a [page](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/projects.locations.agents.flows.pages#resource:-page)
  * or the 'dataStoreSpec' field of a [tool](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/projects.locations.agents.tools#resource:-tool).
  * The ID of the implicitly created engine is stored in the 'genAppBuilderSettings' field of the [agent](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/projects.locations.agents#resource:-agent).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/dialogflow_cx_agent#delete_chat_engine_on_destroy DialogflowCxAgent#delete_chat_engine_on_destroy}
  */
  readonly deleteChatEngineOnDestroy?: boolean | cdktn.IResolvable;
  /**
  * Whether Terraform will be prevented from destroying the instance. Defaults to "DELETE".
  * When a 'terraform destroy' or 'terraform apply' would delete the instance,
  * the command will fail if this field is set to "PREVENT" in Terraform state.
  * When set to "ABANDON", the command will remove the resource from Terraform
  * management without updating or deleting the resource in the API.
  * When set to "DELETE", deleting the resource is allowed.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/dialogflow_cx_agent#deletion_policy DialogflowCxAgent#deletion_policy}
  */
  readonly deletionPolicy?: string;
  /**
  * The description of this agent. The maximum length is 500 characters. If exceeded, the request is rejected.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/dialogflow_cx_agent#description DialogflowCxAgent#description}
  */
  readonly description?: string;
  /**
  * The human-readable name of the agent, unique within the location.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/dialogflow_cx_agent#display_name DialogflowCxAgent#display_name}
  */
  readonly displayName: string;
  /**
  * Enable training multi-lingual models for this agent. These models will be trained on all the languages supported by the agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/dialogflow_cx_agent#enable_multi_language_training DialogflowCxAgent#enable_multi_language_training}
  */
  readonly enableMultiLanguageTraining?: boolean | cdktn.IResolvable;
  /**
  * Indicates if automatic spell correction is enabled in detect intent requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/dialogflow_cx_agent#enable_spell_correction DialogflowCxAgent#enable_spell_correction}
  */
  readonly enableSpellCorrection?: boolean | cdktn.IResolvable;
  /**
  * Determines whether this agent should log conversation queries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/dialogflow_cx_agent#enable_stackdriver_logging DialogflowCxAgent#enable_stackdriver_logging}
  */
  readonly enableStackdriverLogging?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/dialogflow_cx_agent#id DialogflowCxAgent#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The name of the location this agent is located in.
  * 
  * ~> **Note:** The first time you are deploying an Agent in your project you must configure location settings.
  *  This is a one time step but at the moment you can only [configure location settings](https://cloud.google.com/dialogflow/cx/docs/concept/region#location-settings) via the Dialogflow CX console.
  *  Another options is to use global location so you don't need to manually configure location settings.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/dialogflow_cx_agent#location DialogflowCxAgent#location}
  */
  readonly location: string;
  /**
  * Indicates whether the agent is locked for changes. If the agent is locked, modifications to the agent will be rejected except for [agents.restore][].
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/dialogflow_cx_agent#locked DialogflowCxAgent#locked}
  */
  readonly locked?: boolean | cdktn.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/dialogflow_cx_agent#project DialogflowCxAgent#project}
  */
  readonly project?: string;
  /**
  * Name of the SecuritySettings reference for the agent. Format: projects/<Project ID>/locations/<Location ID>/securitySettings/<Security Settings ID>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/dialogflow_cx_agent#security_settings DialogflowCxAgent#security_settings}
  */
  readonly securitySettings?: string;
  /**
  * Name of the start playbook in this agent. A start playbook will be automatically created when the agent is created, and can only be deleted by deleting the agent. Format: **projects/<ProjectID>/locations/<LocationID>/agents/<AgentID>/playbooks/<PlaybookID>**. Currently only the default playbook with id "00000000-0000-0000-0000-000000000000" is allowed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/dialogflow_cx_agent#start_playbook DialogflowCxAgent#start_playbook}
  */
  readonly startPlaybook?: string;
  /**
  * The list of all languages supported by this agent (except for the default_language_code).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/dialogflow_cx_agent#supported_language_codes DialogflowCxAgent#supported_language_codes}
  */
  readonly supportedLanguageCodes?: string[];
  /**
  * The time zone of this agent from the [time zone database](https://www.iana.org/time-zones), e.g., America/New_York,
  * Europe/Paris.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/dialogflow_cx_agent#time_zone DialogflowCxAgent#time_zone}
  */
  readonly timeZone: string;
  /**
  * advanced_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/dialogflow_cx_agent#advanced_settings DialogflowCxAgent#advanced_settings}
  */
  readonly advancedSettings?: DialogflowCxAgentAdvancedSettings;
  /**
  * answer_feedback_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/dialogflow_cx_agent#answer_feedback_settings DialogflowCxAgent#answer_feedback_settings}
  */
  readonly answerFeedbackSettings?: DialogflowCxAgentAnswerFeedbackSettings;
  /**
  * client_certificate_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/dialogflow_cx_agent#client_certificate_settings DialogflowCxAgent#client_certificate_settings}
  */
  readonly clientCertificateSettings?: DialogflowCxAgentClientCertificateSettings;
  /**
  * gen_app_builder_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/dialogflow_cx_agent#gen_app_builder_settings DialogflowCxAgent#gen_app_builder_settings}
  */
  readonly genAppBuilderSettings?: DialogflowCxAgentGenAppBuilderSettings;
  /**
  * git_integration_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/dialogflow_cx_agent#git_integration_settings DialogflowCxAgent#git_integration_settings}
  */
  readonly gitIntegrationSettings?: DialogflowCxAgentGitIntegrationSettings;
  /**
  * personalization_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/dialogflow_cx_agent#personalization_settings DialogflowCxAgent#personalization_settings}
  */
  readonly personalizationSettings?: DialogflowCxAgentPersonalizationSettings;
  /**
  * speech_to_text_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/dialogflow_cx_agent#speech_to_text_settings DialogflowCxAgent#speech_to_text_settings}
  */
  readonly speechToTextSettings?: DialogflowCxAgentSpeechToTextSettings;
  /**
  * text_to_speech_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/dialogflow_cx_agent#text_to_speech_settings DialogflowCxAgent#text_to_speech_settings}
  */
  readonly textToSpeechSettings?: DialogflowCxAgentTextToSpeechSettings;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/dialogflow_cx_agent#timeouts DialogflowCxAgent#timeouts}
  */
  readonly timeouts?: DialogflowCxAgentTimeouts;
}
export interface DialogflowCxAgentAdvancedSettingsAudioExportGcsDestination {
  /**
  * The Google Cloud Storage URI for the exported objects. Whether a full object name, or just a prefix, its usage depends on the Dialogflow operation.
  * Format: gs://bucket/object-name-or-prefix
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/dialogflow_cx_agent#uri DialogflowCxAgent#uri}
  */
  readonly uri?: string;
}

export function dialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationToTerraform(struct?: DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference | DialogflowCxAgentAdvancedSettingsAudioExportGcsDestination): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    uri: cdktn.stringToTerraform(struct!.uri),
  }
}


export function dialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationToHclTerraform(struct?: DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference | DialogflowCxAgentAdvancedSettingsAudioExportGcsDestination): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    uri: {
      value: cdktn.stringToHclTerraform(struct!.uri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowCxAgentAdvancedSettingsAudioExportGcsDestination | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uri !== undefined) {
      hasAnyValues = true;
      internalValueResult.uri = this._uri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxAgentAdvancedSettingsAudioExportGcsDestination | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uri = value.uri;
    }
  }

  // uri - computed: false, optional: true, required: false
  private _uri?: string; 
  public get uri() {
    return this.getStringAttribute('uri');
  }
  public set uri(value: string) {
    this._uri = value;
  }
  public resetUri() {
    this._uri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uriInput() {
    return this._uri;
  }
}
export interface DialogflowCxAgentAdvancedSettingsDtmfSettings {
  /**
  * If true, incoming audio is processed for DTMF (dual tone multi frequency) events. For example, if the caller presses a button on their telephone keypad and DTMF processing is enabled, Dialogflow will detect the event (e.g. a "3" was pressed) in the incoming audio and pass the event to the bot to drive business logic (e.g. when 3 is pressed, return the account balance).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/dialogflow_cx_agent#enabled DialogflowCxAgent#enabled}
  */
  readonly enabled?: boolean | cdktn.IResolvable;
  /**
  * The digit that terminates a DTMF digit sequence.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/dialogflow_cx_agent#finish_digit DialogflowCxAgent#finish_digit}
  */
  readonly finishDigit?: string;
  /**
  * Max length of DTMF digits.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/dialogflow_cx_agent#max_digits DialogflowCxAgent#max_digits}
  */
  readonly maxDigits?: number;
}

export function dialogflowCxAgentAdvancedSettingsDtmfSettingsToTerraform(struct?: DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference | DialogflowCxAgentAdvancedSettingsDtmfSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enabled: cdktn.booleanToTerraform(struct!.enabled),
    finish_digit: cdktn.stringToTerraform(struct!.finishDigit),
    max_digits: cdktn.numberToTerraform(struct!.maxDigits),
  }
}


export function dialogflowCxAgentAdvancedSettingsDtmfSettingsToHclTerraform(struct?: DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference | DialogflowCxAgentAdvancedSettingsDtmfSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enabled: {
      value: cdktn.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    finish_digit: {
      value: cdktn.stringToHclTerraform(struct!.finishDigit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    max_digits: {
      value: cdktn.numberToHclTerraform(struct!.maxDigits),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowCxAgentAdvancedSettingsDtmfSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._finishDigit !== undefined) {
      hasAnyValues = true;
      internalValueResult.finishDigit = this._finishDigit;
    }
    if (this._maxDigits !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxDigits = this._maxDigits;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxAgentAdvancedSettingsDtmfSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._finishDigit = undefined;
      this._maxDigits = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._finishDigit = value.finishDigit;
      this._maxDigits = value.maxDigits;
    }
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

  // finish_digit - computed: false, optional: true, required: false
  private _finishDigit?: string; 
  public get finishDigit() {
    return this.getStringAttribute('finish_digit');
  }
  public set finishDigit(value: string) {
    this._finishDigit = value;
  }
  public resetFinishDigit() {
    this._finishDigit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get finishDigitInput() {
    return this._finishDigit;
  }

  // max_digits - computed: false, optional: true, required: false
  private _maxDigits?: number; 
  public get maxDigits() {
    return this.getNumberAttribute('max_digits');
  }
  public set maxDigits(value: number) {
    this._maxDigits = value;
  }
  public resetMaxDigits() {
    this._maxDigits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxDigitsInput() {
    return this._maxDigits;
  }
}
export interface DialogflowCxAgentAdvancedSettingsLoggingSettings {
  /**
  * Enables consent-based end-user input redaction, if true, a pre-defined session parameter **$session.params.conversation-redaction** will be used to determine if the utterance should be redacted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/dialogflow_cx_agent#enable_consent_based_redaction DialogflowCxAgent#enable_consent_based_redaction}
  */
  readonly enableConsentBasedRedaction?: boolean | cdktn.IResolvable;
  /**
  * Enables DF Interaction logging.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/dialogflow_cx_agent#enable_interaction_logging DialogflowCxAgent#enable_interaction_logging}
  */
  readonly enableInteractionLogging?: boolean | cdktn.IResolvable;
  /**
  * Enables Google Cloud Logging.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/dialogflow_cx_agent#enable_stackdriver_logging DialogflowCxAgent#enable_stackdriver_logging}
  */
  readonly enableStackdriverLogging?: boolean | cdktn.IResolvable;
}

export function dialogflowCxAgentAdvancedSettingsLoggingSettingsToTerraform(struct?: DialogflowCxAgentAdvancedSettingsLoggingSettingsOutputReference | DialogflowCxAgentAdvancedSettingsLoggingSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enable_consent_based_redaction: cdktn.booleanToTerraform(struct!.enableConsentBasedRedaction),
    enable_interaction_logging: cdktn.booleanToTerraform(struct!.enableInteractionLogging),
    enable_stackdriver_logging: cdktn.booleanToTerraform(struct!.enableStackdriverLogging),
  }
}


export function dialogflowCxAgentAdvancedSettingsLoggingSettingsToHclTerraform(struct?: DialogflowCxAgentAdvancedSettingsLoggingSettingsOutputReference | DialogflowCxAgentAdvancedSettingsLoggingSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enable_consent_based_redaction: {
      value: cdktn.booleanToHclTerraform(struct!.enableConsentBasedRedaction),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_interaction_logging: {
      value: cdktn.booleanToHclTerraform(struct!.enableInteractionLogging),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enable_stackdriver_logging: {
      value: cdktn.booleanToHclTerraform(struct!.enableStackdriverLogging),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowCxAgentAdvancedSettingsLoggingSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowCxAgentAdvancedSettingsLoggingSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableConsentBasedRedaction !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableConsentBasedRedaction = this._enableConsentBasedRedaction;
    }
    if (this._enableInteractionLogging !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableInteractionLogging = this._enableInteractionLogging;
    }
    if (this._enableStackdriverLogging !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableStackdriverLogging = this._enableStackdriverLogging;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxAgentAdvancedSettingsLoggingSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableConsentBasedRedaction = undefined;
      this._enableInteractionLogging = undefined;
      this._enableStackdriverLogging = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableConsentBasedRedaction = value.enableConsentBasedRedaction;
      this._enableInteractionLogging = value.enableInteractionLogging;
      this._enableStackdriverLogging = value.enableStackdriverLogging;
    }
  }

  // enable_consent_based_redaction - computed: false, optional: true, required: false
  private _enableConsentBasedRedaction?: boolean | cdktn.IResolvable; 
  public get enableConsentBasedRedaction() {
    return this.getBooleanAttribute('enable_consent_based_redaction');
  }
  public set enableConsentBasedRedaction(value: boolean | cdktn.IResolvable) {
    this._enableConsentBasedRedaction = value;
  }
  public resetEnableConsentBasedRedaction() {
    this._enableConsentBasedRedaction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableConsentBasedRedactionInput() {
    return this._enableConsentBasedRedaction;
  }

  // enable_interaction_logging - computed: false, optional: true, required: false
  private _enableInteractionLogging?: boolean | cdktn.IResolvable; 
  public get enableInteractionLogging() {
    return this.getBooleanAttribute('enable_interaction_logging');
  }
  public set enableInteractionLogging(value: boolean | cdktn.IResolvable) {
    this._enableInteractionLogging = value;
  }
  public resetEnableInteractionLogging() {
    this._enableInteractionLogging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInteractionLoggingInput() {
    return this._enableInteractionLogging;
  }

  // enable_stackdriver_logging - computed: false, optional: true, required: false
  private _enableStackdriverLogging?: boolean | cdktn.IResolvable; 
  public get enableStackdriverLogging() {
    return this.getBooleanAttribute('enable_stackdriver_logging');
  }
  public set enableStackdriverLogging(value: boolean | cdktn.IResolvable) {
    this._enableStackdriverLogging = value;
  }
  public resetEnableStackdriverLogging() {
    this._enableStackdriverLogging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableStackdriverLoggingInput() {
    return this._enableStackdriverLogging;
  }
}
export interface DialogflowCxAgentAdvancedSettingsSpeechSettings {
  /**
  * Sensitivity of the speech model that detects the end of speech. Scale from 0 to 100.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/dialogflow_cx_agent#endpointer_sensitivity DialogflowCxAgent#endpointer_sensitivity}
  */
  readonly endpointerSensitivity?: number;
  /**
  * Mapping from language to Speech-to-Text model. The mapped Speech-to-Text model will be selected for requests from its corresponding language. For more information, see [Speech models](https://cloud.google.com/dialogflow/cx/docs/concept/speech-models).
  * An object containing a list of **"key": value** pairs. Example: **{ "name": "wrench", "mass": "1.3kg", "count": "3" }**.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/dialogflow_cx_agent#models DialogflowCxAgent#models}
  */
  readonly models?: { [key: string]: string };
  /**
  * Timeout before detecting no speech.
  * A duration in seconds with up to nine fractional digits, ending with 's'. Example: "3.5s".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/dialogflow_cx_agent#no_speech_timeout DialogflowCxAgent#no_speech_timeout}
  */
  readonly noSpeechTimeout?: string;
  /**
  * Use timeout based endpointing, interpreting endpointer sensitivity as seconds of timeout value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/dialogflow_cx_agent#use_timeout_based_endpointing DialogflowCxAgent#use_timeout_based_endpointing}
  */
  readonly useTimeoutBasedEndpointing?: boolean | cdktn.IResolvable;
}

export function dialogflowCxAgentAdvancedSettingsSpeechSettingsToTerraform(struct?: DialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference | DialogflowCxAgentAdvancedSettingsSpeechSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    endpointer_sensitivity: cdktn.numberToTerraform(struct!.endpointerSensitivity),
    models: cdktn.hashMapper(cdktn.stringToTerraform)(struct!.models),
    no_speech_timeout: cdktn.stringToTerraform(struct!.noSpeechTimeout),
    use_timeout_based_endpointing: cdktn.booleanToTerraform(struct!.useTimeoutBasedEndpointing),
  }
}


export function dialogflowCxAgentAdvancedSettingsSpeechSettingsToHclTerraform(struct?: DialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference | DialogflowCxAgentAdvancedSettingsSpeechSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    endpointer_sensitivity: {
      value: cdktn.numberToHclTerraform(struct!.endpointerSensitivity),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    models: {
      value: cdktn.hashMapperHcl(cdktn.stringToHclTerraform)(struct!.models),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    no_speech_timeout: {
      value: cdktn.stringToHclTerraform(struct!.noSpeechTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_timeout_based_endpointing: {
      value: cdktn.booleanToHclTerraform(struct!.useTimeoutBasedEndpointing),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowCxAgentAdvancedSettingsSpeechSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpointerSensitivity !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointerSensitivity = this._endpointerSensitivity;
    }
    if (this._models !== undefined) {
      hasAnyValues = true;
      internalValueResult.models = this._models;
    }
    if (this._noSpeechTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.noSpeechTimeout = this._noSpeechTimeout;
    }
    if (this._useTimeoutBasedEndpointing !== undefined) {
      hasAnyValues = true;
      internalValueResult.useTimeoutBasedEndpointing = this._useTimeoutBasedEndpointing;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxAgentAdvancedSettingsSpeechSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._endpointerSensitivity = undefined;
      this._models = undefined;
      this._noSpeechTimeout = undefined;
      this._useTimeoutBasedEndpointing = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._endpointerSensitivity = value.endpointerSensitivity;
      this._models = value.models;
      this._noSpeechTimeout = value.noSpeechTimeout;
      this._useTimeoutBasedEndpointing = value.useTimeoutBasedEndpointing;
    }
  }

  // endpointer_sensitivity - computed: false, optional: true, required: false
  private _endpointerSensitivity?: number; 
  public get endpointerSensitivity() {
    return this.getNumberAttribute('endpointer_sensitivity');
  }
  public set endpointerSensitivity(value: number) {
    this._endpointerSensitivity = value;
  }
  public resetEndpointerSensitivity() {
    this._endpointerSensitivity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointerSensitivityInput() {
    return this._endpointerSensitivity;
  }

  // models - computed: false, optional: true, required: false
  private _models?: { [key: string]: string }; 
  public get models() {
    return this.getStringMapAttribute('models');
  }
  public set models(value: { [key: string]: string }) {
    this._models = value;
  }
  public resetModels() {
    this._models = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelsInput() {
    return this._models;
  }

  // no_speech_timeout - computed: false, optional: true, required: false
  private _noSpeechTimeout?: string; 
  public get noSpeechTimeout() {
    return this.getStringAttribute('no_speech_timeout');
  }
  public set noSpeechTimeout(value: string) {
    this._noSpeechTimeout = value;
  }
  public resetNoSpeechTimeout() {
    this._noSpeechTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noSpeechTimeoutInput() {
    return this._noSpeechTimeout;
  }

  // use_timeout_based_endpointing - computed: false, optional: true, required: false
  private _useTimeoutBasedEndpointing?: boolean | cdktn.IResolvable; 
  public get useTimeoutBasedEndpointing() {
    return this.getBooleanAttribute('use_timeout_based_endpointing');
  }
  public set useTimeoutBasedEndpointing(value: boolean | cdktn.IResolvable) {
    this._useTimeoutBasedEndpointing = value;
  }
  public resetUseTimeoutBasedEndpointing() {
    this._useTimeoutBasedEndpointing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useTimeoutBasedEndpointingInput() {
    return this._useTimeoutBasedEndpointing;
  }
}
export interface DialogflowCxAgentAdvancedSettings {
  /**
  * audio_export_gcs_destination block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/dialogflow_cx_agent#audio_export_gcs_destination DialogflowCxAgent#audio_export_gcs_destination}
  */
  readonly audioExportGcsDestination?: DialogflowCxAgentAdvancedSettingsAudioExportGcsDestination;
  /**
  * dtmf_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/dialogflow_cx_agent#dtmf_settings DialogflowCxAgent#dtmf_settings}
  */
  readonly dtmfSettings?: DialogflowCxAgentAdvancedSettingsDtmfSettings;
  /**
  * logging_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/dialogflow_cx_agent#logging_settings DialogflowCxAgent#logging_settings}
  */
  readonly loggingSettings?: DialogflowCxAgentAdvancedSettingsLoggingSettings;
  /**
  * speech_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/dialogflow_cx_agent#speech_settings DialogflowCxAgent#speech_settings}
  */
  readonly speechSettings?: DialogflowCxAgentAdvancedSettingsSpeechSettings;
}

export function dialogflowCxAgentAdvancedSettingsToTerraform(struct?: DialogflowCxAgentAdvancedSettingsOutputReference | DialogflowCxAgentAdvancedSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    audio_export_gcs_destination: dialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationToTerraform(struct!.audioExportGcsDestination),
    dtmf_settings: dialogflowCxAgentAdvancedSettingsDtmfSettingsToTerraform(struct!.dtmfSettings),
    logging_settings: dialogflowCxAgentAdvancedSettingsLoggingSettingsToTerraform(struct!.loggingSettings),
    speech_settings: dialogflowCxAgentAdvancedSettingsSpeechSettingsToTerraform(struct!.speechSettings),
  }
}


export function dialogflowCxAgentAdvancedSettingsToHclTerraform(struct?: DialogflowCxAgentAdvancedSettingsOutputReference | DialogflowCxAgentAdvancedSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    audio_export_gcs_destination: {
      value: dialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationToHclTerraform(struct!.audioExportGcsDestination),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationList",
    },
    dtmf_settings: {
      value: dialogflowCxAgentAdvancedSettingsDtmfSettingsToHclTerraform(struct!.dtmfSettings),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowCxAgentAdvancedSettingsDtmfSettingsList",
    },
    logging_settings: {
      value: dialogflowCxAgentAdvancedSettingsLoggingSettingsToHclTerraform(struct!.loggingSettings),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowCxAgentAdvancedSettingsLoggingSettingsList",
    },
    speech_settings: {
      value: dialogflowCxAgentAdvancedSettingsSpeechSettingsToHclTerraform(struct!.speechSettings),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowCxAgentAdvancedSettingsSpeechSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowCxAgentAdvancedSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowCxAgentAdvancedSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audioExportGcsDestination?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.audioExportGcsDestination = this._audioExportGcsDestination?.internalValue;
    }
    if (this._dtmfSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dtmfSettings = this._dtmfSettings?.internalValue;
    }
    if (this._loggingSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.loggingSettings = this._loggingSettings?.internalValue;
    }
    if (this._speechSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.speechSettings = this._speechSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxAgentAdvancedSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._audioExportGcsDestination.internalValue = undefined;
      this._dtmfSettings.internalValue = undefined;
      this._loggingSettings.internalValue = undefined;
      this._speechSettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._audioExportGcsDestination.internalValue = value.audioExportGcsDestination;
      this._dtmfSettings.internalValue = value.dtmfSettings;
      this._loggingSettings.internalValue = value.loggingSettings;
      this._speechSettings.internalValue = value.speechSettings;
    }
  }

  // audio_export_gcs_destination - computed: false, optional: true, required: false
  private _audioExportGcsDestination = new DialogflowCxAgentAdvancedSettingsAudioExportGcsDestinationOutputReference(this, "audio_export_gcs_destination");
  public get audioExportGcsDestination() {
    return this._audioExportGcsDestination;
  }
  public putAudioExportGcsDestination(value: DialogflowCxAgentAdvancedSettingsAudioExportGcsDestination) {
    this._audioExportGcsDestination.internalValue = value;
  }
  public resetAudioExportGcsDestination() {
    this._audioExportGcsDestination.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audioExportGcsDestinationInput() {
    return this._audioExportGcsDestination.internalValue;
  }

  // dtmf_settings - computed: false, optional: true, required: false
  private _dtmfSettings = new DialogflowCxAgentAdvancedSettingsDtmfSettingsOutputReference(this, "dtmf_settings");
  public get dtmfSettings() {
    return this._dtmfSettings;
  }
  public putDtmfSettings(value: DialogflowCxAgentAdvancedSettingsDtmfSettings) {
    this._dtmfSettings.internalValue = value;
  }
  public resetDtmfSettings() {
    this._dtmfSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dtmfSettingsInput() {
    return this._dtmfSettings.internalValue;
  }

  // logging_settings - computed: false, optional: true, required: false
  private _loggingSettings = new DialogflowCxAgentAdvancedSettingsLoggingSettingsOutputReference(this, "logging_settings");
  public get loggingSettings() {
    return this._loggingSettings;
  }
  public putLoggingSettings(value: DialogflowCxAgentAdvancedSettingsLoggingSettings) {
    this._loggingSettings.internalValue = value;
  }
  public resetLoggingSettings() {
    this._loggingSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingSettingsInput() {
    return this._loggingSettings.internalValue;
  }

  // speech_settings - computed: false, optional: true, required: false
  private _speechSettings = new DialogflowCxAgentAdvancedSettingsSpeechSettingsOutputReference(this, "speech_settings");
  public get speechSettings() {
    return this._speechSettings;
  }
  public putSpeechSettings(value: DialogflowCxAgentAdvancedSettingsSpeechSettings) {
    this._speechSettings.internalValue = value;
  }
  public resetSpeechSettings() {
    this._speechSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get speechSettingsInput() {
    return this._speechSettings.internalValue;
  }
}
export interface DialogflowCxAgentAnswerFeedbackSettings {
  /**
  * If enabled, end users will be able to provide [answer feedback](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/projects.locations.agents.sessions/submitAnswerFeedback#body.AnswerFeedback)
  * to Dialogflow responses. Feature works only if interaction logging is enabled in the Dialogflow agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/dialogflow_cx_agent#enable_answer_feedback DialogflowCxAgent#enable_answer_feedback}
  */
  readonly enableAnswerFeedback?: boolean | cdktn.IResolvable;
}

export function dialogflowCxAgentAnswerFeedbackSettingsToTerraform(struct?: DialogflowCxAgentAnswerFeedbackSettingsOutputReference | DialogflowCxAgentAnswerFeedbackSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enable_answer_feedback: cdktn.booleanToTerraform(struct!.enableAnswerFeedback),
  }
}


export function dialogflowCxAgentAnswerFeedbackSettingsToHclTerraform(struct?: DialogflowCxAgentAnswerFeedbackSettingsOutputReference | DialogflowCxAgentAnswerFeedbackSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enable_answer_feedback: {
      value: cdktn.booleanToHclTerraform(struct!.enableAnswerFeedback),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowCxAgentAnswerFeedbackSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowCxAgentAnswerFeedbackSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableAnswerFeedback !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableAnswerFeedback = this._enableAnswerFeedback;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxAgentAnswerFeedbackSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableAnswerFeedback = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableAnswerFeedback = value.enableAnswerFeedback;
    }
  }

  // enable_answer_feedback - computed: false, optional: true, required: false
  private _enableAnswerFeedback?: boolean | cdktn.IResolvable; 
  public get enableAnswerFeedback() {
    return this.getBooleanAttribute('enable_answer_feedback');
  }
  public set enableAnswerFeedback(value: boolean | cdktn.IResolvable) {
    this._enableAnswerFeedback = value;
  }
  public resetEnableAnswerFeedback() {
    this._enableAnswerFeedback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableAnswerFeedbackInput() {
    return this._enableAnswerFeedback;
  }
}
export interface DialogflowCxAgentClientCertificateSettings {
  /**
  * The name of the SecretManager secret version resource storing the passphrase. 'passphrase' should be left unset if the private key is not encrypted. Format: **projects/{project}/secrets/{secret}/versions/{version}**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/dialogflow_cx_agent#passphrase DialogflowCxAgent#passphrase}
  */
  readonly passphrase?: string;
  /**
  * The name of the SecretManager secret version resource storing the private key encoded in PEM format. Format: **projects/{project}/secrets/{secret}/versions/{version}**
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/dialogflow_cx_agent#private_key DialogflowCxAgent#private_key}
  */
  readonly privateKey: string;
  /**
  * The ssl certificate encoded in PEM format. This string must include the begin header and end footer lines.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/dialogflow_cx_agent#ssl_certificate DialogflowCxAgent#ssl_certificate}
  */
  readonly sslCertificate: string;
}

export function dialogflowCxAgentClientCertificateSettingsToTerraform(struct?: DialogflowCxAgentClientCertificateSettingsOutputReference | DialogflowCxAgentClientCertificateSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    passphrase: cdktn.stringToTerraform(struct!.passphrase),
    private_key: cdktn.stringToTerraform(struct!.privateKey),
    ssl_certificate: cdktn.stringToTerraform(struct!.sslCertificate),
  }
}


export function dialogflowCxAgentClientCertificateSettingsToHclTerraform(struct?: DialogflowCxAgentClientCertificateSettingsOutputReference | DialogflowCxAgentClientCertificateSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
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
    ssl_certificate: {
      value: cdktn.stringToHclTerraform(struct!.sslCertificate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowCxAgentClientCertificateSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowCxAgentClientCertificateSettings | undefined {
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
    if (this._sslCertificate !== undefined) {
      hasAnyValues = true;
      internalValueResult.sslCertificate = this._sslCertificate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxAgentClientCertificateSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._passphrase = undefined;
      this._privateKey = undefined;
      this._sslCertificate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._passphrase = value.passphrase;
      this._privateKey = value.privateKey;
      this._sslCertificate = value.sslCertificate;
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

  // ssl_certificate - computed: false, optional: false, required: true
  private _sslCertificate?: string; 
  public get sslCertificate() {
    return this.getStringAttribute('ssl_certificate');
  }
  public set sslCertificate(value: string) {
    this._sslCertificate = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sslCertificateInput() {
    return this._sslCertificate;
  }
}
export interface DialogflowCxAgentGenAppBuilderSettings {
  /**
  * The full name of the Gen App Builder engine related to this agent if there is one.
  * Format: projects/{Project ID}/locations/{Location ID}/collections/{Collection ID}/engines/{Engine ID}
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/dialogflow_cx_agent#engine DialogflowCxAgent#engine}
  */
  readonly engine: string;
}

export function dialogflowCxAgentGenAppBuilderSettingsToTerraform(struct?: DialogflowCxAgentGenAppBuilderSettingsOutputReference | DialogflowCxAgentGenAppBuilderSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    engine: cdktn.stringToTerraform(struct!.engine),
  }
}


export function dialogflowCxAgentGenAppBuilderSettingsToHclTerraform(struct?: DialogflowCxAgentGenAppBuilderSettingsOutputReference | DialogflowCxAgentGenAppBuilderSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    engine: {
      value: cdktn.stringToHclTerraform(struct!.engine),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowCxAgentGenAppBuilderSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowCxAgentGenAppBuilderSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._engine !== undefined) {
      hasAnyValues = true;
      internalValueResult.engine = this._engine;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxAgentGenAppBuilderSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._engine = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._engine = value.engine;
    }
  }

  // engine - computed: false, optional: false, required: true
  private _engine?: string; 
  public get engine() {
    return this.getStringAttribute('engine');
  }
  public set engine(value: string) {
    this._engine = value;
  }
  // Temporarily expose input value. Use with caution.
  public get engineInput() {
    return this._engine;
  }
}
export interface DialogflowCxAgentGitIntegrationSettingsGithubSettings {
  /**
  * The access token used to authenticate the access to the GitHub repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/dialogflow_cx_agent#access_token DialogflowCxAgent#access_token}
  */
  readonly accessToken?: string;
  /**
  * A list of branches configured to be used from Dialogflow.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/dialogflow_cx_agent#branches DialogflowCxAgent#branches}
  */
  readonly branches?: string[];
  /**
  * The unique repository display name for the GitHub repository.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/dialogflow_cx_agent#display_name DialogflowCxAgent#display_name}
  */
  readonly displayName?: string;
  /**
  * The GitHub repository URI related to the agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/dialogflow_cx_agent#repository_uri DialogflowCxAgent#repository_uri}
  */
  readonly repositoryUri?: string;
  /**
  * The branch of the GitHub repository tracked for this agent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/dialogflow_cx_agent#tracking_branch DialogflowCxAgent#tracking_branch}
  */
  readonly trackingBranch?: string;
}

export function dialogflowCxAgentGitIntegrationSettingsGithubSettingsToTerraform(struct?: DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference | DialogflowCxAgentGitIntegrationSettingsGithubSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    access_token: cdktn.stringToTerraform(struct!.accessToken),
    branches: cdktn.listMapper(cdktn.stringToTerraform, false)(struct!.branches),
    display_name: cdktn.stringToTerraform(struct!.displayName),
    repository_uri: cdktn.stringToTerraform(struct!.repositoryUri),
    tracking_branch: cdktn.stringToTerraform(struct!.trackingBranch),
  }
}


export function dialogflowCxAgentGitIntegrationSettingsGithubSettingsToHclTerraform(struct?: DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference | DialogflowCxAgentGitIntegrationSettingsGithubSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    access_token: {
      value: cdktn.stringToHclTerraform(struct!.accessToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    branches: {
      value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(struct!.branches),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    display_name: {
      value: cdktn.stringToHclTerraform(struct!.displayName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repository_uri: {
      value: cdktn.stringToHclTerraform(struct!.repositoryUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tracking_branch: {
      value: cdktn.stringToHclTerraform(struct!.trackingBranch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowCxAgentGitIntegrationSettingsGithubSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessToken = this._accessToken;
    }
    if (this._branches !== undefined) {
      hasAnyValues = true;
      internalValueResult.branches = this._branches;
    }
    if (this._displayName !== undefined) {
      hasAnyValues = true;
      internalValueResult.displayName = this._displayName;
    }
    if (this._repositoryUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.repositoryUri = this._repositoryUri;
    }
    if (this._trackingBranch !== undefined) {
      hasAnyValues = true;
      internalValueResult.trackingBranch = this._trackingBranch;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxAgentGitIntegrationSettingsGithubSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessToken = undefined;
      this._branches = undefined;
      this._displayName = undefined;
      this._repositoryUri = undefined;
      this._trackingBranch = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessToken = value.accessToken;
      this._branches = value.branches;
      this._displayName = value.displayName;
      this._repositoryUri = value.repositoryUri;
      this._trackingBranch = value.trackingBranch;
    }
  }

  // access_token - computed: false, optional: true, required: false
  private _accessToken?: string; 
  public get accessToken() {
    return this.getStringAttribute('access_token');
  }
  public set accessToken(value: string) {
    this._accessToken = value;
  }
  public resetAccessToken() {
    this._accessToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenInput() {
    return this._accessToken;
  }

  // branches - computed: false, optional: true, required: false
  private _branches?: string[]; 
  public get branches() {
    return this.getListAttribute('branches');
  }
  public set branches(value: string[]) {
    this._branches = value;
  }
  public resetBranches() {
    this._branches = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get branchesInput() {
    return this._branches;
  }

  // display_name - computed: false, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // repository_uri - computed: false, optional: true, required: false
  private _repositoryUri?: string; 
  public get repositoryUri() {
    return this.getStringAttribute('repository_uri');
  }
  public set repositoryUri(value: string) {
    this._repositoryUri = value;
  }
  public resetRepositoryUri() {
    this._repositoryUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repositoryUriInput() {
    return this._repositoryUri;
  }

  // tracking_branch - computed: false, optional: true, required: false
  private _trackingBranch?: string; 
  public get trackingBranch() {
    return this.getStringAttribute('tracking_branch');
  }
  public set trackingBranch(value: string) {
    this._trackingBranch = value;
  }
  public resetTrackingBranch() {
    this._trackingBranch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackingBranchInput() {
    return this._trackingBranch;
  }
}
export interface DialogflowCxAgentGitIntegrationSettings {
  /**
  * github_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/dialogflow_cx_agent#github_settings DialogflowCxAgent#github_settings}
  */
  readonly githubSettings?: DialogflowCxAgentGitIntegrationSettingsGithubSettings;
}

export function dialogflowCxAgentGitIntegrationSettingsToTerraform(struct?: DialogflowCxAgentGitIntegrationSettingsOutputReference | DialogflowCxAgentGitIntegrationSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    github_settings: dialogflowCxAgentGitIntegrationSettingsGithubSettingsToTerraform(struct!.githubSettings),
  }
}


export function dialogflowCxAgentGitIntegrationSettingsToHclTerraform(struct?: DialogflowCxAgentGitIntegrationSettingsOutputReference | DialogflowCxAgentGitIntegrationSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    github_settings: {
      value: dialogflowCxAgentGitIntegrationSettingsGithubSettingsToHclTerraform(struct!.githubSettings),
      isBlock: true,
      type: "list",
      storageClassType: "DialogflowCxAgentGitIntegrationSettingsGithubSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowCxAgentGitIntegrationSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowCxAgentGitIntegrationSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._githubSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.githubSettings = this._githubSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxAgentGitIntegrationSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._githubSettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._githubSettings.internalValue = value.githubSettings;
    }
  }

  // github_settings - computed: false, optional: true, required: false
  private _githubSettings = new DialogflowCxAgentGitIntegrationSettingsGithubSettingsOutputReference(this, "github_settings");
  public get githubSettings() {
    return this._githubSettings;
  }
  public putGithubSettings(value: DialogflowCxAgentGitIntegrationSettingsGithubSettings) {
    this._githubSettings.internalValue = value;
  }
  public resetGithubSettings() {
    this._githubSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get githubSettingsInput() {
    return this._githubSettings.internalValue;
  }
}
export interface DialogflowCxAgentPersonalizationSettings {
  /**
  * Default end user metadata, used when processing DetectIntent requests. Recommended to be filled as a template instead of hard-coded value, for example { "age": "$session.params.age" }.
  * The data will be merged with the [QueryParameters.end_user_metadata](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/QueryParameters#FIELDS.end_user_metadata)
  * in [DetectIntentRequest.query_params](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/projects.locations.agents.sessions/detectIntent#body.request_body.FIELDS.query_params) during query processing.
  * 
  * This field uses JSON data as a string. The value provided must be a valid JSON representation documented in [Struct](https://protobuf.dev/reference/protobuf/google.protobuf/#struct).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/dialogflow_cx_agent#default_end_user_metadata DialogflowCxAgent#default_end_user_metadata}
  */
  readonly defaultEndUserMetadata?: string;
}

export function dialogflowCxAgentPersonalizationSettingsToTerraform(struct?: DialogflowCxAgentPersonalizationSettingsOutputReference | DialogflowCxAgentPersonalizationSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    default_end_user_metadata: cdktn.stringToTerraform(struct!.defaultEndUserMetadata),
  }
}


export function dialogflowCxAgentPersonalizationSettingsToHclTerraform(struct?: DialogflowCxAgentPersonalizationSettingsOutputReference | DialogflowCxAgentPersonalizationSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    default_end_user_metadata: {
      value: cdktn.stringToHclTerraform(struct!.defaultEndUserMetadata),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowCxAgentPersonalizationSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowCxAgentPersonalizationSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultEndUserMetadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultEndUserMetadata = this._defaultEndUserMetadata;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxAgentPersonalizationSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultEndUserMetadata = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultEndUserMetadata = value.defaultEndUserMetadata;
    }
  }

  // default_end_user_metadata - computed: false, optional: true, required: false
  private _defaultEndUserMetadata?: string; 
  public get defaultEndUserMetadata() {
    return this.getStringAttribute('default_end_user_metadata');
  }
  public set defaultEndUserMetadata(value: string) {
    this._defaultEndUserMetadata = value;
  }
  public resetDefaultEndUserMetadata() {
    this._defaultEndUserMetadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultEndUserMetadataInput() {
    return this._defaultEndUserMetadata;
  }
}
export interface DialogflowCxAgentSpeechToTextSettings {
  /**
  * Whether to use speech adaptation for speech recognition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/dialogflow_cx_agent#enable_speech_adaptation DialogflowCxAgent#enable_speech_adaptation}
  */
  readonly enableSpeechAdaptation?: boolean | cdktn.IResolvable;
}

export function dialogflowCxAgentSpeechToTextSettingsToTerraform(struct?: DialogflowCxAgentSpeechToTextSettingsOutputReference | DialogflowCxAgentSpeechToTextSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    enable_speech_adaptation: cdktn.booleanToTerraform(struct!.enableSpeechAdaptation),
  }
}


export function dialogflowCxAgentSpeechToTextSettingsToHclTerraform(struct?: DialogflowCxAgentSpeechToTextSettingsOutputReference | DialogflowCxAgentSpeechToTextSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    enable_speech_adaptation: {
      value: cdktn.booleanToHclTerraform(struct!.enableSpeechAdaptation),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowCxAgentSpeechToTextSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowCxAgentSpeechToTextSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableSpeechAdaptation !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableSpeechAdaptation = this._enableSpeechAdaptation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxAgentSpeechToTextSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enableSpeechAdaptation = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enableSpeechAdaptation = value.enableSpeechAdaptation;
    }
  }

  // enable_speech_adaptation - computed: false, optional: true, required: false
  private _enableSpeechAdaptation?: boolean | cdktn.IResolvable; 
  public get enableSpeechAdaptation() {
    return this.getBooleanAttribute('enable_speech_adaptation');
  }
  public set enableSpeechAdaptation(value: boolean | cdktn.IResolvable) {
    this._enableSpeechAdaptation = value;
  }
  public resetEnableSpeechAdaptation() {
    this._enableSpeechAdaptation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSpeechAdaptationInput() {
    return this._enableSpeechAdaptation;
  }
}
export interface DialogflowCxAgentTextToSpeechSettings {
  /**
  * Configuration of how speech should be synthesized, mapping from [language](https://cloud.google.com/dialogflow/cx/docs/reference/language) to [SynthesizeSpeechConfig](https://cloud.google.com/dialogflow/cx/docs/reference/rest/v3/projects.locations.agents#synthesizespeechconfig).
  * These settings affect:
  * * The phone gateway synthesize configuration set via Agent.text_to_speech_settings.
  * * How speech is synthesized when invoking session APIs. 'Agent.text_to_speech_settings' only applies if 'OutputAudioConfig.synthesize_speech_config' is not specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/dialogflow_cx_agent#synthesize_speech_configs DialogflowCxAgent#synthesize_speech_configs}
  */
  readonly synthesizeSpeechConfigs?: string;
}

export function dialogflowCxAgentTextToSpeechSettingsToTerraform(struct?: DialogflowCxAgentTextToSpeechSettingsOutputReference | DialogflowCxAgentTextToSpeechSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  return {
    synthesize_speech_configs: cdktn.stringToTerraform(struct!.synthesizeSpeechConfigs),
  }
}


export function dialogflowCxAgentTextToSpeechSettingsToHclTerraform(struct?: DialogflowCxAgentTextToSpeechSettingsOutputReference | DialogflowCxAgentTextToSpeechSettings): any {
  if (!cdktn.canInspect(struct) || cdktn.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktn.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdktn.io/docs/concepts/resources#references");
  }
  const attrs = {
    synthesize_speech_configs: {
      value: cdktn.stringToHclTerraform(struct!.synthesizeSpeechConfigs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DialogflowCxAgentTextToSpeechSettingsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DialogflowCxAgentTextToSpeechSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._synthesizeSpeechConfigs !== undefined) {
      hasAnyValues = true;
      internalValueResult.synthesizeSpeechConfigs = this._synthesizeSpeechConfigs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DialogflowCxAgentTextToSpeechSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._synthesizeSpeechConfigs = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._synthesizeSpeechConfigs = value.synthesizeSpeechConfigs;
    }
  }

  // synthesize_speech_configs - computed: false, optional: true, required: false
  private _synthesizeSpeechConfigs?: string; 
  public get synthesizeSpeechConfigs() {
    return this.getStringAttribute('synthesize_speech_configs');
  }
  public set synthesizeSpeechConfigs(value: string) {
    this._synthesizeSpeechConfigs = value;
  }
  public resetSynthesizeSpeechConfigs() {
    this._synthesizeSpeechConfigs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synthesizeSpeechConfigsInput() {
    return this._synthesizeSpeechConfigs;
  }
}
export interface DialogflowCxAgentTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/dialogflow_cx_agent#create DialogflowCxAgent#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/dialogflow_cx_agent#delete DialogflowCxAgent#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/dialogflow_cx_agent#update DialogflowCxAgent#update}
  */
  readonly update?: string;
}

export function dialogflowCxAgentTimeoutsToTerraform(struct?: DialogflowCxAgentTimeouts | cdktn.IResolvable): any {
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


export function dialogflowCxAgentTimeoutsToHclTerraform(struct?: DialogflowCxAgentTimeouts | cdktn.IResolvable): any {
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

export class DialogflowCxAgentTimeoutsOutputReference extends cdktn.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktn.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktn.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DialogflowCxAgentTimeouts | cdktn.IResolvable | undefined {
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

  public set internalValue(value: DialogflowCxAgentTimeouts | cdktn.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/dialogflow_cx_agent google_dialogflow_cx_agent}
*/
export class DialogflowCxAgent extends cdktn.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "google_dialogflow_cx_agent";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTN code for importing a DialogflowCxAgent resource upon running "cdktn plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DialogflowCxAgent to import
  * @param importFromId The id of the existing DialogflowCxAgent that should be imported. Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/dialogflow_cx_agent#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DialogflowCxAgent to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktn.TerraformProvider) {
        return new cdktn.ImportableResource(scope, importToId, { terraformResourceType: "google_dialogflow_cx_agent", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/dialogflow_cx_agent google_dialogflow_cx_agent} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DialogflowCxAgentConfig
  */
  public constructor(scope: Construct, id: string, config: DialogflowCxAgentConfig) {
    super(scope, id, {
      terraformResourceType: 'google_dialogflow_cx_agent',
      terraformGeneratorMetadata: {
        providerName: 'google',
        providerVersion: '7.37.0',
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
    this._avatarUri = config.avatarUri;
    this._defaultLanguageCode = config.defaultLanguageCode;
    this._deleteChatEngineOnDestroy = config.deleteChatEngineOnDestroy;
    this._deletionPolicy = config.deletionPolicy;
    this._description = config.description;
    this._displayName = config.displayName;
    this._enableMultiLanguageTraining = config.enableMultiLanguageTraining;
    this._enableSpellCorrection = config.enableSpellCorrection;
    this._enableStackdriverLogging = config.enableStackdriverLogging;
    this._id = config.id;
    this._location = config.location;
    this._locked = config.locked;
    this._project = config.project;
    this._securitySettings = config.securitySettings;
    this._startPlaybook = config.startPlaybook;
    this._supportedLanguageCodes = config.supportedLanguageCodes;
    this._timeZone = config.timeZone;
    this._advancedSettings.internalValue = config.advancedSettings;
    this._answerFeedbackSettings.internalValue = config.answerFeedbackSettings;
    this._clientCertificateSettings.internalValue = config.clientCertificateSettings;
    this._genAppBuilderSettings.internalValue = config.genAppBuilderSettings;
    this._gitIntegrationSettings.internalValue = config.gitIntegrationSettings;
    this._personalizationSettings.internalValue = config.personalizationSettings;
    this._speechToTextSettings.internalValue = config.speechToTextSettings;
    this._textToSpeechSettings.internalValue = config.textToSpeechSettings;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // avatar_uri - computed: false, optional: true, required: false
  private _avatarUri?: string; 
  public get avatarUri() {
    return this.getStringAttribute('avatar_uri');
  }
  public set avatarUri(value: string) {
    this._avatarUri = value;
  }
  public resetAvatarUri() {
    this._avatarUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get avatarUriInput() {
    return this._avatarUri;
  }

  // default_language_code - computed: false, optional: false, required: true
  private _defaultLanguageCode?: string; 
  public get defaultLanguageCode() {
    return this.getStringAttribute('default_language_code');
  }
  public set defaultLanguageCode(value: string) {
    this._defaultLanguageCode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultLanguageCodeInput() {
    return this._defaultLanguageCode;
  }

  // delete_chat_engine_on_destroy - computed: false, optional: true, required: false
  private _deleteChatEngineOnDestroy?: boolean | cdktn.IResolvable; 
  public get deleteChatEngineOnDestroy() {
    return this.getBooleanAttribute('delete_chat_engine_on_destroy');
  }
  public set deleteChatEngineOnDestroy(value: boolean | cdktn.IResolvable) {
    this._deleteChatEngineOnDestroy = value;
  }
  public resetDeleteChatEngineOnDestroy() {
    this._deleteChatEngineOnDestroy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteChatEngineOnDestroyInput() {
    return this._deleteChatEngineOnDestroy;
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

  // enable_multi_language_training - computed: false, optional: true, required: false
  private _enableMultiLanguageTraining?: boolean | cdktn.IResolvable; 
  public get enableMultiLanguageTraining() {
    return this.getBooleanAttribute('enable_multi_language_training');
  }
  public set enableMultiLanguageTraining(value: boolean | cdktn.IResolvable) {
    this._enableMultiLanguageTraining = value;
  }
  public resetEnableMultiLanguageTraining() {
    this._enableMultiLanguageTraining = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableMultiLanguageTrainingInput() {
    return this._enableMultiLanguageTraining;
  }

  // enable_spell_correction - computed: false, optional: true, required: false
  private _enableSpellCorrection?: boolean | cdktn.IResolvable; 
  public get enableSpellCorrection() {
    return this.getBooleanAttribute('enable_spell_correction');
  }
  public set enableSpellCorrection(value: boolean | cdktn.IResolvable) {
    this._enableSpellCorrection = value;
  }
  public resetEnableSpellCorrection() {
    this._enableSpellCorrection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSpellCorrectionInput() {
    return this._enableSpellCorrection;
  }

  // enable_stackdriver_logging - computed: false, optional: true, required: false
  private _enableStackdriverLogging?: boolean | cdktn.IResolvable; 
  public get enableStackdriverLogging() {
    return this.getBooleanAttribute('enable_stackdriver_logging');
  }
  public set enableStackdriverLogging(value: boolean | cdktn.IResolvable) {
    this._enableStackdriverLogging = value;
  }
  public resetEnableStackdriverLogging() {
    this._enableStackdriverLogging = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableStackdriverLoggingInput() {
    return this._enableStackdriverLogging;
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

  // locked - computed: false, optional: true, required: false
  private _locked?: boolean | cdktn.IResolvable; 
  public get locked() {
    return this.getBooleanAttribute('locked');
  }
  public set locked(value: boolean | cdktn.IResolvable) {
    this._locked = value;
  }
  public resetLocked() {
    this._locked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockedInput() {
    return this._locked;
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

  // satisfies_pzi - computed: true, optional: false, required: false
  public get satisfiesPzi() {
    return this.getBooleanAttribute('satisfies_pzi');
  }

  // satisfies_pzs - computed: true, optional: false, required: false
  public get satisfiesPzs() {
    return this.getBooleanAttribute('satisfies_pzs');
  }

  // security_settings - computed: false, optional: true, required: false
  private _securitySettings?: string; 
  public get securitySettings() {
    return this.getStringAttribute('security_settings');
  }
  public set securitySettings(value: string) {
    this._securitySettings = value;
  }
  public resetSecuritySettings() {
    this._securitySettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securitySettingsInput() {
    return this._securitySettings;
  }

  // start_flow - computed: true, optional: false, required: false
  public get startFlow() {
    return this.getStringAttribute('start_flow');
  }

  // start_playbook - computed: false, optional: true, required: false
  private _startPlaybook?: string; 
  public get startPlaybook() {
    return this.getStringAttribute('start_playbook');
  }
  public set startPlaybook(value: string) {
    this._startPlaybook = value;
  }
  public resetStartPlaybook() {
    this._startPlaybook = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startPlaybookInput() {
    return this._startPlaybook;
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

  // time_zone - computed: false, optional: false, required: true
  private _timeZone?: string; 
  public get timeZone() {
    return this.getStringAttribute('time_zone');
  }
  public set timeZone(value: string) {
    this._timeZone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeZoneInput() {
    return this._timeZone;
  }

  // advanced_settings - computed: false, optional: true, required: false
  private _advancedSettings = new DialogflowCxAgentAdvancedSettingsOutputReference(this, "advanced_settings");
  public get advancedSettings() {
    return this._advancedSettings;
  }
  public putAdvancedSettings(value: DialogflowCxAgentAdvancedSettings) {
    this._advancedSettings.internalValue = value;
  }
  public resetAdvancedSettings() {
    this._advancedSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedSettingsInput() {
    return this._advancedSettings.internalValue;
  }

  // answer_feedback_settings - computed: false, optional: true, required: false
  private _answerFeedbackSettings = new DialogflowCxAgentAnswerFeedbackSettingsOutputReference(this, "answer_feedback_settings");
  public get answerFeedbackSettings() {
    return this._answerFeedbackSettings;
  }
  public putAnswerFeedbackSettings(value: DialogflowCxAgentAnswerFeedbackSettings) {
    this._answerFeedbackSettings.internalValue = value;
  }
  public resetAnswerFeedbackSettings() {
    this._answerFeedbackSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get answerFeedbackSettingsInput() {
    return this._answerFeedbackSettings.internalValue;
  }

  // client_certificate_settings - computed: false, optional: true, required: false
  private _clientCertificateSettings = new DialogflowCxAgentClientCertificateSettingsOutputReference(this, "client_certificate_settings");
  public get clientCertificateSettings() {
    return this._clientCertificateSettings;
  }
  public putClientCertificateSettings(value: DialogflowCxAgentClientCertificateSettings) {
    this._clientCertificateSettings.internalValue = value;
  }
  public resetClientCertificateSettings() {
    this._clientCertificateSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCertificateSettingsInput() {
    return this._clientCertificateSettings.internalValue;
  }

  // gen_app_builder_settings - computed: false, optional: true, required: false
  private _genAppBuilderSettings = new DialogflowCxAgentGenAppBuilderSettingsOutputReference(this, "gen_app_builder_settings");
  public get genAppBuilderSettings() {
    return this._genAppBuilderSettings;
  }
  public putGenAppBuilderSettings(value: DialogflowCxAgentGenAppBuilderSettings) {
    this._genAppBuilderSettings.internalValue = value;
  }
  public resetGenAppBuilderSettings() {
    this._genAppBuilderSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get genAppBuilderSettingsInput() {
    return this._genAppBuilderSettings.internalValue;
  }

  // git_integration_settings - computed: false, optional: true, required: false
  private _gitIntegrationSettings = new DialogflowCxAgentGitIntegrationSettingsOutputReference(this, "git_integration_settings");
  public get gitIntegrationSettings() {
    return this._gitIntegrationSettings;
  }
  public putGitIntegrationSettings(value: DialogflowCxAgentGitIntegrationSettings) {
    this._gitIntegrationSettings.internalValue = value;
  }
  public resetGitIntegrationSettings() {
    this._gitIntegrationSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitIntegrationSettingsInput() {
    return this._gitIntegrationSettings.internalValue;
  }

  // personalization_settings - computed: false, optional: true, required: false
  private _personalizationSettings = new DialogflowCxAgentPersonalizationSettingsOutputReference(this, "personalization_settings");
  public get personalizationSettings() {
    return this._personalizationSettings;
  }
  public putPersonalizationSettings(value: DialogflowCxAgentPersonalizationSettings) {
    this._personalizationSettings.internalValue = value;
  }
  public resetPersonalizationSettings() {
    this._personalizationSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get personalizationSettingsInput() {
    return this._personalizationSettings.internalValue;
  }

  // speech_to_text_settings - computed: false, optional: true, required: false
  private _speechToTextSettings = new DialogflowCxAgentSpeechToTextSettingsOutputReference(this, "speech_to_text_settings");
  public get speechToTextSettings() {
    return this._speechToTextSettings;
  }
  public putSpeechToTextSettings(value: DialogflowCxAgentSpeechToTextSettings) {
    this._speechToTextSettings.internalValue = value;
  }
  public resetSpeechToTextSettings() {
    this._speechToTextSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get speechToTextSettingsInput() {
    return this._speechToTextSettings.internalValue;
  }

  // text_to_speech_settings - computed: false, optional: true, required: false
  private _textToSpeechSettings = new DialogflowCxAgentTextToSpeechSettingsOutputReference(this, "text_to_speech_settings");
  public get textToSpeechSettings() {
    return this._textToSpeechSettings;
  }
  public putTextToSpeechSettings(value: DialogflowCxAgentTextToSpeechSettings) {
    this._textToSpeechSettings.internalValue = value;
  }
  public resetTextToSpeechSettings() {
    this._textToSpeechSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get textToSpeechSettingsInput() {
    return this._textToSpeechSettings.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DialogflowCxAgentTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DialogflowCxAgentTimeouts) {
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
      avatar_uri: cdktn.stringToTerraform(this._avatarUri),
      default_language_code: cdktn.stringToTerraform(this._defaultLanguageCode),
      delete_chat_engine_on_destroy: cdktn.booleanToTerraform(this._deleteChatEngineOnDestroy),
      deletion_policy: cdktn.stringToTerraform(this._deletionPolicy),
      description: cdktn.stringToTerraform(this._description),
      display_name: cdktn.stringToTerraform(this._displayName),
      enable_multi_language_training: cdktn.booleanToTerraform(this._enableMultiLanguageTraining),
      enable_spell_correction: cdktn.booleanToTerraform(this._enableSpellCorrection),
      enable_stackdriver_logging: cdktn.booleanToTerraform(this._enableStackdriverLogging),
      id: cdktn.stringToTerraform(this._id),
      location: cdktn.stringToTerraform(this._location),
      locked: cdktn.booleanToTerraform(this._locked),
      project: cdktn.stringToTerraform(this._project),
      security_settings: cdktn.stringToTerraform(this._securitySettings),
      start_playbook: cdktn.stringToTerraform(this._startPlaybook),
      supported_language_codes: cdktn.listMapper(cdktn.stringToTerraform, false)(this._supportedLanguageCodes),
      time_zone: cdktn.stringToTerraform(this._timeZone),
      advanced_settings: dialogflowCxAgentAdvancedSettingsToTerraform(this._advancedSettings.internalValue),
      answer_feedback_settings: dialogflowCxAgentAnswerFeedbackSettingsToTerraform(this._answerFeedbackSettings.internalValue),
      client_certificate_settings: dialogflowCxAgentClientCertificateSettingsToTerraform(this._clientCertificateSettings.internalValue),
      gen_app_builder_settings: dialogflowCxAgentGenAppBuilderSettingsToTerraform(this._genAppBuilderSettings.internalValue),
      git_integration_settings: dialogflowCxAgentGitIntegrationSettingsToTerraform(this._gitIntegrationSettings.internalValue),
      personalization_settings: dialogflowCxAgentPersonalizationSettingsToTerraform(this._personalizationSettings.internalValue),
      speech_to_text_settings: dialogflowCxAgentSpeechToTextSettingsToTerraform(this._speechToTextSettings.internalValue),
      text_to_speech_settings: dialogflowCxAgentTextToSpeechSettingsToTerraform(this._textToSpeechSettings.internalValue),
      timeouts: dialogflowCxAgentTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      avatar_uri: {
        value: cdktn.stringToHclTerraform(this._avatarUri),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_language_code: {
        value: cdktn.stringToHclTerraform(this._defaultLanguageCode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delete_chat_engine_on_destroy: {
        value: cdktn.booleanToHclTerraform(this._deleteChatEngineOnDestroy),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      enable_multi_language_training: {
        value: cdktn.booleanToHclTerraform(this._enableMultiLanguageTraining),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_spell_correction: {
        value: cdktn.booleanToHclTerraform(this._enableSpellCorrection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_stackdriver_logging: {
        value: cdktn.booleanToHclTerraform(this._enableStackdriverLogging),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      locked: {
        value: cdktn.booleanToHclTerraform(this._locked),
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
      security_settings: {
        value: cdktn.stringToHclTerraform(this._securitySettings),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      start_playbook: {
        value: cdktn.stringToHclTerraform(this._startPlaybook),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      supported_language_codes: {
        value: cdktn.listMapperHcl(cdktn.stringToHclTerraform, false)(this._supportedLanguageCodes),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      time_zone: {
        value: cdktn.stringToHclTerraform(this._timeZone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      advanced_settings: {
        value: dialogflowCxAgentAdvancedSettingsToHclTerraform(this._advancedSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DialogflowCxAgentAdvancedSettingsList",
      },
      answer_feedback_settings: {
        value: dialogflowCxAgentAnswerFeedbackSettingsToHclTerraform(this._answerFeedbackSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DialogflowCxAgentAnswerFeedbackSettingsList",
      },
      client_certificate_settings: {
        value: dialogflowCxAgentClientCertificateSettingsToHclTerraform(this._clientCertificateSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DialogflowCxAgentClientCertificateSettingsList",
      },
      gen_app_builder_settings: {
        value: dialogflowCxAgentGenAppBuilderSettingsToHclTerraform(this._genAppBuilderSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DialogflowCxAgentGenAppBuilderSettingsList",
      },
      git_integration_settings: {
        value: dialogflowCxAgentGitIntegrationSettingsToHclTerraform(this._gitIntegrationSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DialogflowCxAgentGitIntegrationSettingsList",
      },
      personalization_settings: {
        value: dialogflowCxAgentPersonalizationSettingsToHclTerraform(this._personalizationSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DialogflowCxAgentPersonalizationSettingsList",
      },
      speech_to_text_settings: {
        value: dialogflowCxAgentSpeechToTextSettingsToHclTerraform(this._speechToTextSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DialogflowCxAgentSpeechToTextSettingsList",
      },
      text_to_speech_settings: {
        value: dialogflowCxAgentTextToSpeechSettingsToHclTerraform(this._textToSpeechSettings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DialogflowCxAgentTextToSpeechSettingsList",
      },
      timeouts: {
        value: dialogflowCxAgentTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DialogflowCxAgentTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
