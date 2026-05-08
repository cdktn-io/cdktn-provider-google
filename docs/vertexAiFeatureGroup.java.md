# `vertexAiFeatureGroup` Submodule <a name="`vertexAiFeatureGroup` Submodule" id="@cdktn/provider-google.vertexAiFeatureGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VertexAiFeatureGroup <a name="VertexAiFeatureGroup" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/vertex_ai_feature_group google_vertex_ai_feature_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_feature_group.VertexAiFeatureGroup;

VertexAiFeatureGroup.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .bigQuery(VertexAiFeatureGroupBigQuery)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .name(java.lang.String)
//  .project(java.lang.String)
//  .region(java.lang.String)
//  .timeouts(VertexAiFeatureGroupTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.Initializer.parameter.bigQuery">bigQuery</a></code> | <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQuery">VertexAiFeatureGroupBigQuery</a></code> | big_query block. |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | The description of the FeatureGroup. |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/vertex_ai_feature_group#id VertexAiFeatureGroup#id}. |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The labels with user-defined metadata to organize your FeatureGroup. |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The resource name of the Feature Group. |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/vertex_ai_feature_group#project VertexAiFeatureGroup#project}. |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | The region of feature group. eg us-central1. |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeouts">VertexAiFeatureGroupTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `bigQuery`<sup>Optional</sup> <a name="bigQuery" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.Initializer.parameter.bigQuery"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQuery">VertexAiFeatureGroupBigQuery</a>

big_query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/vertex_ai_feature_group#big_query VertexAiFeatureGroup#big_query}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.Initializer.parameter.description"></a>

- *Type:* java.lang.String

The description of the FeatureGroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/vertex_ai_feature_group#description VertexAiFeatureGroup#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/vertex_ai_feature_group#id VertexAiFeatureGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The labels with user-defined metadata to organize your FeatureGroup.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/vertex_ai_feature_group#labels VertexAiFeatureGroup#labels}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The resource name of the Feature Group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/vertex_ai_feature_group#name VertexAiFeatureGroup#name}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/vertex_ai_feature_group#project VertexAiFeatureGroup#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.Initializer.parameter.region"></a>

- *Type:* java.lang.String

The region of feature group. eg us-central1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/vertex_ai_feature_group#region VertexAiFeatureGroup#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeouts">VertexAiFeatureGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/vertex_ai_feature_group#timeouts VertexAiFeatureGroup#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.putBigQuery">putBigQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.resetBigQuery">resetBigQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putBigQuery` <a name="putBigQuery" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.putBigQuery"></a>

```java
public void putBigQuery(VertexAiFeatureGroupBigQuery value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.putBigQuery.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQuery">VertexAiFeatureGroupBigQuery</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.putTimeouts"></a>

```java
public void putTimeouts(VertexAiFeatureGroupTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeouts">VertexAiFeatureGroupTimeouts</a>

---

##### `resetBigQuery` <a name="resetBigQuery" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.resetBigQuery"></a>

```java
public void resetBigQuery()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.resetName"></a>

```java
public void resetName()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.resetProject"></a>

```java
public void resetProject()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a VertexAiFeatureGroup resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.isConstruct"></a>

```java
import io.cdktn.providers.google.vertex_ai_feature_group.VertexAiFeatureGroup;

VertexAiFeatureGroup.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.isTerraformElement"></a>

```java
import io.cdktn.providers.google.vertex_ai_feature_group.VertexAiFeatureGroup;

VertexAiFeatureGroup.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.isTerraformResource"></a>

```java
import io.cdktn.providers.google.vertex_ai_feature_group.VertexAiFeatureGroup;

VertexAiFeatureGroup.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.vertex_ai_feature_group.VertexAiFeatureGroup;

VertexAiFeatureGroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),VertexAiFeatureGroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a VertexAiFeatureGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the VertexAiFeatureGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing VertexAiFeatureGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/vertex_ai_feature_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the VertexAiFeatureGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.property.bigQuery">bigQuery</a></code> | <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryOutputReference">VertexAiFeatureGroupBigQueryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.property.effectiveLabels">effectiveLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.property.terraformLabels">terraformLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeoutsOutputReference">VertexAiFeatureGroupTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.property.bigQueryInput">bigQueryInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQuery">VertexAiFeatureGroupBigQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeouts">VertexAiFeatureGroupTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `bigQuery`<sup>Required</sup> <a name="bigQuery" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.property.bigQuery"></a>

