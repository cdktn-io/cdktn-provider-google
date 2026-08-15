# `dialogflowEnvironment` Submodule <a name="`dialogflowEnvironment` Submodule" id="@cdktn/provider-google.dialogflowEnvironment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DialogflowEnvironment <a name="DialogflowEnvironment" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dialogflow_environment google_dialogflow_environment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.Initializer"></a>

```java
import io.cdktn.providers.google.dialogflow_environment.DialogflowEnvironment;

DialogflowEnvironment.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .environmentid(java.lang.String)
//  .agentVersion(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .fulfillment(DialogflowEnvironmentFulfillment)
//  .id(java.lang.String)
//  .location(java.lang.String)
//  .project(java.lang.String)
//  .textToSpeechSettings(DialogflowEnvironmentTextToSpeechSettings)
//  .timeouts(DialogflowEnvironmentTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.Initializer.parameter.environmentid">environmentid</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dialogflow_environment#environmentid DialogflowEnvironment#environmentid}. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.Initializer.parameter.agentVersion">agentVersion</a></code> | <code>java.lang.String</code> | The agent version loaded into this environment. Supported formats: - projects/<Project ID>/agent/versions/<Version ID> - projects/<Project ID>/locations/<Location ID>/agent/versions/<Version ID>. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | The developer-provided description for this environment. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.Initializer.parameter.fulfillment">fulfillment</a></code> | <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillment">DialogflowEnvironmentFulfillment</a></code> | fulfillment block. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dialogflow_environment#id DialogflowEnvironment#id}. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dialogflow_environment#location DialogflowEnvironment#location}. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dialogflow_environment#project DialogflowEnvironment#project}. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.Initializer.parameter.textToSpeechSettings">textToSpeechSettings</a></code> | <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettings">DialogflowEnvironmentTextToSpeechSettings</a></code> | text_to_speech_settings block. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeouts">DialogflowEnvironmentTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `environmentid`<sup>Required</sup> <a name="environmentid" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.Initializer.parameter.environmentid"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dialogflow_environment#environmentid DialogflowEnvironment#environmentid}.

---

##### `agentVersion`<sup>Optional</sup> <a name="agentVersion" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.Initializer.parameter.agentVersion"></a>

- *Type:* java.lang.String

The agent version loaded into this environment. Supported formats: - projects/<Project ID>/agent/versions/<Version ID> - projects/<Project ID>/locations/<Location ID>/agent/versions/<Version ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dialogflow_environment#agent_version DialogflowEnvironment#agent_version}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dialogflow_environment#deletion_policy DialogflowEnvironment#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.Initializer.parameter.description"></a>

- *Type:* java.lang.String

The developer-provided description for this environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dialogflow_environment#description DialogflowEnvironment#description}

---

##### `fulfillment`<sup>Optional</sup> <a name="fulfillment" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.Initializer.parameter.fulfillment"></a>

- *Type:* <a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillment">DialogflowEnvironmentFulfillment</a>

fulfillment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dialogflow_environment#fulfillment DialogflowEnvironment#fulfillment}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dialogflow_environment#id DialogflowEnvironment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dialogflow_environment#location DialogflowEnvironment#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dialogflow_environment#project DialogflowEnvironment#project}.

---

##### `textToSpeechSettings`<sup>Optional</sup> <a name="textToSpeechSettings" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.Initializer.parameter.textToSpeechSettings"></a>

- *Type:* <a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettings">DialogflowEnvironmentTextToSpeechSettings</a>

text_to_speech_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dialogflow_environment#text_to_speech_settings DialogflowEnvironment#text_to_speech_settings}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeouts">DialogflowEnvironmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dialogflow_environment#timeouts DialogflowEnvironment#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.putFulfillment">putFulfillment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.putTextToSpeechSettings">putTextToSpeechSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.resetAgentVersion">resetAgentVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.resetFulfillment">resetFulfillment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.resetTextToSpeechSettings">resetTextToSpeechSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putFulfillment` <a name="putFulfillment" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.putFulfillment"></a>

