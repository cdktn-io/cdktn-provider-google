# `geminiDataAnalyticsDataAgentIamBinding` Submodule <a name="`geminiDataAnalyticsDataAgentIamBinding` Submodule" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GeminiDataAnalyticsDataAgentIamBinding <a name="GeminiDataAnalyticsDataAgentIamBinding" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent_iam_binding google_gemini_data_analytics_data_agent_iam_binding}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.Initializer"></a>

```java
import io.cdktn.providers.google.gemini_data_analytics_data_agent_iam_binding.GeminiDataAnalyticsDataAgentIamBinding;

GeminiDataAnalyticsDataAgentIamBinding.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .dataAgentId(java.lang.String)
    .members(java.util.List<java.lang.String>)
    .role(java.lang.String)
//  .condition(GeminiDataAnalyticsDataAgentIamBindingCondition)
//  .id(java.lang.String)
//  .location(java.lang.String)
//  .project(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.Initializer.parameter.dataAgentId">dataAgentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent_iam_binding#data_agent_id GeminiDataAnalyticsDataAgentIamBinding#data_agent_id}. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.Initializer.parameter.members">members</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent_iam_binding#members GeminiDataAnalyticsDataAgentIamBinding#members}. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.Initializer.parameter.role">role</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent_iam_binding#role GeminiDataAnalyticsDataAgentIamBinding#role}. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.Initializer.parameter.condition">condition</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBindingCondition">GeminiDataAnalyticsDataAgentIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent_iam_binding#id GeminiDataAnalyticsDataAgentIamBinding#id}. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent_iam_binding#location GeminiDataAnalyticsDataAgentIamBinding#location}. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent_iam_binding#project GeminiDataAnalyticsDataAgentIamBinding#project}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `dataAgentId`<sup>Required</sup> <a name="dataAgentId" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.Initializer.parameter.dataAgentId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent_iam_binding#data_agent_id GeminiDataAnalyticsDataAgentIamBinding#data_agent_id}.

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.Initializer.parameter.members"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent_iam_binding#members GeminiDataAnalyticsDataAgentIamBinding#members}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.Initializer.parameter.role"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent_iam_binding#role GeminiDataAnalyticsDataAgentIamBinding#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.Initializer.parameter.condition"></a>

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBindingCondition">GeminiDataAnalyticsDataAgentIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent_iam_binding#condition GeminiDataAnalyticsDataAgentIamBinding#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent_iam_binding#id GeminiDataAnalyticsDataAgentIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent_iam_binding#location GeminiDataAnalyticsDataAgentIamBinding#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent_iam_binding#project GeminiDataAnalyticsDataAgentIamBinding#project}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.resetCondition">resetCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCondition` <a name="putCondition" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.putCondition"></a>

```java
public void putCondition(GeminiDataAnalyticsDataAgentIamBindingCondition value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBindingCondition">GeminiDataAnalyticsDataAgentIamBindingCondition</a>

---

##### `resetCondition` <a name="resetCondition" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.resetCondition"></a>

```java
public void resetCondition()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.resetId"></a>

```java
public void resetId()
```

##### `resetLocation` <a name="resetLocation" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.resetLocation"></a>

```java
public void resetLocation()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.resetProject"></a>

```java
public void resetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GeminiDataAnalyticsDataAgentIamBinding resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.isConstruct"></a>

```java
import io.cdktn.providers.google.gemini_data_analytics_data_agent_iam_binding.GeminiDataAnalyticsDataAgentIamBinding;

GeminiDataAnalyticsDataAgentIamBinding.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.isTerraformElement"></a>

```java
import io.cdktn.providers.google.gemini_data_analytics_data_agent_iam_binding.GeminiDataAnalyticsDataAgentIamBinding;

GeminiDataAnalyticsDataAgentIamBinding.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.isTerraformResource"></a>