```java
public VertexAiFeatureGroupBigQueryOutputReference getBigQuery();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryOutputReference">VertexAiFeatureGroupBigQueryOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.property.timeouts"></a>

```java
public VertexAiFeatureGroupTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeoutsOutputReference">VertexAiFeatureGroupTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `bigQueryInput`<sup>Optional</sup> <a name="bigQueryInput" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.property.bigQueryInput"></a>

```java
public VertexAiFeatureGroupBigQuery getBigQueryInput();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQuery">VertexAiFeatureGroupBigQuery</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.property.timeoutsInput"></a>

```java
public IResolvable|VertexAiFeatureGroupTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeouts">VertexAiFeatureGroupTimeouts</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroup.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### VertexAiFeatureGroupBigQuery <a name="VertexAiFeatureGroupBigQuery" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQuery"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQuery.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_feature_group.VertexAiFeatureGroupBigQuery;

VertexAiFeatureGroupBigQuery.builder()
    .bigQuerySource(VertexAiFeatureGroupBigQueryBigQuerySource)
//  .entityIdColumns(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQuery.property.bigQuerySource">bigQuerySource</a></code> | <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryBigQuerySource">VertexAiFeatureGroupBigQueryBigQuerySource</a></code> | big_query_source block. |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQuery.property.entityIdColumns">entityIdColumns</a></code> | <code>java.util.List<java.lang.String></code> | Columns to construct entityId / row keys. If not provided defaults to entityId. |

---

##### `bigQuerySource`<sup>Required</sup> <a name="bigQuerySource" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQuery.property.bigQuerySource"></a>

```java
public VertexAiFeatureGroupBigQueryBigQuerySource getBigQuerySource();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryBigQuerySource">VertexAiFeatureGroupBigQueryBigQuerySource</a>

big_query_source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/vertex_ai_feature_group#big_query_source VertexAiFeatureGroup#big_query_source}

---

##### `entityIdColumns`<sup>Optional</sup> <a name="entityIdColumns" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQuery.property.entityIdColumns"></a>

```java
public java.util.List<java.lang.String> getEntityIdColumns();
```

- *Type:* java.util.List<java.lang.String>

Columns to construct entityId / row keys. If not provided defaults to entityId.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/vertex_ai_feature_group#entity_id_columns VertexAiFeatureGroup#entity_id_columns}

---

### VertexAiFeatureGroupBigQueryBigQuerySource <a name="VertexAiFeatureGroupBigQueryBigQuerySource" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryBigQuerySource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryBigQuerySource.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_feature_group.VertexAiFeatureGroupBigQueryBigQuerySource;

VertexAiFeatureGroupBigQueryBigQuerySource.builder()
    .inputUri(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryBigQuerySource.property.inputUri">inputUri</a></code> | <code>java.lang.String</code> | BigQuery URI to a table, up to 2000 characters long. For example: 'bq://projectId.bqDatasetId.bqTableId.'. |

---

##### `inputUri`<sup>Required</sup> <a name="inputUri" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryBigQuerySource.property.inputUri"></a>

```java
public java.lang.String getInputUri();
```

- *Type:* java.lang.String

BigQuery URI to a table, up to 2000 characters long. For example: 'bq://projectId.bqDatasetId.bqTableId.'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/vertex_ai_feature_group#input_uri VertexAiFeatureGroup#input_uri}

---

### VertexAiFeatureGroupConfig <a name="VertexAiFeatureGroupConfig" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupConfig.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_feature_group.VertexAiFeatureGroupConfig;

VertexAiFeatureGroupConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .bigQuery(VertexAiFeatureGroupBigQuery)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .name(java.lang.String)
//  .project(java.lang.String)
//  .region(java.lang.String)
//  .timeouts(VertexAiFeatureGroupTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupConfig.property.bigQuery">bigQuery</a></code> | <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQuery">VertexAiFeatureGroupBigQuery</a></code> | big_query block. |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupConfig.property.description">description</a></code> | <code>java.lang.String</code> | The description of the FeatureGroup. |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/vertex_ai_feature_group#id VertexAiFeatureGroup#id}. |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The labels with user-defined metadata to organize your FeatureGroup. |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupConfig.property.name">name</a></code> | <code>java.lang.String</code> | The resource name of the Feature Group. |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/vertex_ai_feature_group#project VertexAiFeatureGroup#project}. |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupConfig.property.region">region</a></code> | <code>java.lang.String</code> | The region of feature group. eg us-central1. |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeouts">VertexAiFeatureGroupTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `bigQuery`<sup>Optional</sup> <a name="bigQuery" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupConfig.property.bigQuery"></a>

```java
public VertexAiFeatureGroupBigQuery getBigQuery();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQuery">VertexAiFeatureGroupBigQuery</a>