```java
public void putFulfillment(DialogflowEnvironmentFulfillment value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.putFulfillment.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillment">DialogflowEnvironmentFulfillment</a>

---

##### `putTextToSpeechSettings` <a name="putTextToSpeechSettings" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.putTextToSpeechSettings"></a>

```java
public void putTextToSpeechSettings(DialogflowEnvironmentTextToSpeechSettings value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.putTextToSpeechSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettings">DialogflowEnvironmentTextToSpeechSettings</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.putTimeouts"></a>

```java
public void putTimeouts(DialogflowEnvironmentTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeouts">DialogflowEnvironmentTimeouts</a>

---

##### `resetAgentVersion` <a name="resetAgentVersion" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.resetAgentVersion"></a>

```java
public void resetAgentVersion()
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetFulfillment` <a name="resetFulfillment" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.resetFulfillment"></a>

```java
public void resetFulfillment()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.resetId"></a>

```java
public void resetId()
```

##### `resetLocation` <a name="resetLocation" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.resetLocation"></a>

```java
public void resetLocation()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.resetProject"></a>

```java
public void resetProject()
```

##### `resetTextToSpeechSettings` <a name="resetTextToSpeechSettings" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.resetTextToSpeechSettings"></a>

```java
public void resetTextToSpeechSettings()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DialogflowEnvironment resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.isConstruct"></a>

```java
import io.cdktn.providers.google.dialogflow_environment.DialogflowEnvironment;

DialogflowEnvironment.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.isTerraformElement"></a>

```java
import io.cdktn.providers.google.dialogflow_environment.DialogflowEnvironment;

DialogflowEnvironment.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.isTerraformResource"></a>

```java
import io.cdktn.providers.google.dialogflow_environment.DialogflowEnvironment;

DialogflowEnvironment.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.dialogflow_environment.DialogflowEnvironment;

DialogflowEnvironment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DialogflowEnvironment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DialogflowEnvironment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DialogflowEnvironment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DialogflowEnvironment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dialogflow_environment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DialogflowEnvironment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.fulfillment">fulfillment</a></code> | <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference">DialogflowEnvironmentFulfillmentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.textToSpeechSettings">textToSpeechSettings</a></code> | <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference">DialogflowEnvironmentTextToSpeechSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference">DialogflowEnvironmentTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.agentVersionInput">agentVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.environmentidInput">environmentidInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.fulfillmentInput">fulfillmentInput</a></code> | <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillment">DialogflowEnvironmentFulfillment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.textToSpeechSettingsInput">textToSpeechSettingsInput</a></code> | <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettings">DialogflowEnvironmentTextToSpeechSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeouts">DialogflowEnvironmentTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.agentVersion">agentVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.environmentid">environmentid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `fulfillment`<sup>Required</sup> <a name="fulfillment" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.fulfillment"></a>

```java
public DialogflowEnvironmentFulfillmentOutputReference getFulfillment();
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference">DialogflowEnvironmentFulfillmentOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `textToSpeechSettings`<sup>Required</sup> <a name="textToSpeechSettings" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.textToSpeechSettings"></a>

```java
public DialogflowEnvironmentTextToSpeechSettingsOutputReference getTextToSpeechSettings();
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference">DialogflowEnvironmentTextToSpeechSettingsOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.timeouts"></a>

```java
public DialogflowEnvironmentTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference">DialogflowEnvironmentTimeoutsOutputReference</a>

---

##### `agentVersionInput`<sup>Optional</sup> <a name="agentVersionInput" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.agentVersionInput"></a>

```java
public java.lang.String getAgentVersionInput();
```

- *Type:* java.lang.String

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `environmentidInput`<sup>Optional</sup> <a name="environmentidInput" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.environmentidInput"></a>

```java
public java.lang.String getEnvironmentidInput();
```

- *Type:* java.lang.String

---

##### `fulfillmentInput`<sup>Optional</sup> <a name="fulfillmentInput" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.fulfillmentInput"></a>

```java
public DialogflowEnvironmentFulfillment getFulfillmentInput();
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillment">DialogflowEnvironmentFulfillment</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `textToSpeechSettingsInput`<sup>Optional</sup> <a name="textToSpeechSettingsInput" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.textToSpeechSettingsInput"></a>

```java
public DialogflowEnvironmentTextToSpeechSettings getTextToSpeechSettingsInput();
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettings">DialogflowEnvironmentTextToSpeechSettings</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.timeoutsInput"></a>

```java
public IResolvable|DialogflowEnvironmentTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeouts">DialogflowEnvironmentTimeouts</a>

---

##### `agentVersion`<sup>Required</sup> <a name="agentVersion" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.agentVersion"></a>

```java
public java.lang.String getAgentVersion();
```

- *Type:* java.lang.String

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `environmentid`<sup>Required</sup> <a name="environmentid" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.environmentid"></a>

```java
public java.lang.String getEnvironmentid();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironment.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DialogflowEnvironmentConfig <a name="DialogflowEnvironmentConfig" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentConfig.Initializer"></a>

```java
import io.cdktn.providers.google.dialogflow_environment.DialogflowEnvironmentConfig;

DialogflowEnvironmentConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .environmentid(java.lang.String)
//  .agentVersion(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .fulfillment(DialogflowEnvironmentFulfillment)
//  .id(java.lang.String)
//  .location(java.lang.String)
//  .project(java.lang.String)
//  .textToSpeechSettings(DialogflowEnvironmentTextToSpeechSettings)
//  .timeouts(DialogflowEnvironmentTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentConfig.property.environmentid">environmentid</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dialogflow_environment#environmentid DialogflowEnvironment#environmentid}. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentConfig.property.agentVersion">agentVersion</a></code> | <code>java.lang.String</code> | The agent version loaded into this environment. Supported formats: - projects/<Project ID>/agent/versions/<Version ID> - projects/<Project ID>/locations/<Location ID>/agent/versions/<Version ID>. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentConfig.property.description">description</a></code> | <code>java.lang.String</code> | The developer-provided description for this environment. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentConfig.property.fulfillment">fulfillment</a></code> | <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillment">DialogflowEnvironmentFulfillment</a></code> | fulfillment block. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dialogflow_environment#id DialogflowEnvironment#id}. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dialogflow_environment#location DialogflowEnvironment#location}. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dialogflow_environment#project DialogflowEnvironment#project}. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentConfig.property.textToSpeechSettings">textToSpeechSettings</a></code> | <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettings">DialogflowEnvironmentTextToSpeechSettings</a></code> | text_to_speech_settings block. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeouts">DialogflowEnvironmentTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `environmentid`<sup>Required</sup> <a name="environmentid" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentConfig.property.environmentid"></a>

```java
public java.lang.String getEnvironmentid();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dialogflow_environment#environmentid DialogflowEnvironment#environmentid}.

---

##### `agentVersion`<sup>Optional</sup> <a name="agentVersion" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentConfig.property.agentVersion"></a>

```java
public java.lang.String getAgentVersion();
```

- *Type:* java.lang.String

The agent version loaded into this environment. Supported formats: - projects/<Project ID>/agent/versions/<Version ID> - projects/<Project ID>/locations/<Location ID>/agent/versions/<Version ID>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dialogflow_environment#agent_version DialogflowEnvironment#agent_version}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dialogflow_environment#deletion_policy DialogflowEnvironment#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The developer-provided description for this environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dialogflow_environment#description DialogflowEnvironment#description}

---

##### `fulfillment`<sup>Optional</sup> <a name="fulfillment" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentConfig.property.fulfillment"></a>

```java
public DialogflowEnvironmentFulfillment getFulfillment();
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillment">DialogflowEnvironmentFulfillment</a>

fulfillment block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dialogflow_environment#fulfillment DialogflowEnvironment#fulfillment}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dialogflow_environment#id DialogflowEnvironment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dialogflow_environment#location DialogflowEnvironment#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dialogflow_environment#project DialogflowEnvironment#project}.

---

##### `textToSpeechSettings`<sup>Optional</sup> <a name="textToSpeechSettings" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentConfig.property.textToSpeechSettings"></a>

```java
public DialogflowEnvironmentTextToSpeechSettings getTextToSpeechSettings();
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettings">DialogflowEnvironmentTextToSpeechSettings</a>

text_to_speech_settings block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dialogflow_environment#text_to_speech_settings DialogflowEnvironment#text_to_speech_settings}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentConfig.property.timeouts"></a>

```java
public DialogflowEnvironmentTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeouts">DialogflowEnvironmentTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dialogflow_environment#timeouts DialogflowEnvironment#timeouts}

---

### DialogflowEnvironmentFulfillment <a name="DialogflowEnvironmentFulfillment" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillment"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillment.Initializer"></a>

```java
import io.cdktn.providers.google.dialogflow_environment.DialogflowEnvironmentFulfillment;

DialogflowEnvironmentFulfillment.builder()
//  .displayName(java.lang.String)
//  .features(IResolvable|java.util.List<DialogflowEnvironmentFulfillmentFeatures>)
//  .genericWebService(DialogflowEnvironmentFulfillmentGenericWebService)
//  .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillment.property.displayName">displayName</a></code> | <code>java.lang.String</code> | The human-readable name of the fulfillment, unique within the agent. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillment.property.features">features</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeatures">DialogflowEnvironmentFulfillmentFeatures</a>></code> | features block. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillment.property.genericWebService">genericWebService</a></code> | <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebService">DialogflowEnvironmentFulfillmentGenericWebService</a></code> | generic_web_service block. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillment.property.name">name</a></code> | <code>java.lang.String</code> | The unique identifier of the fulfillment. Supports the following formats: - projects/<Project ID>/agent/fulfillment - projects/<Project ID>/locations/<Location ID>/agent/fulfillment. |

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillment.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

The human-readable name of the fulfillment, unique within the agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dialogflow_environment#display_name DialogflowEnvironment#display_name}

---

##### `features`<sup>Optional</sup> <a name="features" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillment.property.features"></a>

```java
public IResolvable|java.util.List<DialogflowEnvironmentFulfillmentFeatures> getFeatures();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeatures">DialogflowEnvironmentFulfillmentFeatures</a>>

features block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dialogflow_environment#features DialogflowEnvironment#features}

---

##### `genericWebService`<sup>Optional</sup> <a name="genericWebService" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillment.property.genericWebService"></a>

```java
public DialogflowEnvironmentFulfillmentGenericWebService getGenericWebService();
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebService">DialogflowEnvironmentFulfillmentGenericWebService</a>

generic_web_service block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dialogflow_environment#generic_web_service DialogflowEnvironment#generic_web_service}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillment.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The unique identifier of the fulfillment. Supports the following formats: - projects/<Project ID>/agent/fulfillment - projects/<Project ID>/locations/<Location ID>/agent/fulfillment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dialogflow_environment#name DialogflowEnvironment#name}

---

### DialogflowEnvironmentFulfillmentFeatures <a name="DialogflowEnvironmentFulfillmentFeatures" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeatures"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeatures.Initializer"></a>

```java
import io.cdktn.providers.google.dialogflow_environment.DialogflowEnvironmentFulfillmentFeatures;

DialogflowEnvironmentFulfillmentFeatures.builder()
    .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeatures.property.type">type</a></code> | <code>java.lang.String</code> | The type of the feature that enabled for fulfillment. Possible values: ["TYPE_UNSPECIFIED", "SMALLTALK"]. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeatures.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The type of the feature that enabled for fulfillment. Possible values: ["TYPE_UNSPECIFIED", "SMALLTALK"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dialogflow_environment#type DialogflowEnvironment#type}

---

### DialogflowEnvironmentFulfillmentGenericWebService <a name="DialogflowEnvironmentFulfillmentGenericWebService" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebService"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebService.Initializer"></a>

```java
import io.cdktn.providers.google.dialogflow_environment.DialogflowEnvironmentFulfillmentGenericWebService;

DialogflowEnvironmentFulfillmentGenericWebService.builder()
    .uri(java.lang.String)
//  .password(java.lang.String)
//  .requestHeaders(java.util.Map<java.lang.String, java.lang.String>)
//  .username(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebService.property.uri">uri</a></code> | <code>java.lang.String</code> | The fulfillment URI for receiving POST requests. It must use https protocol. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebService.property.password">password</a></code> | <code>java.lang.String</code> | The password for HTTP Basic authentication. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebService.property.requestHeaders">requestHeaders</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The HTTP request headers to send together with fulfillment requests. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebService.property.username">username</a></code> | <code>java.lang.String</code> | The user name for HTTP Basic authentication. |

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebService.property.uri"></a>

```java
public java.lang.String getUri();
```

- *Type:* java.lang.String

The fulfillment URI for receiving POST requests. It must use https protocol.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dialogflow_environment#uri DialogflowEnvironment#uri}

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebService.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

The password for HTTP Basic authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dialogflow_environment#password DialogflowEnvironment#password}

---

##### `requestHeaders`<sup>Optional</sup> <a name="requestHeaders" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebService.property.requestHeaders"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getRequestHeaders();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The HTTP request headers to send together with fulfillment requests.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dialogflow_environment#request_headers DialogflowEnvironment#request_headers}

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebService.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

The user name for HTTP Basic authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dialogflow_environment#username DialogflowEnvironment#username}

---

### DialogflowEnvironmentTextToSpeechSettings <a name="DialogflowEnvironmentTextToSpeechSettings" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettings.Initializer"></a>

```java
import io.cdktn.providers.google.dialogflow_environment.DialogflowEnvironmentTextToSpeechSettings;

DialogflowEnvironmentTextToSpeechSettings.builder()
//  .enableTextToSpeech(java.lang.Boolean|IResolvable)
//  .outputAudioEncoding(java.lang.String)
//  .sampleRateHertz(java.lang.Number)
//  .synthesizeSpeechConfigs(IResolvable|java.util.List<DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettings.property.enableTextToSpeech">enableTextToSpeech</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates whether text to speech is enabled. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettings.property.outputAudioEncoding">outputAudioEncoding</a></code> | <code>java.lang.String</code> | Audio encoding of the synthesized audio content. Possible values: ["OUTPUT_AUDIO_ENCODING_UNSPECIFIED", "OUTPUT_AUDIO_ENCODING_LINEAR_16", "OUTPUT_AUDIO_ENCODING_MP3", "OUTPUT_AUDIO_ENCODING_MP3_64_KBPS", "OUTPUT_AUDIO_ENCODING_OGG_OPUS", "OUTPUT_AUDIO_ENCODING_MULAW", "OUTPUT_AUDIO_ENCODING_ALAW"]. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettings.property.sampleRateHertz">sampleRateHertz</a></code> | <code>java.lang.Number</code> | The synthesis sample rate (in hertz) for this audio. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettings.property.synthesizeSpeechConfigs">synthesizeSpeechConfigs</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs">DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs</a>></code> | synthesize_speech_configs block. |

---

##### `enableTextToSpeech`<sup>Optional</sup> <a name="enableTextToSpeech" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettings.property.enableTextToSpeech"></a>

```java
public java.lang.Boolean|IResolvable getEnableTextToSpeech();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates whether text to speech is enabled.

Even when this field is false, other settings in this proto are still retained.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dialogflow_environment#enable_text_to_speech DialogflowEnvironment#enable_text_to_speech}

---

##### `outputAudioEncoding`<sup>Optional</sup> <a name="outputAudioEncoding" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettings.property.outputAudioEncoding"></a>

```java
public java.lang.String getOutputAudioEncoding();
```

- *Type:* java.lang.String

Audio encoding of the synthesized audio content. Possible values: ["OUTPUT_AUDIO_ENCODING_UNSPECIFIED", "OUTPUT_AUDIO_ENCODING_LINEAR_16", "OUTPUT_AUDIO_ENCODING_MP3", "OUTPUT_AUDIO_ENCODING_MP3_64_KBPS", "OUTPUT_AUDIO_ENCODING_OGG_OPUS", "OUTPUT_AUDIO_ENCODING_MULAW", "OUTPUT_AUDIO_ENCODING_ALAW"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dialogflow_environment#output_audio_encoding DialogflowEnvironment#output_audio_encoding}

---

##### `sampleRateHertz`<sup>Optional</sup> <a name="sampleRateHertz" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettings.property.sampleRateHertz"></a>

```java
public java.lang.Number getSampleRateHertz();
```

- *Type:* java.lang.Number

The synthesis sample rate (in hertz) for this audio.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dialogflow_environment#sample_rate_hertz DialogflowEnvironment#sample_rate_hertz}

---

##### `synthesizeSpeechConfigs`<sup>Optional</sup> <a name="synthesizeSpeechConfigs" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettings.property.synthesizeSpeechConfigs"></a>

```java
public IResolvable|java.util.List<DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs> getSynthesizeSpeechConfigs();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs">DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs</a>>

synthesize_speech_configs block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dialogflow_environment#synthesize_speech_configs DialogflowEnvironment#synthesize_speech_configs}

---

### DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs <a name="DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs.Initializer"></a>

```java
import io.cdktn.providers.google.dialogflow_environment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs;

DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs.builder()
    .language(java.lang.String)
//  .effectsProfileId(java.util.List<java.lang.String>)
//  .pitch(java.lang.Number)
//  .speakingRate(java.lang.Number)
//  .voice(DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice)
//  .volumeGainDb(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs.property.language">language</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dialogflow_environment#language DialogflowEnvironment#language}. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs.property.effectsProfileId">effectsProfileId</a></code> | <code>java.util.List<java.lang.String></code> | An identifier which selects 'audio effects' profiles that are applied on (post synthesized) text to speech. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs.property.pitch">pitch</a></code> | <code>java.lang.Number</code> | Speaking pitch, in the range [-20.0, 20.0]. 20 means increase 20 semitones from the original pitch. -20 means decrease 20 semitones from the original pitch. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs.property.speakingRate">speakingRate</a></code> | <code>java.lang.Number</code> | Speaking rate/speed, in the range [0.25, 4.0]. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs.property.voice">voice</a></code> | <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice">DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice</a></code> | voice block. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs.property.volumeGainDb">volumeGainDb</a></code> | <code>java.lang.Number</code> | Volume gain (in dB) of the normal native volume supported by the specific voice. |

---

##### `language`<sup>Required</sup> <a name="language" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs.property.language"></a>

```java
public java.lang.String getLanguage();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dialogflow_environment#language DialogflowEnvironment#language}.

---

##### `effectsProfileId`<sup>Optional</sup> <a name="effectsProfileId" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs.property.effectsProfileId"></a>

```java
public java.util.List<java.lang.String> getEffectsProfileId();
```

- *Type:* java.util.List<java.lang.String>

An identifier which selects 'audio effects' profiles that are applied on (post synthesized) text to speech.

Effects are applied on top of each other in the order they are given.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dialogflow_environment#effects_profile_id DialogflowEnvironment#effects_profile_id}

---

##### `pitch`<sup>Optional</sup> <a name="pitch" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs.property.pitch"></a>

```java
public java.lang.Number getPitch();
```

- *Type:* java.lang.Number

Speaking pitch, in the range [-20.0, 20.0]. 20 means increase 20 semitones from the original pitch. -20 means decrease 20 semitones from the original pitch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dialogflow_environment#pitch DialogflowEnvironment#pitch}

---

##### `speakingRate`<sup>Optional</sup> <a name="speakingRate" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs.property.speakingRate"></a>

```java
public java.lang.Number getSpeakingRate();
```

- *Type:* java.lang.Number

Speaking rate/speed, in the range [0.25, 4.0].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dialogflow_environment#speaking_rate DialogflowEnvironment#speaking_rate}

---

##### `voice`<sup>Optional</sup> <a name="voice" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs.property.voice"></a>

```java
public DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice getVoice();
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice">DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice</a>

voice block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dialogflow_environment#voice DialogflowEnvironment#voice}

---

##### `volumeGainDb`<sup>Optional</sup> <a name="volumeGainDb" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs.property.volumeGainDb"></a>

```java
public java.lang.Number getVolumeGainDb();
```

- *Type:* java.lang.Number

Volume gain (in dB) of the normal native volume supported by the specific voice.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dialogflow_environment#volume_gain_db DialogflowEnvironment#volume_gain_db}

---

### DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice <a name="DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice.Initializer"></a>

```java
import io.cdktn.providers.google.dialogflow_environment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice;

DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice.builder()
//  .name(java.lang.String)
//  .ssmlGender(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice.property.name">name</a></code> | <code>java.lang.String</code> | The name of the voice. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice.property.ssmlGender">ssmlGender</a></code> | <code>java.lang.String</code> | The preferred gender of the voice. Possible values: ["SSML_VOICE_GENDER_UNSPECIFIED", "SSML_VOICE_GENDER_MALE", "SSML_VOICE_GENDER_FEMALE", "SSML_VOICE_GENDER_NEUTRAL"]. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the voice.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dialogflow_environment#name DialogflowEnvironment#name}

---

##### `ssmlGender`<sup>Optional</sup> <a name="ssmlGender" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice.property.ssmlGender"></a>

```java
public java.lang.String getSsmlGender();
```

- *Type:* java.lang.String

The preferred gender of the voice. Possible values: ["SSML_VOICE_GENDER_UNSPECIFIED", "SSML_VOICE_GENDER_MALE", "SSML_VOICE_GENDER_FEMALE", "SSML_VOICE_GENDER_NEUTRAL"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dialogflow_environment#ssml_gender DialogflowEnvironment#ssml_gender}

---

### DialogflowEnvironmentTimeouts <a name="DialogflowEnvironmentTimeouts" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google.dialogflow_environment.DialogflowEnvironmentTimeouts;

DialogflowEnvironmentTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dialogflow_environment#create DialogflowEnvironment#create}. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dialogflow_environment#delete DialogflowEnvironment#delete}. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dialogflow_environment#update DialogflowEnvironment#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dialogflow_environment#create DialogflowEnvironment#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dialogflow_environment#delete DialogflowEnvironment#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/dialogflow_environment#update DialogflowEnvironment#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DialogflowEnvironmentFulfillmentFeaturesList <a name="DialogflowEnvironmentFulfillmentFeaturesList" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesList.Initializer"></a>

```java
import io.cdktn.providers.google.dialogflow_environment.DialogflowEnvironmentFulfillmentFeaturesList;

new DialogflowEnvironmentFulfillmentFeaturesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesList.get"></a>

```java
public DialogflowEnvironmentFulfillmentFeaturesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeatures">DialogflowEnvironmentFulfillmentFeatures</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DialogflowEnvironmentFulfillmentFeatures> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeatures">DialogflowEnvironmentFulfillmentFeatures</a>>

---


### DialogflowEnvironmentFulfillmentFeaturesOutputReference <a name="DialogflowEnvironmentFulfillmentFeaturesOutputReference" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.dialogflow_environment.DialogflowEnvironmentFulfillmentFeaturesOutputReference;

new DialogflowEnvironmentFulfillmentFeaturesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeatures">DialogflowEnvironmentFulfillmentFeatures</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesOutputReference.property.internalValue"></a>

```java
public IResolvable|DialogflowEnvironmentFulfillmentFeatures getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeatures">DialogflowEnvironmentFulfillmentFeatures</a>

---


### DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference <a name="DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.dialogflow_environment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference;

new DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.resetRequestHeaders">resetRequestHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.resetUsername">resetUsername</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPassword` <a name="resetPassword" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.resetPassword"></a>

```java
public void resetPassword()
```

##### `resetRequestHeaders` <a name="resetRequestHeaders" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.resetRequestHeaders"></a>

```java
public void resetRequestHeaders()
```

##### `resetUsername` <a name="resetUsername" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.resetUsername"></a>

```java
public void resetUsername()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.property.requestHeadersInput">requestHeadersInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.property.uriInput">uriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.property.requestHeaders">requestHeaders</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.property.uri">uri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebService">DialogflowEnvironmentFulfillmentGenericWebService</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `requestHeadersInput`<sup>Optional</sup> <a name="requestHeadersInput" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.property.requestHeadersInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getRequestHeadersInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `uriInput`<sup>Optional</sup> <a name="uriInput" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.property.uriInput"></a>

```java
public java.lang.String getUriInput();
```

- *Type:* java.lang.String

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `requestHeaders`<sup>Required</sup> <a name="requestHeaders" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.property.requestHeaders"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getRequestHeaders();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.property.uri"></a>

```java
public java.lang.String getUri();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference.property.internalValue"></a>

```java
public DialogflowEnvironmentFulfillmentGenericWebService getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebService">DialogflowEnvironmentFulfillmentGenericWebService</a>

---


### DialogflowEnvironmentFulfillmentOutputReference <a name="DialogflowEnvironmentFulfillmentOutputReference" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.dialogflow_environment.DialogflowEnvironmentFulfillmentOutputReference;

new DialogflowEnvironmentFulfillmentOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.putFeatures">putFeatures</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.putGenericWebService">putGenericWebService</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.resetFeatures">resetFeatures</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.resetGenericWebService">resetGenericWebService</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.resetName">resetName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFeatures` <a name="putFeatures" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.putFeatures"></a>

```java
public void putFeatures(IResolvable|java.util.List<DialogflowEnvironmentFulfillmentFeatures> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.putFeatures.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeatures">DialogflowEnvironmentFulfillmentFeatures</a>>

---

##### `putGenericWebService` <a name="putGenericWebService" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.putGenericWebService"></a>

```java
public void putGenericWebService(DialogflowEnvironmentFulfillmentGenericWebService value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.putGenericWebService.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebService">DialogflowEnvironmentFulfillmentGenericWebService</a>

---

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetFeatures` <a name="resetFeatures" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.resetFeatures"></a>

```java
public void resetFeatures()
```

##### `resetGenericWebService` <a name="resetGenericWebService" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.resetGenericWebService"></a>

```java
public void resetGenericWebService()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.resetName"></a>

```java
public void resetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.property.features">features</a></code> | <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesList">DialogflowEnvironmentFulfillmentFeaturesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.property.genericWebService">genericWebService</a></code> | <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference">DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.property.featuresInput">featuresInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeatures">DialogflowEnvironmentFulfillmentFeatures</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.property.genericWebServiceInput">genericWebServiceInput</a></code> | <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebService">DialogflowEnvironmentFulfillmentGenericWebService</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillment">DialogflowEnvironmentFulfillment</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `features`<sup>Required</sup> <a name="features" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.property.features"></a>

```java
public DialogflowEnvironmentFulfillmentFeaturesList getFeatures();
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeaturesList">DialogflowEnvironmentFulfillmentFeaturesList</a>

---

##### `genericWebService`<sup>Required</sup> <a name="genericWebService" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.property.genericWebService"></a>

```java
public DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference getGenericWebService();
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference">DialogflowEnvironmentFulfillmentGenericWebServiceOutputReference</a>

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `featuresInput`<sup>Optional</sup> <a name="featuresInput" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.property.featuresInput"></a>

```java
public IResolvable|java.util.List<DialogflowEnvironmentFulfillmentFeatures> getFeaturesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentFeatures">DialogflowEnvironmentFulfillmentFeatures</a>>

---

##### `genericWebServiceInput`<sup>Optional</sup> <a name="genericWebServiceInput" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.property.genericWebServiceInput"></a>

```java
public DialogflowEnvironmentFulfillmentGenericWebService getGenericWebServiceInput();
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentGenericWebService">DialogflowEnvironmentFulfillmentGenericWebService</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillmentOutputReference.property.internalValue"></a>

```java
public DialogflowEnvironmentFulfillment getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentFulfillment">DialogflowEnvironmentFulfillment</a>

---


### DialogflowEnvironmentTextToSpeechSettingsOutputReference <a name="DialogflowEnvironmentTextToSpeechSettingsOutputReference" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.dialogflow_environment.DialogflowEnvironmentTextToSpeechSettingsOutputReference;

new DialogflowEnvironmentTextToSpeechSettingsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.putSynthesizeSpeechConfigs">putSynthesizeSpeechConfigs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.resetEnableTextToSpeech">resetEnableTextToSpeech</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.resetOutputAudioEncoding">resetOutputAudioEncoding</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.resetSampleRateHertz">resetSampleRateHertz</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.resetSynthesizeSpeechConfigs">resetSynthesizeSpeechConfigs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSynthesizeSpeechConfigs` <a name="putSynthesizeSpeechConfigs" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.putSynthesizeSpeechConfigs"></a>

```java
public void putSynthesizeSpeechConfigs(IResolvable|java.util.List<DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.putSynthesizeSpeechConfigs.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs">DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs</a>>

---

##### `resetEnableTextToSpeech` <a name="resetEnableTextToSpeech" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.resetEnableTextToSpeech"></a>

```java
public void resetEnableTextToSpeech()
```

##### `resetOutputAudioEncoding` <a name="resetOutputAudioEncoding" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.resetOutputAudioEncoding"></a>

```java
public void resetOutputAudioEncoding()
```

##### `resetSampleRateHertz` <a name="resetSampleRateHertz" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.resetSampleRateHertz"></a>

```java
public void resetSampleRateHertz()
```

##### `resetSynthesizeSpeechConfigs` <a name="resetSynthesizeSpeechConfigs" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.resetSynthesizeSpeechConfigs"></a>

```java
public void resetSynthesizeSpeechConfigs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.property.synthesizeSpeechConfigs">synthesizeSpeechConfigs</a></code> | <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList">DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.property.enableTextToSpeechInput">enableTextToSpeechInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.property.outputAudioEncodingInput">outputAudioEncodingInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.property.sampleRateHertzInput">sampleRateHertzInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.property.synthesizeSpeechConfigsInput">synthesizeSpeechConfigsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs">DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.property.enableTextToSpeech">enableTextToSpeech</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.property.outputAudioEncoding">outputAudioEncoding</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.property.sampleRateHertz">sampleRateHertz</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettings">DialogflowEnvironmentTextToSpeechSettings</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `synthesizeSpeechConfigs`<sup>Required</sup> <a name="synthesizeSpeechConfigs" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.property.synthesizeSpeechConfigs"></a>

```java
public DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList getSynthesizeSpeechConfigs();
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList">DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList</a>

---

##### `enableTextToSpeechInput`<sup>Optional</sup> <a name="enableTextToSpeechInput" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.property.enableTextToSpeechInput"></a>

```java
public java.lang.Boolean|IResolvable getEnableTextToSpeechInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `outputAudioEncodingInput`<sup>Optional</sup> <a name="outputAudioEncodingInput" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.property.outputAudioEncodingInput"></a>

```java
public java.lang.String getOutputAudioEncodingInput();
```

- *Type:* java.lang.String

---

##### `sampleRateHertzInput`<sup>Optional</sup> <a name="sampleRateHertzInput" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.property.sampleRateHertzInput"></a>

```java
public java.lang.Number getSampleRateHertzInput();
```

- *Type:* java.lang.Number

---

##### `synthesizeSpeechConfigsInput`<sup>Optional</sup> <a name="synthesizeSpeechConfigsInput" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.property.synthesizeSpeechConfigsInput"></a>

```java
public IResolvable|java.util.List<DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs> getSynthesizeSpeechConfigsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs">DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs</a>>

---

##### `enableTextToSpeech`<sup>Required</sup> <a name="enableTextToSpeech" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.property.enableTextToSpeech"></a>

```java
public java.lang.Boolean|IResolvable getEnableTextToSpeech();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `outputAudioEncoding`<sup>Required</sup> <a name="outputAudioEncoding" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.property.outputAudioEncoding"></a>

```java
public java.lang.String getOutputAudioEncoding();
```

- *Type:* java.lang.String

---

##### `sampleRateHertz`<sup>Required</sup> <a name="sampleRateHertz" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.property.sampleRateHertz"></a>

```java
public java.lang.Number getSampleRateHertz();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsOutputReference.property.internalValue"></a>

```java
public DialogflowEnvironmentTextToSpeechSettings getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettings">DialogflowEnvironmentTextToSpeechSettings</a>

---


### DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList <a name="DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList.Initializer"></a>

```java
import io.cdktn.providers.google.dialogflow_environment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList;

new DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList.get"></a>

```java
public DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs">DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs">DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs</a>>

---


### DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference <a name="DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.dialogflow_environment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference;

new DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.putVoice">putVoice</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.resetEffectsProfileId">resetEffectsProfileId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.resetPitch">resetPitch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.resetSpeakingRate">resetSpeakingRate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.resetVoice">resetVoice</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.resetVolumeGainDb">resetVolumeGainDb</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putVoice` <a name="putVoice" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.putVoice"></a>

```java
public void putVoice(DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.putVoice.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice">DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice</a>

---

##### `resetEffectsProfileId` <a name="resetEffectsProfileId" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.resetEffectsProfileId"></a>

```java
public void resetEffectsProfileId()
```

##### `resetPitch` <a name="resetPitch" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.resetPitch"></a>

```java
public void resetPitch()
```

##### `resetSpeakingRate` <a name="resetSpeakingRate" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.resetSpeakingRate"></a>

```java
public void resetSpeakingRate()
```

##### `resetVoice` <a name="resetVoice" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.resetVoice"></a>

```java
public void resetVoice()
```

##### `resetVolumeGainDb` <a name="resetVolumeGainDb" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.resetVolumeGainDb"></a>

```java
public void resetVolumeGainDb()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.voice">voice</a></code> | <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference">DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.effectsProfileIdInput">effectsProfileIdInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.languageInput">languageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.pitchInput">pitchInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.speakingRateInput">speakingRateInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.voiceInput">voiceInput</a></code> | <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice">DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.volumeGainDbInput">volumeGainDbInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.effectsProfileId">effectsProfileId</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.language">language</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.pitch">pitch</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.speakingRate">speakingRate</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.volumeGainDb">volumeGainDb</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs">DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `voice`<sup>Required</sup> <a name="voice" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.voice"></a>

```java
public DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference getVoice();
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference">DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference</a>

---

##### `effectsProfileIdInput`<sup>Optional</sup> <a name="effectsProfileIdInput" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.effectsProfileIdInput"></a>

```java
public java.util.List<java.lang.String> getEffectsProfileIdInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `languageInput`<sup>Optional</sup> <a name="languageInput" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.languageInput"></a>

```java
public java.lang.String getLanguageInput();
```

- *Type:* java.lang.String

---

##### `pitchInput`<sup>Optional</sup> <a name="pitchInput" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.pitchInput"></a>

```java
public java.lang.Number getPitchInput();
```

- *Type:* java.lang.Number

---

##### `speakingRateInput`<sup>Optional</sup> <a name="speakingRateInput" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.speakingRateInput"></a>

```java
public java.lang.Number getSpeakingRateInput();
```

- *Type:* java.lang.Number

---

##### `voiceInput`<sup>Optional</sup> <a name="voiceInput" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.voiceInput"></a>

```java
public DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice getVoiceInput();
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice">DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice</a>

---

##### `volumeGainDbInput`<sup>Optional</sup> <a name="volumeGainDbInput" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.volumeGainDbInput"></a>

```java
public java.lang.Number getVolumeGainDbInput();
```

- *Type:* java.lang.Number

---

##### `effectsProfileId`<sup>Required</sup> <a name="effectsProfileId" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.effectsProfileId"></a>

```java
public java.util.List<java.lang.String> getEffectsProfileId();
```

- *Type:* java.util.List<java.lang.String>

---

##### `language`<sup>Required</sup> <a name="language" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.language"></a>

```java
public java.lang.String getLanguage();
```

- *Type:* java.lang.String

---

##### `pitch`<sup>Required</sup> <a name="pitch" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.pitch"></a>

```java
public java.lang.Number getPitch();
```

- *Type:* java.lang.Number

---

##### `speakingRate`<sup>Required</sup> <a name="speakingRate" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.speakingRate"></a>

```java
public java.lang.Number getSpeakingRate();
```

- *Type:* java.lang.Number

---

##### `volumeGainDb`<sup>Required</sup> <a name="volumeGainDb" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.volumeGainDb"></a>

```java
public java.lang.Number getVolumeGainDb();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsOutputReference.property.internalValue"></a>

```java
public IResolvable|DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs">DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigs</a>

---


### DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference <a name="DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.dialogflow_environment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference;

new DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.resetSsmlGender">resetSsmlGender</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetSsmlGender` <a name="resetSsmlGender" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.resetSsmlGender"></a>

```java
public void resetSsmlGender()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.property.ssmlGenderInput">ssmlGenderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.property.ssmlGender">ssmlGender</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice">DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `ssmlGenderInput`<sup>Optional</sup> <a name="ssmlGenderInput" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.property.ssmlGenderInput"></a>

```java
public java.lang.String getSsmlGenderInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `ssmlGender`<sup>Required</sup> <a name="ssmlGender" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.property.ssmlGender"></a>

```java
public java.lang.String getSsmlGender();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoiceOutputReference.property.internalValue"></a>

```java
public DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice">DialogflowEnvironmentTextToSpeechSettingsSynthesizeSpeechConfigsVoice</a>

---


### DialogflowEnvironmentTimeoutsOutputReference <a name="DialogflowEnvironmentTimeoutsOutputReference" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.dialogflow_environment.DialogflowEnvironmentTimeoutsOutputReference;

new DialogflowEnvironmentTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeouts">DialogflowEnvironmentTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|DialogflowEnvironmentTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.dialogflowEnvironment.DialogflowEnvironmentTimeouts">DialogflowEnvironmentTimeouts</a>

---



