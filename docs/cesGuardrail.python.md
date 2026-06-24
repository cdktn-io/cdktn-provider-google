# `cesGuardrail` Submodule <a name="`cesGuardrail` Submodule" id="@cdktn/provider-google.cesGuardrail"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CesGuardrail <a name="CesGuardrail" id="@cdktn/provider-google.cesGuardrail.CesGuardrail"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_guardrail google_ces_guardrail}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.Initializer"></a>

```python
from cdktn_provider_google import ces_guardrail

cesGuardrail.CesGuardrail(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  app: str,
  display_name: str,
  guardrail_id: str,
  location: str,
  action: CesGuardrailAction = None,
  code_callback: CesGuardrailCodeCallback = None,
  content_filter: CesGuardrailContentFilter = None,
  deletion_policy: str = None,
  description: str = None,
  enabled: bool | IResolvable = None,
  id: str = None,
  llm_policy: CesGuardrailLlmPolicy = None,
  llm_prompt_security: CesGuardrailLlmPromptSecurity = None,
  model_safety: CesGuardrailModelSafety = None,
  project: str = None,
  timeouts: CesGuardrailTimeouts = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.Initializer.parameter.app">app</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.Initializer.parameter.displayName">display_name</a></code> | <code>str</code> | Display name of the guardrail. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.Initializer.parameter.guardrailId">guardrail_id</a></code> | <code>str</code> | The ID to use for the guardrail, which will become the final component of the guardrail's resource name. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.Initializer.parameter.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.Initializer.parameter.action">action</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailAction">CesGuardrailAction</a></code> | action block. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.Initializer.parameter.codeCallback">code_callback</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallback">CesGuardrailCodeCallback</a></code> | code_callback block. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.Initializer.parameter.contentFilter">content_filter</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilter">CesGuardrailContentFilter</a></code> | content_filter block. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.Initializer.parameter.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.Initializer.parameter.description">description</a></code> | <code>str</code> | Description of the guardrail. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.Initializer.parameter.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether the guardrail is enabled. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_guardrail#id CesGuardrail#id}. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.Initializer.parameter.llmPolicy">llm_policy</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicy">CesGuardrailLlmPolicy</a></code> | llm_policy block. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.Initializer.parameter.llmPromptSecurity">llm_prompt_security</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurity">CesGuardrailLlmPromptSecurity</a></code> | llm_prompt_security block. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.Initializer.parameter.modelSafety">model_safety</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafety">CesGuardrailModelSafety</a></code> | model_safety block. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.Initializer.parameter.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_guardrail#project CesGuardrail#project}. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailTimeouts">CesGuardrailTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `app`<sup>Required</sup> <a name="app" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.Initializer.parameter.app"></a>

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_guardrail#app CesGuardrail#app}

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.Initializer.parameter.displayName"></a>

- *Type:* str

Display name of the guardrail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_guardrail#display_name CesGuardrail#display_name}

---

##### `guardrail_id`<sup>Required</sup> <a name="guardrail_id" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.Initializer.parameter.guardrailId"></a>

- *Type:* str

The ID to use for the guardrail, which will become the final component of the guardrail's resource name.

If not provided, a unique ID will be
automatically assigned for the guardrail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_guardrail#guardrail_id CesGuardrail#guardrail_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.Initializer.parameter.location"></a>

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_guardrail#location CesGuardrail#location}

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.Initializer.parameter.action"></a>

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailAction">CesGuardrailAction</a>

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_guardrail#action CesGuardrail#action}

---

##### `code_callback`<sup>Optional</sup> <a name="code_callback" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.Initializer.parameter.codeCallback"></a>

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallback">CesGuardrailCodeCallback</a>

code_callback block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_guardrail#code_callback CesGuardrail#code_callback}

---

##### `content_filter`<sup>Optional</sup> <a name="content_filter" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.Initializer.parameter.contentFilter"></a>

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilter">CesGuardrailContentFilter</a>

content_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_guardrail#content_filter CesGuardrail#content_filter}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.Initializer.parameter.deletionPolicy"></a>

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_guardrail#deletion_policy CesGuardrail#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.Initializer.parameter.description"></a>

- *Type:* str

Description of the guardrail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_guardrail#description CesGuardrail#description}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.Initializer.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Whether the guardrail is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_guardrail#enabled CesGuardrail#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_guardrail#id CesGuardrail#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `llm_policy`<sup>Optional</sup> <a name="llm_policy" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.Initializer.parameter.llmPolicy"></a>

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicy">CesGuardrailLlmPolicy</a>

llm_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_guardrail#llm_policy CesGuardrail#llm_policy}

---

##### `llm_prompt_security`<sup>Optional</sup> <a name="llm_prompt_security" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.Initializer.parameter.llmPromptSecurity"></a>

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurity">CesGuardrailLlmPromptSecurity</a>

llm_prompt_security block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_guardrail#llm_prompt_security CesGuardrail#llm_prompt_security}

---

##### `model_safety`<sup>Optional</sup> <a name="model_safety" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.Initializer.parameter.modelSafety"></a>

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafety">CesGuardrailModelSafety</a>

model_safety block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_guardrail#model_safety CesGuardrail#model_safety}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.Initializer.parameter.project"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_guardrail#project CesGuardrail#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailTimeouts">CesGuardrailTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_guardrail#timeouts CesGuardrail#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.putAction">put_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.putCodeCallback">put_code_callback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.putContentFilter">put_content_filter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.putLlmPolicy">put_llm_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.putLlmPromptSecurity">put_llm_prompt_security</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.putModelSafety">put_model_safety</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.resetAction">reset_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.resetCodeCallback">reset_code_callback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.resetContentFilter">reset_content_filter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.resetDeletionPolicy">reset_deletion_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.resetLlmPolicy">reset_llm_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.resetLlmPromptSecurity">reset_llm_prompt_security</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.resetModelSafety">reset_model_safety</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.resetProject">reset_project</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.resetTimeouts">reset_timeouts</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.with"></a>

```python
def with(
  mixins: *IMixin
) -> IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_action` <a name="put_action" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.putAction"></a>

```python
def put_action(
  generative_answer: CesGuardrailActionGenerativeAnswer = None,
  respond_immediately: CesGuardrailActionRespondImmediately = None,
  transfer_agent: CesGuardrailActionTransferAgent = None
) -> None
```

###### `generative_answer`<sup>Optional</sup> <a name="generative_answer" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.putAction.parameter.generativeAnswer"></a>

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswer">CesGuardrailActionGenerativeAnswer</a>

generative_answer block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_guardrail#generative_answer CesGuardrail#generative_answer}

---

###### `respond_immediately`<sup>Optional</sup> <a name="respond_immediately" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.putAction.parameter.respondImmediately"></a>

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediately">CesGuardrailActionRespondImmediately</a>

respond_immediately block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_guardrail#respond_immediately CesGuardrail#respond_immediately}

---

###### `transfer_agent`<sup>Optional</sup> <a name="transfer_agent" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.putAction.parameter.transferAgent"></a>

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgent">CesGuardrailActionTransferAgent</a>

transfer_agent block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_guardrail#transfer_agent CesGuardrail#transfer_agent}

---

##### `put_code_callback` <a name="put_code_callback" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.putCodeCallback"></a>

```python
def put_code_callback(
  after_agent_callback: CesGuardrailCodeCallbackAfterAgentCallback = None,
  after_model_callback: CesGuardrailCodeCallbackAfterModelCallback = None,
  before_agent_callback: CesGuardrailCodeCallbackBeforeAgentCallback = None,
  before_model_callback: CesGuardrailCodeCallbackBeforeModelCallback = None
) -> None
```

###### `after_agent_callback`<sup>Optional</sup> <a name="after_agent_callback" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.putCodeCallback.parameter.afterAgentCallback"></a>

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallback">CesGuardrailCodeCallbackAfterAgentCallback</a>

after_agent_callback block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_guardrail#after_agent_callback CesGuardrail#after_agent_callback}

---

###### `after_model_callback`<sup>Optional</sup> <a name="after_model_callback" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.putCodeCallback.parameter.afterModelCallback"></a>

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallback">CesGuardrailCodeCallbackAfterModelCallback</a>

after_model_callback block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_guardrail#after_model_callback CesGuardrail#after_model_callback}

---

###### `before_agent_callback`<sup>Optional</sup> <a name="before_agent_callback" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.putCodeCallback.parameter.beforeAgentCallback"></a>

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallback">CesGuardrailCodeCallbackBeforeAgentCallback</a>

before_agent_callback block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_guardrail#before_agent_callback CesGuardrail#before_agent_callback}

---

###### `before_model_callback`<sup>Optional</sup> <a name="before_model_callback" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.putCodeCallback.parameter.beforeModelCallback"></a>

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallback">CesGuardrailCodeCallbackBeforeModelCallback</a>

before_model_callback block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_guardrail#before_model_callback CesGuardrail#before_model_callback}

---

##### `put_content_filter` <a name="put_content_filter" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.putContentFilter"></a>

```python
def put_content_filter(
  match_type: str,
  banned_contents: typing.List[str] = None,
  banned_contents_in_agent_response: typing.List[str] = None,
  banned_contents_in_user_input: typing.List[str] = None,
  disregard_diacritics: bool | IResolvable = None
) -> None
```

###### `match_type`<sup>Required</sup> <a name="match_type" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.putContentFilter.parameter.matchType"></a>

- *Type:* str

Match type for the content filter. Possible values: SIMPLE_STRING_MATCH WORD_BOUNDARY_STRING_MATCH REGEXP_MATCH.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_guardrail#match_type CesGuardrail#match_type}

---

###### `banned_contents`<sup>Optional</sup> <a name="banned_contents" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.putContentFilter.parameter.bannedContents"></a>

- *Type:* typing.List[str]

List of banned phrases. Applies to both user inputs and agent responses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_guardrail#banned_contents CesGuardrail#banned_contents}

---

###### `banned_contents_in_agent_response`<sup>Optional</sup> <a name="banned_contents_in_agent_response" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.putContentFilter.parameter.bannedContentsInAgentResponse"></a>

- *Type:* typing.List[str]

List of banned phrases. Applies only to agent responses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_guardrail#banned_contents_in_agent_response CesGuardrail#banned_contents_in_agent_response}

---

###### `banned_contents_in_user_input`<sup>Optional</sup> <a name="banned_contents_in_user_input" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.putContentFilter.parameter.bannedContentsInUserInput"></a>

- *Type:* typing.List[str]

List of banned phrases. Applies only to user inputs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_guardrail#banned_contents_in_user_input CesGuardrail#banned_contents_in_user_input}

---

###### `disregard_diacritics`<sup>Optional</sup> <a name="disregard_diacritics" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.putContentFilter.parameter.disregardDiacritics"></a>

- *Type:* bool | cdktn.IResolvable

If true, diacritics are ignored during matching.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_guardrail#disregard_diacritics CesGuardrail#disregard_diacritics}

---

##### `put_llm_policy` <a name="put_llm_policy" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.putLlmPolicy"></a>

```python
def put_llm_policy(
  policy_scope: str,
  prompt: str,
  allow_short_utterance: bool | IResolvable = None,
  fail_open: bool | IResolvable = None,
  max_conversation_messages: typing.Union[int, float] = None,
  model_settings: CesGuardrailLlmPolicyModelSettings = None
) -> None
```

###### `policy_scope`<sup>Required</sup> <a name="policy_scope" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.putLlmPolicy.parameter.policyScope"></a>

- *Type:* str

Defines when to apply the policy check during the conversation.

If set to
'POLICY_SCOPE_UNSPECIFIED', the policy will be applied to the user input.
When applying the policy to the agent response, additional latency will
be introduced before the agent can respond.
Possible values:
USER_QUERY
AGENT_RESPONSE
USER_QUERY_AND_AGENT_RESPONSE Possible values: ["USER_QUERY", "AGENT_RESPONSE", "USER_QUERY_AND_AGENT_RESPONSE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_guardrail#policy_scope CesGuardrail#policy_scope}

---

###### `prompt`<sup>Required</sup> <a name="prompt" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.putLlmPolicy.parameter.prompt"></a>

- *Type:* str

Policy prompt.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_guardrail#prompt CesGuardrail#prompt}

---

###### `allow_short_utterance`<sup>Optional</sup> <a name="allow_short_utterance" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.putLlmPolicy.parameter.allowShortUtterance"></a>

- *Type:* bool | cdktn.IResolvable

By default, the LLM policy check is bypassed for short utterances.

Enabling this setting applies the policy check to all utterances,
including those that would normally be skipped.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_guardrail#allow_short_utterance CesGuardrail#allow_short_utterance}

---

###### `fail_open`<sup>Optional</sup> <a name="fail_open" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.putLlmPolicy.parameter.failOpen"></a>

- *Type:* bool | cdktn.IResolvable

If an error occurs during the policy check, fail open and do not trigger the guardrail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_guardrail#fail_open CesGuardrail#fail_open}

---

###### `max_conversation_messages`<sup>Optional</sup> <a name="max_conversation_messages" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.putLlmPolicy.parameter.maxConversationMessages"></a>

- *Type:* typing.Union[int, float]

When checking this policy, consider the last 'n' messages in the conversation.

When not set a default value of 10 will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_guardrail#max_conversation_messages CesGuardrail#max_conversation_messages}

---

###### `model_settings`<sup>Optional</sup> <a name="model_settings" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.putLlmPolicy.parameter.modelSettings"></a>

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettings">CesGuardrailLlmPolicyModelSettings</a>

model_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_guardrail#model_settings CesGuardrail#model_settings}

---

##### `put_llm_prompt_security` <a name="put_llm_prompt_security" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.putLlmPromptSecurity"></a>

```python
def put_llm_prompt_security(
  custom_policy: CesGuardrailLlmPromptSecurityCustomPolicy = None,
  default_settings: CesGuardrailLlmPromptSecurityDefaultSettings = None,
  fail_open: bool | IResolvable = None
) -> None
```

###### `custom_policy`<sup>Optional</sup> <a name="custom_policy" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.putLlmPromptSecurity.parameter.customPolicy"></a>

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicy">CesGuardrailLlmPromptSecurityCustomPolicy</a>

custom_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_guardrail#custom_policy CesGuardrail#custom_policy}

---

###### `default_settings`<sup>Optional</sup> <a name="default_settings" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.putLlmPromptSecurity.parameter.defaultSettings"></a>

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettings">CesGuardrailLlmPromptSecurityDefaultSettings</a>

default_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_guardrail#default_settings CesGuardrail#default_settings}

---

###### `fail_open`<sup>Optional</sup> <a name="fail_open" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.putLlmPromptSecurity.parameter.failOpen"></a>

- *Type:* bool | cdktn.IResolvable

Determines the behavior when the guardrail encounters an LLM error.

* If true: the guardrail is bypassed.
* If false (default): the guardrail triggers/blocks.
  Note: If a custom policy is provided, this field is ignored in favor of
  the policy's 'failOpen' configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_guardrail#fail_open CesGuardrail#fail_open}

---

##### `put_model_safety` <a name="put_model_safety" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.putModelSafety"></a>

```python
def put_model_safety(
  safety_settings: IResolvable | typing.List[CesGuardrailModelSafetySafetySettings]
) -> None
```

###### `safety_settings`<sup>Required</sup> <a name="safety_settings" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.putModelSafety.parameter.safetySettings"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettings">CesGuardrailModelSafetySafetySettings</a>]

safety_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_guardrail#safety_settings CesGuardrail#safety_settings}

---

##### `put_timeouts` <a name="put_timeouts" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_guardrail#create CesGuardrail#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_guardrail#delete CesGuardrail#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_guardrail#update CesGuardrail#update}.

---

##### `reset_action` <a name="reset_action" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.resetAction"></a>

```python
def reset_action() -> None
```

##### `reset_code_callback` <a name="reset_code_callback" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.resetCodeCallback"></a>

```python
def reset_code_callback() -> None
```

##### `reset_content_filter` <a name="reset_content_filter" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.resetContentFilter"></a>

```python
def reset_content_filter() -> None
```

##### `reset_deletion_policy` <a name="reset_deletion_policy" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.resetDeletionPolicy"></a>

```python
def reset_deletion_policy() -> None
```

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_llm_policy` <a name="reset_llm_policy" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.resetLlmPolicy"></a>