big_query block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/vertex_ai_feature_group#big_query VertexAiFeatureGroup#big_query}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The description of the FeatureGroup.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/vertex_ai_feature_group#description VertexAiFeatureGroup#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/vertex_ai_feature_group#id VertexAiFeatureGroup#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The labels with user-defined metadata to organize your FeatureGroup.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/vertex_ai_feature_group#labels VertexAiFeatureGroup#labels}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The resource name of the Feature Group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/vertex_ai_feature_group#name VertexAiFeatureGroup#name}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/vertex_ai_feature_group#project VertexAiFeatureGroup#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

The region of feature group. eg us-central1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/vertex_ai_feature_group#region VertexAiFeatureGroup#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupConfig.property.timeouts"></a>

```java
public VertexAiFeatureGroupTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeouts">VertexAiFeatureGroupTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/vertex_ai_feature_group#timeouts VertexAiFeatureGroup#timeouts}

---

### VertexAiFeatureGroupTimeouts <a name="VertexAiFeatureGroupTimeouts" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_feature_group.VertexAiFeatureGroupTimeouts;

VertexAiFeatureGroupTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/vertex_ai_feature_group#create VertexAiFeatureGroup#create}. |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/vertex_ai_feature_group#delete VertexAiFeatureGroup#delete}. |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/vertex_ai_feature_group#update VertexAiFeatureGroup#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/vertex_ai_feature_group#create VertexAiFeatureGroup#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/vertex_ai_feature_group#delete VertexAiFeatureGroup#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.31.0/docs/resources/vertex_ai_feature_group#update VertexAiFeatureGroup#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VertexAiFeatureGroupBigQueryBigQuerySourceOutputReference <a name="VertexAiFeatureGroupBigQueryBigQuerySourceOutputReference" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryBigQuerySourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryBigQuerySourceOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_feature_group.VertexAiFeatureGroupBigQueryBigQuerySourceOutputReference;

new VertexAiFeatureGroupBigQueryBigQuerySourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryBigQuerySourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryBigQuerySourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryBigQuerySourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryBigQuerySourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryBigQuerySourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryBigQuerySourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryBigQuerySourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryBigQuerySourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryBigQuerySourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryBigQuerySourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryBigQuerySourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryBigQuerySourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryBigQuerySourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryBigQuerySourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryBigQuerySourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryBigQuerySourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryBigQuerySourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryBigQuerySourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryBigQuerySourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryBigQuerySourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryBigQuerySourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryBigQuerySourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryBigQuerySourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryBigQuerySourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryBigQuerySourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryBigQuerySourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryBigQuerySourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryBigQuerySourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryBigQuerySourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryBigQuerySourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryBigQuerySourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryBigQuerySourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryBigQuerySourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryBigQuerySourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryBigQuerySourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryBigQuerySourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryBigQuerySourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryBigQuerySourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryBigQuerySourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryBigQuerySourceOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryBigQuerySourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryBigQuerySourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryBigQuerySourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryBigQuerySourceOutputReference.property.inputUriInput">inputUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryBigQuerySourceOutputReference.property.inputUri">inputUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryBigQuerySourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryBigQuerySource">VertexAiFeatureGroupBigQueryBigQuerySource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryBigQuerySourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryBigQuerySourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `inputUriInput`<sup>Optional</sup> <a name="inputUriInput" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryBigQuerySourceOutputReference.property.inputUriInput"></a>

```java
public java.lang.String getInputUriInput();
```

- *Type:* java.lang.String

---

##### `inputUri`<sup>Required</sup> <a name="inputUri" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryBigQuerySourceOutputReference.property.inputUri"></a>

```java
public java.lang.String getInputUri();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryBigQuerySourceOutputReference.property.internalValue"></a>