```java
import io.cdktn.providers.google.gemini_data_analytics_data_agent_iam_binding.GeminiDataAnalyticsDataAgentIamBinding;

GeminiDataAnalyticsDataAgentIamBinding.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.gemini_data_analytics_data_agent_iam_binding.GeminiDataAnalyticsDataAgentIamBinding;

GeminiDataAnalyticsDataAgentIamBinding.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GeminiDataAnalyticsDataAgentIamBinding.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GeminiDataAnalyticsDataAgentIamBinding resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GeminiDataAnalyticsDataAgentIamBinding to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GeminiDataAnalyticsDataAgentIamBinding that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent_iam_binding#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GeminiDataAnalyticsDataAgentIamBinding to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.property.condition">condition</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBindingConditionOutputReference">GeminiDataAnalyticsDataAgentIamBindingConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.property.conditionInput">conditionInput</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBindingCondition">GeminiDataAnalyticsDataAgentIamBindingCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.property.dataAgentIdInput">dataAgentIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.property.membersInput">membersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.property.roleInput">roleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.property.dataAgentId">dataAgentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.property.members">members</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.property.role">role</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.property.condition"></a>

```java
public GeminiDataAnalyticsDataAgentIamBindingConditionOutputReference getCondition();
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBindingConditionOutputReference">GeminiDataAnalyticsDataAgentIamBindingConditionOutputReference</a>

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.property.conditionInput"></a>

```java
public GeminiDataAnalyticsDataAgentIamBindingCondition getConditionInput();
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBindingCondition">GeminiDataAnalyticsDataAgentIamBindingCondition</a>

---

##### `dataAgentIdInput`<sup>Optional</sup> <a name="dataAgentIdInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.property.dataAgentIdInput"></a>

```java
public java.lang.String getDataAgentIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `membersInput`<sup>Optional</sup> <a name="membersInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.property.membersInput"></a>

```java
public java.util.List<java.lang.String> getMembersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.property.roleInput"></a>

```java
public java.lang.String getRoleInput();
```

- *Type:* java.lang.String

---

##### `dataAgentId`<sup>Required</sup> <a name="dataAgentId" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.property.dataAgentId"></a>

```java
public java.lang.String getDataAgentId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.property.members"></a>

```java
public java.util.List<java.lang.String> getMembers();
```

- *Type:* java.util.List<java.lang.String>

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBinding.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GeminiDataAnalyticsDataAgentIamBindingCondition <a name="GeminiDataAnalyticsDataAgentIamBindingCondition" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBindingCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBindingCondition.Initializer"></a>

```java
import io.cdktn.providers.google.gemini_data_analytics_data_agent_iam_binding.GeminiDataAnalyticsDataAgentIamBindingCondition;

GeminiDataAnalyticsDataAgentIamBindingCondition.builder()
    .expression(java.lang.String)
    .title(java.lang.String)
//  .description(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBindingCondition.property.expression">expression</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent_iam_binding#expression GeminiDataAnalyticsDataAgentIamBinding#expression}. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBindingCondition.property.title">title</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent_iam_binding#title GeminiDataAnalyticsDataAgentIamBinding#title}. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBindingCondition.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent_iam_binding#description GeminiDataAnalyticsDataAgentIamBinding#description}. |

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBindingCondition.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent_iam_binding#expression GeminiDataAnalyticsDataAgentIamBinding#expression}.

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBindingCondition.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent_iam_binding#title GeminiDataAnalyticsDataAgentIamBinding#title}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBindingCondition.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent_iam_binding#description GeminiDataAnalyticsDataAgentIamBinding#description}.

---

### GeminiDataAnalyticsDataAgentIamBindingConfig <a name="GeminiDataAnalyticsDataAgentIamBindingConfig" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBindingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBindingConfig.Initializer"></a>

```java
import io.cdktn.providers.google.gemini_data_analytics_data_agent_iam_binding.GeminiDataAnalyticsDataAgentIamBindingConfig;

GeminiDataAnalyticsDataAgentIamBindingConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .dataAgentId(java.lang.String)
    .members(java.util.List<java.lang.String>)
    .role(java.lang.String)
