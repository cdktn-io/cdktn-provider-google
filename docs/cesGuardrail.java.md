# `cesGuardrail` Submodule <a name="`cesGuardrail` Submodule" id="@cdktn/provider-google.cesGuardrail"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CesGuardrail <a name="CesGuardrail" id="@cdktn/provider-google.cesGuardrail.CesGuardrail"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail google_ces_guardrail}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.Initializer"></a>

```java
import io.cdktn.providers.google.ces_guardrail.CesGuardrail;

CesGuardrail.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .app(java.lang.String)
    .displayName(java.lang.String)
    .guardrailId(java.lang.String)
    .location(java.lang.String)
//  .action(CesGuardrailAction)
//  .codeCallback(CesGuardrailCodeCallback)
//  .contentFilter(CesGuardrailContentFilter)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .enabled(java.lang.Boolean|IResolvable)
//  .id(java.lang.String)
//  .llmPolicy(CesGuardrailLlmPolicy)
//  .llmPromptSecurity(CesGuardrailLlmPromptSecurity)
//  .modelSafety(CesGuardrailModelSafety)
//  .project(java.lang.String)
//  .timeouts(CesGuardrailTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.Initializer.parameter.app">app</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Display name of the guardrail. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.Initializer.parameter.guardrailId">guardrailId</a></code> | <code>java.lang.String</code> | The ID to use for the guardrail, which will become the final component of the guardrail's resource name. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.Initializer.parameter.action">action</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailAction">CesGuardrailAction</a></code> | action block. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.Initializer.parameter.codeCallback">codeCallback</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallback">CesGuardrailCodeCallback</a></code> | code_callback block. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.Initializer.parameter.contentFilter">contentFilter</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilter">CesGuardrailContentFilter</a></code> | content_filter block. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Description of the guardrail. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.Initializer.parameter.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether the guardrail is enabled. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#id CesGuardrail#id}. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.Initializer.parameter.llmPolicy">llmPolicy</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicy">CesGuardrailLlmPolicy</a></code> | llm_policy block. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.Initializer.parameter.llmPromptSecurity">llmPromptSecurity</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurity">CesGuardrailLlmPromptSecurity</a></code> | llm_prompt_security block. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.Initializer.parameter.modelSafety">modelSafety</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafety">CesGuardrailModelSafety</a></code> | model_safety block. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#project CesGuardrail#project}. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailTimeouts">CesGuardrailTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `app`<sup>Required</sup> <a name="app" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.Initializer.parameter.app"></a>

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#app CesGuardrail#app}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Display name of the guardrail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#display_name CesGuardrail#display_name}

---

##### `guardrailId`<sup>Required</sup> <a name="guardrailId" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.Initializer.parameter.guardrailId"></a>

- *Type:* java.lang.String

The ID to use for the guardrail, which will become the final component of the guardrail's resource name.

If not provided, a unique ID will be
automatically assigned for the guardrail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#guardrail_id CesGuardrail#guardrail_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#location CesGuardrail#location}

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.Initializer.parameter.action"></a>

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailAction">CesGuardrailAction</a>

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#action CesGuardrail#action}

---

##### `codeCallback`<sup>Optional</sup> <a name="codeCallback" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.Initializer.parameter.codeCallback"></a>

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallback">CesGuardrailCodeCallback</a>

code_callback block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#code_callback CesGuardrail#code_callback}

---

##### `contentFilter`<sup>Optional</sup> <a name="contentFilter" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.Initializer.parameter.contentFilter"></a>

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilter">CesGuardrailContentFilter</a>

content_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#content_filter CesGuardrail#content_filter}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#deletion_policy CesGuardrail#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Description of the guardrail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#description CesGuardrail#description}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.Initializer.parameter.enabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether the guardrail is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#enabled CesGuardrail#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#id CesGuardrail#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `llmPolicy`<sup>Optional</sup> <a name="llmPolicy" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.Initializer.parameter.llmPolicy"></a>

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicy">CesGuardrailLlmPolicy</a>

llm_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#llm_policy CesGuardrail#llm_policy}

---

##### `llmPromptSecurity`<sup>Optional</sup> <a name="llmPromptSecurity" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.Initializer.parameter.llmPromptSecurity"></a>

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurity">CesGuardrailLlmPromptSecurity</a>

llm_prompt_security block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#llm_prompt_security CesGuardrail#llm_prompt_security}

---

##### `modelSafety`<sup>Optional</sup> <a name="modelSafety" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.Initializer.parameter.modelSafety"></a>

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafety">CesGuardrailModelSafety</a>

model_safety block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#model_safety CesGuardrail#model_safety}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#project CesGuardrail#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailTimeouts">CesGuardrailTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#timeouts CesGuardrail#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.putAction">putAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.putCodeCallback">putCodeCallback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.putContentFilter">putContentFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.putLlmPolicy">putLlmPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.putLlmPromptSecurity">putLlmPromptSecurity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.putModelSafety">putModelSafety</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.resetAction">resetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.resetCodeCallback">resetCodeCallback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.resetContentFilter">resetContentFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.resetLlmPolicy">resetLlmPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.resetLlmPromptSecurity">resetLlmPromptSecurity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.resetModelSafety">resetModelSafety</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAction` <a name="putAction" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.putAction"></a>