```java
public VertexAiFeatureGroupBigQueryBigQuerySource getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryBigQuerySource">VertexAiFeatureGroupBigQueryBigQuerySource</a>

---


### VertexAiFeatureGroupBigQueryOutputReference <a name="VertexAiFeatureGroupBigQueryOutputReference" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_feature_group.VertexAiFeatureGroupBigQueryOutputReference;

new VertexAiFeatureGroupBigQueryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryOutputReference.putBigQuerySource">putBigQuerySource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryOutputReference.resetEntityIdColumns">resetEntityIdColumns</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBigQuerySource` <a name="putBigQuerySource" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryOutputReference.putBigQuerySource"></a>

```java
public void putBigQuerySource(VertexAiFeatureGroupBigQueryBigQuerySource value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryOutputReference.putBigQuerySource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryBigQuerySource">VertexAiFeatureGroupBigQueryBigQuerySource</a>

---

##### `resetEntityIdColumns` <a name="resetEntityIdColumns" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryOutputReference.resetEntityIdColumns"></a>

```java
public void resetEntityIdColumns()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryOutputReference.property.bigQuerySource">bigQuerySource</a></code> | <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryBigQuerySourceOutputReference">VertexAiFeatureGroupBigQueryBigQuerySourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryOutputReference.property.bigQuerySourceInput">bigQuerySourceInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryBigQuerySource">VertexAiFeatureGroupBigQueryBigQuerySource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryOutputReference.property.entityIdColumnsInput">entityIdColumnsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryOutputReference.property.entityIdColumns">entityIdColumns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQuery">VertexAiFeatureGroupBigQuery</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bigQuerySource`<sup>Required</sup> <a name="bigQuerySource" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryOutputReference.property.bigQuerySource"></a>

```java
public VertexAiFeatureGroupBigQueryBigQuerySourceOutputReference getBigQuerySource();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryBigQuerySourceOutputReference">VertexAiFeatureGroupBigQueryBigQuerySourceOutputReference</a>

---

##### `bigQuerySourceInput`<sup>Optional</sup> <a name="bigQuerySourceInput" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryOutputReference.property.bigQuerySourceInput"></a>

```java
public VertexAiFeatureGroupBigQueryBigQuerySource getBigQuerySourceInput();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryBigQuerySource">VertexAiFeatureGroupBigQueryBigQuerySource</a>

---

##### `entityIdColumnsInput`<sup>Optional</sup> <a name="entityIdColumnsInput" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryOutputReference.property.entityIdColumnsInput"></a>

```java
public java.util.List<java.lang.String> getEntityIdColumnsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `entityIdColumns`<sup>Required</sup> <a name="entityIdColumns" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryOutputReference.property.entityIdColumns"></a>

```java
public java.util.List<java.lang.String> getEntityIdColumns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQueryOutputReference.property.internalValue"></a>

```java
public VertexAiFeatureGroupBigQuery getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupBigQuery">VertexAiFeatureGroupBigQuery</a>

---


### VertexAiFeatureGroupTimeoutsOutputReference <a name="VertexAiFeatureGroupTimeoutsOutputReference" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_feature_group.VertexAiFeatureGroupTimeoutsOutputReference;

new VertexAiFeatureGroupTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeouts">VertexAiFeatureGroupTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|VertexAiFeatureGroupTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.vertexAiFeatureGroup.VertexAiFeatureGroupTimeouts">VertexAiFeatureGroupTimeouts</a>

---