//  .condition(GeminiDataAnalyticsDataAgentIamBindingCondition)
//  .id(java.lang.String)
//  .location(java.lang.String)
//  .project(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBindingConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBindingConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBindingConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBindingConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBindingConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBindingConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBindingConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBindingConfig.property.dataAgentId">dataAgentId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent_iam_binding#data_agent_id GeminiDataAnalyticsDataAgentIamBinding#data_agent_id}. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBindingConfig.property.members">members</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent_iam_binding#members GeminiDataAnalyticsDataAgentIamBinding#members}. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBindingConfig.property.role">role</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent_iam_binding#role GeminiDataAnalyticsDataAgentIamBinding#role}. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBindingConfig.property.condition">condition</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBindingCondition">GeminiDataAnalyticsDataAgentIamBindingCondition</a></code> | condition block. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBindingConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent_iam_binding#id GeminiDataAnalyticsDataAgentIamBinding#id}. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBindingConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent_iam_binding#location GeminiDataAnalyticsDataAgentIamBinding#location}. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBindingConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent_iam_binding#project GeminiDataAnalyticsDataAgentIamBinding#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBindingConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBindingConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBindingConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBindingConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBindingConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBindingConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBindingConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `dataAgentId`<sup>Required</sup> <a name="dataAgentId" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBindingConfig.property.dataAgentId"></a>

```java
public java.lang.String getDataAgentId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent_iam_binding#data_agent_id GeminiDataAnalyticsDataAgentIamBinding#data_agent_id}.

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBindingConfig.property.members"></a>

```java
public java.util.List<java.lang.String> getMembers();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent_iam_binding#members GeminiDataAnalyticsDataAgentIamBinding#members}.

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBindingConfig.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent_iam_binding#role GeminiDataAnalyticsDataAgentIamBinding#role}.

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBindingConfig.property.condition"></a>

```java
public GeminiDataAnalyticsDataAgentIamBindingCondition getCondition();
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBindingCondition">GeminiDataAnalyticsDataAgentIamBindingCondition</a>

condition block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent_iam_binding#condition GeminiDataAnalyticsDataAgentIamBinding#condition}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBindingConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent_iam_binding#id GeminiDataAnalyticsDataAgentIamBinding#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBindingConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent_iam_binding#location GeminiDataAnalyticsDataAgentIamBinding#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBindingConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/gemini_data_analytics_data_agent_iam_binding#project GeminiDataAnalyticsDataAgentIamBinding#project}.

---

## Classes <a name="Classes" id="Classes"></a>

### GeminiDataAnalyticsDataAgentIamBindingConditionOutputReference <a name="GeminiDataAnalyticsDataAgentIamBindingConditionOutputReference" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBindingConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.gemini_data_analytics_data_agent_iam_binding.GeminiDataAnalyticsDataAgentIamBindingConditionOutputReference;

new GeminiDataAnalyticsDataAgentIamBindingConditionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.resetDescription"></a>

```java
public void resetDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.property.expressionInput">expressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.property.titleInput">titleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.property.expression">expression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.property.title">title</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBindingCondition">GeminiDataAnalyticsDataAgentIamBindingCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.property.expressionInput"></a>

```java
public java.lang.String getExpressionInput();
```

- *Type:* java.lang.String

---

##### `titleInput`<sup>Optional</sup> <a name="titleInput" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.property.titleInput"></a>

```java
public java.lang.String getTitleInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

---

##### `title`<sup>Required</sup> <a name="title" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.property.title"></a>

```java
public java.lang.String getTitle();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBindingConditionOutputReference.property.internalValue"></a>

```java
public GeminiDataAnalyticsDataAgentIamBindingCondition getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.geminiDataAnalyticsDataAgentIamBinding.GeminiDataAnalyticsDataAgentIamBindingCondition">GeminiDataAnalyticsDataAgentIamBindingCondition</a>

---