```python
def reset_llm_policy() -> None
```

##### `reset_llm_prompt_security` <a name="reset_llm_prompt_security" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.resetLlmPromptSecurity"></a>

```python
def reset_llm_prompt_security() -> None
```

##### `reset_model_safety` <a name="reset_model_safety" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.resetModelSafety"></a>

```python
def reset_model_safety() -> None
```

##### `reset_project` <a name="reset_project" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.resetProject"></a>

```python
def reset_project() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a CesGuardrail resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.isConstruct"></a>

```python
from cdktn_provider_google import ces_guardrail

cesGuardrail.CesGuardrail.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.isTerraformElement"></a>

```python
from cdktn_provider_google import ces_guardrail

cesGuardrail.CesGuardrail.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.isTerraformResource"></a>

```python
from cdktn_provider_google import ces_guardrail

cesGuardrail.CesGuardrail.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.generateConfigForImport"></a>

```python
from cdktn_provider_google import ces_guardrail

cesGuardrail.CesGuardrail.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a CesGuardrail resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the CesGuardrail to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing CesGuardrail that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_guardrail#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the CesGuardrail to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.action">action</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference">CesGuardrailActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.codeCallback">code_callback</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference">CesGuardrailCodeCallbackOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.contentFilter">content_filter</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference">CesGuardrailContentFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.createTime">create_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.etag">etag</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.llmPolicy">llm_policy</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference">CesGuardrailLlmPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.llmPromptSecurity">llm_prompt_security</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference">CesGuardrailLlmPromptSecurityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.modelSafety">model_safety</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference">CesGuardrailModelSafetyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference">CesGuardrailTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.updateTime">update_time</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.actionInput">action_input</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailAction">CesGuardrailAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.appInput">app_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.codeCallbackInput">code_callback_input</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallback">CesGuardrailCodeCallback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.contentFilterInput">content_filter_input</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilter">CesGuardrailContentFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.deletionPolicyInput">deletion_policy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.displayNameInput">display_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.guardrailIdInput">guardrail_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.llmPolicyInput">llm_policy_input</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicy">CesGuardrailLlmPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.llmPromptSecurityInput">llm_prompt_security_input</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurity">CesGuardrailLlmPromptSecurity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.locationInput">location_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.modelSafetyInput">model_safety_input</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafety">CesGuardrailModelSafety</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.projectInput">project_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.timeoutsInput">timeouts_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailTimeouts">CesGuardrailTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.app">app</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.guardrailId">guardrail_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.location">location</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.project">project</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.action"></a>

```python
action: CesGuardrailActionOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference">CesGuardrailActionOutputReference</a>

---

##### `code_callback`<sup>Required</sup> <a name="code_callback" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.codeCallback"></a>

```python
code_callback: CesGuardrailCodeCallbackOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference">CesGuardrailCodeCallbackOutputReference</a>

---

##### `content_filter`<sup>Required</sup> <a name="content_filter" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.contentFilter"></a>

```python
content_filter: CesGuardrailContentFilterOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference">CesGuardrailContentFilterOutputReference</a>

---

##### `create_time`<sup>Required</sup> <a name="create_time" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.createTime"></a>

```python
create_time: str
```

- *Type:* str

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.etag"></a>

```python
etag: str
```

- *Type:* str

---

##### `llm_policy`<sup>Required</sup> <a name="llm_policy" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.llmPolicy"></a>

```python
llm_policy: CesGuardrailLlmPolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference">CesGuardrailLlmPolicyOutputReference</a>

---

##### `llm_prompt_security`<sup>Required</sup> <a name="llm_prompt_security" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.llmPromptSecurity"></a>

```python
llm_prompt_security: CesGuardrailLlmPromptSecurityOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference">CesGuardrailLlmPromptSecurityOutputReference</a>

---

##### `model_safety`<sup>Required</sup> <a name="model_safety" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.modelSafety"></a>

```python
model_safety: CesGuardrailModelSafetyOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference">CesGuardrailModelSafetyOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.timeouts"></a>

```python
timeouts: CesGuardrailTimeoutsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference">CesGuardrailTimeoutsOutputReference</a>

---

##### `update_time`<sup>Required</sup> <a name="update_time" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.updateTime"></a>

```python
update_time: str
```

- *Type:* str

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.actionInput"></a>

```python
action_input: CesGuardrailAction
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailAction">CesGuardrailAction</a>

---

##### `app_input`<sup>Optional</sup> <a name="app_input" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.appInput"></a>

```python
app_input: str
```

- *Type:* str

---

##### `code_callback_input`<sup>Optional</sup> <a name="code_callback_input" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.codeCallbackInput"></a>

```python
code_callback_input: CesGuardrailCodeCallback
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallback">CesGuardrailCodeCallback</a>

---

##### `content_filter_input`<sup>Optional</sup> <a name="content_filter_input" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.contentFilterInput"></a>

```python
content_filter_input: CesGuardrailContentFilter
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilter">CesGuardrailContentFilter</a>

---

##### `deletion_policy_input`<sup>Optional</sup> <a name="deletion_policy_input" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.deletionPolicyInput"></a>

```python
deletion_policy_input: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `display_name_input`<sup>Optional</sup> <a name="display_name_input" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.displayNameInput"></a>

```python
display_name_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `guardrail_id_input`<sup>Optional</sup> <a name="guardrail_id_input" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.guardrailIdInput"></a>

```python
guardrail_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `llm_policy_input`<sup>Optional</sup> <a name="llm_policy_input" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.llmPolicyInput"></a>

```python
llm_policy_input: CesGuardrailLlmPolicy
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicy">CesGuardrailLlmPolicy</a>

---

##### `llm_prompt_security_input`<sup>Optional</sup> <a name="llm_prompt_security_input" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.llmPromptSecurityInput"></a>

```python
llm_prompt_security_input: CesGuardrailLlmPromptSecurity
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurity">CesGuardrailLlmPromptSecurity</a>

---

##### `location_input`<sup>Optional</sup> <a name="location_input" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.locationInput"></a>

```python
location_input: str
```

- *Type:* str

---

##### `model_safety_input`<sup>Optional</sup> <a name="model_safety_input" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.modelSafetyInput"></a>

```python
model_safety_input: CesGuardrailModelSafety
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafety">CesGuardrailModelSafety</a>

---

##### `project_input`<sup>Optional</sup> <a name="project_input" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.projectInput"></a>

```python
project_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.timeoutsInput"></a>

```python
timeouts_input: IResolvable | CesGuardrailTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailTimeouts">CesGuardrailTimeouts</a>

---

##### `app`<sup>Required</sup> <a name="app" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.app"></a>

```python
app: str
```

- *Type:* str

---

##### `deletion_policy`<sup>Required</sup> <a name="deletion_policy" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `guardrail_id`<sup>Required</sup> <a name="guardrail_id" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.guardrailId"></a>

```python
guardrail_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.location"></a>

```python
location: str
```

- *Type:* str

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.project"></a>

```python
project: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### CesGuardrailAction <a name="CesGuardrailAction" id="@cdktn/provider-google.cesGuardrail.CesGuardrailAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesGuardrail.CesGuardrailAction.Initializer"></a>

```python
from cdktn_provider_google import ces_guardrail