```java
public void putAction(CesGuardrailAction value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.putAction.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailAction">CesGuardrailAction</a>

---

##### `putCodeCallback` <a name="putCodeCallback" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.putCodeCallback"></a>

```java
public void putCodeCallback(CesGuardrailCodeCallback value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.putCodeCallback.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallback">CesGuardrailCodeCallback</a>

---

##### `putContentFilter` <a name="putContentFilter" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.putContentFilter"></a>

```java
public void putContentFilter(CesGuardrailContentFilter value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.putContentFilter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilter">CesGuardrailContentFilter</a>

---

##### `putLlmPolicy` <a name="putLlmPolicy" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.putLlmPolicy"></a>

```java
public void putLlmPolicy(CesGuardrailLlmPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.putLlmPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicy">CesGuardrailLlmPolicy</a>

---

##### `putLlmPromptSecurity` <a name="putLlmPromptSecurity" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.putLlmPromptSecurity"></a>

```java
public void putLlmPromptSecurity(CesGuardrailLlmPromptSecurity value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.putLlmPromptSecurity.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurity">CesGuardrailLlmPromptSecurity</a>

---

##### `putModelSafety` <a name="putModelSafety" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.putModelSafety"></a>

```java
public void putModelSafety(CesGuardrailModelSafety value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.putModelSafety.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafety">CesGuardrailModelSafety</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.putTimeouts"></a>

```java
public void putTimeouts(CesGuardrailTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailTimeouts">CesGuardrailTimeouts</a>

---

##### `resetAction` <a name="resetAction" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.resetAction"></a>

```java
public void resetAction()
```

##### `resetCodeCallback` <a name="resetCodeCallback" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.resetCodeCallback"></a>

```java
public void resetCodeCallback()
```

##### `resetContentFilter` <a name="resetContentFilter" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.resetContentFilter"></a>

```java
public void resetContentFilter()
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.resetId"></a>

```java
public void resetId()
```

##### `resetLlmPolicy` <a name="resetLlmPolicy" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.resetLlmPolicy"></a>

```java
public void resetLlmPolicy()
```

##### `resetLlmPromptSecurity` <a name="resetLlmPromptSecurity" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.resetLlmPromptSecurity"></a>

```java
public void resetLlmPromptSecurity()
```

##### `resetModelSafety` <a name="resetModelSafety" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.resetModelSafety"></a>

```java
public void resetModelSafety()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CesGuardrail resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.isConstruct"></a>

```java
import io.cdktn.providers.google.ces_guardrail.CesGuardrail;

CesGuardrail.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.isTerraformElement"></a>

```java
import io.cdktn.providers.google.ces_guardrail.CesGuardrail;

CesGuardrail.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.isTerraformResource"></a>

```java
import io.cdktn.providers.google.ces_guardrail.CesGuardrail;

CesGuardrail.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.ces_guardrail.CesGuardrail;

CesGuardrail.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CesGuardrail.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a CesGuardrail resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CesGuardrail to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CesGuardrail that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the CesGuardrail to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.action">action</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference">CesGuardrailActionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.codeCallback">codeCallback</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference">CesGuardrailCodeCallbackOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.contentFilter">contentFilter</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference">CesGuardrailContentFilterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.llmPolicy">llmPolicy</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference">CesGuardrailLlmPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.llmPromptSecurity">llmPromptSecurity</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference">CesGuardrailLlmPromptSecurityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.modelSafety">modelSafety</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference">CesGuardrailModelSafetyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference">CesGuardrailTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.actionInput">actionInput</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailAction">CesGuardrailAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.appInput">appInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.codeCallbackInput">codeCallbackInput</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallback">CesGuardrailCodeCallback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.contentFilterInput">contentFilterInput</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilter">CesGuardrailContentFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.guardrailIdInput">guardrailIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.llmPolicyInput">llmPolicyInput</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicy">CesGuardrailLlmPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.llmPromptSecurityInput">llmPromptSecurityInput</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurity">CesGuardrailLlmPromptSecurity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.modelSafetyInput">modelSafetyInput</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafety">CesGuardrailModelSafety</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailTimeouts">CesGuardrailTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.app">app</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.guardrailId">guardrailId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.action"></a>

```java
public CesGuardrailActionOutputReference getAction();
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference">CesGuardrailActionOutputReference</a>

---

##### `codeCallback`<sup>Required</sup> <a name="codeCallback" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.codeCallback"></a>

```java
public CesGuardrailCodeCallbackOutputReference getCodeCallback();
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference">CesGuardrailCodeCallbackOutputReference</a>

---

##### `contentFilter`<sup>Required</sup> <a name="contentFilter" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.contentFilter"></a>

```java
public CesGuardrailContentFilterOutputReference getContentFilter();
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference">CesGuardrailContentFilterOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `llmPolicy`<sup>Required</sup> <a name="llmPolicy" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.llmPolicy"></a>

```java
public CesGuardrailLlmPolicyOutputReference getLlmPolicy();
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference">CesGuardrailLlmPolicyOutputReference</a>

---

##### `llmPromptSecurity`<sup>Required</sup> <a name="llmPromptSecurity" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.llmPromptSecurity"></a>

```java
public CesGuardrailLlmPromptSecurityOutputReference getLlmPromptSecurity();
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference">CesGuardrailLlmPromptSecurityOutputReference</a>

---

##### `modelSafety`<sup>Required</sup> <a name="modelSafety" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.modelSafety"></a>

```java
public CesGuardrailModelSafetyOutputReference getModelSafety();
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference">CesGuardrailModelSafetyOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.timeouts"></a>

```java
public CesGuardrailTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference">CesGuardrailTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.actionInput"></a>

```java
public CesGuardrailAction getActionInput();
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailAction">CesGuardrailAction</a>

---

##### `appInput`<sup>Optional</sup> <a name="appInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.appInput"></a>

```java
public java.lang.String getAppInput();
```

- *Type:* java.lang.String

---

##### `codeCallbackInput`<sup>Optional</sup> <a name="codeCallbackInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.codeCallbackInput"></a>

```java
public CesGuardrailCodeCallback getCodeCallbackInput();
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallback">CesGuardrailCodeCallback</a>

---

##### `contentFilterInput`<sup>Optional</sup> <a name="contentFilterInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.contentFilterInput"></a>

```java
public CesGuardrailContentFilter getContentFilterInput();
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilter">CesGuardrailContentFilter</a>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `guardrailIdInput`<sup>Optional</sup> <a name="guardrailIdInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.guardrailIdInput"></a>

```java
public java.lang.String getGuardrailIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `llmPolicyInput`<sup>Optional</sup> <a name="llmPolicyInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.llmPolicyInput"></a>

```java
public CesGuardrailLlmPolicy getLlmPolicyInput();
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicy">CesGuardrailLlmPolicy</a>

---

##### `llmPromptSecurityInput`<sup>Optional</sup> <a name="llmPromptSecurityInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.llmPromptSecurityInput"></a>

```java
public CesGuardrailLlmPromptSecurity getLlmPromptSecurityInput();
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurity">CesGuardrailLlmPromptSecurity</a>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `modelSafetyInput`<sup>Optional</sup> <a name="modelSafetyInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.modelSafetyInput"></a>

```java
public CesGuardrailModelSafety getModelSafetyInput();
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafety">CesGuardrailModelSafety</a>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.timeoutsInput"></a>

```java
public IResolvable|CesGuardrailTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailTimeouts">CesGuardrailTimeouts</a>

---

##### `app`<sup>Required</sup> <a name="app" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.app"></a>

```java
public java.lang.String getApp();
```

- *Type:* java.lang.String

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `guardrailId`<sup>Required</sup> <a name="guardrailId" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.guardrailId"></a>

```java
public java.lang.String getGuardrailId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrail.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.cesGuardrail.CesGuardrail.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CesGuardrailAction <a name="CesGuardrailAction" id="@cdktn/provider-google.cesGuardrail.CesGuardrailAction"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesGuardrail.CesGuardrailAction.Initializer"></a>

```java
import io.cdktn.providers.google.ces_guardrail.CesGuardrailAction;

CesGuardrailAction.builder()
//  .generativeAnswer(CesGuardrailActionGenerativeAnswer)
//  .respondImmediately(CesGuardrailActionRespondImmediately)
//  .transferAgent(CesGuardrailActionTransferAgent)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailAction.property.generativeAnswer">generativeAnswer</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswer">CesGuardrailActionGenerativeAnswer</a></code> | generative_answer block. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailAction.property.respondImmediately">respondImmediately</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediately">CesGuardrailActionRespondImmediately</a></code> | respond_immediately block. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailAction.property.transferAgent">transferAgent</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgent">CesGuardrailActionTransferAgent</a></code> | transfer_agent block. |

---

##### `generativeAnswer`<sup>Optional</sup> <a name="generativeAnswer" id="@cdktn/provider-google.cesGuardrail.CesGuardrailAction.property.generativeAnswer"></a>

```java
public CesGuardrailActionGenerativeAnswer getGenerativeAnswer();
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswer">CesGuardrailActionGenerativeAnswer</a>

generative_answer block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#generative_answer CesGuardrail#generative_answer}

---

##### `respondImmediately`<sup>Optional</sup> <a name="respondImmediately" id="@cdktn/provider-google.cesGuardrail.CesGuardrailAction.property.respondImmediately"></a>

```java
public CesGuardrailActionRespondImmediately getRespondImmediately();
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediately">CesGuardrailActionRespondImmediately</a>

respond_immediately block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#respond_immediately CesGuardrail#respond_immediately}

---

##### `transferAgent`<sup>Optional</sup> <a name="transferAgent" id="@cdktn/provider-google.cesGuardrail.CesGuardrailAction.property.transferAgent"></a>

```java
public CesGuardrailActionTransferAgent getTransferAgent();
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgent">CesGuardrailActionTransferAgent</a>

transfer_agent block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#transfer_agent CesGuardrail#transfer_agent}

---

### CesGuardrailActionGenerativeAnswer <a name="CesGuardrailActionGenerativeAnswer" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswer.Initializer"></a>

```java
import io.cdktn.providers.google.ces_guardrail.CesGuardrailActionGenerativeAnswer;

CesGuardrailActionGenerativeAnswer.builder()
    .prompt(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswer.property.prompt">prompt</a></code> | <code>java.lang.String</code> | The prompt to use for the generative answer. |

---

##### `prompt`<sup>Required</sup> <a name="prompt" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswer.property.prompt"></a>

```java
public java.lang.String getPrompt();
```

- *Type:* java.lang.String

The prompt to use for the generative answer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#prompt CesGuardrail#prompt}

---

### CesGuardrailActionRespondImmediately <a name="CesGuardrailActionRespondImmediately" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediately"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediately.Initializer"></a>

```java
import io.cdktn.providers.google.ces_guardrail.CesGuardrailActionRespondImmediately;

CesGuardrailActionRespondImmediately.builder()
    .responses(IResolvable|java.util.List<CesGuardrailActionRespondImmediatelyResponses>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediately.property.responses">responses</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponses">CesGuardrailActionRespondImmediatelyResponses</a>></code> | responses block. |

---

##### `responses`<sup>Required</sup> <a name="responses" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediately.property.responses"></a>

```java
public IResolvable|java.util.List<CesGuardrailActionRespondImmediatelyResponses> getResponses();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponses">CesGuardrailActionRespondImmediatelyResponses</a>>

responses block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#responses CesGuardrail#responses}

---

### CesGuardrailActionRespondImmediatelyResponses <a name="CesGuardrailActionRespondImmediatelyResponses" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponses"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponses.Initializer"></a>

```java
import io.cdktn.providers.google.ces_guardrail.CesGuardrailActionRespondImmediatelyResponses;

CesGuardrailActionRespondImmediatelyResponses.builder()
    .text(java.lang.String)
//  .disabled(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponses.property.text">text</a></code> | <code>java.lang.String</code> | Text for the agent to respond with. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponses.property.disabled">disabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether the response is disabled. Disabled responses are not used by the agent. |

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponses.property.text"></a>

```java
public java.lang.String getText();
```

- *Type:* java.lang.String

Text for the agent to respond with.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#text CesGuardrail#text}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponses.property.disabled"></a>

```java
public java.lang.Boolean|IResolvable getDisabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether the response is disabled. Disabled responses are not used by the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#disabled CesGuardrail#disabled}

---

### CesGuardrailActionTransferAgent <a name="CesGuardrailActionTransferAgent" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgent.Initializer"></a>

```java
import io.cdktn.providers.google.ces_guardrail.CesGuardrailActionTransferAgent;

CesGuardrailActionTransferAgent.builder()
    .agent(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgent.property.agent">agent</a></code> | <code>java.lang.String</code> | The name of the agent to transfer the conversation to. |

---

##### `agent`<sup>Required</sup> <a name="agent" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgent.property.agent"></a>

```java
public java.lang.String getAgent();
```

- *Type:* java.lang.String

The name of the agent to transfer the conversation to.

The agent must be
in the same app as the current agent.
Format:
'projects/{project}/locations/{location}/apps/{app}/agents/{agent}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#agent CesGuardrail#agent}

---

### CesGuardrailCodeCallback <a name="CesGuardrailCodeCallback" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallback"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallback.Initializer"></a>

```java
import io.cdktn.providers.google.ces_guardrail.CesGuardrailCodeCallback;

CesGuardrailCodeCallback.builder()
//  .afterAgentCallback(CesGuardrailCodeCallbackAfterAgentCallback)
//  .afterModelCallback(CesGuardrailCodeCallbackAfterModelCallback)
//  .beforeAgentCallback(CesGuardrailCodeCallbackBeforeAgentCallback)
//  .beforeModelCallback(CesGuardrailCodeCallbackBeforeModelCallback)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallback.property.afterAgentCallback">afterAgentCallback</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallback">CesGuardrailCodeCallbackAfterAgentCallback</a></code> | after_agent_callback block. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallback.property.afterModelCallback">afterModelCallback</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallback">CesGuardrailCodeCallbackAfterModelCallback</a></code> | after_model_callback block. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallback.property.beforeAgentCallback">beforeAgentCallback</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallback">CesGuardrailCodeCallbackBeforeAgentCallback</a></code> | before_agent_callback block. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallback.property.beforeModelCallback">beforeModelCallback</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallback">CesGuardrailCodeCallbackBeforeModelCallback</a></code> | before_model_callback block. |

---

##### `afterAgentCallback`<sup>Optional</sup> <a name="afterAgentCallback" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallback.property.afterAgentCallback"></a>

```java
public CesGuardrailCodeCallbackAfterAgentCallback getAfterAgentCallback();
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallback">CesGuardrailCodeCallbackAfterAgentCallback</a>

after_agent_callback block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#after_agent_callback CesGuardrail#after_agent_callback}

---

##### `afterModelCallback`<sup>Optional</sup> <a name="afterModelCallback" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallback.property.afterModelCallback"></a>

```java
public CesGuardrailCodeCallbackAfterModelCallback getAfterModelCallback();
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallback">CesGuardrailCodeCallbackAfterModelCallback</a>

after_model_callback block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#after_model_callback CesGuardrail#after_model_callback}

---

##### `beforeAgentCallback`<sup>Optional</sup> <a name="beforeAgentCallback" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallback.property.beforeAgentCallback"></a>

```java
public CesGuardrailCodeCallbackBeforeAgentCallback getBeforeAgentCallback();
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallback">CesGuardrailCodeCallbackBeforeAgentCallback</a>

before_agent_callback block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#before_agent_callback CesGuardrail#before_agent_callback}

---

##### `beforeModelCallback`<sup>Optional</sup> <a name="beforeModelCallback" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallback.property.beforeModelCallback"></a>

```java
public CesGuardrailCodeCallbackBeforeModelCallback getBeforeModelCallback();
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallback">CesGuardrailCodeCallbackBeforeModelCallback</a>

before_model_callback block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#before_model_callback CesGuardrail#before_model_callback}

---

### CesGuardrailCodeCallbackAfterAgentCallback <a name="CesGuardrailCodeCallbackAfterAgentCallback" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallback"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallback.Initializer"></a>

```java
import io.cdktn.providers.google.ces_guardrail.CesGuardrailCodeCallbackAfterAgentCallback;

CesGuardrailCodeCallbackAfterAgentCallback.builder()
    .pythonCode(java.lang.String)
//  .description(java.lang.String)
//  .disabled(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallback.property.pythonCode">pythonCode</a></code> | <code>java.lang.String</code> | The python code to execute for the callback. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallback.property.description">description</a></code> | <code>java.lang.String</code> | Human-readable description of the callback. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallback.property.disabled">disabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether the callback is disabled. Disabled callbacks are ignored by the agent. |

---

##### `pythonCode`<sup>Required</sup> <a name="pythonCode" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallback.property.pythonCode"></a>

```java
public java.lang.String getPythonCode();
```

- *Type:* java.lang.String

The python code to execute for the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#python_code CesGuardrail#python_code}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallback.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Human-readable description of the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#description CesGuardrail#description}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallback.property.disabled"></a>

```java
public java.lang.Boolean|IResolvable getDisabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether the callback is disabled. Disabled callbacks are ignored by the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#disabled CesGuardrail#disabled}

---

### CesGuardrailCodeCallbackAfterModelCallback <a name="CesGuardrailCodeCallbackAfterModelCallback" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallback"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallback.Initializer"></a>

```java
import io.cdktn.providers.google.ces_guardrail.CesGuardrailCodeCallbackAfterModelCallback;

CesGuardrailCodeCallbackAfterModelCallback.builder()
    .pythonCode(java.lang.String)
//  .description(java.lang.String)
//  .disabled(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallback.property.pythonCode">pythonCode</a></code> | <code>java.lang.String</code> | The python code to execute for the callback. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallback.property.description">description</a></code> | <code>java.lang.String</code> | Human-readable description of the callback. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallback.property.disabled">disabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether the callback is disabled. Disabled callbacks are ignored by the agent. |

---

##### `pythonCode`<sup>Required</sup> <a name="pythonCode" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallback.property.pythonCode"></a>

```java
public java.lang.String getPythonCode();
```

- *Type:* java.lang.String

The python code to execute for the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#python_code CesGuardrail#python_code}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallback.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Human-readable description of the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#description CesGuardrail#description}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallback.property.disabled"></a>

```java
public java.lang.Boolean|IResolvable getDisabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether the callback is disabled. Disabled callbacks are ignored by the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#disabled CesGuardrail#disabled}

---

### CesGuardrailCodeCallbackBeforeAgentCallback <a name="CesGuardrailCodeCallbackBeforeAgentCallback" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallback"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallback.Initializer"></a>

```java
import io.cdktn.providers.google.ces_guardrail.CesGuardrailCodeCallbackBeforeAgentCallback;

CesGuardrailCodeCallbackBeforeAgentCallback.builder()
    .pythonCode(java.lang.String)
//  .description(java.lang.String)
//  .disabled(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallback.property.pythonCode">pythonCode</a></code> | <code>java.lang.String</code> | The python code to execute for the callback. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallback.property.description">description</a></code> | <code>java.lang.String</code> | Human-readable description of the callback. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallback.property.disabled">disabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether the callback is disabled. Disabled callbacks are ignored by the agent. |

---

##### `pythonCode`<sup>Required</sup> <a name="pythonCode" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallback.property.pythonCode"></a>

```java
public java.lang.String getPythonCode();
```

- *Type:* java.lang.String

The python code to execute for the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#python_code CesGuardrail#python_code}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallback.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Human-readable description of the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#description CesGuardrail#description}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallback.property.disabled"></a>

```java
public java.lang.Boolean|IResolvable getDisabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether the callback is disabled. Disabled callbacks are ignored by the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#disabled CesGuardrail#disabled}

---

### CesGuardrailCodeCallbackBeforeModelCallback <a name="CesGuardrailCodeCallbackBeforeModelCallback" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallback"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallback.Initializer"></a>

```java
import io.cdktn.providers.google.ces_guardrail.CesGuardrailCodeCallbackBeforeModelCallback;

CesGuardrailCodeCallbackBeforeModelCallback.builder()
    .pythonCode(java.lang.String)
//  .description(java.lang.String)
//  .disabled(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallback.property.pythonCode">pythonCode</a></code> | <code>java.lang.String</code> | The python code to execute for the callback. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallback.property.description">description</a></code> | <code>java.lang.String</code> | Human-readable description of the callback. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallback.property.disabled">disabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether the callback is disabled. Disabled callbacks are ignored by the agent. |

---

##### `pythonCode`<sup>Required</sup> <a name="pythonCode" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallback.property.pythonCode"></a>

```java
public java.lang.String getPythonCode();
```

- *Type:* java.lang.String

The python code to execute for the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#python_code CesGuardrail#python_code}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallback.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Human-readable description of the callback.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#description CesGuardrail#description}

---

##### `disabled`<sup>Optional</sup> <a name="disabled" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallback.property.disabled"></a>

```java
public java.lang.Boolean|IResolvable getDisabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether the callback is disabled. Disabled callbacks are ignored by the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#disabled CesGuardrail#disabled}

---

### CesGuardrailConfig <a name="CesGuardrailConfig" id="@cdktn/provider-google.cesGuardrail.CesGuardrailConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.Initializer"></a>

```java
import io.cdktn.providers.google.ces_guardrail.CesGuardrailConfig;

CesGuardrailConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .app(java.lang.String)
    .displayName(java.lang.String)
    .guardrailId(java.lang.String)
    .location(java.lang.String)
//  .action(CesGuardrailAction)
//  .codeCallback(CesGuardrailCodeCallback)
//  .contentFilter(CesGuardrailContentFilter)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .enabled(java.lang.Boolean|IResolvable)
//  .id(java.lang.String)
//  .llmPolicy(CesGuardrailLlmPolicy)
//  .llmPromptSecurity(CesGuardrailLlmPromptSecurity)
//  .modelSafety(CesGuardrailModelSafety)
//  .project(java.lang.String)
//  .timeouts(CesGuardrailTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.app">app</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Display name of the guardrail. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.guardrailId">guardrailId</a></code> | <code>java.lang.String</code> | The ID to use for the guardrail, which will become the final component of the guardrail's resource name. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.action">action</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailAction">CesGuardrailAction</a></code> | action block. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.codeCallback">codeCallback</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallback">CesGuardrailCodeCallback</a></code> | code_callback block. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.contentFilter">contentFilter</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilter">CesGuardrailContentFilter</a></code> | content_filter block. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.description">description</a></code> | <code>java.lang.String</code> | Description of the guardrail. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether the guardrail is enabled. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#id CesGuardrail#id}. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.llmPolicy">llmPolicy</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicy">CesGuardrailLlmPolicy</a></code> | llm_policy block. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.llmPromptSecurity">llmPromptSecurity</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurity">CesGuardrailLlmPromptSecurity</a></code> | llm_prompt_security block. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.modelSafety">modelSafety</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafety">CesGuardrailModelSafety</a></code> | model_safety block. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#project CesGuardrail#project}. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailTimeouts">CesGuardrailTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `app`<sup>Required</sup> <a name="app" id="@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.app"></a>

```java
public java.lang.String getApp();
```

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#app CesGuardrail#app}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Display name of the guardrail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#display_name CesGuardrail#display_name}

---

##### `guardrailId`<sup>Required</sup> <a name="guardrailId" id="@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.guardrailId"></a>

```java
public java.lang.String getGuardrailId();
```

- *Type:* java.lang.String

The ID to use for the guardrail, which will become the final component of the guardrail's resource name.

If not provided, a unique ID will be
automatically assigned for the guardrail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#guardrail_id CesGuardrail#guardrail_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#location CesGuardrail#location}

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.action"></a>

```java
public CesGuardrailAction getAction();
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailAction">CesGuardrailAction</a>

action block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#action CesGuardrail#action}

---

##### `codeCallback`<sup>Optional</sup> <a name="codeCallback" id="@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.codeCallback"></a>

```java
public CesGuardrailCodeCallback getCodeCallback();
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallback">CesGuardrailCodeCallback</a>

code_callback block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#code_callback CesGuardrail#code_callback}

---

##### `contentFilter`<sup>Optional</sup> <a name="contentFilter" id="@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.contentFilter"></a>

```java
public CesGuardrailContentFilter getContentFilter();
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilter">CesGuardrailContentFilter</a>

content_filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#content_filter CesGuardrail#content_filter}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#deletion_policy CesGuardrail#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Description of the guardrail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#description CesGuardrail#description}

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether the guardrail is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#enabled CesGuardrail#enabled}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#id CesGuardrail#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `llmPolicy`<sup>Optional</sup> <a name="llmPolicy" id="@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.llmPolicy"></a>

```java
public CesGuardrailLlmPolicy getLlmPolicy();
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicy">CesGuardrailLlmPolicy</a>

llm_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#llm_policy CesGuardrail#llm_policy}

---

##### `llmPromptSecurity`<sup>Optional</sup> <a name="llmPromptSecurity" id="@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.llmPromptSecurity"></a>

```java
public CesGuardrailLlmPromptSecurity getLlmPromptSecurity();
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurity">CesGuardrailLlmPromptSecurity</a>

llm_prompt_security block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#llm_prompt_security CesGuardrail#llm_prompt_security}

---

##### `modelSafety`<sup>Optional</sup> <a name="modelSafety" id="@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.modelSafety"></a>

```java
public CesGuardrailModelSafety getModelSafety();
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafety">CesGuardrailModelSafety</a>

model_safety block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#model_safety CesGuardrail#model_safety}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#project CesGuardrail#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.cesGuardrail.CesGuardrailConfig.property.timeouts"></a>

```java
public CesGuardrailTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailTimeouts">CesGuardrailTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#timeouts CesGuardrail#timeouts}

---

### CesGuardrailContentFilter <a name="CesGuardrailContentFilter" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilter.Initializer"></a>

```java
import io.cdktn.providers.google.ces_guardrail.CesGuardrailContentFilter;

CesGuardrailContentFilter.builder()
    .matchType(java.lang.String)
//  .bannedContents(java.util.List<java.lang.String>)
//  .bannedContentsInAgentResponse(java.util.List<java.lang.String>)
//  .bannedContentsInUserInput(java.util.List<java.lang.String>)
//  .disregardDiacritics(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilter.property.matchType">matchType</a></code> | <code>java.lang.String</code> | Match type for the content filter. Possible values: SIMPLE_STRING_MATCH WORD_BOUNDARY_STRING_MATCH REGEXP_MATCH. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilter.property.bannedContents">bannedContents</a></code> | <code>java.util.List<java.lang.String></code> | List of banned phrases. Applies to both user inputs and agent responses. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilter.property.bannedContentsInAgentResponse">bannedContentsInAgentResponse</a></code> | <code>java.util.List<java.lang.String></code> | List of banned phrases. Applies only to agent responses. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilter.property.bannedContentsInUserInput">bannedContentsInUserInput</a></code> | <code>java.util.List<java.lang.String></code> | List of banned phrases. Applies only to user inputs. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilter.property.disregardDiacritics">disregardDiacritics</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If true, diacritics are ignored during matching. |

---

##### `matchType`<sup>Required</sup> <a name="matchType" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilter.property.matchType"></a>

```java
public java.lang.String getMatchType();
```

- *Type:* java.lang.String

Match type for the content filter. Possible values: SIMPLE_STRING_MATCH WORD_BOUNDARY_STRING_MATCH REGEXP_MATCH.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#match_type CesGuardrail#match_type}

---

##### `bannedContents`<sup>Optional</sup> <a name="bannedContents" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilter.property.bannedContents"></a>

```java
public java.util.List<java.lang.String> getBannedContents();
```

- *Type:* java.util.List<java.lang.String>

List of banned phrases. Applies to both user inputs and agent responses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#banned_contents CesGuardrail#banned_contents}

---

##### `bannedContentsInAgentResponse`<sup>Optional</sup> <a name="bannedContentsInAgentResponse" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilter.property.bannedContentsInAgentResponse"></a>

```java
public java.util.List<java.lang.String> getBannedContentsInAgentResponse();
```

- *Type:* java.util.List<java.lang.String>

List of banned phrases. Applies only to agent responses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#banned_contents_in_agent_response CesGuardrail#banned_contents_in_agent_response}

---

##### `bannedContentsInUserInput`<sup>Optional</sup> <a name="bannedContentsInUserInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilter.property.bannedContentsInUserInput"></a>

```java
public java.util.List<java.lang.String> getBannedContentsInUserInput();
```

- *Type:* java.util.List<java.lang.String>

List of banned phrases. Applies only to user inputs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#banned_contents_in_user_input CesGuardrail#banned_contents_in_user_input}

---

##### `disregardDiacritics`<sup>Optional</sup> <a name="disregardDiacritics" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilter.property.disregardDiacritics"></a>

```java
public java.lang.Boolean|IResolvable getDisregardDiacritics();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If true, diacritics are ignored during matching.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#disregard_diacritics CesGuardrail#disregard_diacritics}

---

### CesGuardrailLlmPolicy <a name="CesGuardrailLlmPolicy" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicy.Initializer"></a>

```java
import io.cdktn.providers.google.ces_guardrail.CesGuardrailLlmPolicy;

CesGuardrailLlmPolicy.builder()
    .policyScope(java.lang.String)
    .prompt(java.lang.String)
//  .allowShortUtterance(java.lang.Boolean|IResolvable)
//  .failOpen(java.lang.Boolean|IResolvable)
//  .maxConversationMessages(java.lang.Number)
//  .modelSettings(CesGuardrailLlmPolicyModelSettings)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicy.property.policyScope">policyScope</a></code> | <code>java.lang.String</code> | Defines when to apply the policy check during the conversation. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicy.property.prompt">prompt</a></code> | <code>java.lang.String</code> | Policy prompt. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicy.property.allowShortUtterance">allowShortUtterance</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | By default, the LLM policy check is bypassed for short utterances. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicy.property.failOpen">failOpen</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If an error occurs during the policy check, fail open and do not trigger the guardrail. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicy.property.maxConversationMessages">maxConversationMessages</a></code> | <code>java.lang.Number</code> | When checking this policy, consider the last 'n' messages in the conversation. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicy.property.modelSettings">modelSettings</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettings">CesGuardrailLlmPolicyModelSettings</a></code> | model_settings block. |

---

##### `policyScope`<sup>Required</sup> <a name="policyScope" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicy.property.policyScope"></a>

```java
public java.lang.String getPolicyScope();
```

- *Type:* java.lang.String

Defines when to apply the policy check during the conversation.

If set to
'POLICY_SCOPE_UNSPECIFIED', the policy will be applied to the user input.
When applying the policy to the agent response, additional latency will
be introduced before the agent can respond.
Possible values:
USER_QUERY
AGENT_RESPONSE
USER_QUERY_AND_AGENT_RESPONSE Possible values: ["USER_QUERY", "AGENT_RESPONSE", "USER_QUERY_AND_AGENT_RESPONSE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#policy_scope CesGuardrail#policy_scope}

---

##### `prompt`<sup>Required</sup> <a name="prompt" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicy.property.prompt"></a>

```java
public java.lang.String getPrompt();
```

- *Type:* java.lang.String

Policy prompt.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#prompt CesGuardrail#prompt}

---

##### `allowShortUtterance`<sup>Optional</sup> <a name="allowShortUtterance" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicy.property.allowShortUtterance"></a>

```java
public java.lang.Boolean|IResolvable getAllowShortUtterance();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

By default, the LLM policy check is bypassed for short utterances.

Enabling this setting applies the policy check to all utterances,
including those that would normally be skipped.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#allow_short_utterance CesGuardrail#allow_short_utterance}

---

##### `failOpen`<sup>Optional</sup> <a name="failOpen" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicy.property.failOpen"></a>

```java
public java.lang.Boolean|IResolvable getFailOpen();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If an error occurs during the policy check, fail open and do not trigger the guardrail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#fail_open CesGuardrail#fail_open}

---

##### `maxConversationMessages`<sup>Optional</sup> <a name="maxConversationMessages" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicy.property.maxConversationMessages"></a>

```java
public java.lang.Number getMaxConversationMessages();
```

- *Type:* java.lang.Number

When checking this policy, consider the last 'n' messages in the conversation.

When not set a default value of 10 will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#max_conversation_messages CesGuardrail#max_conversation_messages}

---

##### `modelSettings`<sup>Optional</sup> <a name="modelSettings" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicy.property.modelSettings"></a>

```java
public CesGuardrailLlmPolicyModelSettings getModelSettings();
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettings">CesGuardrailLlmPolicyModelSettings</a>

model_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#model_settings CesGuardrail#model_settings}

---

### CesGuardrailLlmPolicyModelSettings <a name="CesGuardrailLlmPolicyModelSettings" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettings.Initializer"></a>

```java
import io.cdktn.providers.google.ces_guardrail.CesGuardrailLlmPolicyModelSettings;

CesGuardrailLlmPolicyModelSettings.builder()
//  .model(java.lang.String)
//  .temperature(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettings.property.model">model</a></code> | <code>java.lang.String</code> | The LLM model that the agent should use. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettings.property.temperature">temperature</a></code> | <code>java.lang.Number</code> | If set, this temperature will be used for the LLM model. |

---

##### `model`<sup>Optional</sup> <a name="model" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettings.property.model"></a>

```java
public java.lang.String getModel();
```

- *Type:* java.lang.String

The LLM model that the agent should use.

If not set, the agent will inherit the model from its parent agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#model CesGuardrail#model}

---

##### `temperature`<sup>Optional</sup> <a name="temperature" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettings.property.temperature"></a>

```java
public java.lang.Number getTemperature();
```

- *Type:* java.lang.Number

If set, this temperature will be used for the LLM model.

Temperature
controls the randomness of the model's responses. Lower temperatures
produce responses that are more predictable. Higher temperatures produce
responses that are more creative.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#temperature CesGuardrail#temperature}

---

### CesGuardrailLlmPromptSecurity <a name="CesGuardrailLlmPromptSecurity" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurity"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurity.Initializer"></a>

```java
import io.cdktn.providers.google.ces_guardrail.CesGuardrailLlmPromptSecurity;

CesGuardrailLlmPromptSecurity.builder()
//  .customPolicy(CesGuardrailLlmPromptSecurityCustomPolicy)
//  .defaultSettings(CesGuardrailLlmPromptSecurityDefaultSettings)
//  .failOpen(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurity.property.customPolicy">customPolicy</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicy">CesGuardrailLlmPromptSecurityCustomPolicy</a></code> | custom_policy block. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurity.property.defaultSettings">defaultSettings</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettings">CesGuardrailLlmPromptSecurityDefaultSettings</a></code> | default_settings block. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurity.property.failOpen">failOpen</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Determines the behavior when the guardrail encounters an LLM error. |

---

##### `customPolicy`<sup>Optional</sup> <a name="customPolicy" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurity.property.customPolicy"></a>

```java
public CesGuardrailLlmPromptSecurityCustomPolicy getCustomPolicy();
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicy">CesGuardrailLlmPromptSecurityCustomPolicy</a>

custom_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#custom_policy CesGuardrail#custom_policy}

---

##### `defaultSettings`<sup>Optional</sup> <a name="defaultSettings" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurity.property.defaultSettings"></a>

```java
public CesGuardrailLlmPromptSecurityDefaultSettings getDefaultSettings();
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettings">CesGuardrailLlmPromptSecurityDefaultSettings</a>

default_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#default_settings CesGuardrail#default_settings}

---

##### `failOpen`<sup>Optional</sup> <a name="failOpen" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurity.property.failOpen"></a>

```java
public java.lang.Boolean|IResolvable getFailOpen();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Determines the behavior when the guardrail encounters an LLM error.

* If true: the guardrail is bypassed.
* If false (default): the guardrail triggers/blocks.
  Note: If a custom policy is provided, this field is ignored in favor of
  the policy's 'failOpen' configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#fail_open CesGuardrail#fail_open}

---

### CesGuardrailLlmPromptSecurityCustomPolicy <a name="CesGuardrailLlmPromptSecurityCustomPolicy" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicy.Initializer"></a>

```java
import io.cdktn.providers.google.ces_guardrail.CesGuardrailLlmPromptSecurityCustomPolicy;

CesGuardrailLlmPromptSecurityCustomPolicy.builder()
    .policyScope(java.lang.String)
    .prompt(java.lang.String)
//  .allowShortUtterance(java.lang.Boolean|IResolvable)
//  .failOpen(java.lang.Boolean|IResolvable)
//  .maxConversationMessages(java.lang.Number)
//  .modelSettings(CesGuardrailLlmPromptSecurityCustomPolicyModelSettings)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicy.property.policyScope">policyScope</a></code> | <code>java.lang.String</code> | Defines when to apply the policy check during the conversation. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicy.property.prompt">prompt</a></code> | <code>java.lang.String</code> | Policy prompt. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicy.property.allowShortUtterance">allowShortUtterance</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | By default, the LLM policy check is bypassed for short utterances. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicy.property.failOpen">failOpen</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If an error occurs during the policy check, fail open and do not trigger the guardrail. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicy.property.maxConversationMessages">maxConversationMessages</a></code> | <code>java.lang.Number</code> | When checking this policy, consider the last 'n' messages in the conversation. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicy.property.modelSettings">modelSettings</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettings">CesGuardrailLlmPromptSecurityCustomPolicyModelSettings</a></code> | model_settings block. |

---

##### `policyScope`<sup>Required</sup> <a name="policyScope" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicy.property.policyScope"></a>

```java
public java.lang.String getPolicyScope();
```

- *Type:* java.lang.String

Defines when to apply the policy check during the conversation.

If set to
'POLICY_SCOPE_UNSPECIFIED', the policy will be applied to the user input.
When applying the policy to the agent response, additional latency will
be introduced before the agent can respond.
Possible values:
USER_QUERY
AGENT_RESPONSE
USER_QUERY_AND_AGENT_RESPONSE

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#policy_scope CesGuardrail#policy_scope}

---

##### `prompt`<sup>Required</sup> <a name="prompt" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicy.property.prompt"></a>

```java
public java.lang.String getPrompt();
```

- *Type:* java.lang.String

Policy prompt.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#prompt CesGuardrail#prompt}

---

##### `allowShortUtterance`<sup>Optional</sup> <a name="allowShortUtterance" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicy.property.allowShortUtterance"></a>

```java
public java.lang.Boolean|IResolvable getAllowShortUtterance();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

By default, the LLM policy check is bypassed for short utterances.

Enabling this setting applies the policy check to all utterances,
including those that would normally be skipped.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#allow_short_utterance CesGuardrail#allow_short_utterance}

---

##### `failOpen`<sup>Optional</sup> <a name="failOpen" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicy.property.failOpen"></a>

```java
public java.lang.Boolean|IResolvable getFailOpen();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If an error occurs during the policy check, fail open and do not trigger the guardrail.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#fail_open CesGuardrail#fail_open}

---

##### `maxConversationMessages`<sup>Optional</sup> <a name="maxConversationMessages" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicy.property.maxConversationMessages"></a>

```java
public java.lang.Number getMaxConversationMessages();
```

- *Type:* java.lang.Number

When checking this policy, consider the last 'n' messages in the conversation.

When not set a default value of 10 will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#max_conversation_messages CesGuardrail#max_conversation_messages}

---

##### `modelSettings`<sup>Optional</sup> <a name="modelSettings" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicy.property.modelSettings"></a>

```java
public CesGuardrailLlmPromptSecurityCustomPolicyModelSettings getModelSettings();
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettings">CesGuardrailLlmPromptSecurityCustomPolicyModelSettings</a>

model_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#model_settings CesGuardrail#model_settings}

---

### CesGuardrailLlmPromptSecurityCustomPolicyModelSettings <a name="CesGuardrailLlmPromptSecurityCustomPolicyModelSettings" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettings.Initializer"></a>

```java
import io.cdktn.providers.google.ces_guardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettings;

CesGuardrailLlmPromptSecurityCustomPolicyModelSettings.builder()
//  .model(java.lang.String)
//  .temperature(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettings.property.model">model</a></code> | <code>java.lang.String</code> | The LLM model that the agent should use. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettings.property.temperature">temperature</a></code> | <code>java.lang.Number</code> | If set, this temperature will be used for the LLM model. |

---

##### `model`<sup>Optional</sup> <a name="model" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettings.property.model"></a>

```java
public java.lang.String getModel();
```

- *Type:* java.lang.String

The LLM model that the agent should use.

If not set, the agent will inherit the model from its parent agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#model CesGuardrail#model}

---

##### `temperature`<sup>Optional</sup> <a name="temperature" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettings.property.temperature"></a>

```java
public java.lang.Number getTemperature();
```

- *Type:* java.lang.Number

If set, this temperature will be used for the LLM model.

Temperature
controls the randomness of the model's responses. Lower temperatures
produce responses that are more predictable. Higher temperatures produce
responses that are more creative.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#temperature CesGuardrail#temperature}

---

### CesGuardrailLlmPromptSecurityDefaultSettings <a name="CesGuardrailLlmPromptSecurityDefaultSettings" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettings.Initializer"></a>

```java
import io.cdktn.providers.google.ces_guardrail.CesGuardrailLlmPromptSecurityDefaultSettings;

CesGuardrailLlmPromptSecurityDefaultSettings.builder()
    .build();
```


### CesGuardrailModelSafety <a name="CesGuardrailModelSafety" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafety"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafety.Initializer"></a>

```java
import io.cdktn.providers.google.ces_guardrail.CesGuardrailModelSafety;

CesGuardrailModelSafety.builder()
    .safetySettings(IResolvable|java.util.List<CesGuardrailModelSafetySafetySettings>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafety.property.safetySettings">safetySettings</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettings">CesGuardrailModelSafetySafetySettings</a>></code> | safety_settings block. |

---

##### `safetySettings`<sup>Required</sup> <a name="safetySettings" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafety.property.safetySettings"></a>

```java
public IResolvable|java.util.List<CesGuardrailModelSafetySafetySettings> getSafetySettings();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettings">CesGuardrailModelSafetySafetySettings</a>>

safety_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#safety_settings CesGuardrail#safety_settings}

---

### CesGuardrailModelSafetySafetySettings <a name="CesGuardrailModelSafetySafetySettings" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettings.Initializer"></a>

```java
import io.cdktn.providers.google.ces_guardrail.CesGuardrailModelSafetySafetySettings;

CesGuardrailModelSafetySafetySettings.builder()
    .category(java.lang.String)
    .threshold(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettings.property.category">category</a></code> | <code>java.lang.String</code> | The harm category. Possible values: HARM_CATEGORY_HATE_SPEECH HARM_CATEGORY_DANGEROUS_CONTENT HARM_CATEGORY_HARASSMENT HARM_CATEGORY_SEXUALLY_EXPLICIT Possible values: ["HARM_CATEGORY_HATE_SPEECH", "HARM_CATEGORY_DANGEROUS_CONTENT", "HARM_CATEGORY_HARASSMENT", "HARM_CATEGORY_SEXUALLY_EXPLICIT"]. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettings.property.threshold">threshold</a></code> | <code>java.lang.String</code> | The harm block threshold. Possible values: BLOCK_LOW_AND_ABOVE BLOCK_MEDIUM_AND_ABOVE BLOCK_ONLY_HIGH BLOCK_NONE OFF Possible values: ["BLOCK_LOW_AND_ABOVE", "BLOCK_MEDIUM_AND_ABOVE", "BLOCK_ONLY_HIGH", "BLOCK_NONE", "OFF"]. |

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettings.property.category"></a>

```java
public java.lang.String getCategory();
```

- *Type:* java.lang.String

The harm category. Possible values: HARM_CATEGORY_HATE_SPEECH HARM_CATEGORY_DANGEROUS_CONTENT HARM_CATEGORY_HARASSMENT HARM_CATEGORY_SEXUALLY_EXPLICIT Possible values: ["HARM_CATEGORY_HATE_SPEECH", "HARM_CATEGORY_DANGEROUS_CONTENT", "HARM_CATEGORY_HARASSMENT", "HARM_CATEGORY_SEXUALLY_EXPLICIT"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#category CesGuardrail#category}

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettings.property.threshold"></a>

```java
public java.lang.String getThreshold();
```

- *Type:* java.lang.String

The harm block threshold. Possible values: BLOCK_LOW_AND_ABOVE BLOCK_MEDIUM_AND_ABOVE BLOCK_ONLY_HIGH BLOCK_NONE OFF Possible values: ["BLOCK_LOW_AND_ABOVE", "BLOCK_MEDIUM_AND_ABOVE", "BLOCK_ONLY_HIGH", "BLOCK_NONE", "OFF"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#threshold CesGuardrail#threshold}

---

### CesGuardrailTimeouts <a name="CesGuardrailTimeouts" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google.ces_guardrail.CesGuardrailTimeouts;

CesGuardrailTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#create CesGuardrail#create}. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#delete CesGuardrail#delete}. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#update CesGuardrail#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#create CesGuardrail#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#delete CesGuardrail#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/resources/ces_guardrail#update CesGuardrail#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### CesGuardrailActionGenerativeAnswerOutputReference <a name="CesGuardrailActionGenerativeAnswerOutputReference" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.ces_guardrail.CesGuardrailActionGenerativeAnswerOutputReference;

new CesGuardrailActionGenerativeAnswerOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.property.promptInput">promptInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.property.prompt">prompt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswer">CesGuardrailActionGenerativeAnswer</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `promptInput`<sup>Optional</sup> <a name="promptInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.property.promptInput"></a>

```java
public java.lang.String getPromptInput();
```

- *Type:* java.lang.String

---

##### `prompt`<sup>Required</sup> <a name="prompt" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.property.prompt"></a>

```java
public java.lang.String getPrompt();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference.property.internalValue"></a>

```java
public CesGuardrailActionGenerativeAnswer getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswer">CesGuardrailActionGenerativeAnswer</a>

---


### CesGuardrailActionOutputReference <a name="CesGuardrailActionOutputReference" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.ces_guardrail.CesGuardrailActionOutputReference;

new CesGuardrailActionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.putGenerativeAnswer">putGenerativeAnswer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.putRespondImmediately">putRespondImmediately</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.putTransferAgent">putTransferAgent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.resetGenerativeAnswer">resetGenerativeAnswer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.resetRespondImmediately">resetRespondImmediately</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.resetTransferAgent">resetTransferAgent</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putGenerativeAnswer` <a name="putGenerativeAnswer" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.putGenerativeAnswer"></a>

```java
public void putGenerativeAnswer(CesGuardrailActionGenerativeAnswer value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.putGenerativeAnswer.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswer">CesGuardrailActionGenerativeAnswer</a>

---

##### `putRespondImmediately` <a name="putRespondImmediately" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.putRespondImmediately"></a>

```java
public void putRespondImmediately(CesGuardrailActionRespondImmediately value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.putRespondImmediately.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediately">CesGuardrailActionRespondImmediately</a>

---

##### `putTransferAgent` <a name="putTransferAgent" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.putTransferAgent"></a>

```java
public void putTransferAgent(CesGuardrailActionTransferAgent value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.putTransferAgent.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgent">CesGuardrailActionTransferAgent</a>

---

##### `resetGenerativeAnswer` <a name="resetGenerativeAnswer" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.resetGenerativeAnswer"></a>

```java
public void resetGenerativeAnswer()
```

##### `resetRespondImmediately` <a name="resetRespondImmediately" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.resetRespondImmediately"></a>

```java
public void resetRespondImmediately()
```

##### `resetTransferAgent` <a name="resetTransferAgent" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.resetTransferAgent"></a>

```java
public void resetTransferAgent()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.property.generativeAnswer">generativeAnswer</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference">CesGuardrailActionGenerativeAnswerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.property.respondImmediately">respondImmediately</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference">CesGuardrailActionRespondImmediatelyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.property.transferAgent">transferAgent</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference">CesGuardrailActionTransferAgentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.property.generativeAnswerInput">generativeAnswerInput</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswer">CesGuardrailActionGenerativeAnswer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.property.respondImmediatelyInput">respondImmediatelyInput</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediately">CesGuardrailActionRespondImmediately</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.property.transferAgentInput">transferAgentInput</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgent">CesGuardrailActionTransferAgent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailAction">CesGuardrailAction</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `generativeAnswer`<sup>Required</sup> <a name="generativeAnswer" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.property.generativeAnswer"></a>

```java
public CesGuardrailActionGenerativeAnswerOutputReference getGenerativeAnswer();
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswerOutputReference">CesGuardrailActionGenerativeAnswerOutputReference</a>

---

##### `respondImmediately`<sup>Required</sup> <a name="respondImmediately" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.property.respondImmediately"></a>

```java
public CesGuardrailActionRespondImmediatelyOutputReference getRespondImmediately();
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference">CesGuardrailActionRespondImmediatelyOutputReference</a>

---

##### `transferAgent`<sup>Required</sup> <a name="transferAgent" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.property.transferAgent"></a>

```java
public CesGuardrailActionTransferAgentOutputReference getTransferAgent();
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference">CesGuardrailActionTransferAgentOutputReference</a>

---

##### `generativeAnswerInput`<sup>Optional</sup> <a name="generativeAnswerInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.property.generativeAnswerInput"></a>

```java
public CesGuardrailActionGenerativeAnswer getGenerativeAnswerInput();
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionGenerativeAnswer">CesGuardrailActionGenerativeAnswer</a>

---

##### `respondImmediatelyInput`<sup>Optional</sup> <a name="respondImmediatelyInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.property.respondImmediatelyInput"></a>

```java
public CesGuardrailActionRespondImmediately getRespondImmediatelyInput();
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediately">CesGuardrailActionRespondImmediately</a>

---

##### `transferAgentInput`<sup>Optional</sup> <a name="transferAgentInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.property.transferAgentInput"></a>

```java
public CesGuardrailActionTransferAgent getTransferAgentInput();
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgent">CesGuardrailActionTransferAgent</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionOutputReference.property.internalValue"></a>

```java
public CesGuardrailAction getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailAction">CesGuardrailAction</a>

---


### CesGuardrailActionRespondImmediatelyOutputReference <a name="CesGuardrailActionRespondImmediatelyOutputReference" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.ces_guardrail.CesGuardrailActionRespondImmediatelyOutputReference;

new CesGuardrailActionRespondImmediatelyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.putResponses">putResponses</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putResponses` <a name="putResponses" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.putResponses"></a>

```java
public void putResponses(IResolvable|java.util.List<CesGuardrailActionRespondImmediatelyResponses> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.putResponses.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponses">CesGuardrailActionRespondImmediatelyResponses</a>>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.property.responses">responses</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesList">CesGuardrailActionRespondImmediatelyResponsesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.property.responsesInput">responsesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponses">CesGuardrailActionRespondImmediatelyResponses</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediately">CesGuardrailActionRespondImmediately</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `responses`<sup>Required</sup> <a name="responses" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.property.responses"></a>

```java
public CesGuardrailActionRespondImmediatelyResponsesList getResponses();
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesList">CesGuardrailActionRespondImmediatelyResponsesList</a>

---

##### `responsesInput`<sup>Optional</sup> <a name="responsesInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.property.responsesInput"></a>

```java
public IResolvable|java.util.List<CesGuardrailActionRespondImmediatelyResponses> getResponsesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponses">CesGuardrailActionRespondImmediatelyResponses</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyOutputReference.property.internalValue"></a>

```java
public CesGuardrailActionRespondImmediately getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediately">CesGuardrailActionRespondImmediately</a>

---


### CesGuardrailActionRespondImmediatelyResponsesList <a name="CesGuardrailActionRespondImmediatelyResponsesList" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesList.Initializer"></a>

```java
import io.cdktn.providers.google.ces_guardrail.CesGuardrailActionRespondImmediatelyResponsesList;

new CesGuardrailActionRespondImmediatelyResponsesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesList.get"></a>

```java
public CesGuardrailActionRespondImmediatelyResponsesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponses">CesGuardrailActionRespondImmediatelyResponses</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<CesGuardrailActionRespondImmediatelyResponses> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponses">CesGuardrailActionRespondImmediatelyResponses</a>>

---


### CesGuardrailActionRespondImmediatelyResponsesOutputReference <a name="CesGuardrailActionRespondImmediatelyResponsesOutputReference" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.ces_guardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference;

new CesGuardrailActionRespondImmediatelyResponsesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.resetDisabled">resetDisabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDisabled` <a name="resetDisabled" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.resetDisabled"></a>

```java
public void resetDisabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.property.disabledInput">disabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.property.textInput">textInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.property.disabled">disabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.property.text">text</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponses">CesGuardrailActionRespondImmediatelyResponses</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.property.disabledInput"></a>

```java
public java.lang.Boolean|IResolvable getDisabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `textInput`<sup>Optional</sup> <a name="textInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.property.textInput"></a>

```java
public java.lang.String getTextInput();
```

- *Type:* java.lang.String

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.property.disabled"></a>

```java
public java.lang.Boolean|IResolvable getDisabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.property.text"></a>

```java
public java.lang.String getText();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponsesOutputReference.property.internalValue"></a>

```java
public IResolvable|CesGuardrailActionRespondImmediatelyResponses getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionRespondImmediatelyResponses">CesGuardrailActionRespondImmediatelyResponses</a>

---


### CesGuardrailActionTransferAgentOutputReference <a name="CesGuardrailActionTransferAgentOutputReference" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.ces_guardrail.CesGuardrailActionTransferAgentOutputReference;

new CesGuardrailActionTransferAgentOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.property.agentInput">agentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.property.agent">agent</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgent">CesGuardrailActionTransferAgent</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `agentInput`<sup>Optional</sup> <a name="agentInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.property.agentInput"></a>

```java
public java.lang.String getAgentInput();
```

- *Type:* java.lang.String

---

##### `agent`<sup>Required</sup> <a name="agent" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.property.agent"></a>

```java
public java.lang.String getAgent();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgentOutputReference.property.internalValue"></a>

```java
public CesGuardrailActionTransferAgent getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailActionTransferAgent">CesGuardrailActionTransferAgent</a>

---


### CesGuardrailCodeCallbackAfterAgentCallbackOutputReference <a name="CesGuardrailCodeCallbackAfterAgentCallbackOutputReference" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.ces_guardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference;

new CesGuardrailCodeCallbackAfterAgentCallbackOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.resetDisabled">resetDisabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDisabled` <a name="resetDisabled" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.resetDisabled"></a>

```java
public void resetDisabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.property.disabledInput">disabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.property.pythonCodeInput">pythonCodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.property.disabled">disabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.property.pythonCode">pythonCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallback">CesGuardrailCodeCallbackAfterAgentCallback</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.property.disabledInput"></a>

```java
public java.lang.Boolean|IResolvable getDisabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `pythonCodeInput`<sup>Optional</sup> <a name="pythonCodeInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.property.pythonCodeInput"></a>

```java
public java.lang.String getPythonCodeInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.property.disabled"></a>

```java
public java.lang.Boolean|IResolvable getDisabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `pythonCode`<sup>Required</sup> <a name="pythonCode" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.property.pythonCode"></a>

```java
public java.lang.String getPythonCode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference.property.internalValue"></a>

```java
public CesGuardrailCodeCallbackAfterAgentCallback getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallback">CesGuardrailCodeCallbackAfterAgentCallback</a>

---


### CesGuardrailCodeCallbackAfterModelCallbackOutputReference <a name="CesGuardrailCodeCallbackAfterModelCallbackOutputReference" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.ces_guardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference;

new CesGuardrailCodeCallbackAfterModelCallbackOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.resetDisabled">resetDisabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDisabled` <a name="resetDisabled" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.resetDisabled"></a>

```java
public void resetDisabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.property.disabledInput">disabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.property.pythonCodeInput">pythonCodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.property.disabled">disabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.property.pythonCode">pythonCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallback">CesGuardrailCodeCallbackAfterModelCallback</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.property.disabledInput"></a>

```java
public java.lang.Boolean|IResolvable getDisabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `pythonCodeInput`<sup>Optional</sup> <a name="pythonCodeInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.property.pythonCodeInput"></a>

```java
public java.lang.String getPythonCodeInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.property.disabled"></a>

```java
public java.lang.Boolean|IResolvable getDisabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `pythonCode`<sup>Required</sup> <a name="pythonCode" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.property.pythonCode"></a>

```java
public java.lang.String getPythonCode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference.property.internalValue"></a>

```java
public CesGuardrailCodeCallbackAfterModelCallback getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallback">CesGuardrailCodeCallbackAfterModelCallback</a>

---


### CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference <a name="CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.ces_guardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference;

new CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.resetDisabled">resetDisabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDisabled` <a name="resetDisabled" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.resetDisabled"></a>

```java
public void resetDisabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.property.disabledInput">disabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.property.pythonCodeInput">pythonCodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.property.disabled">disabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.property.pythonCode">pythonCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallback">CesGuardrailCodeCallbackBeforeAgentCallback</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.property.disabledInput"></a>

```java
public java.lang.Boolean|IResolvable getDisabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `pythonCodeInput`<sup>Optional</sup> <a name="pythonCodeInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.property.pythonCodeInput"></a>

```java
public java.lang.String getPythonCodeInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.property.disabled"></a>

```java
public java.lang.Boolean|IResolvable getDisabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `pythonCode`<sup>Required</sup> <a name="pythonCode" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.property.pythonCode"></a>

```java
public java.lang.String getPythonCode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference.property.internalValue"></a>

```java
public CesGuardrailCodeCallbackBeforeAgentCallback getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallback">CesGuardrailCodeCallbackBeforeAgentCallback</a>

---


### CesGuardrailCodeCallbackBeforeModelCallbackOutputReference <a name="CesGuardrailCodeCallbackBeforeModelCallbackOutputReference" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.ces_guardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference;

new CesGuardrailCodeCallbackBeforeModelCallbackOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.resetDisabled">resetDisabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDisabled` <a name="resetDisabled" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.resetDisabled"></a>

```java
public void resetDisabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.property.disabledInput">disabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.property.pythonCodeInput">pythonCodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.property.disabled">disabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.property.pythonCode">pythonCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallback">CesGuardrailCodeCallbackBeforeModelCallback</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `disabledInput`<sup>Optional</sup> <a name="disabledInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.property.disabledInput"></a>

```java
public java.lang.Boolean|IResolvable getDisabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `pythonCodeInput`<sup>Optional</sup> <a name="pythonCodeInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.property.pythonCodeInput"></a>

```java
public java.lang.String getPythonCodeInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `disabled`<sup>Required</sup> <a name="disabled" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.property.disabled"></a>

```java
public java.lang.Boolean|IResolvable getDisabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `pythonCode`<sup>Required</sup> <a name="pythonCode" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.property.pythonCode"></a>

```java
public java.lang.String getPythonCode();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference.property.internalValue"></a>

```java
public CesGuardrailCodeCallbackBeforeModelCallback getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallback">CesGuardrailCodeCallbackBeforeModelCallback</a>

---


### CesGuardrailCodeCallbackOutputReference <a name="CesGuardrailCodeCallbackOutputReference" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.ces_guardrail.CesGuardrailCodeCallbackOutputReference;

new CesGuardrailCodeCallbackOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.putAfterAgentCallback">putAfterAgentCallback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.putAfterModelCallback">putAfterModelCallback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.putBeforeAgentCallback">putBeforeAgentCallback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.putBeforeModelCallback">putBeforeModelCallback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.resetAfterAgentCallback">resetAfterAgentCallback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.resetAfterModelCallback">resetAfterModelCallback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.resetBeforeAgentCallback">resetBeforeAgentCallback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.resetBeforeModelCallback">resetBeforeModelCallback</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAfterAgentCallback` <a name="putAfterAgentCallback" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.putAfterAgentCallback"></a>

```java
public void putAfterAgentCallback(CesGuardrailCodeCallbackAfterAgentCallback value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.putAfterAgentCallback.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallback">CesGuardrailCodeCallbackAfterAgentCallback</a>

---

##### `putAfterModelCallback` <a name="putAfterModelCallback" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.putAfterModelCallback"></a>

```java
public void putAfterModelCallback(CesGuardrailCodeCallbackAfterModelCallback value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.putAfterModelCallback.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallback">CesGuardrailCodeCallbackAfterModelCallback</a>

---

##### `putBeforeAgentCallback` <a name="putBeforeAgentCallback" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.putBeforeAgentCallback"></a>

```java
public void putBeforeAgentCallback(CesGuardrailCodeCallbackBeforeAgentCallback value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.putBeforeAgentCallback.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallback">CesGuardrailCodeCallbackBeforeAgentCallback</a>

---

##### `putBeforeModelCallback` <a name="putBeforeModelCallback" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.putBeforeModelCallback"></a>

```java
public void putBeforeModelCallback(CesGuardrailCodeCallbackBeforeModelCallback value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.putBeforeModelCallback.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallback">CesGuardrailCodeCallbackBeforeModelCallback</a>

---

##### `resetAfterAgentCallback` <a name="resetAfterAgentCallback" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.resetAfterAgentCallback"></a>

```java
public void resetAfterAgentCallback()
```

##### `resetAfterModelCallback` <a name="resetAfterModelCallback" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.resetAfterModelCallback"></a>

```java
public void resetAfterModelCallback()
```

##### `resetBeforeAgentCallback` <a name="resetBeforeAgentCallback" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.resetBeforeAgentCallback"></a>

```java
public void resetBeforeAgentCallback()
```

##### `resetBeforeModelCallback` <a name="resetBeforeModelCallback" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.resetBeforeModelCallback"></a>

```java
public void resetBeforeModelCallback()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.property.afterAgentCallback">afterAgentCallback</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference">CesGuardrailCodeCallbackAfterAgentCallbackOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.property.afterModelCallback">afterModelCallback</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference">CesGuardrailCodeCallbackAfterModelCallbackOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.property.beforeAgentCallback">beforeAgentCallback</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference">CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.property.beforeModelCallback">beforeModelCallback</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference">CesGuardrailCodeCallbackBeforeModelCallbackOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.property.afterAgentCallbackInput">afterAgentCallbackInput</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallback">CesGuardrailCodeCallbackAfterAgentCallback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.property.afterModelCallbackInput">afterModelCallbackInput</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallback">CesGuardrailCodeCallbackAfterModelCallback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.property.beforeAgentCallbackInput">beforeAgentCallbackInput</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallback">CesGuardrailCodeCallbackBeforeAgentCallback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.property.beforeModelCallbackInput">beforeModelCallbackInput</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallback">CesGuardrailCodeCallbackBeforeModelCallback</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallback">CesGuardrailCodeCallback</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `afterAgentCallback`<sup>Required</sup> <a name="afterAgentCallback" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.property.afterAgentCallback"></a>

```java
public CesGuardrailCodeCallbackAfterAgentCallbackOutputReference getAfterAgentCallback();
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallbackOutputReference">CesGuardrailCodeCallbackAfterAgentCallbackOutputReference</a>

---

##### `afterModelCallback`<sup>Required</sup> <a name="afterModelCallback" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.property.afterModelCallback"></a>

```java
public CesGuardrailCodeCallbackAfterModelCallbackOutputReference getAfterModelCallback();
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallbackOutputReference">CesGuardrailCodeCallbackAfterModelCallbackOutputReference</a>

---

##### `beforeAgentCallback`<sup>Required</sup> <a name="beforeAgentCallback" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.property.beforeAgentCallback"></a>

```java
public CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference getBeforeAgentCallback();
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference">CesGuardrailCodeCallbackBeforeAgentCallbackOutputReference</a>

---

##### `beforeModelCallback`<sup>Required</sup> <a name="beforeModelCallback" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.property.beforeModelCallback"></a>

```java
public CesGuardrailCodeCallbackBeforeModelCallbackOutputReference getBeforeModelCallback();
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallbackOutputReference">CesGuardrailCodeCallbackBeforeModelCallbackOutputReference</a>

---

##### `afterAgentCallbackInput`<sup>Optional</sup> <a name="afterAgentCallbackInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.property.afterAgentCallbackInput"></a>

```java
public CesGuardrailCodeCallbackAfterAgentCallback getAfterAgentCallbackInput();
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterAgentCallback">CesGuardrailCodeCallbackAfterAgentCallback</a>

---

##### `afterModelCallbackInput`<sup>Optional</sup> <a name="afterModelCallbackInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.property.afterModelCallbackInput"></a>

```java
public CesGuardrailCodeCallbackAfterModelCallback getAfterModelCallbackInput();
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackAfterModelCallback">CesGuardrailCodeCallbackAfterModelCallback</a>

---

##### `beforeAgentCallbackInput`<sup>Optional</sup> <a name="beforeAgentCallbackInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.property.beforeAgentCallbackInput"></a>

```java
public CesGuardrailCodeCallbackBeforeAgentCallback getBeforeAgentCallbackInput();
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeAgentCallback">CesGuardrailCodeCallbackBeforeAgentCallback</a>

---

##### `beforeModelCallbackInput`<sup>Optional</sup> <a name="beforeModelCallbackInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.property.beforeModelCallbackInput"></a>

```java
public CesGuardrailCodeCallbackBeforeModelCallback getBeforeModelCallbackInput();
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackBeforeModelCallback">CesGuardrailCodeCallbackBeforeModelCallback</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallbackOutputReference.property.internalValue"></a>

```java
public CesGuardrailCodeCallback getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailCodeCallback">CesGuardrailCodeCallback</a>

---


### CesGuardrailContentFilterOutputReference <a name="CesGuardrailContentFilterOutputReference" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.ces_guardrail.CesGuardrailContentFilterOutputReference;

new CesGuardrailContentFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.resetBannedContents">resetBannedContents</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.resetBannedContentsInAgentResponse">resetBannedContentsInAgentResponse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.resetBannedContentsInUserInput">resetBannedContentsInUserInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.resetDisregardDiacritics">resetDisregardDiacritics</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBannedContents` <a name="resetBannedContents" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.resetBannedContents"></a>

```java
public void resetBannedContents()
```

##### `resetBannedContentsInAgentResponse` <a name="resetBannedContentsInAgentResponse" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.resetBannedContentsInAgentResponse"></a>

```java
public void resetBannedContentsInAgentResponse()
```

##### `resetBannedContentsInUserInput` <a name="resetBannedContentsInUserInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.resetBannedContentsInUserInput"></a>

```java
public void resetBannedContentsInUserInput()
```

##### `resetDisregardDiacritics` <a name="resetDisregardDiacritics" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.resetDisregardDiacritics"></a>

```java
public void resetDisregardDiacritics()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.property.bannedContentsInAgentResponseInput">bannedContentsInAgentResponseInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.property.bannedContentsInput">bannedContentsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.property.bannedContentsInUserInputInput">bannedContentsInUserInputInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.property.disregardDiacriticsInput">disregardDiacriticsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.property.matchTypeInput">matchTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.property.bannedContents">bannedContents</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.property.bannedContentsInAgentResponse">bannedContentsInAgentResponse</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.property.bannedContentsInUserInput">bannedContentsInUserInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.property.disregardDiacritics">disregardDiacritics</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.property.matchType">matchType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilter">CesGuardrailContentFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bannedContentsInAgentResponseInput`<sup>Optional</sup> <a name="bannedContentsInAgentResponseInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.property.bannedContentsInAgentResponseInput"></a>

```java
public java.util.List<java.lang.String> getBannedContentsInAgentResponseInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `bannedContentsInput`<sup>Optional</sup> <a name="bannedContentsInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.property.bannedContentsInput"></a>

```java
public java.util.List<java.lang.String> getBannedContentsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `bannedContentsInUserInputInput`<sup>Optional</sup> <a name="bannedContentsInUserInputInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.property.bannedContentsInUserInputInput"></a>

```java
public java.util.List<java.lang.String> getBannedContentsInUserInputInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `disregardDiacriticsInput`<sup>Optional</sup> <a name="disregardDiacriticsInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.property.disregardDiacriticsInput"></a>

```java
public java.lang.Boolean|IResolvable getDisregardDiacriticsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `matchTypeInput`<sup>Optional</sup> <a name="matchTypeInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.property.matchTypeInput"></a>

```java
public java.lang.String getMatchTypeInput();
```

- *Type:* java.lang.String

---

##### `bannedContents`<sup>Required</sup> <a name="bannedContents" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.property.bannedContents"></a>

```java
public java.util.List<java.lang.String> getBannedContents();
```

- *Type:* java.util.List<java.lang.String>

---

##### `bannedContentsInAgentResponse`<sup>Required</sup> <a name="bannedContentsInAgentResponse" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.property.bannedContentsInAgentResponse"></a>

```java
public java.util.List<java.lang.String> getBannedContentsInAgentResponse();
```

- *Type:* java.util.List<java.lang.String>

---

##### `bannedContentsInUserInput`<sup>Required</sup> <a name="bannedContentsInUserInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.property.bannedContentsInUserInput"></a>

```java
public java.util.List<java.lang.String> getBannedContentsInUserInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `disregardDiacritics`<sup>Required</sup> <a name="disregardDiacritics" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.property.disregardDiacritics"></a>

```java
public java.lang.Boolean|IResolvable getDisregardDiacritics();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `matchType`<sup>Required</sup> <a name="matchType" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.property.matchType"></a>

```java
public java.lang.String getMatchType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilterOutputReference.property.internalValue"></a>

```java
public CesGuardrailContentFilter getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailContentFilter">CesGuardrailContentFilter</a>

---


### CesGuardrailLlmPolicyModelSettingsOutputReference <a name="CesGuardrailLlmPolicyModelSettingsOutputReference" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.ces_guardrail.CesGuardrailLlmPolicyModelSettingsOutputReference;

new CesGuardrailLlmPolicyModelSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.resetModel">resetModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.resetTemperature">resetTemperature</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetModel` <a name="resetModel" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.resetModel"></a>

```java
public void resetModel()
```

##### `resetTemperature` <a name="resetTemperature" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.resetTemperature"></a>

```java
public void resetTemperature()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.property.modelInput">modelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.property.temperatureInput">temperatureInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.property.model">model</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.property.temperature">temperature</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettings">CesGuardrailLlmPolicyModelSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `modelInput`<sup>Optional</sup> <a name="modelInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.property.modelInput"></a>

```java
public java.lang.String getModelInput();
```

- *Type:* java.lang.String

---

##### `temperatureInput`<sup>Optional</sup> <a name="temperatureInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.property.temperatureInput"></a>

```java
public java.lang.Number getTemperatureInput();
```

- *Type:* java.lang.Number

---

##### `model`<sup>Required</sup> <a name="model" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.property.model"></a>

```java
public java.lang.String getModel();
```

- *Type:* java.lang.String

---

##### `temperature`<sup>Required</sup> <a name="temperature" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.property.temperature"></a>

```java
public java.lang.Number getTemperature();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference.property.internalValue"></a>

```java
public CesGuardrailLlmPolicyModelSettings getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettings">CesGuardrailLlmPolicyModelSettings</a>

---


### CesGuardrailLlmPolicyOutputReference <a name="CesGuardrailLlmPolicyOutputReference" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.ces_guardrail.CesGuardrailLlmPolicyOutputReference;

new CesGuardrailLlmPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.putModelSettings">putModelSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.resetAllowShortUtterance">resetAllowShortUtterance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.resetFailOpen">resetFailOpen</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.resetMaxConversationMessages">resetMaxConversationMessages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.resetModelSettings">resetModelSettings</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putModelSettings` <a name="putModelSettings" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.putModelSettings"></a>

```java
public void putModelSettings(CesGuardrailLlmPolicyModelSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.putModelSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettings">CesGuardrailLlmPolicyModelSettings</a>

---

##### `resetAllowShortUtterance` <a name="resetAllowShortUtterance" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.resetAllowShortUtterance"></a>

```java
public void resetAllowShortUtterance()
```

##### `resetFailOpen` <a name="resetFailOpen" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.resetFailOpen"></a>

```java
public void resetFailOpen()
```

##### `resetMaxConversationMessages` <a name="resetMaxConversationMessages" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.resetMaxConversationMessages"></a>

```java
public void resetMaxConversationMessages()
```

##### `resetModelSettings` <a name="resetModelSettings" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.resetModelSettings"></a>

```java
public void resetModelSettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.property.modelSettings">modelSettings</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference">CesGuardrailLlmPolicyModelSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.property.allowShortUtteranceInput">allowShortUtteranceInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.property.failOpenInput">failOpenInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.property.maxConversationMessagesInput">maxConversationMessagesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.property.modelSettingsInput">modelSettingsInput</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettings">CesGuardrailLlmPolicyModelSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.property.policyScopeInput">policyScopeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.property.promptInput">promptInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.property.allowShortUtterance">allowShortUtterance</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.property.failOpen">failOpen</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.property.maxConversationMessages">maxConversationMessages</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.property.policyScope">policyScope</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.property.prompt">prompt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicy">CesGuardrailLlmPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `modelSettings`<sup>Required</sup> <a name="modelSettings" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.property.modelSettings"></a>

```java
public CesGuardrailLlmPolicyModelSettingsOutputReference getModelSettings();
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettingsOutputReference">CesGuardrailLlmPolicyModelSettingsOutputReference</a>

---

##### `allowShortUtteranceInput`<sup>Optional</sup> <a name="allowShortUtteranceInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.property.allowShortUtteranceInput"></a>

```java
public java.lang.Boolean|IResolvable getAllowShortUtteranceInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `failOpenInput`<sup>Optional</sup> <a name="failOpenInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.property.failOpenInput"></a>

```java
public java.lang.Boolean|IResolvable getFailOpenInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `maxConversationMessagesInput`<sup>Optional</sup> <a name="maxConversationMessagesInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.property.maxConversationMessagesInput"></a>

```java
public java.lang.Number getMaxConversationMessagesInput();
```

- *Type:* java.lang.Number

---

##### `modelSettingsInput`<sup>Optional</sup> <a name="modelSettingsInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.property.modelSettingsInput"></a>

```java
public CesGuardrailLlmPolicyModelSettings getModelSettingsInput();
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyModelSettings">CesGuardrailLlmPolicyModelSettings</a>

---

##### `policyScopeInput`<sup>Optional</sup> <a name="policyScopeInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.property.policyScopeInput"></a>

```java
public java.lang.String getPolicyScopeInput();
```

- *Type:* java.lang.String

---

##### `promptInput`<sup>Optional</sup> <a name="promptInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.property.promptInput"></a>

```java
public java.lang.String getPromptInput();
```

- *Type:* java.lang.String

---

##### `allowShortUtterance`<sup>Required</sup> <a name="allowShortUtterance" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.property.allowShortUtterance"></a>

```java
public java.lang.Boolean|IResolvable getAllowShortUtterance();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `failOpen`<sup>Required</sup> <a name="failOpen" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.property.failOpen"></a>

```java
public java.lang.Boolean|IResolvable getFailOpen();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `maxConversationMessages`<sup>Required</sup> <a name="maxConversationMessages" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.property.maxConversationMessages"></a>

```java
public java.lang.Number getMaxConversationMessages();
```

- *Type:* java.lang.Number

---

##### `policyScope`<sup>Required</sup> <a name="policyScope" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.property.policyScope"></a>

```java
public java.lang.String getPolicyScope();
```

- *Type:* java.lang.String

---

##### `prompt`<sup>Required</sup> <a name="prompt" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.property.prompt"></a>

```java
public java.lang.String getPrompt();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicyOutputReference.property.internalValue"></a>

```java
public CesGuardrailLlmPolicy getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPolicy">CesGuardrailLlmPolicy</a>

---


### CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference <a name="CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.ces_guardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference;

new CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.resetModel">resetModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.resetTemperature">resetTemperature</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetModel` <a name="resetModel" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.resetModel"></a>

```java
public void resetModel()
```

##### `resetTemperature` <a name="resetTemperature" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.resetTemperature"></a>

```java
public void resetTemperature()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.property.modelInput">modelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.property.temperatureInput">temperatureInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.property.model">model</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.property.temperature">temperature</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettings">CesGuardrailLlmPromptSecurityCustomPolicyModelSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `modelInput`<sup>Optional</sup> <a name="modelInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.property.modelInput"></a>

```java
public java.lang.String getModelInput();
```

- *Type:* java.lang.String

---

##### `temperatureInput`<sup>Optional</sup> <a name="temperatureInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.property.temperatureInput"></a>

```java
public java.lang.Number getTemperatureInput();
```

- *Type:* java.lang.Number

---

##### `model`<sup>Required</sup> <a name="model" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.property.model"></a>

```java
public java.lang.String getModel();
```

- *Type:* java.lang.String

---

##### `temperature`<sup>Required</sup> <a name="temperature" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.property.temperature"></a>

```java
public java.lang.Number getTemperature();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference.property.internalValue"></a>

```java
public CesGuardrailLlmPromptSecurityCustomPolicyModelSettings getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettings">CesGuardrailLlmPromptSecurityCustomPolicyModelSettings</a>

---


### CesGuardrailLlmPromptSecurityCustomPolicyOutputReference <a name="CesGuardrailLlmPromptSecurityCustomPolicyOutputReference" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.ces_guardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference;

new CesGuardrailLlmPromptSecurityCustomPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.putModelSettings">putModelSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.resetAllowShortUtterance">resetAllowShortUtterance</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.resetFailOpen">resetFailOpen</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.resetMaxConversationMessages">resetMaxConversationMessages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.resetModelSettings">resetModelSettings</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putModelSettings` <a name="putModelSettings" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.putModelSettings"></a>

```java
public void putModelSettings(CesGuardrailLlmPromptSecurityCustomPolicyModelSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.putModelSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettings">CesGuardrailLlmPromptSecurityCustomPolicyModelSettings</a>

---

##### `resetAllowShortUtterance` <a name="resetAllowShortUtterance" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.resetAllowShortUtterance"></a>

```java
public void resetAllowShortUtterance()
```

##### `resetFailOpen` <a name="resetFailOpen" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.resetFailOpen"></a>

```java
public void resetFailOpen()
```

##### `resetMaxConversationMessages` <a name="resetMaxConversationMessages" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.resetMaxConversationMessages"></a>

```java
public void resetMaxConversationMessages()
```

##### `resetModelSettings` <a name="resetModelSettings" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.resetModelSettings"></a>

```java
public void resetModelSettings()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.modelSettings">modelSettings</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference">CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.allowShortUtteranceInput">allowShortUtteranceInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.failOpenInput">failOpenInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.maxConversationMessagesInput">maxConversationMessagesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.modelSettingsInput">modelSettingsInput</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettings">CesGuardrailLlmPromptSecurityCustomPolicyModelSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.policyScopeInput">policyScopeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.promptInput">promptInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.allowShortUtterance">allowShortUtterance</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.failOpen">failOpen</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.maxConversationMessages">maxConversationMessages</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.policyScope">policyScope</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.prompt">prompt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicy">CesGuardrailLlmPromptSecurityCustomPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `modelSettings`<sup>Required</sup> <a name="modelSettings" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.modelSettings"></a>

```java
public CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference getModelSettings();
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference">CesGuardrailLlmPromptSecurityCustomPolicyModelSettingsOutputReference</a>

---

##### `allowShortUtteranceInput`<sup>Optional</sup> <a name="allowShortUtteranceInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.allowShortUtteranceInput"></a>

```java
public java.lang.Boolean|IResolvable getAllowShortUtteranceInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `failOpenInput`<sup>Optional</sup> <a name="failOpenInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.failOpenInput"></a>

```java
public java.lang.Boolean|IResolvable getFailOpenInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `maxConversationMessagesInput`<sup>Optional</sup> <a name="maxConversationMessagesInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.maxConversationMessagesInput"></a>

```java
public java.lang.Number getMaxConversationMessagesInput();
```

- *Type:* java.lang.Number

---

##### `modelSettingsInput`<sup>Optional</sup> <a name="modelSettingsInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.modelSettingsInput"></a>

```java
public CesGuardrailLlmPromptSecurityCustomPolicyModelSettings getModelSettingsInput();
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyModelSettings">CesGuardrailLlmPromptSecurityCustomPolicyModelSettings</a>

---

##### `policyScopeInput`<sup>Optional</sup> <a name="policyScopeInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.policyScopeInput"></a>

```java
public java.lang.String getPolicyScopeInput();
```

- *Type:* java.lang.String

---

##### `promptInput`<sup>Optional</sup> <a name="promptInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.promptInput"></a>

```java
public java.lang.String getPromptInput();
```

- *Type:* java.lang.String

---

##### `allowShortUtterance`<sup>Required</sup> <a name="allowShortUtterance" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.allowShortUtterance"></a>

```java
public java.lang.Boolean|IResolvable getAllowShortUtterance();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `failOpen`<sup>Required</sup> <a name="failOpen" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.failOpen"></a>

```java
public java.lang.Boolean|IResolvable getFailOpen();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `maxConversationMessages`<sup>Required</sup> <a name="maxConversationMessages" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.maxConversationMessages"></a>

```java
public java.lang.Number getMaxConversationMessages();
```

- *Type:* java.lang.Number

---

##### `policyScope`<sup>Required</sup> <a name="policyScope" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.policyScope"></a>

```java
public java.lang.String getPolicyScope();
```

- *Type:* java.lang.String

---

##### `prompt`<sup>Required</sup> <a name="prompt" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.prompt"></a>

```java
public java.lang.String getPrompt();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference.property.internalValue"></a>

```java
public CesGuardrailLlmPromptSecurityCustomPolicy getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicy">CesGuardrailLlmPromptSecurityCustomPolicy</a>

---


### CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference <a name="CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.ces_guardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference;

new CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.property.defaultPromptTemplate">defaultPromptTemplate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettings">CesGuardrailLlmPromptSecurityDefaultSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `defaultPromptTemplate`<sup>Required</sup> <a name="defaultPromptTemplate" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.property.defaultPromptTemplate"></a>

```java
public java.lang.String getDefaultPromptTemplate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference.property.internalValue"></a>

```java
public CesGuardrailLlmPromptSecurityDefaultSettings getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettings">CesGuardrailLlmPromptSecurityDefaultSettings</a>

---


### CesGuardrailLlmPromptSecurityOutputReference <a name="CesGuardrailLlmPromptSecurityOutputReference" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.ces_guardrail.CesGuardrailLlmPromptSecurityOutputReference;

new CesGuardrailLlmPromptSecurityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.putCustomPolicy">putCustomPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.putDefaultSettings">putDefaultSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.resetCustomPolicy">resetCustomPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.resetDefaultSettings">resetDefaultSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.resetFailOpen">resetFailOpen</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCustomPolicy` <a name="putCustomPolicy" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.putCustomPolicy"></a>

```java
public void putCustomPolicy(CesGuardrailLlmPromptSecurityCustomPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.putCustomPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicy">CesGuardrailLlmPromptSecurityCustomPolicy</a>

---

##### `putDefaultSettings` <a name="putDefaultSettings" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.putDefaultSettings"></a>

```java
public void putDefaultSettings(CesGuardrailLlmPromptSecurityDefaultSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.putDefaultSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettings">CesGuardrailLlmPromptSecurityDefaultSettings</a>

---

##### `resetCustomPolicy` <a name="resetCustomPolicy" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.resetCustomPolicy"></a>

```java
public void resetCustomPolicy()
```

##### `resetDefaultSettings` <a name="resetDefaultSettings" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.resetDefaultSettings"></a>

```java
public void resetDefaultSettings()
```

##### `resetFailOpen` <a name="resetFailOpen" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.resetFailOpen"></a>

```java
public void resetFailOpen()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.property.customPolicy">customPolicy</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference">CesGuardrailLlmPromptSecurityCustomPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.property.defaultSettings">defaultSettings</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference">CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.property.customPolicyInput">customPolicyInput</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicy">CesGuardrailLlmPromptSecurityCustomPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.property.defaultSettingsInput">defaultSettingsInput</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettings">CesGuardrailLlmPromptSecurityDefaultSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.property.failOpenInput">failOpenInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.property.failOpen">failOpen</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurity">CesGuardrailLlmPromptSecurity</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `customPolicy`<sup>Required</sup> <a name="customPolicy" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.property.customPolicy"></a>

```java
public CesGuardrailLlmPromptSecurityCustomPolicyOutputReference getCustomPolicy();
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicyOutputReference">CesGuardrailLlmPromptSecurityCustomPolicyOutputReference</a>

---

##### `defaultSettings`<sup>Required</sup> <a name="defaultSettings" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.property.defaultSettings"></a>

```java
public CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference getDefaultSettings();
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference">CesGuardrailLlmPromptSecurityDefaultSettingsOutputReference</a>

---

##### `customPolicyInput`<sup>Optional</sup> <a name="customPolicyInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.property.customPolicyInput"></a>

```java
public CesGuardrailLlmPromptSecurityCustomPolicy getCustomPolicyInput();
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityCustomPolicy">CesGuardrailLlmPromptSecurityCustomPolicy</a>

---

##### `defaultSettingsInput`<sup>Optional</sup> <a name="defaultSettingsInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.property.defaultSettingsInput"></a>

```java
public CesGuardrailLlmPromptSecurityDefaultSettings getDefaultSettingsInput();
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityDefaultSettings">CesGuardrailLlmPromptSecurityDefaultSettings</a>

---

##### `failOpenInput`<sup>Optional</sup> <a name="failOpenInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.property.failOpenInput"></a>

```java
public java.lang.Boolean|IResolvable getFailOpenInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `failOpen`<sup>Required</sup> <a name="failOpen" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.property.failOpen"></a>

```java
public java.lang.Boolean|IResolvable getFailOpen();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurityOutputReference.property.internalValue"></a>

```java
public CesGuardrailLlmPromptSecurity getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailLlmPromptSecurity">CesGuardrailLlmPromptSecurity</a>

---


### CesGuardrailModelSafetyOutputReference <a name="CesGuardrailModelSafetyOutputReference" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.ces_guardrail.CesGuardrailModelSafetyOutputReference;

new CesGuardrailModelSafetyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.putSafetySettings">putSafetySettings</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSafetySettings` <a name="putSafetySettings" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.putSafetySettings"></a>

```java
public void putSafetySettings(IResolvable|java.util.List<CesGuardrailModelSafetySafetySettings> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.putSafetySettings.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettings">CesGuardrailModelSafetySafetySettings</a>>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.property.safetySettings">safetySettings</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsList">CesGuardrailModelSafetySafetySettingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.property.safetySettingsInput">safetySettingsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettings">CesGuardrailModelSafetySafetySettings</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafety">CesGuardrailModelSafety</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `safetySettings`<sup>Required</sup> <a name="safetySettings" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.property.safetySettings"></a>

```java
public CesGuardrailModelSafetySafetySettingsList getSafetySettings();
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsList">CesGuardrailModelSafetySafetySettingsList</a>

---

##### `safetySettingsInput`<sup>Optional</sup> <a name="safetySettingsInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.property.safetySettingsInput"></a>

```java
public IResolvable|java.util.List<CesGuardrailModelSafetySafetySettings> getSafetySettingsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettings">CesGuardrailModelSafetySafetySettings</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetyOutputReference.property.internalValue"></a>

```java
public CesGuardrailModelSafety getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafety">CesGuardrailModelSafety</a>

---


### CesGuardrailModelSafetySafetySettingsList <a name="CesGuardrailModelSafetySafetySettingsList" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsList.Initializer"></a>

```java
import io.cdktn.providers.google.ces_guardrail.CesGuardrailModelSafetySafetySettingsList;

new CesGuardrailModelSafetySafetySettingsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsList.get"></a>

```java
public CesGuardrailModelSafetySafetySettingsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettings">CesGuardrailModelSafetySafetySettings</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<CesGuardrailModelSafetySafetySettings> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettings">CesGuardrailModelSafetySafetySettings</a>>

---


### CesGuardrailModelSafetySafetySettingsOutputReference <a name="CesGuardrailModelSafetySafetySettingsOutputReference" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.ces_guardrail.CesGuardrailModelSafetySafetySettingsOutputReference;

new CesGuardrailModelSafetySafetySettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.property.categoryInput">categoryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.property.thresholdInput">thresholdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.property.category">category</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.property.threshold">threshold</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettings">CesGuardrailModelSafetySafetySettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `categoryInput`<sup>Optional</sup> <a name="categoryInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.property.categoryInput"></a>

```java
public java.lang.String getCategoryInput();
```

- *Type:* java.lang.String

---

##### `thresholdInput`<sup>Optional</sup> <a name="thresholdInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.property.thresholdInput"></a>

```java
public java.lang.String getThresholdInput();
```

- *Type:* java.lang.String

---

##### `category`<sup>Required</sup> <a name="category" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.property.category"></a>

```java
public java.lang.String getCategory();
```

- *Type:* java.lang.String

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.property.threshold"></a>

```java
public java.lang.String getThreshold();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettingsOutputReference.property.internalValue"></a>

```java
public IResolvable|CesGuardrailModelSafetySafetySettings getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailModelSafetySafetySettings">CesGuardrailModelSafetySafetySettings</a>

---


### CesGuardrailTimeoutsOutputReference <a name="CesGuardrailTimeoutsOutputReference" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.ces_guardrail.CesGuardrailTimeoutsOutputReference;

new CesGuardrailTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailTimeouts">CesGuardrailTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.cesGuardrail.CesGuardrailTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|CesGuardrailTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.cesGuardrail.CesGuardrailTimeouts">CesGuardrailTimeouts</a>

---



