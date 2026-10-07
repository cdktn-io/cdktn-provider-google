# `dialogflowTool` Submodule <a name="`dialogflowTool` Submodule" id="@cdktn/provider-google.dialogflowTool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DialogflowTool <a name="DialogflowTool" id="@cdktn/provider-google.dialogflowTool.DialogflowTool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool google_dialogflow_tool}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.Initializer"></a>

```java
import io.cdktn.providers.google.dialogflow_tool.DialogflowTool;

DialogflowTool.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .location(java.lang.String)
    .toolKey(java.lang.String)
//  .actionConfirmationRequirement(java.util.Map<java.lang.String, java.lang.String>)
//  .connectorSpec(DialogflowToolConnectorSpec)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .displayName(java.lang.String)
//  .functionSpec(DialogflowToolFunctionSpec)
//  .id(java.lang.String)
//  .openApiSpec(DialogflowToolOpenApiSpec)
//  .project(java.lang.String)
//  .timeouts(DialogflowToolTimeouts)
//  .toolId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location of the tool. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.Initializer.parameter.toolKey">toolKey</a></code> | <code>java.lang.String</code> | Required. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.Initializer.parameter.actionConfirmationRequirement">actionConfirmationRequirement</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Optional. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.Initializer.parameter.connectorSpec">connectorSpec</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpec">DialogflowToolConnectorSpec</a></code> | connector_spec block. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Optional. Human readable description of the tool. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Optional. The human-readable name of the tool, unique within the project and location. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.Initializer.parameter.functionSpec">functionSpec</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpec">DialogflowToolFunctionSpec</a></code> | function_spec block. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#id DialogflowTool#id}. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.Initializer.parameter.openApiSpec">openApiSpec</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpec">DialogflowToolOpenApiSpec</a></code> | open_api_spec block. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#project DialogflowTool#project}. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeouts">DialogflowToolTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.Initializer.parameter.toolId">toolId</a></code> | <code>java.lang.String</code> | Optional. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location of the tool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#location DialogflowTool#location}

---

##### `toolKey`<sup>Required</sup> <a name="toolKey" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.Initializer.parameter.toolKey"></a>

- *Type:* java.lang.String

Required.

A human readable short name of the tool, which should be unique within the project. It should only contain letters, numbers, and underscores, and it will be used by LLM to identify the tool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#tool_key DialogflowTool#tool_key}

---

##### `actionConfirmationRequirement`<sup>Optional</sup> <a name="actionConfirmationRequirement" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.Initializer.parameter.actionConfirmationRequirement"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Optional.

Confirmation requirement for the actions. Each key is an action name in the 'action_schemas'.
If an action's confirmation requirement is not specified (either the key is not present, or its value is 'CONFIRMATION_REQUIREMENT_UNSPECIFIED'), a default value will be populated depending on the action's method type: GET actions default to 'NOT_REQUIRED', and other actions default to 'REQUIRED'.
Valid values are 'REQUIRED' and 'NOT_REQUIRED'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#action_confirmation_requirement DialogflowTool#action_confirmation_requirement}

---

##### `connectorSpec`<sup>Optional</sup> <a name="connectorSpec" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.Initializer.parameter.connectorSpec"></a>

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpec">DialogflowToolConnectorSpec</a>

connector_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#connector_spec DialogflowTool#connector_spec}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#deletion_policy DialogflowTool#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Optional. Human readable description of the tool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#description DialogflowTool#description}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Optional. The human-readable name of the tool, unique within the project and location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#display_name DialogflowTool#display_name}

---

##### `functionSpec`<sup>Optional</sup> <a name="functionSpec" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.Initializer.parameter.functionSpec"></a>

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpec">DialogflowToolFunctionSpec</a>

function_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#function_spec DialogflowTool#function_spec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#id DialogflowTool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `openApiSpec`<sup>Optional</sup> <a name="openApiSpec" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.Initializer.parameter.openApiSpec"></a>

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpec">DialogflowToolOpenApiSpec</a>

open_api_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#open_api_spec DialogflowTool#open_api_spec}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#project DialogflowTool#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeouts">DialogflowToolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#timeouts DialogflowTool#timeouts}

---

##### `toolId`<sup>Optional</sup> <a name="toolId" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.Initializer.parameter.toolId"></a>

- *Type:* java.lang.String

Optional.

The ID to use for the tool, which will become the final component of the tool's resource name.
The tool ID must be compliant with the regression formula '[a-zA-Z][a-zA-Z0-9_-]*' with the characters length in range of [3,64].
If the field is not provided, an Id will be auto-generated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#tool_id DialogflowTool#tool_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.putConnectorSpec">putConnectorSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.putFunctionSpec">putFunctionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.putOpenApiSpec">putOpenApiSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.resetActionConfirmationRequirement">resetActionConfirmationRequirement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.resetConnectorSpec">resetConnectorSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.resetFunctionSpec">resetFunctionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.resetOpenApiSpec">resetOpenApiSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.resetToolId">resetToolId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConnectorSpec` <a name="putConnectorSpec" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.putConnectorSpec"></a>