cesGuardrail.CesGuardrailAction(
  generative_answer: CesGuardrailActionGenerativeAnswer = None,
  respond_immediately: CesGuardrailActionRespondImmediately = None,
  transfer_agent: CesGuardrailActionTransferAgent = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailAction.property.generativeAnswer">generative_answer</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswer">CesGuardrailActionGenerativeAnswer</a></code> | generative_answer block. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailAction.property.respondImmediately">respond_immediately</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediately">CesGuardrailActionRespondImmediately</a></code> | respond_immediately block. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailAction.property.transferAgent">transfer_agent</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgent">CesGuardrailActionTransferAgent</a></code> | transfer_agent block. |

---

##### `generative_answer`<sup>Optional</sup> <a name="generative_answer" id="@cdktn/provider-google.cesGuardrail.CesGuardrailAction.property.generativeAnswer"></a>

```python
generative_answer: CesGuardrailActionGenerativeAnswer
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswer">CesGuardrailActionGenerativeAnswer</a>

generative_answer block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_guardrail#generative_answer CesGuardrail#generative_answer}

---

##### `respond_immediately`<sup>Optional</sup> <a name="respond_immediately" id="@cdktn/provider-google.cesGuardrail.CesGuardrailAction.property.respondImmediately"></a>

```python
respond_immediately: CesGuardrailActionRespondImmediately
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediately">CesGuardrailActionRespondImmediately</a>

respond_immediately block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_guardrail#respond_immediately CesGuardrail#respond_immediately}

---

##### `transfer_agent`<sup>Optional</sup> <a name="transfer_agent" id="@cdktn/provider-google.cesGuardrail.CesGuardrailAction.property.transferAgent"></a>

```python
transfer_agent: CesGuardrailActionTransferAgent
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgent">CesGuardrailActionTransferAgent</a>

transfer_agent block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_guardrail#transfer_agent CesGuardrail#transfer_agent}

---

### CesGuardrailActionGenerativeAnswer <a name="CesGuardrailActionGenerativeAnswer" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswer.Initializer"></a>

```python
from cdktn_provider_google import ces_guardrail

cesGuardrail.CesGuardrailActionGenerativeAnswer(
  prompt: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswer.property.prompt">prompt</a></code> | <code>str</code> | The prompt to use for the generative answer. |

---

##### `prompt`<sup>Required</sup> <a name="prompt" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswer.property.prompt"></a>

```python
prompt: str
```

- *Type:* str

The prompt to use for the generative answer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_guardrail#prompt CesGuardrail#prompt}

---

### CesGuardrailActionRespondImmediately <a name="CesGuardrailActionRespondImmediately" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediately"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediately.Initializer"></a>

```python
from cdktn_provider_google import ces_guardrail

cesGuardrail.CesGuardrailActionRespondImmediately(
  responses: IResolvable | typing.List[CesGuardrailActionRespondImmediatelyResponses]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediately.property.responses">responses</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponses">CesGuardrailActionRespondImmediatelyResponses</a>]</code> | responses block. |

---

##### `responses`<sup>Required</sup> <a name="responses" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediately.property.responses"></a>

```python
responses: IResolvable | typing.List[CesGuardrailActionRespondImmediatelyResponses]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponses">CesGuardrailActionRespondImmediatelyResponses</a>]

responses block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_guardrail#responses CesGuardrail#responses}

---

### CesGuardrailActionRespondImmediatelyResponses <a name="CesGuardrailActionRespondImmediatelyResponses" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponses"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponses.Initializer"></a>

```python
from cdktn_provider_google import ces_guardrail

cesGuardrail.CesGuardrailActionRespondImmediatelyResponses(
  text: str,
  disabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponses.property.text">text</a></code> | <code>str</code> | Text for the agent to respond with. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponses.property.disabled">disabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether the response is disabled. Disabled responses are not used by the agent. |

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponses.property.text"></a>

```python
text: str
```

- *Type:* str

Text for the agent to respond with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_guardrail#text CesGuardrail#text}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponses.property.disabled"></a>

```python
disabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether the response is disabled. Disabled responses are not used by the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_guardrail#disabled CesGuardrail#disabled}

---

### CesGuardrailActionTransferAgent <a name="CesGuardrailActionTransferAgent" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgent.Initializer"></a>

```python
from cdktn_provider_google import ces_guardrail

cesGuardrail.CesGuardrailActionTransferAgent(
  agent: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgent.property.agent">agent</a></code> | <code>str</code> | The name of the agent to transfer the conversation to. |

---

##### `agent`<sup>Required</sup> <a name="agent" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgent.property.agent"></a>

```python
agent: str
```

- *Type:* str

The name of the agent to transfer the conversation to.

The agent must be
in the same app as the current agent.
Format:
'projects/{project}/locations/{location}/apps/{app}/agents/{agent}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_guardrail#agent CesGuardrail#agent}

---

### CesGuardrailCodeCallback <a name="CesGuardrailCodeCallback" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallback"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallback.Initializer"></a>

```python
from cdktn_provider_google import ces_guardrail

cesGuardrail.CesGuardrailCodeCallback(
  after_agent_callback: CesGuardrailCodeCallbackAfterAgentCallback = None,
  after_model_callback: CesGuardrailCodeCallbackAfterModelCallback = None,
  before_agent_callback: CesGuardrailCodeCallbackBeforeAgentCallback = None,
  before_model_callback: CesGuardrailCodeCallbackBeforeModelCallback = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallback.property.afterAgentCallback">after_agent_callback</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallback">CesGuardrailCodeCallbackAfterAgentCallback</a></code> | after_agent_callback block. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallback.property.afterModelCallback">after_model_callback</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallback">CesGuardrailCodeCallbackAfterModelCallback</a></code> | after_model_callback block. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallback.property.beforeAgentCallback">before_agent_callback</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallback">CesGuardrailCodeCallbackBeforeAgentCallback</a></code> | before_agent_callback block. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallback.property.beforeModelCallback">before_model_callback</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallback">CesGuardrailCodeCallbackBeforeModelCallback</a></code> | before_model_callback block. |

---

##### `after_agent_callback`<sup>Optional</sup> <a name="after_agent_callback" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallback.property.afterAgentCallback"></a>

```python
after_agent_callback: CesGuardrailCodeCallbackAfterAgentCallback
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallback">CesGuardrailCodeCallbackAfterAgentCallback</a>

after_agent_callback block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_guardrail#after_agent_callback CesGuardrail#after_agent_callback}

---

##### `after_model_callback`<sup>Optional</sup> <a name="after_model_callback" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallback.property.afterModelCallback"></a>

```python
after_model_callback: CesGuardrailCodeCallbackAfterModelCallback
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallback">CesGuardrailCodeCallbackAfterModelCallback</a>

after_model_callback block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_guardrail#after_model_callback CesGuardrail#after_model_callback}

---

##### `before_agent_callback`<sup>Optional</sup> <a name="before_agent_callback" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallback.property.beforeAgentCallback"></a>

```python
before_agent_callback: CesGuardrailCodeCallbackBeforeAgentCallback
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallback">CesGuardrailCodeCallbackBeforeAgentCallback</a>

before_agent_callback block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_guardrail#before_agent_callback CesGuardrail#before_agent_callback}

---

##### `before_model_callback`<sup>Optional</sup> <a name="before_model_callback" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallback.property.beforeModelCallback"></a>

```python
before_model_callback: CesGuardrailCodeCallbackBeforeModelCallback
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallback">CesGuardrailCodeCallbackBeforeModelCallback</a>

before_model_callback block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_guardrail#before_model_callback CesGuardrail#before_model_callback}

---

### CesGuardrailCodeCallbackAfterAgentCallback <a name="CesGuardrailCodeCallbackAfterAgentCallback" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallback"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallback.Initializer"></a>

```python
from cdktn_provider_google import ces_guardrail

cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallback(
  python_code: str,
  description: str = None,
  disabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallback.property.pythonCode">python_code</a></code> | <code>str</code> | The python code to execute for the callback. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallback.property.description">description</a></code> | <code>str</code> | Human-readable description of the callback. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallback.property.disabled">disabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether the callback is disabled. Disabled callbacks are ignored by the agent. |

---

##### `python_code`<sup>Required</sup> <a name="python_code" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallback.property.pythonCode"></a>

```python
python_code: str
```

- *Type:* str

The python code to execute for the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_guardrail#python_code CesGuardrail#python_code}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallback.property.description"></a>

```python
description: str
```

- *Type:* str

Human-readable description of the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_guardrail#description CesGuardrail#description}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallback.property.disabled"></a>

```python
disabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether the callback is disabled. Disabled callbacks are ignored by the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_guardrail#disabled CesGuardrail#disabled}

---

### CesGuardrailCodeCallbackAfterModelCallback <a name="CesGuardrailCodeCallbackAfterModelCallback" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallback"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallback.Initializer"></a>

```python
from cdktn_provider_google import ces_guardrail

cesGuardrail.CesGuardrailCodeCallbackAfterModelCallback(
  python_code: str,
  description: str = None,
  disabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallback.property.pythonCode">python_code</a></code> | <code>str</code> | The python code to execute for the callback. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallback.property.description">description</a></code> | <code>str</code> | Human-readable description of the callback. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallback.property.disabled">disabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether the callback is disabled. Disabled callbacks are ignored by the agent. |

---

##### `python_code`<sup>Required</sup> <a name="python_code" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallback.property.pythonCode"></a>

```python
python_code: str
```

- *Type:* str

The python code to execute for the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_guardrail#python_code CesGuardrail#python_code}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallback.property.description"></a>

```python
description: str
```

- *Type:* str

Human-readable description of the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_guardrail#description CesGuardrail#description}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallback.property.disabled"></a>

```python
disabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether the callback is disabled. Disabled callbacks are ignored by the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_guardrail#disabled CesGuardrail#disabled}

---

### CesGuardrailCodeCallbackBeforeAgentCallback <a name="CesGuardrailCodeCallbackBeforeAgentCallback" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallback"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallback.Initializer"></a>

```python
from cdktn_provider_google import ces_guardrail

cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallback(
  python_code: str,
  description: str = None,
  disabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallback.property.pythonCode">python_code</a></code> | <code>str</code> | The python code to execute for the callback. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallback.property.description">description</a></code> | <code>str</code> | Human-readable description of the callback. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallback.property.disabled">disabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether the callback is disabled. Disabled callbacks are ignored by the agent. |

---

##### `python_code`<sup>Required</sup> <a name="python_code" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallback.property.pythonCode"></a>

```python
python_code: str
```

- *Type:* str

The python code to execute for the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_guardrail#python_code CesGuardrail#python_code}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallback.property.description"></a>

```python
description: str
```

- *Type:* str

Human-readable description of the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_guardrail#description CesGuardrail#description}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallback.property.disabled"></a>

```python
disabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether the callback is disabled. Disabled callbacks are ignored by the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_guardrail#disabled CesGuardrail#disabled}

---

### CesGuardrailCodeCallbackBeforeModelCallback <a name="CesGuardrailCodeCallbackBeforeModelCallback" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallback"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallback.Initializer"></a>

```python
from cdktn_provider_google import ces_guardrail

cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallback(
  python_code: str,
  description: str = None,
  disabled: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallback.property.pythonCode">python_code</a></code> | <code>str</code> | The python code to execute for the callback. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallback.property.description">description</a></code> | <code>str</code> | Human-readable description of the callback. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallback.property.disabled">disabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether the callback is disabled. Disabled callbacks are ignored by the agent. |

---

##### `python_code`<sup>Required</sup> <a name="python_code" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallback.property.pythonCode"></a>

```python
python_code: str
```

- *Type:* str

The python code to execute for the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_guardrail#python_code CesGuardrail#python_code}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallback.property.description"></a>

```python
description: str
```

- *Type:* str

Human-readable description of the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_guardrail#description CesGuardrail#description}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallback.property.disabled"></a>

```python
disabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether the callback is disabled. Disabled callbacks are ignored by the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_guardrail#disabled CesGuardrail#disabled}

---

### CesGuardrailConfig <a name="CesGuardrailConfig" id="@cdktn/provider-google.cesGuardrail.CesGuardrailConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.Initializer"></a>

```python
from cdktn_provider_google import ces_guardrail

cesGuardrail.CesGuardrailConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  app: str,
  display_name: str,
  guardrail_id: str,
  location: str,
  action: CesGuardrailAction = None,
  code_callback: CesGuardrailCodeCallback = None,
  content_filter: CesGuardrailContentFilter = None,
  deletion_policy: str = None,
  description: str = None,
  enabled: bool | IResolvable = None,
  id: str = None,
  llm_policy: CesGuardrailLlmPolicy = None,
  llm_prompt_security: CesGuardrailLlmPromptSecurity = None,
  model_safety: CesGuardrailModelSafety = None,
  project: str = None,
  timeouts: CesGuardrailTimeouts = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.app">app</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.displayName">display_name</a></code> | <code>str</code> | Display name of the guardrail. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.guardrailId">guardrail_id</a></code> | <code>str</code> | The ID to use for the guardrail, which will become the final component of the guardrail's resource name. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.location">location</a></code> | <code>str</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.action">action</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailAction">CesGuardrailAction</a></code> | action block. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.codeCallback">code_callback</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallback">CesGuardrailCodeCallback</a></code> | code_callback block. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.contentFilter">content_filter</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilter">CesGuardrailContentFilter</a></code> | content_filter block. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.deletionPolicy">deletion_policy</a></code> | <code>str</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.description">description</a></code> | <code>str</code> | Description of the guardrail. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Whether the guardrail is enabled. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_guardrail#id CesGuardrail#id}. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.llmPolicy">llm_policy</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicy">CesGuardrailLlmPolicy</a></code> | llm_policy block. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.llmPromptSecurity">llm_prompt_security</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurity">CesGuardrailLlmPromptSecurity</a></code> | llm_prompt_security block. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.modelSafety">model_safety</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafety">CesGuardrailModelSafety</a></code> | model_safety block. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.project">project</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_guardrail#project CesGuardrail#project}. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailTimeouts">CesGuardrailTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `app`<sup>Required</sup> <a name="app" id="@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.app"></a>

```python
app: str
```

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_guardrail#app CesGuardrail#app}

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

Display name of the guardrail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_guardrail#display_name CesGuardrail#display_name}

---

##### `guardrail_id`<sup>Required</sup> <a name="guardrail_id" id="@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.guardrailId"></a>

```python
guardrail_id: str
```

- *Type:* str

The ID to use for the guardrail, which will become the final component of the guardrail's resource name.

If not provided, a unique ID will be
automatically assigned for the guardrail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_guardrail#guardrail_id CesGuardrail#guardrail_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.location"></a>

```python
location: str
```

- *Type:* str

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_guardrail#location CesGuardrail#location}

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.action"></a>

```python
action: CesGuardrailAction
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailAction">CesGuardrailAction</a>

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_guardrail#action CesGuardrail#action}

---

##### `code_callback`<sup>Optional</sup> <a name="code_callback" id="@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.codeCallback"></a>

```python
code_callback: CesGuardrailCodeCallback
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallback">CesGuardrailCodeCallback</a>

code_callback block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_guardrail#code_callback CesGuardrail#code_callback}

---

##### `content_filter`<sup>Optional</sup> <a name="content_filter" id="@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.contentFilter"></a>

```python
content_filter: CesGuardrailContentFilter
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilter">CesGuardrailContentFilter</a>

content_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_guardrail#content_filter CesGuardrail#content_filter}

---

##### `deletion_policy`<sup>Optional</sup> <a name="deletion_policy" id="@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.deletionPolicy"></a>

```python
deletion_policy: str
```

- *Type:* str

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_guardrail#deletion_policy CesGuardrail#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.description"></a>

```python
description: str
```

- *Type:* str

Description of the guardrail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_guardrail#description CesGuardrail#description}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Whether the guardrail is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_guardrail#enabled CesGuardrail#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_guardrail#id CesGuardrail#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `llm_policy`<sup>Optional</sup> <a name="llm_policy" id="@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.llmPolicy"></a>

```python
llm_policy: CesGuardrailLlmPolicy
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicy">CesGuardrailLlmPolicy</a>

llm_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_guardrail#llm_policy CesGuardrail#llm_policy}

---

##### `llm_prompt_security`<sup>Optional</sup> <a name="llm_prompt_security" id="@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.llmPromptSecurity"></a>

```python
llm_prompt_security: CesGuardrailLlmPromptSecurity
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurity">CesGuardrailLlmPromptSecurity</a>

llm_prompt_security block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_guardrail#llm_prompt_security CesGuardrail#llm_prompt_security}

---

##### `model_safety`<sup>Optional</sup> <a name="model_safety" id="@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.modelSafety"></a>

```python
model_safety: CesGuardrailModelSafety
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafety">CesGuardrailModelSafety</a>

model_safety block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_guardrail#model_safety CesGuardrail#model_safety}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.project"></a>

```python
project: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_guardrail#project CesGuardrail#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.timeouts"></a>

```python
timeouts: CesGuardrailTimeouts
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailTimeouts">CesGuardrailTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_guardrail#timeouts CesGuardrail#timeouts}

---

### CesGuardrailContentFilter <a name="CesGuardrailContentFilter" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilter.Initializer"></a>

```python
from cdktn_provider_google import ces_guardrail

cesGuardrail.CesGuardrailContentFilter(
  match_type: str,
  banned_contents: typing.List[str] = None,
  banned_contents_in_agent_response: typing.List[str] = None,
  banned_contents_in_user_input: typing.List[str] = None,
  disregard_diacritics: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilter.property.matchType">match_type</a></code> | <code>str</code> | Match type for the content filter. Possible values: SIMPLE_STRING_MATCH WORD_BOUNDARY_STRING_MATCH REGEXP_MATCH. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilter.property.bannedContents">banned_contents</a></code> | <code>typing.List[str]</code> | List of banned phrases. Applies to both user inputs and agent responses. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilter.property.bannedContentsInAgentResponse">banned_contents_in_agent_response</a></code> | <code>typing.List[str]</code> | List of banned phrases. Applies only to agent responses. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilter.property.bannedContentsInUserInput">banned_contents_in_user_input</a></code> | <code>typing.List[str]</code> | List of banned phrases. Applies only to user inputs. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilter.property.disregardDiacritics">disregard_diacritics</a></code> | <code>bool \| cdktn.IResolvable</code> | If true, diacritics are ignored during matching. |

---

##### `match_type`<sup>Required</sup> <a name="match_type" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilter.property.matchType"></a>

```python
match_type: str
```

- *Type:* str

Match type for the content filter. Possible values: SIMPLE_STRING_MATCH WORD_BOUNDARY_STRING_MATCH REGEXP_MATCH.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_guardrail#match_type CesGuardrail#match_type}

---

##### `banned_contents`<sup>Optional</sup> <a name="banned_contents" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilter.property.bannedContents"></a>

```python
banned_contents: typing.List[str]
```

- *Type:* typing.List[str]

List of banned phrases. Applies to both user inputs and agent responses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_guardrail#banned_contents CesGuardrail#banned_contents}

---

##### `banned_contents_in_agent_response`<sup>Optional</sup> <a name="banned_contents_in_agent_response" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilter.property.bannedContentsInAgentResponse"></a>

```python
banned_contents_in_agent_response: typing.List[str]
```

- *Type:* typing.List[str]

List of banned phrases. Applies only to agent responses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_guardrail#banned_contents_in_agent_response CesGuardrail#banned_contents_in_agent_response}

---

##### `banned_contents_in_user_input`<sup>Optional</sup> <a name="banned_contents_in_user_input" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilter.property.bannedContentsInUserInput"></a>

```python
banned_contents_in_user_input: typing.List[str]
```

- *Type:* typing.List[str]

List of banned phrases. Applies only to user inputs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_guardrail#banned_contents_in_user_input CesGuardrail#banned_contents_in_user_input}

---

##### `disregard_diacritics`<sup>Optional</sup> <a name="disregard_diacritics" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilter.property.disregardDiacritics"></a>

```python
disregard_diacritics: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

If true, diacritics are ignored during matching.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_guardrail#disregard_diacritics CesGuardrail#disregard_diacritics}

---

### CesGuardrailLlmPolicy <a name="CesGuardrailLlmPolicy" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicy.Initializer"></a>

```python
from cdktn_provider_google import ces_guardrail

cesGuardrail.CesGuardrailLlmPolicy(
  policy_scope: str,
  prompt: str,
  allow_short_utterance: bool | IResolvable = None,
  fail_open: bool | IResolvable = None,
  max_conversation_messages: typing.Union[int, float] = None,
  model_settings: CesGuardrailLlmPolicyModelSettings = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicy.property.policyScope">policy_scope</a></code> | <code>str</code> | Defines when to apply the policy check during the conversation. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicy.property.prompt">prompt</a></code> | <code>str</code> | Policy prompt. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicy.property.allowShortUtterance">allow_short_utterance</a></code> | <code>bool \| cdktn.IResolvable</code> | By default, the LLM policy check is bypassed for short utterances. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicy.property.failOpen">fail_open</a></code> | <code>bool \| cdktn.IResolvable</code> | If an error occurs during the policy check, fail open and do not trigger the guardrail. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicy.property.maxConversationMessages">max_conversation_messages</a></code> | <code>typing.Union[int, float]</code> | When checking this policy, consider the last 'n' messages in the conversation. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicy.property.modelSettings">model_settings</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettings">CesGuardrailLlmPolicyModelSettings</a></code> | model_settings block. |

---

##### `policy_scope`<sup>Required</sup> <a name="policy_scope" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicy.property.policyScope"></a>

```python
policy_scope: str
```

- *Type:* str

Defines when to apply the policy check during the conversation.

If set to
'POLICY_SCOPE_UNSPECIFIED', the policy will be applied to the user input.
When applying the policy to the agent response, additional latency will
be introduced before the agent can respond.
Possible values:
USER_QUERY
AGENT_RESPONSE
USER_QUERY_AND_AGENT_RESPONSE Possible values: ["USER_QUERY", "AGENT_RESPONSE", "USER_QUERY_AND_AGENT_RESPONSE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_guardrail#policy_scope CesGuardrail#policy_scope}

---

##### `prompt`<sup>Required</sup> <a name="prompt" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicy.property.prompt"></a>

```python
prompt: str
```

- *Type:* str

Policy prompt.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_guardrail#prompt CesGuardrail#prompt}

---

##### `allow_short_utterance`<sup>Optional</sup> <a name="allow_short_utterance" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicy.property.allowShortUtterance"></a>

```python
allow_short_utterance: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

By default, the LLM policy check is bypassed for short utterances.

Enabling this setting applies the policy check to all utterances,
including those that would normally be skipped.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_guardrail#allow_short_utterance CesGuardrail#allow_short_utterance}

---

##### `fail_open`<sup>Optional</sup> <a name="fail_open" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicy.property.failOpen"></a>

```python
fail_open: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

If an error occurs during the policy check, fail open and do not trigger the guardrail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_guardrail#fail_open CesGuardrail#fail_open}

---

##### `max_conversation_messages`<sup>Optional</sup> <a name="max_conversation_messages" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicy.property.maxConversationMessages"></a>

```python
max_conversation_messages: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

When checking this policy, consider the last 'n' messages in the conversation.

When not set a default value of 10 will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_guardrail#max_conversation_messages CesGuardrail#max_conversation_messages}

---

##### `model_settings`<sup>Optional</sup> <a name="model_settings" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicy.property.modelSettings"></a>

```python
model_settings: CesGuardrailLlmPolicyModelSettings
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettings">CesGuardrailLlmPolicyModelSettings</a>

model_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_guardrail#model_settings CesGuardrail#model_settings}

---

### CesGuardrailLlmPolicyModelSettings <a name="CesGuardrailLlmPolicyModelSettings" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettings.Initializer"></a>

```python
from cdktn_provider_google import ces_guardrail

cesGuardrail.CesGuardrailLlmPolicyModelSettings(
  model: str = None,
  temperature: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettings.property.model">model</a></code> | <code>str</code> | The LLM model that the agent should use. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettings.property.temperature">temperature</a></code> | <code>typing.Union[int, float]</code> | If set, this temperature will be used for the LLM model. |

---

##### `model`<sup>Optional</sup> <a name="model" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettings.property.model"></a>

```python
model: str
```

- *Type:* str

The LLM model that the agent should use.

If not set, the agent will inherit the model from its parent agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_guardrail#model CesGuardrail#model}

---

##### `temperature`<sup>Optional</sup> <a name="temperature" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettings.property.temperature"></a>

```python
temperature: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

If set, this temperature will be used for the LLM model.

Temperature
controls the randomness of the model's responses. Lower temperatures
produce responses that are more predictable. Higher temperatures produce
responses that are more creative.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_guardrail#temperature CesGuardrail#temperature}

---

### CesGuardrailLlmPromptSecurity <a name="CesGuardrailLlmPromptSecurity" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurity.Initializer"></a>

```python
from cdktn_provider_google import ces_guardrail

cesGuardrail.CesGuardrailLlmPromptSecurity(
  custom_policy: CesGuardrailLlmPromptSecurityCustomPolicy = None,
  default_settings: CesGuardrailLlmPromptSecurityDefaultSettings = None,
  fail_open: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurity.property.customPolicy">custom_policy</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicy">CesGuardrailLlmPromptSecurityCustomPolicy</a></code> | custom_policy block. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurity.property.defaultSettings">default_settings</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettings">CesGuardrailLlmPromptSecurityDefaultSettings</a></code> | default_settings block. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurity.property.failOpen">fail_open</a></code> | <code>bool \| cdktn.IResolvable</code> | Determines the behavior when the guardrail encounters an LLM error. |

---

##### `custom_policy`<sup>Optional</sup> <a name="custom_policy" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurity.property.customPolicy"></a>

```python
custom_policy: CesGuardrailLlmPromptSecurityCustomPolicy
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicy">CesGuardrailLlmPromptSecurityCustomPolicy</a>

custom_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_guardrail#custom_policy CesGuardrail#custom_policy}

---

##### `default_settings`<sup>Optional</sup> <a name="default_settings" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurity.property.defaultSettings"></a>

```python
default_settings: CesGuardrailLlmPromptSecurityDefaultSettings
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettings">CesGuardrailLlmPromptSecurityDefaultSettings</a>

default_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_guardrail#default_settings CesGuardrail#default_settings}

---

##### `fail_open`<sup>Optional</sup> <a name="fail_open" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurity.property.failOpen"></a>

```python
fail_open: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Determines the behavior when the guardrail encounters an LLM error.

* If true: the guardrail is bypassed.
* If false (default): the guardrail triggers/blocks.
  Note: If a custom policy is provided, this field is ignored in favor of
  the policy's 'failOpen' configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_guardrail#fail_open CesGuardrail#fail_open}

---

### CesGuardrailLlmPromptSecurityCustomPolicy <a name="CesGuardrailLlmPromptSecurityCustomPolicy" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicy.Initializer"></a>

```python
from cdktn_provider_google import ces_guardrail

cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicy(
  policy_scope: str,
  prompt: str,
  allow_short_utterance: bool | IResolvable = None,
  fail_open: bool | IResolvable = None,
  max_conversation_messages: typing.Union[int, float] = None,
  model_settings: CesGuardrailLlmPromptSecurityCustomPolicyModelSettings = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicy.property.policyScope">policy_scope</a></code> | <code>str</code> | Defines when to apply the policy check during the conversation. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicy.property.prompt">prompt</a></code> | <code>str</code> | Policy prompt. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicy.property.allowShortUtterance">allow_short_utterance</a></code> | <code>bool \| cdktn.IResolvable</code> | By default, the LLM policy check is bypassed for short utterances. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicy.property.failOpen">fail_open</a></code> | <code>bool \| cdktn.IResolvable</code> | If an error occurs during the policy check, fail open and do not trigger the guardrail. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicy.property.maxConversationMessages">max_conversation_messages</a></code> | <code>typing.Union[int, float]</code> | When checking this policy, consider the last 'n' messages in the conversation. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicy.property.modelSettings">model_settings</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettings">CesGuardrailLlmPromptSecurityCustomPolicyModelSettings</a></code> | model_settings block. |

---

##### `policy_scope`<sup>Required</sup> <a name="policy_scope" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicy.property.policyScope"></a>

```python
policy_scope: str
```

- *Type:* str

Defines when to apply the policy check during the conversation.

If set to
'POLICY_SCOPE_UNSPECIFIED', the policy will be applied to the user input.
When applying the policy to the agent response, additional latency will
be introduced before the agent can respond.
Possible values:
USER_QUERY
AGENT_RESPONSE
USER_QUERY_AND_AGENT_RESPONSE

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_guardrail#policy_scope CesGuardrail#policy_scope}

---

##### `prompt`<sup>Required</sup> <a name="prompt" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicy.property.prompt"></a>

```python
prompt: str
```

- *Type:* str

Policy prompt.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_guardrail#prompt CesGuardrail#prompt}

---

##### `allow_short_utterance`<sup>Optional</sup> <a name="allow_short_utterance" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicy.property.allowShortUtterance"></a>

```python
allow_short_utterance: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

By default, the LLM policy check is bypassed for short utterances.

Enabling this setting applies the policy check to all utterances,
including those that would normally be skipped.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_guardrail#allow_short_utterance CesGuardrail#allow_short_utterance}

---

##### `fail_open`<sup>Optional</sup> <a name="fail_open" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicy.property.failOpen"></a>

```python
fail_open: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

If an error occurs during the policy check, fail open and do not trigger the guardrail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_guardrail#fail_open CesGuardrail#fail_open}

---

##### `max_conversation_messages`<sup>Optional</sup> <a name="max_conversation_messages" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicy.property.maxConversationMessages"></a>

```python
max_conversation_messages: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

When checking this policy, consider the last 'n' messages in the conversation.

When not set a default value of 10 will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_guardrail#max_conversation_messages CesGuardrail#max_conversation_messages}

---

##### `model_settings`<sup>Optional</sup> <a name="model_settings" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicy.property.modelSettings"></a>

```python
model_settings: CesGuardrailLlmPromptSecurityCustomPolicyModelSettings
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettings">CesGuardrailLlmPromptSecurityCustomPolicyModelSettings</a>

model_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_guardrail#model_settings CesGuardrail#model_settings}

---

### CesGuardrailLlmPromptSecurityCustomPolicyModelSettings <a name="CesGuardrailLlmPromptSecurityCustomPolicyModelSettings" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettings.Initializer"></a>

```python
from cdktn_provider_google import ces_guardrail

cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettings(
  model: str = None,
  temperature: typing.Union[int, float] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettings.property.model">model</a></code> | <code>str</code> | The LLM model that the agent should use. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettings.property.temperature">temperature</a></code> | <code>typing.Union[int, float]</code> | If set, this temperature will be used for the LLM model. |

---

##### `model`<sup>Optional</sup> <a name="model" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettings.property.model"></a>

```python
model: str
```

- *Type:* str

The LLM model that the agent should use.

If not set, the agent will inherit the model from its parent agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_guardrail#model CesGuardrail#model}

---

##### `temperature`<sup>Optional</sup> <a name="temperature" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettings.property.temperature"></a>

```python
temperature: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

If set, this temperature will be used for the LLM model.

Temperature
controls the randomness of the model's responses. Lower temperatures
produce responses that are more predictable. Higher temperatures produce
responses that are more creative.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_guardrail#temperature CesGuardrail#temperature}

---

### CesGuardrailLlmPromptSecurityDefaultSettings <a name="CesGuardrailLlmPromptSecurityDefaultSettings" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettings.Initializer"></a>

```python
from cdktn_provider_google import ces_guardrail

cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettings()
```


### CesGuardrailModelSafety <a name="CesGuardrailModelSafety" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafety"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafety.Initializer"></a>

```python
from cdktn_provider_google import ces_guardrail

cesGuardrail.CesGuardrailModelSafety(
  safety_settings: IResolvable | typing.List[CesGuardrailModelSafetySafetySettings]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafety.property.safetySettings">safety_settings</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettings">CesGuardrailModelSafetySafetySettings</a>]</code> | safety_settings block. |

---

##### `safety_settings`<sup>Required</sup> <a name="safety_settings" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafety.property.safetySettings"></a>

```python
safety_settings: IResolvable | typing.List[CesGuardrailModelSafetySafetySettings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettings">CesGuardrailModelSafetySafetySettings</a>]

safety_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_guardrail#safety_settings CesGuardrail#safety_settings}

---

### CesGuardrailModelSafetySafetySettings <a name="CesGuardrailModelSafetySafetySettings" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettings.Initializer"></a>

```python
from cdktn_provider_google import ces_guardrail

cesGuardrail.CesGuardrailModelSafetySafetySettings(
  category: str,
  threshold: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettings.property.category">category</a></code> | <code>str</code> | The harm category. Possible values: HARM_CATEGORY_HATE_SPEECH HARM_CATEGORY_DANGEROUS_CONTENT HARM_CATEGORY_HARASSMENT HARM_CATEGORY_SEXUALLY_EXPLICIT Possible values: ["HARM_CATEGORY_HATE_SPEECH", "HARM_CATEGORY_DANGEROUS_CONTENT", "HARM_CATEGORY_HARASSMENT", "HARM_CATEGORY_SEXUALLY_EXPLICIT"]. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettings.property.threshold">threshold</a></code> | <code>str</code> | The harm block threshold. Possible values: BLOCK_LOW_AND_ABOVE BLOCK_MEDIUM_AND_ABOVE BLOCK_ONLY_HIGH BLOCK_NONE OFF Possible values: ["BLOCK_LOW_AND_ABOVE", "BLOCK_MEDIUM_AND_ABOVE", "BLOCK_ONLY_HIGH", "BLOCK_NONE", "OFF"]. |

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettings.property.category"></a>

```python
category: str
```

- *Type:* str

The harm category. Possible values: HARM_CATEGORY_HATE_SPEECH HARM_CATEGORY_DANGEROUS_CONTENT HARM_CATEGORY_HARASSMENT HARM_CATEGORY_SEXUALLY_EXPLICIT Possible values: ["HARM_CATEGORY_HATE_SPEECH", "HARM_CATEGORY_DANGEROUS_CONTENT", "HARM_CATEGORY_HARASSMENT", "HARM_CATEGORY_SEXUALLY_EXPLICIT"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_guardrail#category CesGuardrail#category}

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettings.property.threshold"></a>

```python
threshold: str
```

- *Type:* str

The harm block threshold. Possible values: BLOCK_LOW_AND_ABOVE BLOCK_MEDIUM_AND_ABOVE BLOCK_ONLY_HIGH BLOCK_NONE OFF Possible values: ["BLOCK_LOW_AND_ABOVE", "BLOCK_MEDIUM_AND_ABOVE", "BLOCK_ONLY_HIGH", "BLOCK_NONE", "OFF"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_guardrail#threshold CesGuardrail#threshold}

---

### CesGuardrailTimeouts <a name="CesGuardrailTimeouts" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeouts.Initializer"></a>

```python
from cdktn_provider_google import ces_guardrail

cesGuardrail.CesGuardrailTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_guardrail#create CesGuardrail#create}. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_guardrail#delete CesGuardrail#delete}. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_guardrail#update CesGuardrail#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_guardrail#create CesGuardrail#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_guardrail#delete CesGuardrail#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_guardrail#update CesGuardrail#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CesGuardrailActionGenerativeAnswerOutputReference <a name="CesGuardrailActionGenerativeAnswerOutputReference" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.Initializer"></a>

```python
from cdktn_provider_google import ces_guardrail

cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.property.promptInput">prompt_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.property.prompt">prompt</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswer">CesGuardrailActionGenerativeAnswer</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `prompt_input`<sup>Optional</sup> <a name="prompt_input" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.property.promptInput"></a>

```python
prompt_input: str
```

- *Type:* str

---

##### `prompt`<sup>Required</sup> <a name="prompt" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.property.prompt"></a>

```python
prompt: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.property.internalValue"></a>

```python
internal_value: CesGuardrailActionGenerativeAnswer
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswer">CesGuardrailActionGenerativeAnswer</a>

---


### CesGuardrailActionOutputReference <a name="CesGuardrailActionOutputReference" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.Initializer"></a>

```python
from cdktn_provider_google import ces_guardrail

cesGuardrail.CesGuardrailActionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.putGenerativeAnswer">put_generative_answer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.putRespondImmediately">put_respond_immediately</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.putTransferAgent">put_transfer_agent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.resetGenerativeAnswer">reset_generative_answer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.resetRespondImmediately">reset_respond_immediately</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.resetTransferAgent">reset_transfer_agent</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_generative_answer` <a name="put_generative_answer" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.putGenerativeAnswer"></a>

```python
def put_generative_answer(
  prompt: str
) -> None
```

###### `prompt`<sup>Required</sup> <a name="prompt" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.putGenerativeAnswer.parameter.prompt"></a>

- *Type:* str

The prompt to use for the generative answer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_guardrail#prompt CesGuardrail#prompt}

---

##### `put_respond_immediately` <a name="put_respond_immediately" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.putRespondImmediately"></a>

```python
def put_respond_immediately(
  responses: IResolvable | typing.List[CesGuardrailActionRespondImmediatelyResponses]
) -> None
```

###### `responses`<sup>Required</sup> <a name="responses" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.putRespondImmediately.parameter.responses"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponses">CesGuardrailActionRespondImmediatelyResponses</a>]

responses block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_guardrail#responses CesGuardrail#responses}

---

##### `put_transfer_agent` <a name="put_transfer_agent" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.putTransferAgent"></a>

```python
def put_transfer_agent(
  agent: str
) -> None
```

###### `agent`<sup>Required</sup> <a name="agent" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.putTransferAgent.parameter.agent"></a>

- *Type:* str

The name of the agent to transfer the conversation to.

The agent must be
in the same app as the current agent.
Format:
'projects/{project}/locations/{location}/apps/{app}/agents/{agent}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_guardrail#agent CesGuardrail#agent}

---

##### `reset_generative_answer` <a name="reset_generative_answer" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.resetGenerativeAnswer"></a>

```python
def reset_generative_answer() -> None
```

##### `reset_respond_immediately` <a name="reset_respond_immediately" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.resetRespondImmediately"></a>

```python
def reset_respond_immediately() -> None
```

##### `reset_transfer_agent` <a name="reset_transfer_agent" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.resetTransferAgent"></a>

```python
def reset_transfer_agent() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.property.generativeAnswer">generative_answer</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference">CesGuardrailActionGenerativeAnswerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.property.respondImmediately">respond_immediately</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference">CesGuardrailActionRespondImmediatelyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.property.transferAgent">transfer_agent</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference">CesGuardrailActionTransferAgentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.property.generativeAnswerInput">generative_answer_input</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswer">CesGuardrailActionGenerativeAnswer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.property.respondImmediatelyInput">respond_immediately_input</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediately">CesGuardrailActionRespondImmediately</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.property.transferAgentInput">transfer_agent_input</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgent">CesGuardrailActionTransferAgent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailAction">CesGuardrailAction</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `generative_answer`<sup>Required</sup> <a name="generative_answer" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.property.generativeAnswer"></a>

```python
generative_answer: CesGuardrailActionGenerativeAnswerOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference">CesGuardrailActionGenerativeAnswerOutputReference</a>

---

##### `respond_immediately`<sup>Required</sup> <a name="respond_immediately" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.property.respondImmediately"></a>

```python
respond_immediately: CesGuardrailActionRespondImmediatelyOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference">CesGuardrailActionRespondImmediatelyOutputReference</a>

---

##### `transfer_agent`<sup>Required</sup> <a name="transfer_agent" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.property.transferAgent"></a>

```python
transfer_agent: CesGuardrailActionTransferAgentOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference">CesGuardrailActionTransferAgentOutputReference</a>

---

##### `generative_answer_input`<sup>Optional</sup> <a name="generative_answer_input" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.property.generativeAnswerInput"></a>

```python
generative_answer_input: CesGuardrailActionGenerativeAnswer
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswer">CesGuardrailActionGenerativeAnswer</a>

---

##### `respond_immediately_input`<sup>Optional</sup> <a name="respond_immediately_input" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.property.respondImmediatelyInput"></a>

```python
respond_immediately_input: CesGuardrailActionRespondImmediately
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediately">CesGuardrailActionRespondImmediately</a>

---

##### `transfer_agent_input`<sup>Optional</sup> <a name="transfer_agent_input" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.property.transferAgentInput"></a>

```python
transfer_agent_input: CesGuardrailActionTransferAgent
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgent">CesGuardrailActionTransferAgent</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.property.internalValue"></a>

```python
internal_value: CesGuardrailAction
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailAction">CesGuardrailAction</a>

---


### CesGuardrailActionRespondImmediatelyOutputReference <a name="CesGuardrailActionRespondImmediatelyOutputReference" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.Initializer"></a>

```python
from cdktn_provider_google import ces_guardrail

cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.putResponses">put_responses</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_responses` <a name="put_responses" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.putResponses"></a>

```python
def put_responses(
  value: IResolvable | typing.List[CesGuardrailActionRespondImmediatelyResponses]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.putResponses.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponses">CesGuardrailActionRespondImmediatelyResponses</a>]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.property.responses">responses</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesList">CesGuardrailActionRespondImmediatelyResponsesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.property.responsesInput">responses_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponses">CesGuardrailActionRespondImmediatelyResponses</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediately">CesGuardrailActionRespondImmediately</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `responses`<sup>Required</sup> <a name="responses" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.property.responses"></a>

```python
responses: CesGuardrailActionRespondImmediatelyResponsesList
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesList">CesGuardrailActionRespondImmediatelyResponsesList</a>

---

##### `responses_input`<sup>Optional</sup> <a name="responses_input" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.property.responsesInput"></a>

```python
responses_input: IResolvable | typing.List[CesGuardrailActionRespondImmediatelyResponses]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponses">CesGuardrailActionRespondImmediatelyResponses</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.property.internalValue"></a>

```python
internal_value: CesGuardrailActionRespondImmediately
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediately">CesGuardrailActionRespondImmediately</a>

---


### CesGuardrailActionRespondImmediatelyResponsesList <a name="CesGuardrailActionRespondImmediatelyResponsesList" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesList.Initializer"></a>

```python
from cdktn_provider_google import ces_guardrail

cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CesGuardrailActionRespondImmediatelyResponsesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponses">CesGuardrailActionRespondImmediatelyResponses</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CesGuardrailActionRespondImmediatelyResponses]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponses">CesGuardrailActionRespondImmediatelyResponses</a>]

---


### CesGuardrailActionRespondImmediatelyResponsesOutputReference <a name="CesGuardrailActionRespondImmediatelyResponsesOutputReference" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.Initializer"></a>

```python
from cdktn_provider_google import ces_guardrail

cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.resetDisabled">reset_disabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_disabled` <a name="reset_disabled" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.resetDisabled"></a>

```python
def reset_disabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.property.disabledInput">disabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.property.textInput">text_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.property.disabled">disabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.property.text">text</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponses">CesGuardrailActionRespondImmediatelyResponses</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `disabled_input`<sup>Optional</sup> <a name="disabled_input" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.property.disabledInput"></a>

```python
disabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `text_input`<sup>Optional</sup> <a name="text_input" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.property.textInput"></a>

```python
text_input: str
```

- *Type:* str

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.property.disabled"></a>

```python
disabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.property.text"></a>

```python
text: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CesGuardrailActionRespondImmediatelyResponses
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponses">CesGuardrailActionRespondImmediatelyResponses</a>

---


### CesGuardrailActionTransferAgentOutputReference <a name="CesGuardrailActionTransferAgentOutputReference" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.Initializer"></a>

```python
from cdktn_provider_google import ces_guardrail

cesGuardrail.CesGuardrailActionTransferAgentOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.property.agentInput">agent_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.property.agent">agent</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgent">CesGuardrailActionTransferAgent</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `agent_input`<sup>Optional</sup> <a name="agent_input" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.property.agentInput"></a>

```python
agent_input: str
```

- *Type:* str

---

##### `agent`<sup>Required</sup> <a name="agent" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.property.agent"></a>

```python
agent: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.property.internalValue"></a>

```python
internal_value: CesGuardrailActionTransferAgent
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgent">CesGuardrailActionTransferAgent</a>

---


### CesGuardrailCodeCallbackAfterAgentCallbackOutputReference <a name="CesGuardrailCodeCallbackAfterAgentCallbackOutputReference" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.Initializer"></a>

```python
from cdktn_provider_google import ces_guardrail

cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.resetDisabled">reset_disabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_disabled` <a name="reset_disabled" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.resetDisabled"></a>

```python
def reset_disabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.property.disabledInput">disabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.property.pythonCodeInput">python_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.property.disabled">disabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.property.pythonCode">python_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallback">CesGuardrailCodeCallbackAfterAgentCallback</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `disabled_input`<sup>Optional</sup> <a name="disabled_input" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.property.disabledInput"></a>

```python
disabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `python_code_input`<sup>Optional</sup> <a name="python_code_input" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.property.pythonCodeInput"></a>

```python
python_code_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.property.disabled"></a>

```python
disabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `python_code`<sup>Required</sup> <a name="python_code" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.property.pythonCode"></a>

```python
python_code: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.property.internalValue"></a>

```python
internal_value: CesGuardrailCodeCallbackAfterAgentCallback
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallback">CesGuardrailCodeCallbackAfterAgentCallback</a>

---


### CesGuardrailCodeCallbackAfterModelCallbackOutputReference <a name="CesGuardrailCodeCallbackAfterModelCallbackOutputReference" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.Initializer"></a>

```python
from cdktn_provider_google import ces_guardrail

cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.resetDisabled">reset_disabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_disabled` <a name="reset_disabled" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.resetDisabled"></a>

```python
def reset_disabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.property.disabledInput">disabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.property.pythonCodeInput">python_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.property.disabled">disabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.property.pythonCode">python_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallback">CesGuardrailCodeCallbackAfterModelCallback</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `disabled_input`<sup>Optional</sup> <a name="disabled_input" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.property.disabledInput"></a>

```python
disabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `python_code_input`<sup>Optional</sup> <a name="python_code_input" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.property.pythonCodeInput"></a>

```python
python_code_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.property.disabled"></a>

```python
disabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `python_code`<sup>Required</sup> <a name="python_code" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.property.pythonCode"></a>

```python
python_code: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.property.internalValue"></a>

```python
internal_value: CesGuardrailCodeCallbackAfterModelCallback
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallback">CesGuardrailCodeCallbackAfterModelCallback</a>

---


### CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference <a name="CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.Initializer"></a>

```python
from cdktn_provider_google import ces_guardrail

cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.resetDisabled">reset_disabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_disabled` <a name="reset_disabled" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.resetDisabled"></a>

```python
def reset_disabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.property.disabledInput">disabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.property.pythonCodeInput">python_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.property.disabled">disabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.property.pythonCode">python_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallback">CesGuardrailCodeCallbackBeforeAgentCallback</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `disabled_input`<sup>Optional</sup> <a name="disabled_input" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.property.disabledInput"></a>

```python
disabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `python_code_input`<sup>Optional</sup> <a name="python_code_input" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.property.pythonCodeInput"></a>

```python
python_code_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.property.disabled"></a>

```python
disabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `python_code`<sup>Required</sup> <a name="python_code" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.property.pythonCode"></a>

```python
python_code: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.property.internalValue"></a>

```python
internal_value: CesGuardrailCodeCallbackBeforeAgentCallback
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallback">CesGuardrailCodeCallbackBeforeAgentCallback</a>

---


### CesGuardrailCodeCallbackBeforeModelCallbackOutputReference <a name="CesGuardrailCodeCallbackBeforeModelCallbackOutputReference" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.Initializer"></a>

```python
from cdktn_provider_google import ces_guardrail

cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.resetDescription">reset_description</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.resetDisabled">reset_disabled</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_description` <a name="reset_description" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.resetDescription"></a>

```python
def reset_description() -> None
```

##### `reset_disabled` <a name="reset_disabled" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.resetDisabled"></a>

```python
def reset_disabled() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.property.descriptionInput">description_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.property.disabledInput">disabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.property.pythonCodeInput">python_code_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.property.disabled">disabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.property.pythonCode">python_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallback">CesGuardrailCodeCallbackBeforeModelCallback</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description_input`<sup>Optional</sup> <a name="description_input" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.property.descriptionInput"></a>

```python
description_input: str
```

- *Type:* str

---

##### `disabled_input`<sup>Optional</sup> <a name="disabled_input" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.property.disabledInput"></a>

```python
disabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `python_code_input`<sup>Optional</sup> <a name="python_code_input" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.property.pythonCodeInput"></a>

```python
python_code_input: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.property.disabled"></a>

```python
disabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `python_code`<sup>Required</sup> <a name="python_code" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.property.pythonCode"></a>

```python
python_code: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.property.internalValue"></a>

```python
internal_value: CesGuardrailCodeCallbackBeforeModelCallback
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallback">CesGuardrailCodeCallbackBeforeModelCallback</a>

---


### CesGuardrailCodeCallbackOutputReference <a name="CesGuardrailCodeCallbackOutputReference" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.Initializer"></a>

```python
from cdktn_provider_google import ces_guardrail

cesGuardrail.CesGuardrailCodeCallbackOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.putAfterAgentCallback">put_after_agent_callback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.putAfterModelCallback">put_after_model_callback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.putBeforeAgentCallback">put_before_agent_callback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.putBeforeModelCallback">put_before_model_callback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.resetAfterAgentCallback">reset_after_agent_callback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.resetAfterModelCallback">reset_after_model_callback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.resetBeforeAgentCallback">reset_before_agent_callback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.resetBeforeModelCallback">reset_before_model_callback</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_after_agent_callback` <a name="put_after_agent_callback" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.putAfterAgentCallback"></a>

```python
def put_after_agent_callback(
  python_code: str,
  description: str = None,
  disabled: bool | IResolvable = None
) -> None
```

###### `python_code`<sup>Required</sup> <a name="python_code" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.putAfterAgentCallback.parameter.pythonCode"></a>

- *Type:* str

The python code to execute for the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_guardrail#python_code CesGuardrail#python_code}

---

###### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.putAfterAgentCallback.parameter.description"></a>

- *Type:* str

Human-readable description of the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_guardrail#description CesGuardrail#description}

---

###### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.putAfterAgentCallback.parameter.disabled"></a>

- *Type:* bool | cdktn.IResolvable

Whether the callback is disabled. Disabled callbacks are ignored by the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_guardrail#disabled CesGuardrail#disabled}

---

##### `put_after_model_callback` <a name="put_after_model_callback" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.putAfterModelCallback"></a>

```python
def put_after_model_callback(
  python_code: str,
  description: str = None,
  disabled: bool | IResolvable = None
) -> None
```

###### `python_code`<sup>Required</sup> <a name="python_code" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.putAfterModelCallback.parameter.pythonCode"></a>

- *Type:* str

The python code to execute for the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_guardrail#python_code CesGuardrail#python_code}

---

###### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.putAfterModelCallback.parameter.description"></a>

- *Type:* str

Human-readable description of the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_guardrail#description CesGuardrail#description}

---

###### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.putAfterModelCallback.parameter.disabled"></a>

- *Type:* bool | cdktn.IResolvable

Whether the callback is disabled. Disabled callbacks are ignored by the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_guardrail#disabled CesGuardrail#disabled}

---

##### `put_before_agent_callback` <a name="put_before_agent_callback" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.putBeforeAgentCallback"></a>

```python
def put_before_agent_callback(
  python_code: str,
  description: str = None,
  disabled: bool | IResolvable = None
) -> None
```

###### `python_code`<sup>Required</sup> <a name="python_code" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.putBeforeAgentCallback.parameter.pythonCode"></a>

- *Type:* str

The python code to execute for the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_guardrail#python_code CesGuardrail#python_code}

---

###### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.putBeforeAgentCallback.parameter.description"></a>

- *Type:* str

Human-readable description of the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_guardrail#description CesGuardrail#description}

---

###### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.putBeforeAgentCallback.parameter.disabled"></a>

- *Type:* bool | cdktn.IResolvable

Whether the callback is disabled. Disabled callbacks are ignored by the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_guardrail#disabled CesGuardrail#disabled}

---

##### `put_before_model_callback` <a name="put_before_model_callback" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.putBeforeModelCallback"></a>

```python
def put_before_model_callback(
  python_code: str,
  description: str = None,
  disabled: bool | IResolvable = None
) -> None
```

###### `python_code`<sup>Required</sup> <a name="python_code" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.putBeforeModelCallback.parameter.pythonCode"></a>

- *Type:* str

The python code to execute for the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_guardrail#python_code CesGuardrail#python_code}

---

###### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.putBeforeModelCallback.parameter.description"></a>

- *Type:* str

Human-readable description of the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_guardrail#description CesGuardrail#description}

---

###### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.putBeforeModelCallback.parameter.disabled"></a>

- *Type:* bool | cdktn.IResolvable

Whether the callback is disabled. Disabled callbacks are ignored by the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_guardrail#disabled CesGuardrail#disabled}

---

##### `reset_after_agent_callback` <a name="reset_after_agent_callback" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.resetAfterAgentCallback"></a>

```python
def reset_after_agent_callback() -> None
```

##### `reset_after_model_callback` <a name="reset_after_model_callback" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.resetAfterModelCallback"></a>

```python
def reset_after_model_callback() -> None
```

##### `reset_before_agent_callback` <a name="reset_before_agent_callback" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.resetBeforeAgentCallback"></a>

```python
def reset_before_agent_callback() -> None
```

##### `reset_before_model_callback` <a name="reset_before_model_callback" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.resetBeforeModelCallback"></a>

```python
def reset_before_model_callback() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.property.afterAgentCallback">after_agent_callback</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference">CesGuardrailCodeCallbackAfterAgentCallbackOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.property.afterModelCallback">after_model_callback</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference">CesGuardrailCodeCallbackAfterModelCallbackOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.property.beforeAgentCallback">before_agent_callback</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference">CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.property.beforeModelCallback">before_model_callback</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference">CesGuardrailCodeCallbackBeforeModelCallbackOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.property.afterAgentCallbackInput">after_agent_callback_input</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallback">CesGuardrailCodeCallbackAfterAgentCallback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.property.afterModelCallbackInput">after_model_callback_input</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallback">CesGuardrailCodeCallbackAfterModelCallback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.property.beforeAgentCallbackInput">before_agent_callback_input</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallback">CesGuardrailCodeCallbackBeforeAgentCallback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.property.beforeModelCallbackInput">before_model_callback_input</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallback">CesGuardrailCodeCallbackBeforeModelCallback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallback">CesGuardrailCodeCallback</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `after_agent_callback`<sup>Required</sup> <a name="after_agent_callback" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.property.afterAgentCallback"></a>

```python
after_agent_callback: CesGuardrailCodeCallbackAfterAgentCallbackOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference">CesGuardrailCodeCallbackAfterAgentCallbackOutputReference</a>

---

##### `after_model_callback`<sup>Required</sup> <a name="after_model_callback" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.property.afterModelCallback"></a>

```python
after_model_callback: CesGuardrailCodeCallbackAfterModelCallbackOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference">CesGuardrailCodeCallbackAfterModelCallbackOutputReference</a>

---

##### `before_agent_callback`<sup>Required</sup> <a name="before_agent_callback" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.property.beforeAgentCallback"></a>

```python
before_agent_callback: CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference">CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference</a>

---

##### `before_model_callback`<sup>Required</sup> <a name="before_model_callback" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.property.beforeModelCallback"></a>

```python
before_model_callback: CesGuardrailCodeCallbackBeforeModelCallbackOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference">CesGuardrailCodeCallbackBeforeModelCallbackOutputReference</a>

---

##### `after_agent_callback_input`<sup>Optional</sup> <a name="after_agent_callback_input" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.property.afterAgentCallbackInput"></a>

```python
after_agent_callback_input: CesGuardrailCodeCallbackAfterAgentCallback
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallback">CesGuardrailCodeCallbackAfterAgentCallback</a>

---

##### `after_model_callback_input`<sup>Optional</sup> <a name="after_model_callback_input" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.property.afterModelCallbackInput"></a>

```python
after_model_callback_input: CesGuardrailCodeCallbackAfterModelCallback
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallback">CesGuardrailCodeCallbackAfterModelCallback</a>

---

##### `before_agent_callback_input`<sup>Optional</sup> <a name="before_agent_callback_input" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.property.beforeAgentCallbackInput"></a>

```python
before_agent_callback_input: CesGuardrailCodeCallbackBeforeAgentCallback
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallback">CesGuardrailCodeCallbackBeforeAgentCallback</a>

---

##### `before_model_callback_input`<sup>Optional</sup> <a name="before_model_callback_input" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.property.beforeModelCallbackInput"></a>

```python
before_model_callback_input: CesGuardrailCodeCallbackBeforeModelCallback
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallback">CesGuardrailCodeCallbackBeforeModelCallback</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.property.internalValue"></a>

```python
internal_value: CesGuardrailCodeCallback
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallback">CesGuardrailCodeCallback</a>

---


### CesGuardrailContentFilterOutputReference <a name="CesGuardrailContentFilterOutputReference" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.Initializer"></a>

```python
from cdktn_provider_google import ces_guardrail

cesGuardrail.CesGuardrailContentFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.resetBannedContents">reset_banned_contents</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.resetBannedContentsInAgentResponse">reset_banned_contents_in_agent_response</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.resetBannedContentsInUserInput">reset_banned_contents_in_user_input</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.resetDisregardDiacritics">reset_disregard_diacritics</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_banned_contents` <a name="reset_banned_contents" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.resetBannedContents"></a>

```python
def reset_banned_contents() -> None
```

##### `reset_banned_contents_in_agent_response` <a name="reset_banned_contents_in_agent_response" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.resetBannedContentsInAgentResponse"></a>

```python
def reset_banned_contents_in_agent_response() -> None
```

##### `reset_banned_contents_in_user_input` <a name="reset_banned_contents_in_user_input" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.resetBannedContentsInUserInput"></a>

```python
def reset_banned_contents_in_user_input() -> None
```

##### `reset_disregard_diacritics` <a name="reset_disregard_diacritics" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.resetDisregardDiacritics"></a>

```python
def reset_disregard_diacritics() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.property.bannedContentsInAgentResponseInput">banned_contents_in_agent_response_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.property.bannedContentsInput">banned_contents_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.property.bannedContentsInUserInputInput">banned_contents_in_user_input_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.property.disregardDiacriticsInput">disregard_diacritics_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.property.matchTypeInput">match_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.property.bannedContents">banned_contents</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.property.bannedContentsInAgentResponse">banned_contents_in_agent_response</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.property.bannedContentsInUserInput">banned_contents_in_user_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.property.disregardDiacritics">disregard_diacritics</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.property.matchType">match_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilter">CesGuardrailContentFilter</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `banned_contents_in_agent_response_input`<sup>Optional</sup> <a name="banned_contents_in_agent_response_input" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.property.bannedContentsInAgentResponseInput"></a>

```python
banned_contents_in_agent_response_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `banned_contents_input`<sup>Optional</sup> <a name="banned_contents_input" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.property.bannedContentsInput"></a>

```python
banned_contents_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `banned_contents_in_user_input_input`<sup>Optional</sup> <a name="banned_contents_in_user_input_input" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.property.bannedContentsInUserInputInput"></a>

```python
banned_contents_in_user_input_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `disregard_diacritics_input`<sup>Optional</sup> <a name="disregard_diacritics_input" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.property.disregardDiacriticsInput"></a>

```python
disregard_diacritics_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `match_type_input`<sup>Optional</sup> <a name="match_type_input" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.property.matchTypeInput"></a>

```python
match_type_input: str
```

- *Type:* str

---

##### `banned_contents`<sup>Required</sup> <a name="banned_contents" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.property.bannedContents"></a>

```python
banned_contents: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `banned_contents_in_agent_response`<sup>Required</sup> <a name="banned_contents_in_agent_response" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.property.bannedContentsInAgentResponse"></a>

```python
banned_contents_in_agent_response: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `banned_contents_in_user_input`<sup>Required</sup> <a name="banned_contents_in_user_input" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.property.bannedContentsInUserInput"></a>

```python
banned_contents_in_user_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `disregard_diacritics`<sup>Required</sup> <a name="disregard_diacritics" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.property.disregardDiacritics"></a>

```python
disregard_diacritics: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `match_type`<sup>Required</sup> <a name="match_type" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.property.matchType"></a>

```python
match_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.property.internalValue"></a>

```python
internal_value: CesGuardrailContentFilter
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilter">CesGuardrailContentFilter</a>

---


### CesGuardrailLlmPolicyModelSettingsOutputReference <a name="CesGuardrailLlmPolicyModelSettingsOutputReference" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import ces_guardrail

cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.resetModel">reset_model</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.resetTemperature">reset_temperature</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_model` <a name="reset_model" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.resetModel"></a>

```python
def reset_model() -> None
```

##### `reset_temperature` <a name="reset_temperature" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.resetTemperature"></a>

```python
def reset_temperature() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.property.modelInput">model_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.property.temperatureInput">temperature_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.property.model">model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.property.temperature">temperature</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettings">CesGuardrailLlmPolicyModelSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `model_input`<sup>Optional</sup> <a name="model_input" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.property.modelInput"></a>

```python
model_input: str
```

- *Type:* str

---

##### `temperature_input`<sup>Optional</sup> <a name="temperature_input" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.property.temperatureInput"></a>

```python
temperature_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `model`<sup>Required</sup> <a name="model" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.property.model"></a>

```python
model: str
```

- *Type:* str

---

##### `temperature`<sup>Required</sup> <a name="temperature" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.property.temperature"></a>

```python
temperature: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.property.internalValue"></a>

```python
internal_value: CesGuardrailLlmPolicyModelSettings
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettings">CesGuardrailLlmPolicyModelSettings</a>

---


### CesGuardrailLlmPolicyOutputReference <a name="CesGuardrailLlmPolicyOutputReference" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.Initializer"></a>

```python
from cdktn_provider_google import ces_guardrail

cesGuardrail.CesGuardrailLlmPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.putModelSettings">put_model_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.resetAllowShortUtterance">reset_allow_short_utterance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.resetFailOpen">reset_fail_open</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.resetMaxConversationMessages">reset_max_conversation_messages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.resetModelSettings">reset_model_settings</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_model_settings` <a name="put_model_settings" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.putModelSettings"></a>

```python
def put_model_settings(
  model: str = None,
  temperature: typing.Union[int, float] = None
) -> None
```

###### `model`<sup>Optional</sup> <a name="model" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.putModelSettings.parameter.model"></a>

- *Type:* str

The LLM model that the agent should use.

If not set, the agent will inherit the model from its parent agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_guardrail#model CesGuardrail#model}

---

###### `temperature`<sup>Optional</sup> <a name="temperature" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.putModelSettings.parameter.temperature"></a>

- *Type:* typing.Union[int, float]

If set, this temperature will be used for the LLM model.

Temperature
controls the randomness of the model's responses. Lower temperatures
produce responses that are more predictable. Higher temperatures produce
responses that are more creative.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_guardrail#temperature CesGuardrail#temperature}

---

##### `reset_allow_short_utterance` <a name="reset_allow_short_utterance" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.resetAllowShortUtterance"></a>

```python
def reset_allow_short_utterance() -> None
```

##### `reset_fail_open` <a name="reset_fail_open" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.resetFailOpen"></a>

```python
def reset_fail_open() -> None
```

##### `reset_max_conversation_messages` <a name="reset_max_conversation_messages" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.resetMaxConversationMessages"></a>

```python
def reset_max_conversation_messages() -> None
```

##### `reset_model_settings` <a name="reset_model_settings" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.resetModelSettings"></a>

```python
def reset_model_settings() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.property.modelSettings">model_settings</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference">CesGuardrailLlmPolicyModelSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.property.allowShortUtteranceInput">allow_short_utterance_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.property.failOpenInput">fail_open_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.property.maxConversationMessagesInput">max_conversation_messages_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.property.modelSettingsInput">model_settings_input</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettings">CesGuardrailLlmPolicyModelSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.property.policyScopeInput">policy_scope_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.property.promptInput">prompt_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.property.allowShortUtterance">allow_short_utterance</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.property.failOpen">fail_open</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.property.maxConversationMessages">max_conversation_messages</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.property.policyScope">policy_scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.property.prompt">prompt</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicy">CesGuardrailLlmPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `model_settings`<sup>Required</sup> <a name="model_settings" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.property.modelSettings"></a>

```python
model_settings: CesGuardrailLlmPolicyModelSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference">CesGuardrailLlmPolicyModelSettingsOutputReference</a>

---

##### `allow_short_utterance_input`<sup>Optional</sup> <a name="allow_short_utterance_input" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.property.allowShortUtteranceInput"></a>

```python
allow_short_utterance_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `fail_open_input`<sup>Optional</sup> <a name="fail_open_input" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.property.failOpenInput"></a>

```python
fail_open_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `max_conversation_messages_input`<sup>Optional</sup> <a name="max_conversation_messages_input" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.property.maxConversationMessagesInput"></a>

```python
max_conversation_messages_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `model_settings_input`<sup>Optional</sup> <a name="model_settings_input" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.property.modelSettingsInput"></a>

```python
model_settings_input: CesGuardrailLlmPolicyModelSettings
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettings">CesGuardrailLlmPolicyModelSettings</a>

---

##### `policy_scope_input`<sup>Optional</sup> <a name="policy_scope_input" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.property.policyScopeInput"></a>

```python
policy_scope_input: str
```

- *Type:* str

---

##### `prompt_input`<sup>Optional</sup> <a name="prompt_input" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.property.promptInput"></a>

```python
prompt_input: str
```

- *Type:* str

---

##### `allow_short_utterance`<sup>Required</sup> <a name="allow_short_utterance" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.property.allowShortUtterance"></a>

```python
allow_short_utterance: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `fail_open`<sup>Required</sup> <a name="fail_open" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.property.failOpen"></a>

```python
fail_open: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `max_conversation_messages`<sup>Required</sup> <a name="max_conversation_messages" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.property.maxConversationMessages"></a>

```python
max_conversation_messages: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `policy_scope`<sup>Required</sup> <a name="policy_scope" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.property.policyScope"></a>

```python
policy_scope: str
```

- *Type:* str

---

##### `prompt`<sup>Required</sup> <a name="prompt" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.property.prompt"></a>

```python
prompt: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.property.internalValue"></a>

```python
internal_value: CesGuardrailLlmPolicy
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicy">CesGuardrailLlmPolicy</a>

---


### CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference <a name="CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import ces_guardrail

cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.resetModel">reset_model</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.resetTemperature">reset_temperature</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_model` <a name="reset_model" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.resetModel"></a>

```python
def reset_model() -> None
```

##### `reset_temperature` <a name="reset_temperature" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.resetTemperature"></a>

```python
def reset_temperature() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.property.modelInput">model_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.property.temperatureInput">temperature_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.property.model">model</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.property.temperature">temperature</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettings">CesGuardrailLlmPromptSecurityCustomPolicyModelSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `model_input`<sup>Optional</sup> <a name="model_input" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.property.modelInput"></a>

```python
model_input: str
```

- *Type:* str

---

##### `temperature_input`<sup>Optional</sup> <a name="temperature_input" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.property.temperatureInput"></a>

```python
temperature_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `model`<sup>Required</sup> <a name="model" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.property.model"></a>

```python
model: str
```

- *Type:* str

---

##### `temperature`<sup>Required</sup> <a name="temperature" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.property.temperature"></a>

```python
temperature: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.property.internalValue"></a>

```python
internal_value: CesGuardrailLlmPromptSecurityCustomPolicyModelSettings
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettings">CesGuardrailLlmPromptSecurityCustomPolicyModelSettings</a>

---


### CesGuardrailLlmPromptSecurityCustomPolicyOutputReference <a name="CesGuardrailLlmPromptSecurityCustomPolicyOutputReference" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.Initializer"></a>

```python
from cdktn_provider_google import ces_guardrail

cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.putModelSettings">put_model_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.resetAllowShortUtterance">reset_allow_short_utterance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.resetFailOpen">reset_fail_open</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.resetMaxConversationMessages">reset_max_conversation_messages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.resetModelSettings">reset_model_settings</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_model_settings` <a name="put_model_settings" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.putModelSettings"></a>

```python
def put_model_settings(
  model: str = None,
  temperature: typing.Union[int, float] = None
) -> None
```

###### `model`<sup>Optional</sup> <a name="model" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.putModelSettings.parameter.model"></a>

- *Type:* str

The LLM model that the agent should use.

If not set, the agent will inherit the model from its parent agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_guardrail#model CesGuardrail#model}

---

###### `temperature`<sup>Optional</sup> <a name="temperature" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.putModelSettings.parameter.temperature"></a>

- *Type:* typing.Union[int, float]

If set, this temperature will be used for the LLM model.

Temperature
controls the randomness of the model's responses. Lower temperatures
produce responses that are more predictable. Higher temperatures produce
responses that are more creative.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_guardrail#temperature CesGuardrail#temperature}

---

##### `reset_allow_short_utterance` <a name="reset_allow_short_utterance" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.resetAllowShortUtterance"></a>

```python
def reset_allow_short_utterance() -> None
```

##### `reset_fail_open` <a name="reset_fail_open" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.resetFailOpen"></a>

```python
def reset_fail_open() -> None
```

##### `reset_max_conversation_messages` <a name="reset_max_conversation_messages" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.resetMaxConversationMessages"></a>

```python
def reset_max_conversation_messages() -> None
```

##### `reset_model_settings` <a name="reset_model_settings" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.resetModelSettings"></a>

```python
def reset_model_settings() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.modelSettings">model_settings</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference">CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.allowShortUtteranceInput">allow_short_utterance_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.failOpenInput">fail_open_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.maxConversationMessagesInput">max_conversation_messages_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.modelSettingsInput">model_settings_input</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettings">CesGuardrailLlmPromptSecurityCustomPolicyModelSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.policyScopeInput">policy_scope_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.promptInput">prompt_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.allowShortUtterance">allow_short_utterance</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.failOpen">fail_open</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.maxConversationMessages">max_conversation_messages</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.policyScope">policy_scope</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.prompt">prompt</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicy">CesGuardrailLlmPromptSecurityCustomPolicy</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `model_settings`<sup>Required</sup> <a name="model_settings" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.modelSettings"></a>

```python
model_settings: CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference">CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference</a>

---

##### `allow_short_utterance_input`<sup>Optional</sup> <a name="allow_short_utterance_input" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.allowShortUtteranceInput"></a>

```python
allow_short_utterance_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `fail_open_input`<sup>Optional</sup> <a name="fail_open_input" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.failOpenInput"></a>

```python
fail_open_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `max_conversation_messages_input`<sup>Optional</sup> <a name="max_conversation_messages_input" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.maxConversationMessagesInput"></a>

```python
max_conversation_messages_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `model_settings_input`<sup>Optional</sup> <a name="model_settings_input" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.modelSettingsInput"></a>

```python
model_settings_input: CesGuardrailLlmPromptSecurityCustomPolicyModelSettings
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettings">CesGuardrailLlmPromptSecurityCustomPolicyModelSettings</a>

---

##### `policy_scope_input`<sup>Optional</sup> <a name="policy_scope_input" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.policyScopeInput"></a>

```python
policy_scope_input: str
```

- *Type:* str

---

##### `prompt_input`<sup>Optional</sup> <a name="prompt_input" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.promptInput"></a>

```python
prompt_input: str
```

- *Type:* str

---

##### `allow_short_utterance`<sup>Required</sup> <a name="allow_short_utterance" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.allowShortUtterance"></a>

```python
allow_short_utterance: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `fail_open`<sup>Required</sup> <a name="fail_open" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.failOpen"></a>

```python
fail_open: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `max_conversation_messages`<sup>Required</sup> <a name="max_conversation_messages" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.maxConversationMessages"></a>

```python
max_conversation_messages: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `policy_scope`<sup>Required</sup> <a name="policy_scope" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.policyScope"></a>

```python
policy_scope: str
```

- *Type:* str

---

##### `prompt`<sup>Required</sup> <a name="prompt" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.prompt"></a>

```python
prompt: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.internalValue"></a>

```python
internal_value: CesGuardrailLlmPromptSecurityCustomPolicy
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicy">CesGuardrailLlmPromptSecurityCustomPolicy</a>

---


### CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference <a name="CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import ces_guardrail

cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.property.defaultPromptTemplate">default_prompt_template</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettings">CesGuardrailLlmPromptSecurityDefaultSettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `default_prompt_template`<sup>Required</sup> <a name="default_prompt_template" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.property.defaultPromptTemplate"></a>

```python
default_prompt_template: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.property.internalValue"></a>

```python
internal_value: CesGuardrailLlmPromptSecurityDefaultSettings
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettings">CesGuardrailLlmPromptSecurityDefaultSettings</a>

---


### CesGuardrailLlmPromptSecurityOutputReference <a name="CesGuardrailLlmPromptSecurityOutputReference" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.Initializer"></a>

```python
from cdktn_provider_google import ces_guardrail

cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.putCustomPolicy">put_custom_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.putDefaultSettings">put_default_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.resetCustomPolicy">reset_custom_policy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.resetDefaultSettings">reset_default_settings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.resetFailOpen">reset_fail_open</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_custom_policy` <a name="put_custom_policy" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.putCustomPolicy"></a>

```python
def put_custom_policy(
  policy_scope: str,
  prompt: str,
  allow_short_utterance: bool | IResolvable = None,
  fail_open: bool | IResolvable = None,
  max_conversation_messages: typing.Union[int, float] = None,
  model_settings: CesGuardrailLlmPromptSecurityCustomPolicyModelSettings = None
) -> None
```

###### `policy_scope`<sup>Required</sup> <a name="policy_scope" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.putCustomPolicy.parameter.policyScope"></a>

- *Type:* str

Defines when to apply the policy check during the conversation.

If set to
'POLICY_SCOPE_UNSPECIFIED', the policy will be applied to the user input.
When applying the policy to the agent response, additional latency will
be introduced before the agent can respond.
Possible values:
USER_QUERY
AGENT_RESPONSE
USER_QUERY_AND_AGENT_RESPONSE

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_guardrail#policy_scope CesGuardrail#policy_scope}

---

###### `prompt`<sup>Required</sup> <a name="prompt" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.putCustomPolicy.parameter.prompt"></a>

- *Type:* str

Policy prompt.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_guardrail#prompt CesGuardrail#prompt}

---

###### `allow_short_utterance`<sup>Optional</sup> <a name="allow_short_utterance" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.putCustomPolicy.parameter.allowShortUtterance"></a>

- *Type:* bool | cdktn.IResolvable

By default, the LLM policy check is bypassed for short utterances.

Enabling this setting applies the policy check to all utterances,
including those that would normally be skipped.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_guardrail#allow_short_utterance CesGuardrail#allow_short_utterance}

---

###### `fail_open`<sup>Optional</sup> <a name="fail_open" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.putCustomPolicy.parameter.failOpen"></a>

- *Type:* bool | cdktn.IResolvable

If an error occurs during the policy check, fail open and do not trigger the guardrail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_guardrail#fail_open CesGuardrail#fail_open}

---

###### `max_conversation_messages`<sup>Optional</sup> <a name="max_conversation_messages" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.putCustomPolicy.parameter.maxConversationMessages"></a>

- *Type:* typing.Union[int, float]

When checking this policy, consider the last 'n' messages in the conversation.

When not set a default value of 10 will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_guardrail#max_conversation_messages CesGuardrail#max_conversation_messages}

---

###### `model_settings`<sup>Optional</sup> <a name="model_settings" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.putCustomPolicy.parameter.modelSettings"></a>

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettings">CesGuardrailLlmPromptSecurityCustomPolicyModelSettings</a>

model_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.38.0/docs/resources/ces_guardrail#model_settings CesGuardrail#model_settings}

---

##### `put_default_settings` <a name="put_default_settings" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.putDefaultSettings"></a>

```python
def put_default_settings() -> None
```

##### `reset_custom_policy` <a name="reset_custom_policy" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.resetCustomPolicy"></a>

```python
def reset_custom_policy() -> None
```

##### `reset_default_settings` <a name="reset_default_settings" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.resetDefaultSettings"></a>

```python
def reset_default_settings() -> None
```

##### `reset_fail_open` <a name="reset_fail_open" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.resetFailOpen"></a>

```python
def reset_fail_open() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.property.customPolicy">custom_policy</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference">CesGuardrailLlmPromptSecurityCustomPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.property.defaultSettings">default_settings</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference">CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.property.customPolicyInput">custom_policy_input</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicy">CesGuardrailLlmPromptSecurityCustomPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.property.defaultSettingsInput">default_settings_input</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettings">CesGuardrailLlmPromptSecurityDefaultSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.property.failOpenInput">fail_open_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.property.failOpen">fail_open</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurity">CesGuardrailLlmPromptSecurity</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `custom_policy`<sup>Required</sup> <a name="custom_policy" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.property.customPolicy"></a>

```python
custom_policy: CesGuardrailLlmPromptSecurityCustomPolicyOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference">CesGuardrailLlmPromptSecurityCustomPolicyOutputReference</a>

---

##### `default_settings`<sup>Required</sup> <a name="default_settings" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.property.defaultSettings"></a>

```python
default_settings: CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference">CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference</a>

---

##### `custom_policy_input`<sup>Optional</sup> <a name="custom_policy_input" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.property.customPolicyInput"></a>

```python
custom_policy_input: CesGuardrailLlmPromptSecurityCustomPolicy
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicy">CesGuardrailLlmPromptSecurityCustomPolicy</a>

---

##### `default_settings_input`<sup>Optional</sup> <a name="default_settings_input" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.property.defaultSettingsInput"></a>

```python
default_settings_input: CesGuardrailLlmPromptSecurityDefaultSettings
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettings">CesGuardrailLlmPromptSecurityDefaultSettings</a>

---

##### `fail_open_input`<sup>Optional</sup> <a name="fail_open_input" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.property.failOpenInput"></a>

```python
fail_open_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `fail_open`<sup>Required</sup> <a name="fail_open" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.property.failOpen"></a>

```python
fail_open: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.property.internalValue"></a>

```python
internal_value: CesGuardrailLlmPromptSecurity
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurity">CesGuardrailLlmPromptSecurity</a>

---


### CesGuardrailModelSafetyOutputReference <a name="CesGuardrailModelSafetyOutputReference" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.Initializer"></a>

```python
from cdktn_provider_google import ces_guardrail

cesGuardrail.CesGuardrailModelSafetyOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.putSafetySettings">put_safety_settings</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_safety_settings` <a name="put_safety_settings" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.putSafetySettings"></a>

```python
def put_safety_settings(
  value: IResolvable | typing.List[CesGuardrailModelSafetySafetySettings]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.putSafetySettings.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettings">CesGuardrailModelSafetySafetySettings</a>]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.property.safetySettings">safety_settings</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsList">CesGuardrailModelSafetySafetySettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.property.safetySettingsInput">safety_settings_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettings">CesGuardrailModelSafetySafetySettings</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafety">CesGuardrailModelSafety</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `safety_settings`<sup>Required</sup> <a name="safety_settings" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.property.safetySettings"></a>

```python
safety_settings: CesGuardrailModelSafetySafetySettingsList
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsList">CesGuardrailModelSafetySafetySettingsList</a>

---

##### `safety_settings_input`<sup>Optional</sup> <a name="safety_settings_input" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.property.safetySettingsInput"></a>

```python
safety_settings_input: IResolvable | typing.List[CesGuardrailModelSafetySafetySettings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettings">CesGuardrailModelSafetySafetySettings</a>]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.property.internalValue"></a>

```python
internal_value: CesGuardrailModelSafety
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafety">CesGuardrailModelSafety</a>

---


### CesGuardrailModelSafetySafetySettingsList <a name="CesGuardrailModelSafetySafetySettingsList" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsList.Initializer"></a>

```python
from cdktn_provider_google import ces_guardrail

cesGuardrail.CesGuardrailModelSafetySafetySettingsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> CesGuardrailModelSafetySafetySettingsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettings">CesGuardrailModelSafetySafetySettings</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[CesGuardrailModelSafetySafetySettings]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettings">CesGuardrailModelSafetySafetySettings</a>]

---


### CesGuardrailModelSafetySafetySettingsOutputReference <a name="CesGuardrailModelSafetySafetySettingsOutputReference" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import ces_guardrail

cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.property.categoryInput">category_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.property.thresholdInput">threshold_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.property.category">category</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.property.threshold">threshold</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettings">CesGuardrailModelSafetySafetySettings</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `category_input`<sup>Optional</sup> <a name="category_input" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.property.categoryInput"></a>

```python
category_input: str
```

- *Type:* str

---

##### `threshold_input`<sup>Optional</sup> <a name="threshold_input" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.property.thresholdInput"></a>

```python
threshold_input: str
```

- *Type:* str

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.property.category"></a>

```python
category: str
```

- *Type:* str

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.property.threshold"></a>

```python
threshold: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CesGuardrailModelSafetySafetySettings
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettings">CesGuardrailModelSafetySafetySettings</a>

---


### CesGuardrailTimeoutsOutputReference <a name="CesGuardrailTimeoutsOutputReference" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.Initializer"></a>

```python
from cdktn_provider_google import ces_guardrail

cesGuardrail.CesGuardrailTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailTimeouts">CesGuardrailTimeouts</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | CesGuardrailTimeouts
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailTimeouts">CesGuardrailTimeouts</a>

---