```java
public void putConnectorSpec(DialogflowToolConnectorSpec value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.putConnectorSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpec">DialogflowToolConnectorSpec</a>

---

##### `putFunctionSpec` <a name="putFunctionSpec" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.putFunctionSpec"></a>

```java
public void putFunctionSpec(DialogflowToolFunctionSpec value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.putFunctionSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpec">DialogflowToolFunctionSpec</a>

---

##### `putOpenApiSpec` <a name="putOpenApiSpec" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.putOpenApiSpec"></a>

```java
public void putOpenApiSpec(DialogflowToolOpenApiSpec value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.putOpenApiSpec.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpec">DialogflowToolOpenApiSpec</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.putTimeouts"></a>

```java
public void putTimeouts(DialogflowToolTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeouts">DialogflowToolTimeouts</a>

---

##### `resetActionConfirmationRequirement` <a name="resetActionConfirmationRequirement" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.resetActionConfirmationRequirement"></a>

```java
public void resetActionConfirmationRequirement()
```

##### `resetConnectorSpec` <a name="resetConnectorSpec" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.resetConnectorSpec"></a>

```java
public void resetConnectorSpec()
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetFunctionSpec` <a name="resetFunctionSpec" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.resetFunctionSpec"></a>

```java
public void resetFunctionSpec()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.resetId"></a>

```java
public void resetId()
```

##### `resetOpenApiSpec` <a name="resetOpenApiSpec" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.resetOpenApiSpec"></a>

```java
public void resetOpenApiSpec()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetToolId` <a name="resetToolId" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.resetToolId"></a>

```java
public void resetToolId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DialogflowTool resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.isConstruct"></a>

```java
import io.cdktn.providers.google.dialogflow_tool.DialogflowTool;

DialogflowTool.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.isTerraformElement"></a>

```java
import io.cdktn.providers.google.dialogflow_tool.DialogflowTool;

DialogflowTool.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.isTerraformResource"></a>

```java
import io.cdktn.providers.google.dialogflow_tool.DialogflowTool;

DialogflowTool.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.dialogflow_tool.DialogflowTool;

DialogflowTool.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DialogflowTool.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DialogflowTool resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DialogflowTool to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DialogflowTool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DialogflowTool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.connectorSpec">connectorSpec</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference">DialogflowToolConnectorSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.functionSpec">functionSpec</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference">DialogflowToolFunctionSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.openApiSpec">openApiSpec</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference">DialogflowToolOpenApiSpecOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.satisfiesPzi">satisfiesPzi</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.satisfiesPzs">satisfiesPzs</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference">DialogflowToolTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.actionConfirmationRequirementInput">actionConfirmationRequirementInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.connectorSpecInput">connectorSpecInput</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpec">DialogflowToolConnectorSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.functionSpecInput">functionSpecInput</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpec">DialogflowToolFunctionSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.openApiSpecInput">openApiSpecInput</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpec">DialogflowToolOpenApiSpec</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeouts">DialogflowToolTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.toolIdInput">toolIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.toolKeyInput">toolKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.actionConfirmationRequirement">actionConfirmationRequirement</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.toolId">toolId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.toolKey">toolKey</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `connectorSpec`<sup>Required</sup> <a name="connectorSpec" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.connectorSpec"></a>

```java
public DialogflowToolConnectorSpecOutputReference getConnectorSpec();
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference">DialogflowToolConnectorSpecOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `functionSpec`<sup>Required</sup> <a name="functionSpec" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.functionSpec"></a>

```java
public DialogflowToolFunctionSpecOutputReference getFunctionSpec();
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference">DialogflowToolFunctionSpecOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `openApiSpec`<sup>Required</sup> <a name="openApiSpec" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.openApiSpec"></a>

```java
public DialogflowToolOpenApiSpecOutputReference getOpenApiSpec();
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference">DialogflowToolOpenApiSpecOutputReference</a>

---

##### `satisfiesPzi`<sup>Required</sup> <a name="satisfiesPzi" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.satisfiesPzi"></a>

```java
public IResolvable getSatisfiesPzi();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `satisfiesPzs`<sup>Required</sup> <a name="satisfiesPzs" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.satisfiesPzs"></a>

```java
public IResolvable getSatisfiesPzs();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.timeouts"></a>

```java
public DialogflowToolTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference">DialogflowToolTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `actionConfirmationRequirementInput`<sup>Optional</sup> <a name="actionConfirmationRequirementInput" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.actionConfirmationRequirementInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getActionConfirmationRequirementInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `connectorSpecInput`<sup>Optional</sup> <a name="connectorSpecInput" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.connectorSpecInput"></a>

```java
public DialogflowToolConnectorSpec getConnectorSpecInput();
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpec">DialogflowToolConnectorSpec</a>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `functionSpecInput`<sup>Optional</sup> <a name="functionSpecInput" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.functionSpecInput"></a>

```java
public DialogflowToolFunctionSpec getFunctionSpecInput();
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpec">DialogflowToolFunctionSpec</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `openApiSpecInput`<sup>Optional</sup> <a name="openApiSpecInput" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.openApiSpecInput"></a>

```java
public DialogflowToolOpenApiSpec getOpenApiSpecInput();
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpec">DialogflowToolOpenApiSpec</a>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.timeoutsInput"></a>

```java
public IResolvable|DialogflowToolTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeouts">DialogflowToolTimeouts</a>

---

##### `toolIdInput`<sup>Optional</sup> <a name="toolIdInput" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.toolIdInput"></a>

```java
public java.lang.String getToolIdInput();
```

- *Type:* java.lang.String

---

##### `toolKeyInput`<sup>Optional</sup> <a name="toolKeyInput" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.toolKeyInput"></a>

```java
public java.lang.String getToolKeyInput();
```

- *Type:* java.lang.String

---

##### `actionConfirmationRequirement`<sup>Required</sup> <a name="actionConfirmationRequirement" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.actionConfirmationRequirement"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getActionConfirmationRequirement();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `toolId`<sup>Required</sup> <a name="toolId" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.toolId"></a>

```java
public java.lang.String getToolId();
```

- *Type:* java.lang.String

---

##### `toolKey`<sup>Required</sup> <a name="toolKey" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.toolKey"></a>

```java
public java.lang.String getToolKey();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowTool.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dialogflowTool.DialogflowTool.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DialogflowToolConfig <a name="DialogflowToolConfig" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.Initializer"></a>

```java
import io.cdktn.providers.google.dialogflow_tool.DialogflowToolConfig;

DialogflowToolConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .location(java.lang.String)
    .toolKey(java.lang.String)
//  .actionConfirmationRequirement(java.util.Map<java.lang.String, java.lang.String>)
//  .connectorSpec(DialogflowToolConnectorSpec)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .displayName(java.lang.String)
//  .functionSpec(DialogflowToolFunctionSpec)
//  .id(java.lang.String)
//  .openApiSpec(DialogflowToolOpenApiSpec)
//  .project(java.lang.String)
//  .timeouts(DialogflowToolTimeouts)
//  .toolId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location of the tool. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.toolKey">toolKey</a></code> | <code>java.lang.String</code> | Required. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.actionConfirmationRequirement">actionConfirmationRequirement</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Optional. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.connectorSpec">connectorSpec</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpec">DialogflowToolConnectorSpec</a></code> | connector_spec block. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.description">description</a></code> | <code>java.lang.String</code> | Optional. Human readable description of the tool. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Optional. The human-readable name of the tool, unique within the project and location. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.functionSpec">functionSpec</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpec">DialogflowToolFunctionSpec</a></code> | function_spec block. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#id DialogflowTool#id}. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.openApiSpec">openApiSpec</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpec">DialogflowToolOpenApiSpec</a></code> | open_api_spec block. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#project DialogflowTool#project}. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeouts">DialogflowToolTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.toolId">toolId</a></code> | <code>java.lang.String</code> | Optional. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location of the tool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#location DialogflowTool#location}

---

##### `toolKey`<sup>Required</sup> <a name="toolKey" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.toolKey"></a>

```java
public java.lang.String getToolKey();
```

- *Type:* java.lang.String

Required.

A human readable short name of the tool, which should be unique within the project. It should only contain letters, numbers, and underscores, and it will be used by LLM to identify the tool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#tool_key DialogflowTool#tool_key}

---

##### `actionConfirmationRequirement`<sup>Optional</sup> <a name="actionConfirmationRequirement" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.actionConfirmationRequirement"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getActionConfirmationRequirement();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Optional.

Confirmation requirement for the actions. Each key is an action name in the 'action_schemas'.
If an action's confirmation requirement is not specified (either the key is not present, or its value is 'CONFIRMATION_REQUIREMENT_UNSPECIFIED'), a default value will be populated depending on the action's method type: GET actions default to 'NOT_REQUIRED', and other actions default to 'REQUIRED'.
Valid values are 'REQUIRED' and 'NOT_REQUIRED'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#action_confirmation_requirement DialogflowTool#action_confirmation_requirement}

---

##### `connectorSpec`<sup>Optional</sup> <a name="connectorSpec" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.connectorSpec"></a>

```java
public DialogflowToolConnectorSpec getConnectorSpec();
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpec">DialogflowToolConnectorSpec</a>

connector_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#connector_spec DialogflowTool#connector_spec}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#deletion_policy DialogflowTool#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Optional. Human readable description of the tool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#description DialogflowTool#description}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Optional. The human-readable name of the tool, unique within the project and location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#display_name DialogflowTool#display_name}

---

##### `functionSpec`<sup>Optional</sup> <a name="functionSpec" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.functionSpec"></a>

```java
public DialogflowToolFunctionSpec getFunctionSpec();
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpec">DialogflowToolFunctionSpec</a>

function_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#function_spec DialogflowTool#function_spec}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#id DialogflowTool#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `openApiSpec`<sup>Optional</sup> <a name="openApiSpec" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.openApiSpec"></a>

```java
public DialogflowToolOpenApiSpec getOpenApiSpec();
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpec">DialogflowToolOpenApiSpec</a>

open_api_spec block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#open_api_spec DialogflowTool#open_api_spec}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#project DialogflowTool#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.timeouts"></a>

```java
public DialogflowToolTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeouts">DialogflowToolTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#timeouts DialogflowTool#timeouts}

---

##### `toolId`<sup>Optional</sup> <a name="toolId" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConfig.property.toolId"></a>

```java
public java.lang.String getToolId();
```

- *Type:* java.lang.String

Optional.

The ID to use for the tool, which will become the final component of the tool's resource name.
The tool ID must be compliant with the regression formula '[a-zA-Z][a-zA-Z0-9_-]*' with the characters length in range of [3,64].
If the field is not provided, an Id will be auto-generated.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#tool_id DialogflowTool#tool_id}

---

### DialogflowToolConnectorSpec <a name="DialogflowToolConnectorSpec" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpec.Initializer"></a>

```java
import io.cdktn.providers.google.dialogflow_tool.DialogflowToolConnectorSpec;

DialogflowToolConnectorSpec.builder()
    .actions(IResolvable|java.util.List<DialogflowToolConnectorSpecActions>)
    .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpec.property.actions">actions</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActions">DialogflowToolConnectorSpecActions</a>></code> | actions block. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpec.property.name">name</a></code> | <code>java.lang.String</code> | The full resource name of the referenced Integration Connectors Connection. Format: 'projects/* /locations/* /connections/*'. |

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpec.property.actions"></a>

```java
public IResolvable|java.util.List<DialogflowToolConnectorSpecActions> getActions();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActions">DialogflowToolConnectorSpecActions</a>>

actions block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#actions DialogflowTool#actions}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpec.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The full resource name of the referenced Integration Connectors Connection. Format: 'projects/* /locations/* /connections/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#name DialogflowTool#name}

Note: The above comment contained a comment block ending sequence (* followed by /). We have introduced a space between to prevent syntax errors. Please ignore the space.

---

### DialogflowToolConnectorSpecActions <a name="DialogflowToolConnectorSpecActions" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActions.Initializer"></a>

```java
import io.cdktn.providers.google.dialogflow_tool.DialogflowToolConnectorSpecActions;

DialogflowToolConnectorSpecActions.builder()
//  .connectionActionId(java.lang.String)
//  .entityOperation(DialogflowToolConnectorSpecActionsEntityOperation)
//  .inputFields(java.util.List<java.lang.String>)
//  .outputFields(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActions.property.connectionActionId">connectionActionId</a></code> | <code>java.lang.String</code> | ID of a Connection action for the tool to use. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActions.property.entityOperation">entityOperation</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperation">DialogflowToolConnectorSpecActionsEntityOperation</a></code> | entity_operation block. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActions.property.inputFields">inputFields</a></code> | <code>java.util.List<java.lang.String></code> | Entity fields to use as inputs for the operation. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActions.property.outputFields">outputFields</a></code> | <code>java.util.List<java.lang.String></code> | Entity fields to return from the operation. If no fields are specified, all fields of the Entity will be returned. |

---

##### `connectionActionId`<sup>Optional</sup> <a name="connectionActionId" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActions.property.connectionActionId"></a>

```java
public java.lang.String getConnectionActionId();
```

- *Type:* java.lang.String

ID of a Connection action for the tool to use.

This field is part of a required union field 'action_spec'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#connection_action_id DialogflowTool#connection_action_id}

---

##### `entityOperation`<sup>Optional</sup> <a name="entityOperation" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActions.property.entityOperation"></a>

```java
public DialogflowToolConnectorSpecActionsEntityOperation getEntityOperation();
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperation">DialogflowToolConnectorSpecActionsEntityOperation</a>

entity_operation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#entity_operation DialogflowTool#entity_operation}

---

##### `inputFields`<sup>Optional</sup> <a name="inputFields" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActions.property.inputFields"></a>

```java
public java.util.List<java.lang.String> getInputFields();
```

- *Type:* java.util.List<java.lang.String>

Entity fields to use as inputs for the operation.

If no fields are specified, all fields of the Entity will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#input_fields DialogflowTool#input_fields}

---

##### `outputFields`<sup>Optional</sup> <a name="outputFields" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActions.property.outputFields"></a>

```java
public java.util.List<java.lang.String> getOutputFields();
```

- *Type:* java.util.List<java.lang.String>

Entity fields to return from the operation. If no fields are specified, all fields of the Entity will be returned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#output_fields DialogflowTool#output_fields}

---

### DialogflowToolConnectorSpecActionsEntityOperation <a name="DialogflowToolConnectorSpecActionsEntityOperation" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperation.Initializer"></a>

```java
import io.cdktn.providers.google.dialogflow_tool.DialogflowToolConnectorSpecActionsEntityOperation;

DialogflowToolConnectorSpecActionsEntityOperation.builder()
    .entityId(java.lang.String)
    .operation(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperation.property.entityId">entityId</a></code> | <code>java.lang.String</code> | ID of the entity. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperation.property.operation">operation</a></code> | <code>java.lang.String</code> | The operation to perform on the entity. Possible values: ["LIST", "GET", "CREATE", "UPDATE", "DELETE"]. |

---

##### `entityId`<sup>Required</sup> <a name="entityId" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperation.property.entityId"></a>

```java
public java.lang.String getEntityId();
```

- *Type:* java.lang.String

ID of the entity.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#entity_id DialogflowTool#entity_id}

---

##### `operation`<sup>Required</sup> <a name="operation" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperation.property.operation"></a>

```java
public java.lang.String getOperation();
```

- *Type:* java.lang.String

The operation to perform on the entity. Possible values: ["LIST", "GET", "CREATE", "UPDATE", "DELETE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#operation DialogflowTool#operation}

---

### DialogflowToolFunctionSpec <a name="DialogflowToolFunctionSpec" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpec.Initializer"></a>

```java
import io.cdktn.providers.google.dialogflow_tool.DialogflowToolFunctionSpec;

DialogflowToolFunctionSpec.builder()
//  .inputSchema(java.lang.String)
//  .methodType(java.lang.String)
//  .outputSchema(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpec.property.inputSchema">inputSchema</a></code> | <code>java.lang.String</code> | Optional. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpec.property.methodType">methodType</a></code> | <code>java.lang.String</code> | Optional. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpec.property.outputSchema">outputSchema</a></code> | <code>java.lang.String</code> | Optional. |

---

##### `inputSchema`<sup>Optional</sup> <a name="inputSchema" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpec.property.inputSchema"></a>

```java
public java.lang.String getInputSchema();
```

- *Type:* java.lang.String

Optional.

The JSON schema is encapsulated in a [google.protobuf.Struct](https://protobuf.dev/reference/protobuf/google.protobuf/#struct) to describe the input of the function.
This input is a JSON object that contains the function's parameters as properties of the object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#input_schema DialogflowTool#input_schema}

---

##### `methodType`<sup>Optional</sup> <a name="methodType" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpec.property.methodType"></a>

```java
public java.lang.String getMethodType();
```

- *Type:* java.lang.String

Optional.

The method type of the function. If not specified, the default value is GET. Possible values: ["GET", "POST", "PUT", "DELETE", "PATCH"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#method_type DialogflowTool#method_type}

---

##### `outputSchema`<sup>Optional</sup> <a name="outputSchema" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpec.property.outputSchema"></a>

```java
public java.lang.String getOutputSchema();
```

- *Type:* java.lang.String

Optional.

The JSON schema is encapsulated in a [google.protobuf.Struct](https://protobuf.dev/reference/protobuf/google.protobuf/#struct) to describe the output of the function.
This output is a JSON object that contains the function's parameters as properties of the object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#output_schema DialogflowTool#output_schema}

---

### DialogflowToolOpenApiSpec <a name="DialogflowToolOpenApiSpec" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpec"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpec.Initializer"></a>

```java
import io.cdktn.providers.google.dialogflow_tool.DialogflowToolOpenApiSpec;

DialogflowToolOpenApiSpec.builder()
    .textSchema(java.lang.String)
//  .authentication(DialogflowToolOpenApiSpecAuthentication)
//  .serviceDirectoryConfig(DialogflowToolOpenApiSpecServiceDirectoryConfig)
//  .tlsConfig(DialogflowToolOpenApiSpecTlsConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpec.property.textSchema">textSchema</a></code> | <code>java.lang.String</code> | Required. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpec.property.authentication">authentication</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthentication">DialogflowToolOpenApiSpecAuthentication</a></code> | authentication block. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpec.property.serviceDirectoryConfig">serviceDirectoryConfig</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfig">DialogflowToolOpenApiSpecServiceDirectoryConfig</a></code> | service_directory_config block. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpec.property.tlsConfig">tlsConfig</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfig">DialogflowToolOpenApiSpecTlsConfig</a></code> | tls_config block. |

---

##### `textSchema`<sup>Required</sup> <a name="textSchema" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpec.property.textSchema"></a>

```java
public java.lang.String getTextSchema();
```

- *Type:* java.lang.String

Required.

The OpenAPI schema specified as a text.
Note: Plays a role in linking the OpenAPI spec with the tool. The 'info.title' field in the OpenAPI schema must match the 'toolKey' of the tool, otherwise the API will overwrite 'info.title' with 'toolKey'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#text_schema DialogflowTool#text_schema}

---

##### `authentication`<sup>Optional</sup> <a name="authentication" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpec.property.authentication"></a>

```java
public DialogflowToolOpenApiSpecAuthentication getAuthentication();
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthentication">DialogflowToolOpenApiSpecAuthentication</a>

authentication block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#authentication DialogflowTool#authentication}

---

##### `serviceDirectoryConfig`<sup>Optional</sup> <a name="serviceDirectoryConfig" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpec.property.serviceDirectoryConfig"></a>

```java
public DialogflowToolOpenApiSpecServiceDirectoryConfig getServiceDirectoryConfig();
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfig">DialogflowToolOpenApiSpecServiceDirectoryConfig</a>

service_directory_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#service_directory_config DialogflowTool#service_directory_config}

---

##### `tlsConfig`<sup>Optional</sup> <a name="tlsConfig" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpec.property.tlsConfig"></a>

```java
public DialogflowToolOpenApiSpecTlsConfig getTlsConfig();
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfig">DialogflowToolOpenApiSpecTlsConfig</a>

tls_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#tls_config DialogflowTool#tls_config}

---

### DialogflowToolOpenApiSpecAuthentication <a name="DialogflowToolOpenApiSpecAuthentication" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthentication.Initializer"></a>

```java
import io.cdktn.providers.google.dialogflow_tool.DialogflowToolOpenApiSpecAuthentication;

DialogflowToolOpenApiSpecAuthentication.builder()
//  .apiKeyConfig(DialogflowToolOpenApiSpecAuthenticationApiKeyConfig)
//  .bearerTokenConfig(DialogflowToolOpenApiSpecAuthenticationBearerTokenConfig)
//  .oauthConfig(DialogflowToolOpenApiSpecAuthenticationOauthConfig)
//  .serviceAgentAuthConfig(DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthentication.property.apiKeyConfig">apiKeyConfig</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfig">DialogflowToolOpenApiSpecAuthenticationApiKeyConfig</a></code> | api_key_config block. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthentication.property.bearerTokenConfig">bearerTokenConfig</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfig">DialogflowToolOpenApiSpecAuthenticationBearerTokenConfig</a></code> | bearer_token_config block. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthentication.property.oauthConfig">oauthConfig</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfig">DialogflowToolOpenApiSpecAuthenticationOauthConfig</a></code> | oauth_config block. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthentication.property.serviceAgentAuthConfig">serviceAgentAuthConfig</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig">DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig</a></code> | service_agent_auth_config block. |

---

##### `apiKeyConfig`<sup>Optional</sup> <a name="apiKeyConfig" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthentication.property.apiKeyConfig"></a>

```java
public DialogflowToolOpenApiSpecAuthenticationApiKeyConfig getApiKeyConfig();
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfig">DialogflowToolOpenApiSpecAuthenticationApiKeyConfig</a>

api_key_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#api_key_config DialogflowTool#api_key_config}

---

##### `bearerTokenConfig`<sup>Optional</sup> <a name="bearerTokenConfig" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthentication.property.bearerTokenConfig"></a>

```java
public DialogflowToolOpenApiSpecAuthenticationBearerTokenConfig getBearerTokenConfig();
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfig">DialogflowToolOpenApiSpecAuthenticationBearerTokenConfig</a>

bearer_token_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#bearer_token_config DialogflowTool#bearer_token_config}

---

##### `oauthConfig`<sup>Optional</sup> <a name="oauthConfig" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthentication.property.oauthConfig"></a>

```java
public DialogflowToolOpenApiSpecAuthenticationOauthConfig getOauthConfig();
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfig">DialogflowToolOpenApiSpecAuthenticationOauthConfig</a>

oauth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#oauth_config DialogflowTool#oauth_config}

---

##### `serviceAgentAuthConfig`<sup>Optional</sup> <a name="serviceAgentAuthConfig" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthentication.property.serviceAgentAuthConfig"></a>

```java
public DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig getServiceAgentAuthConfig();
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig">DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig</a>

service_agent_auth_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#service_agent_auth_config DialogflowTool#service_agent_auth_config}

---

### DialogflowToolOpenApiSpecAuthenticationApiKeyConfig <a name="DialogflowToolOpenApiSpecAuthenticationApiKeyConfig" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfig.Initializer"></a>

```java
import io.cdktn.providers.google.dialogflow_tool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfig;

DialogflowToolOpenApiSpecAuthenticationApiKeyConfig.builder()
    .keyName(java.lang.String)
    .requestLocation(java.lang.String)
//  .apiKey(java.lang.String)
//  .secretVersionForApiKey(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfig.property.keyName">keyName</a></code> | <code>java.lang.String</code> | The parameter name or the header name of the API key. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfig.property.requestLocation">requestLocation</a></code> | <code>java.lang.String</code> | Key location in the request. Possible values: ["HEADER", "QUERY_STRING"]. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfig.property.apiKey">apiKey</a></code> | <code>java.lang.String</code> | Optional. The API key. If the 'secretVersionForApiKey' field is set, this field will be ignored. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfig.property.secretVersionForApiKey">secretVersionForApiKey</a></code> | <code>java.lang.String</code> | Optional. |

---

##### `keyName`<sup>Required</sup> <a name="keyName" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfig.property.keyName"></a>

```java
public java.lang.String getKeyName();
```

- *Type:* java.lang.String

The parameter name or the header name of the API key.

E.g., If the API request is "https://example.com/act?X-Api-Key=", "X-Api-Key" would be the parameter name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#key_name DialogflowTool#key_name}

---

##### `requestLocation`<sup>Required</sup> <a name="requestLocation" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfig.property.requestLocation"></a>

```java
public java.lang.String getRequestLocation();
```

- *Type:* java.lang.String

Key location in the request. Possible values: ["HEADER", "QUERY_STRING"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#request_location DialogflowTool#request_location}

---

##### `apiKey`<sup>Optional</sup> <a name="apiKey" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfig.property.apiKey"></a>

```java
public java.lang.String getApiKey();
```

- *Type:* java.lang.String

Optional. The API key. If the 'secretVersionForApiKey' field is set, this field will be ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#api_key DialogflowTool#api_key}

---

##### `secretVersionForApiKey`<sup>Optional</sup> <a name="secretVersionForApiKey" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfig.property.secretVersionForApiKey"></a>

```java
public java.lang.String getSecretVersionForApiKey();
```

- *Type:* java.lang.String

Optional.

The name of the SecretManager secret version resource storing the API key.
If this field is set, the 'apiKey' field will be ignored.
Format: 'projects/{project}/secrets/{secret}/versions/{version}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#secret_version_for_api_key DialogflowTool#secret_version_for_api_key}

---

### DialogflowToolOpenApiSpecAuthenticationBearerTokenConfig <a name="DialogflowToolOpenApiSpecAuthenticationBearerTokenConfig" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfig.Initializer"></a>

```java
import io.cdktn.providers.google.dialogflow_tool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfig;

DialogflowToolOpenApiSpecAuthenticationBearerTokenConfig.builder()
//  .secretVersionForToken(java.lang.String)
//  .token(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfig.property.secretVersionForToken">secretVersionForToken</a></code> | <code>java.lang.String</code> | Optional. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfig.property.token">token</a></code> | <code>java.lang.String</code> | Optional. The text token appended to the text 'Bearer' to the request Authorization header. |

---

##### `secretVersionForToken`<sup>Optional</sup> <a name="secretVersionForToken" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfig.property.secretVersionForToken"></a>

```java
public java.lang.String getSecretVersionForToken();
```

- *Type:* java.lang.String

Optional.

The name of the SecretManager secret version resource storing the Bearer token.
If this field is set, the 'token' field will be ignored.
Format: 'projects/{project}/secrets/{secret}/versions/{version}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#secret_version_for_token DialogflowTool#secret_version_for_token}

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfig.property.token"></a>

```java
public java.lang.String getToken();
```

- *Type:* java.lang.String

Optional. The text token appended to the text 'Bearer' to the request Authorization header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#token DialogflowTool#token}

---

### DialogflowToolOpenApiSpecAuthenticationOauthConfig <a name="DialogflowToolOpenApiSpecAuthenticationOauthConfig" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfig.Initializer"></a>

```java
import io.cdktn.providers.google.dialogflow_tool.DialogflowToolOpenApiSpecAuthenticationOauthConfig;

DialogflowToolOpenApiSpecAuthenticationOauthConfig.builder()
    .clientId(java.lang.String)
    .oauthGrantType(java.lang.String)
    .tokenEndpoint(java.lang.String)
//  .clientSecret(java.lang.String)
//  .scopes(java.util.List<java.lang.String>)
//  .secretVersionForClientSecret(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfig.property.clientId">clientId</a></code> | <code>java.lang.String</code> | The client ID from the OAuth provider. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfig.property.oauthGrantType">oauthGrantType</a></code> | <code>java.lang.String</code> | OAuth grant types. Possible values: ["CLIENT_CREDENTIAL"]. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfig.property.tokenEndpoint">tokenEndpoint</a></code> | <code>java.lang.String</code> | The token endpoint in the OAuth provider to exchange for an access token. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfig.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | Optional. The client secret from the OAuth provider. If the 'secretVersionForClientSecret' field is set, this field will be ignored. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfig.property.scopes">scopes</a></code> | <code>java.util.List<java.lang.String></code> | Optional. The OAuth scopes to grant. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfig.property.secretVersionForClientSecret">secretVersionForClientSecret</a></code> | <code>java.lang.String</code> | Optional. |

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfig.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

The client ID from the OAuth provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#client_id DialogflowTool#client_id}

---

##### `oauthGrantType`<sup>Required</sup> <a name="oauthGrantType" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfig.property.oauthGrantType"></a>

```java
public java.lang.String getOauthGrantType();
```

- *Type:* java.lang.String

OAuth grant types. Possible values: ["CLIENT_CREDENTIAL"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#oauth_grant_type DialogflowTool#oauth_grant_type}

---

##### `tokenEndpoint`<sup>Required</sup> <a name="tokenEndpoint" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfig.property.tokenEndpoint"></a>

```java
public java.lang.String getTokenEndpoint();
```

- *Type:* java.lang.String

The token endpoint in the OAuth provider to exchange for an access token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#token_endpoint DialogflowTool#token_endpoint}

---

##### `clientSecret`<sup>Optional</sup> <a name="clientSecret" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfig.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

Optional. The client secret from the OAuth provider. If the 'secretVersionForClientSecret' field is set, this field will be ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#client_secret DialogflowTool#client_secret}

---

##### `scopes`<sup>Optional</sup> <a name="scopes" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfig.property.scopes"></a>

```java
public java.util.List<java.lang.String> getScopes();
```

- *Type:* java.util.List<java.lang.String>

Optional. The OAuth scopes to grant.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#scopes DialogflowTool#scopes}

---

##### `secretVersionForClientSecret`<sup>Optional</sup> <a name="secretVersionForClientSecret" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfig.property.secretVersionForClientSecret"></a>

```java
public java.lang.String getSecretVersionForClientSecret();
```

- *Type:* java.lang.String

Optional.

The name of the SecretManager secret version resource storing the client secret.
If this field is set, the 'clientSecret' field will be ignored.
Format: 'projects/{project}/secrets/{secret}/versions/{version}'

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#secret_version_for_client_secret DialogflowTool#secret_version_for_client_secret}

---

### DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig <a name="DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig.Initializer"></a>

```java
import io.cdktn.providers.google.dialogflow_tool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig;

DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig.builder()
//  .serviceAgentAuth(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig.property.serviceAgentAuth">serviceAgentAuth</a></code> | <code>java.lang.String</code> | Optional. |

---

##### `serviceAgentAuth`<sup>Optional</sup> <a name="serviceAgentAuth" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig.property.serviceAgentAuth"></a>

```java
public java.lang.String getServiceAgentAuth();
```

- *Type:* java.lang.String

Optional.

Indicate the auth token type generated from the Dialogflow service agent.
The generated token is sent in the Authorization header. Possible values: ["ID_TOKEN", "ACCESS_TOKEN"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#service_agent_auth DialogflowTool#service_agent_auth}

---

### DialogflowToolOpenApiSpecServiceDirectoryConfig <a name="DialogflowToolOpenApiSpecServiceDirectoryConfig" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfig.Initializer"></a>

```java
import io.cdktn.providers.google.dialogflow_tool.DialogflowToolOpenApiSpecServiceDirectoryConfig;

DialogflowToolOpenApiSpecServiceDirectoryConfig.builder()
    .service(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfig.property.service">service</a></code> | <code>java.lang.String</code> | The name of [Service Directory](https://cloud.google.com/service-directory/docs) service. Format: 'projects/<ProjectID>/locations/<LocationID>/namespaces/<NamespaceID>/services/<ServiceID>'. 'LocationID' of the service directory must be the same as the location of the tool. |

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfig.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

The name of [Service Directory](https://cloud.google.com/service-directory/docs) service. Format: 'projects/<ProjectID>/locations/<LocationID>/namespaces/<NamespaceID>/services/<ServiceID>'. 'LocationID' of the service directory must be the same as the location of the tool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#service DialogflowTool#service}

---

### DialogflowToolOpenApiSpecTlsConfig <a name="DialogflowToolOpenApiSpecTlsConfig" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfig.Initializer"></a>

```java
import io.cdktn.providers.google.dialogflow_tool.DialogflowToolOpenApiSpecTlsConfig;

DialogflowToolOpenApiSpecTlsConfig.builder()
    .caCerts(IResolvable|java.util.List<DialogflowToolOpenApiSpecTlsConfigCaCerts>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfig.property.caCerts">caCerts</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCerts">DialogflowToolOpenApiSpecTlsConfigCaCerts</a>></code> | ca_certs block. |

---

##### `caCerts`<sup>Required</sup> <a name="caCerts" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfig.property.caCerts"></a>

```java
public IResolvable|java.util.List<DialogflowToolOpenApiSpecTlsConfigCaCerts> getCaCerts();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCerts">DialogflowToolOpenApiSpecTlsConfigCaCerts</a>>

ca_certs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#ca_certs DialogflowTool#ca_certs}

---

### DialogflowToolOpenApiSpecTlsConfigCaCerts <a name="DialogflowToolOpenApiSpecTlsConfigCaCerts" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCerts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCerts.Initializer"></a>

```java
import io.cdktn.providers.google.dialogflow_tool.DialogflowToolOpenApiSpecTlsConfigCaCerts;

DialogflowToolOpenApiSpecTlsConfigCaCerts.builder()
    .cert(java.lang.String)
    .displayName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCerts.property.cert">cert</a></code> | <code>java.lang.String</code> | The allowed custom CA certificates (in DER format) for HTTPS verification. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCerts.property.displayName">displayName</a></code> | <code>java.lang.String</code> | The name of the allowed custom CA certificates. This can be used to disambiguate the custom CA certificates. |

---

##### `cert`<sup>Required</sup> <a name="cert" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCerts.property.cert"></a>

```java
public java.lang.String getCert();
```

- *Type:* java.lang.String

The allowed custom CA certificates (in DER format) for HTTPS verification.

This overrides the default SSL trust store.
If this is empty or unspecified, Dialogflow will use Google's default trust store to verify certificates.
N.B. Make sure the HTTPS server certificates are signed with "subject alt name".
A base64-encoded string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#cert DialogflowTool#cert}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCerts.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

The name of the allowed custom CA certificates. This can be used to disambiguate the custom CA certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#display_name DialogflowTool#display_name}

---

### DialogflowToolTimeouts <a name="DialogflowToolTimeouts" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google.dialogflow_tool.DialogflowToolTimeouts;

DialogflowToolTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#create DialogflowTool#create}. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#delete DialogflowTool#delete}. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#update DialogflowTool#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#create DialogflowTool#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#delete DialogflowTool#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/dialogflow_tool#update DialogflowTool#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DialogflowToolConnectorSpecActionsEntityOperationOutputReference <a name="DialogflowToolConnectorSpecActionsEntityOperationOutputReference" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.dialogflow_tool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference;

new DialogflowToolConnectorSpecActionsEntityOperationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.property.entityIdInput">entityIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.property.operationInput">operationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.property.entityId">entityId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.property.operation">operation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperation">DialogflowToolConnectorSpecActionsEntityOperation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `entityIdInput`<sup>Optional</sup> <a name="entityIdInput" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.property.entityIdInput"></a>

```java
public java.lang.String getEntityIdInput();
```

- *Type:* java.lang.String

---

##### `operationInput`<sup>Optional</sup> <a name="operationInput" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.property.operationInput"></a>

```java
public java.lang.String getOperationInput();
```

- *Type:* java.lang.String

---

##### `entityId`<sup>Required</sup> <a name="entityId" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.property.entityId"></a>

```java
public java.lang.String getEntityId();
```

- *Type:* java.lang.String

---

##### `operation`<sup>Required</sup> <a name="operation" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.property.operation"></a>

```java
public java.lang.String getOperation();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference.property.internalValue"></a>

```java
public DialogflowToolConnectorSpecActionsEntityOperation getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperation">DialogflowToolConnectorSpecActionsEntityOperation</a>

---


### DialogflowToolConnectorSpecActionsList <a name="DialogflowToolConnectorSpecActionsList" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsList.Initializer"></a>

```java
import io.cdktn.providers.google.dialogflow_tool.DialogflowToolConnectorSpecActionsList;

new DialogflowToolConnectorSpecActionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsList.get"></a>

```java
public DialogflowToolConnectorSpecActionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActions">DialogflowToolConnectorSpecActions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DialogflowToolConnectorSpecActions> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActions">DialogflowToolConnectorSpecActions</a>>

---


### DialogflowToolConnectorSpecActionsOutputReference <a name="DialogflowToolConnectorSpecActionsOutputReference" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.dialogflow_tool.DialogflowToolConnectorSpecActionsOutputReference;

new DialogflowToolConnectorSpecActionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.putEntityOperation">putEntityOperation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.resetConnectionActionId">resetConnectionActionId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.resetEntityOperation">resetEntityOperation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.resetInputFields">resetInputFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.resetOutputFields">resetOutputFields</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEntityOperation` <a name="putEntityOperation" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.putEntityOperation"></a>

```java
public void putEntityOperation(DialogflowToolConnectorSpecActionsEntityOperation value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.putEntityOperation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperation">DialogflowToolConnectorSpecActionsEntityOperation</a>

---

##### `resetConnectionActionId` <a name="resetConnectionActionId" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.resetConnectionActionId"></a>

```java
public void resetConnectionActionId()
```

##### `resetEntityOperation` <a name="resetEntityOperation" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.resetEntityOperation"></a>

```java
public void resetEntityOperation()
```

##### `resetInputFields` <a name="resetInputFields" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.resetInputFields"></a>

```java
public void resetInputFields()
```

##### `resetOutputFields` <a name="resetOutputFields" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.resetOutputFields"></a>

```java
public void resetOutputFields()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.property.entityOperation">entityOperation</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference">DialogflowToolConnectorSpecActionsEntityOperationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.property.connectionActionIdInput">connectionActionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.property.entityOperationInput">entityOperationInput</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperation">DialogflowToolConnectorSpecActionsEntityOperation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.property.inputFieldsInput">inputFieldsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.property.outputFieldsInput">outputFieldsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.property.connectionActionId">connectionActionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.property.inputFields">inputFields</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.property.outputFields">outputFields</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActions">DialogflowToolConnectorSpecActions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `entityOperation`<sup>Required</sup> <a name="entityOperation" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.property.entityOperation"></a>

```java
public DialogflowToolConnectorSpecActionsEntityOperationOutputReference getEntityOperation();
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperationOutputReference">DialogflowToolConnectorSpecActionsEntityOperationOutputReference</a>

---

##### `connectionActionIdInput`<sup>Optional</sup> <a name="connectionActionIdInput" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.property.connectionActionIdInput"></a>

```java
public java.lang.String getConnectionActionIdInput();
```

- *Type:* java.lang.String

---

##### `entityOperationInput`<sup>Optional</sup> <a name="entityOperationInput" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.property.entityOperationInput"></a>

```java
public DialogflowToolConnectorSpecActionsEntityOperation getEntityOperationInput();
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsEntityOperation">DialogflowToolConnectorSpecActionsEntityOperation</a>

---

##### `inputFieldsInput`<sup>Optional</sup> <a name="inputFieldsInput" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.property.inputFieldsInput"></a>

```java
public java.util.List<java.lang.String> getInputFieldsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `outputFieldsInput`<sup>Optional</sup> <a name="outputFieldsInput" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.property.outputFieldsInput"></a>

```java
public java.util.List<java.lang.String> getOutputFieldsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `connectionActionId`<sup>Required</sup> <a name="connectionActionId" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.property.connectionActionId"></a>

```java
public java.lang.String getConnectionActionId();
```

- *Type:* java.lang.String

---

##### `inputFields`<sup>Required</sup> <a name="inputFields" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.property.inputFields"></a>

```java
public java.util.List<java.lang.String> getInputFields();
```

- *Type:* java.util.List<java.lang.String>

---

##### `outputFields`<sup>Required</sup> <a name="outputFields" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.property.outputFields"></a>

```java
public java.util.List<java.lang.String> getOutputFields();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsOutputReference.property.internalValue"></a>

```java
public IResolvable|DialogflowToolConnectorSpecActions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActions">DialogflowToolConnectorSpecActions</a>

---


### DialogflowToolConnectorSpecOutputReference <a name="DialogflowToolConnectorSpecOutputReference" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.dialogflow_tool.DialogflowToolConnectorSpecOutputReference;

new DialogflowToolConnectorSpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.putActions">putActions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putActions` <a name="putActions" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.putActions"></a>

```java
public void putActions(IResolvable|java.util.List<DialogflowToolConnectorSpecActions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.putActions.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActions">DialogflowToolConnectorSpecActions</a>>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.property.actions">actions</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsList">DialogflowToolConnectorSpecActionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.property.actionsInput">actionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActions">DialogflowToolConnectorSpecActions</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpec">DialogflowToolConnectorSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `actions`<sup>Required</sup> <a name="actions" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.property.actions"></a>

```java
public DialogflowToolConnectorSpecActionsList getActions();
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActionsList">DialogflowToolConnectorSpecActionsList</a>

---

##### `actionsInput`<sup>Optional</sup> <a name="actionsInput" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.property.actionsInput"></a>

```java
public IResolvable|java.util.List<DialogflowToolConnectorSpecActions> getActionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecActions">DialogflowToolConnectorSpecActions</a>>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpecOutputReference.property.internalValue"></a>

```java
public DialogflowToolConnectorSpec getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolConnectorSpec">DialogflowToolConnectorSpec</a>

---


### DialogflowToolFunctionSpecOutputReference <a name="DialogflowToolFunctionSpecOutputReference" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.dialogflow_tool.DialogflowToolFunctionSpecOutputReference;

new DialogflowToolFunctionSpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.resetInputSchema">resetInputSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.resetMethodType">resetMethodType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.resetOutputSchema">resetOutputSchema</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetInputSchema` <a name="resetInputSchema" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.resetInputSchema"></a>

```java
public void resetInputSchema()
```

##### `resetMethodType` <a name="resetMethodType" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.resetMethodType"></a>

```java
public void resetMethodType()
```

##### `resetOutputSchema` <a name="resetOutputSchema" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.resetOutputSchema"></a>

```java
public void resetOutputSchema()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.property.inputSchemaInput">inputSchemaInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.property.methodTypeInput">methodTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.property.outputSchemaInput">outputSchemaInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.property.inputSchema">inputSchema</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.property.methodType">methodType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.property.outputSchema">outputSchema</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpec">DialogflowToolFunctionSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `inputSchemaInput`<sup>Optional</sup> <a name="inputSchemaInput" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.property.inputSchemaInput"></a>

```java
public java.lang.String getInputSchemaInput();
```

- *Type:* java.lang.String

---

##### `methodTypeInput`<sup>Optional</sup> <a name="methodTypeInput" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.property.methodTypeInput"></a>

```java
public java.lang.String getMethodTypeInput();
```

- *Type:* java.lang.String

---

##### `outputSchemaInput`<sup>Optional</sup> <a name="outputSchemaInput" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.property.outputSchemaInput"></a>

```java
public java.lang.String getOutputSchemaInput();
```

- *Type:* java.lang.String

---

##### `inputSchema`<sup>Required</sup> <a name="inputSchema" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.property.inputSchema"></a>

```java
public java.lang.String getInputSchema();
```

- *Type:* java.lang.String

---

##### `methodType`<sup>Required</sup> <a name="methodType" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.property.methodType"></a>

```java
public java.lang.String getMethodType();
```

- *Type:* java.lang.String

---

##### `outputSchema`<sup>Required</sup> <a name="outputSchema" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.property.outputSchema"></a>

```java
public java.lang.String getOutputSchema();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpecOutputReference.property.internalValue"></a>

```java
public DialogflowToolFunctionSpec getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolFunctionSpec">DialogflowToolFunctionSpec</a>

---


### DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference <a name="DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.dialogflow_tool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference;

new DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.resetApiKey">resetApiKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.resetSecretVersionForApiKey">resetSecretVersionForApiKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetApiKey` <a name="resetApiKey" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.resetApiKey"></a>

```java
public void resetApiKey()
```

##### `resetSecretVersionForApiKey` <a name="resetSecretVersionForApiKey" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.resetSecretVersionForApiKey"></a>

```java
public void resetSecretVersionForApiKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.apiKeyInput">apiKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.keyNameInput">keyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.requestLocationInput">requestLocationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.secretVersionForApiKeyInput">secretVersionForApiKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.apiKey">apiKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.keyName">keyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.requestLocation">requestLocation</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.secretVersionForApiKey">secretVersionForApiKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfig">DialogflowToolOpenApiSpecAuthenticationApiKeyConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `apiKeyInput`<sup>Optional</sup> <a name="apiKeyInput" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.apiKeyInput"></a>

```java
public java.lang.String getApiKeyInput();
```

- *Type:* java.lang.String

---

##### `keyNameInput`<sup>Optional</sup> <a name="keyNameInput" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.keyNameInput"></a>

```java
public java.lang.String getKeyNameInput();
```

- *Type:* java.lang.String

---

##### `requestLocationInput`<sup>Optional</sup> <a name="requestLocationInput" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.requestLocationInput"></a>

```java
public java.lang.String getRequestLocationInput();
```

- *Type:* java.lang.String

---

##### `secretVersionForApiKeyInput`<sup>Optional</sup> <a name="secretVersionForApiKeyInput" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.secretVersionForApiKeyInput"></a>

```java
public java.lang.String getSecretVersionForApiKeyInput();
```

- *Type:* java.lang.String

---

##### `apiKey`<sup>Required</sup> <a name="apiKey" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.apiKey"></a>

```java
public java.lang.String getApiKey();
```

- *Type:* java.lang.String

---

##### `keyName`<sup>Required</sup> <a name="keyName" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.keyName"></a>

```java
public java.lang.String getKeyName();
```

- *Type:* java.lang.String

---

##### `requestLocation`<sup>Required</sup> <a name="requestLocation" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.requestLocation"></a>

```java
public java.lang.String getRequestLocation();
```

- *Type:* java.lang.String

---

##### `secretVersionForApiKey`<sup>Required</sup> <a name="secretVersionForApiKey" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.secretVersionForApiKey"></a>

```java
public java.lang.String getSecretVersionForApiKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference.property.internalValue"></a>

```java
public DialogflowToolOpenApiSpecAuthenticationApiKeyConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfig">DialogflowToolOpenApiSpecAuthenticationApiKeyConfig</a>

---


### DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference <a name="DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.dialogflow_tool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference;

new DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.resetSecretVersionForToken">resetSecretVersionForToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.resetToken">resetToken</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSecretVersionForToken` <a name="resetSecretVersionForToken" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.resetSecretVersionForToken"></a>

```java
public void resetSecretVersionForToken()
```

##### `resetToken` <a name="resetToken" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.resetToken"></a>

```java
public void resetToken()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.secretVersionForTokenInput">secretVersionForTokenInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.tokenInput">tokenInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.secretVersionForToken">secretVersionForToken</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.token">token</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfig">DialogflowToolOpenApiSpecAuthenticationBearerTokenConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `secretVersionForTokenInput`<sup>Optional</sup> <a name="secretVersionForTokenInput" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.secretVersionForTokenInput"></a>

```java
public java.lang.String getSecretVersionForTokenInput();
```

- *Type:* java.lang.String

---

##### `tokenInput`<sup>Optional</sup> <a name="tokenInput" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.tokenInput"></a>

```java
public java.lang.String getTokenInput();
```

- *Type:* java.lang.String

---

##### `secretVersionForToken`<sup>Required</sup> <a name="secretVersionForToken" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.secretVersionForToken"></a>

```java
public java.lang.String getSecretVersionForToken();
```

- *Type:* java.lang.String

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.token"></a>

```java
public java.lang.String getToken();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference.property.internalValue"></a>

```java
public DialogflowToolOpenApiSpecAuthenticationBearerTokenConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfig">DialogflowToolOpenApiSpecAuthenticationBearerTokenConfig</a>

---


### DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference <a name="DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.dialogflow_tool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference;

new DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.resetClientSecret">resetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.resetScopes">resetScopes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.resetSecretVersionForClientSecret">resetSecretVersionForClientSecret</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetClientSecret` <a name="resetClientSecret" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.resetClientSecret"></a>

```java
public void resetClientSecret()
```

##### `resetScopes` <a name="resetScopes" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.resetScopes"></a>

```java
public void resetScopes()
```

##### `resetSecretVersionForClientSecret` <a name="resetSecretVersionForClientSecret" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.resetSecretVersionForClientSecret"></a>

```java
public void resetSecretVersionForClientSecret()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.clientIdInput">clientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.clientSecretInput">clientSecretInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.oauthGrantTypeInput">oauthGrantTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.scopesInput">scopesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.secretVersionForClientSecretInput">secretVersionForClientSecretInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.tokenEndpointInput">tokenEndpointInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.clientId">clientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.clientSecret">clientSecret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.oauthGrantType">oauthGrantType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.scopes">scopes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.secretVersionForClientSecret">secretVersionForClientSecret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.tokenEndpoint">tokenEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfig">DialogflowToolOpenApiSpecAuthenticationOauthConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `clientIdInput`<sup>Optional</sup> <a name="clientIdInput" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.clientIdInput"></a>

```java
public java.lang.String getClientIdInput();
```

- *Type:* java.lang.String

---

##### `clientSecretInput`<sup>Optional</sup> <a name="clientSecretInput" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.clientSecretInput"></a>

```java
public java.lang.String getClientSecretInput();
```

- *Type:* java.lang.String

---

##### `oauthGrantTypeInput`<sup>Optional</sup> <a name="oauthGrantTypeInput" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.oauthGrantTypeInput"></a>

```java
public java.lang.String getOauthGrantTypeInput();
```

- *Type:* java.lang.String

---

##### `scopesInput`<sup>Optional</sup> <a name="scopesInput" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.scopesInput"></a>

```java
public java.util.List<java.lang.String> getScopesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `secretVersionForClientSecretInput`<sup>Optional</sup> <a name="secretVersionForClientSecretInput" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.secretVersionForClientSecretInput"></a>

```java
public java.lang.String getSecretVersionForClientSecretInput();
```

- *Type:* java.lang.String

---

##### `tokenEndpointInput`<sup>Optional</sup> <a name="tokenEndpointInput" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.tokenEndpointInput"></a>

```java
public java.lang.String getTokenEndpointInput();
```

- *Type:* java.lang.String

---

##### `clientId`<sup>Required</sup> <a name="clientId" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.clientId"></a>

```java
public java.lang.String getClientId();
```

- *Type:* java.lang.String

---

##### `clientSecret`<sup>Required</sup> <a name="clientSecret" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.clientSecret"></a>

```java
public java.lang.String getClientSecret();
```

- *Type:* java.lang.String

---

##### `oauthGrantType`<sup>Required</sup> <a name="oauthGrantType" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.oauthGrantType"></a>

```java
public java.lang.String getOauthGrantType();
```

- *Type:* java.lang.String

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.scopes"></a>

```java
public java.util.List<java.lang.String> getScopes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `secretVersionForClientSecret`<sup>Required</sup> <a name="secretVersionForClientSecret" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.secretVersionForClientSecret"></a>

```java
public java.lang.String getSecretVersionForClientSecret();
```

- *Type:* java.lang.String

---

##### `tokenEndpoint`<sup>Required</sup> <a name="tokenEndpoint" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.tokenEndpoint"></a>

```java
public java.lang.String getTokenEndpoint();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference.property.internalValue"></a>

```java
public DialogflowToolOpenApiSpecAuthenticationOauthConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfig">DialogflowToolOpenApiSpecAuthenticationOauthConfig</a>

---


### DialogflowToolOpenApiSpecAuthenticationOutputReference <a name="DialogflowToolOpenApiSpecAuthenticationOutputReference" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.dialogflow_tool.DialogflowToolOpenApiSpecAuthenticationOutputReference;

new DialogflowToolOpenApiSpecAuthenticationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.putApiKeyConfig">putApiKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.putBearerTokenConfig">putBearerTokenConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.putOauthConfig">putOauthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.putServiceAgentAuthConfig">putServiceAgentAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.resetApiKeyConfig">resetApiKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.resetBearerTokenConfig">resetBearerTokenConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.resetOauthConfig">resetOauthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.resetServiceAgentAuthConfig">resetServiceAgentAuthConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putApiKeyConfig` <a name="putApiKeyConfig" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.putApiKeyConfig"></a>

```java
public void putApiKeyConfig(DialogflowToolOpenApiSpecAuthenticationApiKeyConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.putApiKeyConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfig">DialogflowToolOpenApiSpecAuthenticationApiKeyConfig</a>

---

##### `putBearerTokenConfig` <a name="putBearerTokenConfig" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.putBearerTokenConfig"></a>

```java
public void putBearerTokenConfig(DialogflowToolOpenApiSpecAuthenticationBearerTokenConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.putBearerTokenConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfig">DialogflowToolOpenApiSpecAuthenticationBearerTokenConfig</a>

---

##### `putOauthConfig` <a name="putOauthConfig" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.putOauthConfig"></a>

```java
public void putOauthConfig(DialogflowToolOpenApiSpecAuthenticationOauthConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.putOauthConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfig">DialogflowToolOpenApiSpecAuthenticationOauthConfig</a>

---

##### `putServiceAgentAuthConfig` <a name="putServiceAgentAuthConfig" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.putServiceAgentAuthConfig"></a>

```java
public void putServiceAgentAuthConfig(DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.putServiceAgentAuthConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig">DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig</a>

---

##### `resetApiKeyConfig` <a name="resetApiKeyConfig" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.resetApiKeyConfig"></a>

```java
public void resetApiKeyConfig()
```

##### `resetBearerTokenConfig` <a name="resetBearerTokenConfig" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.resetBearerTokenConfig"></a>

```java
public void resetBearerTokenConfig()
```

##### `resetOauthConfig` <a name="resetOauthConfig" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.resetOauthConfig"></a>

```java
public void resetOauthConfig()
```

##### `resetServiceAgentAuthConfig` <a name="resetServiceAgentAuthConfig" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.resetServiceAgentAuthConfig"></a>

```java
public void resetServiceAgentAuthConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.property.apiKeyConfig">apiKeyConfig</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference">DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.property.bearerTokenConfig">bearerTokenConfig</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference">DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.property.oauthConfig">oauthConfig</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference">DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.property.serviceAgentAuthConfig">serviceAgentAuthConfig</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference">DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.property.apiKeyConfigInput">apiKeyConfigInput</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfig">DialogflowToolOpenApiSpecAuthenticationApiKeyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.property.bearerTokenConfigInput">bearerTokenConfigInput</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfig">DialogflowToolOpenApiSpecAuthenticationBearerTokenConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.property.oauthConfigInput">oauthConfigInput</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfig">DialogflowToolOpenApiSpecAuthenticationOauthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.property.serviceAgentAuthConfigInput">serviceAgentAuthConfigInput</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig">DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthentication">DialogflowToolOpenApiSpecAuthentication</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `apiKeyConfig`<sup>Required</sup> <a name="apiKeyConfig" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.property.apiKeyConfig"></a>

```java
public DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference getApiKeyConfig();
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference">DialogflowToolOpenApiSpecAuthenticationApiKeyConfigOutputReference</a>

---

##### `bearerTokenConfig`<sup>Required</sup> <a name="bearerTokenConfig" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.property.bearerTokenConfig"></a>

```java
public DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference getBearerTokenConfig();
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference">DialogflowToolOpenApiSpecAuthenticationBearerTokenConfigOutputReference</a>

---

##### `oauthConfig`<sup>Required</sup> <a name="oauthConfig" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.property.oauthConfig"></a>

```java
public DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference getOauthConfig();
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference">DialogflowToolOpenApiSpecAuthenticationOauthConfigOutputReference</a>

---

##### `serviceAgentAuthConfig`<sup>Required</sup> <a name="serviceAgentAuthConfig" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.property.serviceAgentAuthConfig"></a>

```java
public DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference getServiceAgentAuthConfig();
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference">DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference</a>

---

##### `apiKeyConfigInput`<sup>Optional</sup> <a name="apiKeyConfigInput" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.property.apiKeyConfigInput"></a>

```java
public DialogflowToolOpenApiSpecAuthenticationApiKeyConfig getApiKeyConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationApiKeyConfig">DialogflowToolOpenApiSpecAuthenticationApiKeyConfig</a>

---

##### `bearerTokenConfigInput`<sup>Optional</sup> <a name="bearerTokenConfigInput" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.property.bearerTokenConfigInput"></a>

```java
public DialogflowToolOpenApiSpecAuthenticationBearerTokenConfig getBearerTokenConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationBearerTokenConfig">DialogflowToolOpenApiSpecAuthenticationBearerTokenConfig</a>

---

##### `oauthConfigInput`<sup>Optional</sup> <a name="oauthConfigInput" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.property.oauthConfigInput"></a>

```java
public DialogflowToolOpenApiSpecAuthenticationOauthConfig getOauthConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOauthConfig">DialogflowToolOpenApiSpecAuthenticationOauthConfig</a>

---

##### `serviceAgentAuthConfigInput`<sup>Optional</sup> <a name="serviceAgentAuthConfigInput" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.property.serviceAgentAuthConfigInput"></a>

```java
public DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig getServiceAgentAuthConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig">DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference.property.internalValue"></a>

```java
public DialogflowToolOpenApiSpecAuthentication getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthentication">DialogflowToolOpenApiSpecAuthentication</a>

---


### DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference <a name="DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.dialogflow_tool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference;

new DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.resetServiceAgentAuth">resetServiceAgentAuth</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetServiceAgentAuth` <a name="resetServiceAgentAuth" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.resetServiceAgentAuth"></a>

```java
public void resetServiceAgentAuth()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.property.serviceAgentAuthInput">serviceAgentAuthInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.property.serviceAgentAuth">serviceAgentAuth</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig">DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `serviceAgentAuthInput`<sup>Optional</sup> <a name="serviceAgentAuthInput" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.property.serviceAgentAuthInput"></a>

```java
public java.lang.String getServiceAgentAuthInput();
```

- *Type:* java.lang.String

---

##### `serviceAgentAuth`<sup>Required</sup> <a name="serviceAgentAuth" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.property.serviceAgentAuth"></a>

```java
public java.lang.String getServiceAgentAuth();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfigOutputReference.property.internalValue"></a>

```java
public DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig">DialogflowToolOpenApiSpecAuthenticationServiceAgentAuthConfig</a>

---


### DialogflowToolOpenApiSpecOutputReference <a name="DialogflowToolOpenApiSpecOutputReference" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.dialogflow_tool.DialogflowToolOpenApiSpecOutputReference;

new DialogflowToolOpenApiSpecOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.putAuthentication">putAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.putServiceDirectoryConfig">putServiceDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.putTlsConfig">putTlsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.resetAuthentication">resetAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.resetServiceDirectoryConfig">resetServiceDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.resetTlsConfig">resetTlsConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAuthentication` <a name="putAuthentication" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.putAuthentication"></a>

```java
public void putAuthentication(DialogflowToolOpenApiSpecAuthentication value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.putAuthentication.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthentication">DialogflowToolOpenApiSpecAuthentication</a>

---

##### `putServiceDirectoryConfig` <a name="putServiceDirectoryConfig" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.putServiceDirectoryConfig"></a>

```java
public void putServiceDirectoryConfig(DialogflowToolOpenApiSpecServiceDirectoryConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.putServiceDirectoryConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfig">DialogflowToolOpenApiSpecServiceDirectoryConfig</a>

---

##### `putTlsConfig` <a name="putTlsConfig" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.putTlsConfig"></a>

```java
public void putTlsConfig(DialogflowToolOpenApiSpecTlsConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.putTlsConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfig">DialogflowToolOpenApiSpecTlsConfig</a>

---

##### `resetAuthentication` <a name="resetAuthentication" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.resetAuthentication"></a>

```java
public void resetAuthentication()
```

##### `resetServiceDirectoryConfig` <a name="resetServiceDirectoryConfig" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.resetServiceDirectoryConfig"></a>

```java
public void resetServiceDirectoryConfig()
```

##### `resetTlsConfig` <a name="resetTlsConfig" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.resetTlsConfig"></a>

```java
public void resetTlsConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.property.authentication">authentication</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference">DialogflowToolOpenApiSpecAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.property.serviceDirectoryConfig">serviceDirectoryConfig</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference">DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.property.tlsConfig">tlsConfig</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference">DialogflowToolOpenApiSpecTlsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.property.authenticationInput">authenticationInput</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthentication">DialogflowToolOpenApiSpecAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.property.serviceDirectoryConfigInput">serviceDirectoryConfigInput</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfig">DialogflowToolOpenApiSpecServiceDirectoryConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.property.textSchemaInput">textSchemaInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.property.tlsConfigInput">tlsConfigInput</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfig">DialogflowToolOpenApiSpecTlsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.property.textSchema">textSchema</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpec">DialogflowToolOpenApiSpec</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authentication`<sup>Required</sup> <a name="authentication" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.property.authentication"></a>

```java
public DialogflowToolOpenApiSpecAuthenticationOutputReference getAuthentication();
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthenticationOutputReference">DialogflowToolOpenApiSpecAuthenticationOutputReference</a>

---

##### `serviceDirectoryConfig`<sup>Required</sup> <a name="serviceDirectoryConfig" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.property.serviceDirectoryConfig"></a>

```java
public DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference getServiceDirectoryConfig();
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference">DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference</a>

---

##### `tlsConfig`<sup>Required</sup> <a name="tlsConfig" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.property.tlsConfig"></a>

```java
public DialogflowToolOpenApiSpecTlsConfigOutputReference getTlsConfig();
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference">DialogflowToolOpenApiSpecTlsConfigOutputReference</a>

---

##### `authenticationInput`<sup>Optional</sup> <a name="authenticationInput" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.property.authenticationInput"></a>

```java
public DialogflowToolOpenApiSpecAuthentication getAuthenticationInput();
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecAuthentication">DialogflowToolOpenApiSpecAuthentication</a>

---

##### `serviceDirectoryConfigInput`<sup>Optional</sup> <a name="serviceDirectoryConfigInput" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.property.serviceDirectoryConfigInput"></a>

```java
public DialogflowToolOpenApiSpecServiceDirectoryConfig getServiceDirectoryConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfig">DialogflowToolOpenApiSpecServiceDirectoryConfig</a>

---

##### `textSchemaInput`<sup>Optional</sup> <a name="textSchemaInput" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.property.textSchemaInput"></a>

```java
public java.lang.String getTextSchemaInput();
```

- *Type:* java.lang.String

---

##### `tlsConfigInput`<sup>Optional</sup> <a name="tlsConfigInput" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.property.tlsConfigInput"></a>

```java
public DialogflowToolOpenApiSpecTlsConfig getTlsConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfig">DialogflowToolOpenApiSpecTlsConfig</a>

---

##### `textSchema`<sup>Required</sup> <a name="textSchema" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.property.textSchema"></a>

```java
public java.lang.String getTextSchema();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecOutputReference.property.internalValue"></a>

```java
public DialogflowToolOpenApiSpec getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpec">DialogflowToolOpenApiSpec</a>

---


### DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference <a name="DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.dialogflow_tool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference;

new DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.property.serviceInput">serviceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.property.service">service</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfig">DialogflowToolOpenApiSpecServiceDirectoryConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `serviceInput`<sup>Optional</sup> <a name="serviceInput" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.property.serviceInput"></a>

```java
public java.lang.String getServiceInput();
```

- *Type:* java.lang.String

---

##### `service`<sup>Required</sup> <a name="service" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.property.service"></a>

```java
public java.lang.String getService();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfigOutputReference.property.internalValue"></a>

```java
public DialogflowToolOpenApiSpecServiceDirectoryConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecServiceDirectoryConfig">DialogflowToolOpenApiSpecServiceDirectoryConfig</a>

---


### DialogflowToolOpenApiSpecTlsConfigCaCertsList <a name="DialogflowToolOpenApiSpecTlsConfigCaCertsList" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsList.Initializer"></a>

```java
import io.cdktn.providers.google.dialogflow_tool.DialogflowToolOpenApiSpecTlsConfigCaCertsList;

new DialogflowToolOpenApiSpecTlsConfigCaCertsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsList.get"></a>

```java
public DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCerts">DialogflowToolOpenApiSpecTlsConfigCaCerts</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DialogflowToolOpenApiSpecTlsConfigCaCerts> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCerts">DialogflowToolOpenApiSpecTlsConfigCaCerts</a>>

---


### DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference <a name="DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.dialogflow_tool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference;

new DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.property.certInput">certInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.property.cert">cert</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCerts">DialogflowToolOpenApiSpecTlsConfigCaCerts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `certInput`<sup>Optional</sup> <a name="certInput" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.property.certInput"></a>

```java
public java.lang.String getCertInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `cert`<sup>Required</sup> <a name="cert" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.property.cert"></a>

```java
public java.lang.String getCert();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsOutputReference.property.internalValue"></a>

```java
public IResolvable|DialogflowToolOpenApiSpecTlsConfigCaCerts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCerts">DialogflowToolOpenApiSpecTlsConfigCaCerts</a>

---


### DialogflowToolOpenApiSpecTlsConfigOutputReference <a name="DialogflowToolOpenApiSpecTlsConfigOutputReference" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.dialogflow_tool.DialogflowToolOpenApiSpecTlsConfigOutputReference;

new DialogflowToolOpenApiSpecTlsConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.putCaCerts">putCaCerts</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCaCerts` <a name="putCaCerts" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.putCaCerts"></a>

```java
public void putCaCerts(IResolvable|java.util.List<DialogflowToolOpenApiSpecTlsConfigCaCerts> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.putCaCerts.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCerts">DialogflowToolOpenApiSpecTlsConfigCaCerts</a>>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.property.caCerts">caCerts</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsList">DialogflowToolOpenApiSpecTlsConfigCaCertsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.property.caCertsInput">caCertsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCerts">DialogflowToolOpenApiSpecTlsConfigCaCerts</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfig">DialogflowToolOpenApiSpecTlsConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `caCerts`<sup>Required</sup> <a name="caCerts" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.property.caCerts"></a>

```java
public DialogflowToolOpenApiSpecTlsConfigCaCertsList getCaCerts();
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCertsList">DialogflowToolOpenApiSpecTlsConfigCaCertsList</a>

---

##### `caCertsInput`<sup>Optional</sup> <a name="caCertsInput" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.property.caCertsInput"></a>

```java
public IResolvable|java.util.List<DialogflowToolOpenApiSpecTlsConfigCaCerts> getCaCertsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigCaCerts">DialogflowToolOpenApiSpecTlsConfigCaCerts</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfigOutputReference.property.internalValue"></a>

```java
public DialogflowToolOpenApiSpecTlsConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolOpenApiSpecTlsConfig">DialogflowToolOpenApiSpecTlsConfig</a>

---


### DialogflowToolTimeoutsOutputReference <a name="DialogflowToolTimeoutsOutputReference" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.dialogflow_tool.DialogflowToolTimeoutsOutputReference;

new DialogflowToolTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeouts">DialogflowToolTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dialogflowTool.DialogflowToolTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|DialogflowToolTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.dialogflowTool.DialogflowToolTimeouts">DialogflowToolTimeouts</a>

---



