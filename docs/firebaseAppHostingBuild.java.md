# `firebaseAppHostingBuild` Submodule <a name="`firebaseAppHostingBuild` Submodule" id="@cdktn/provider-google.firebaseAppHostingBuild"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FirebaseAppHostingBuild <a name="FirebaseAppHostingBuild" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/firebase_app_hosting_build google_firebase_app_hosting_build}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.Initializer"></a>

```java
import io.cdktn.providers.google.firebase_app_hosting_build.FirebaseAppHostingBuild;

FirebaseAppHostingBuild.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .backend(java.lang.String)
    .buildId(java.lang.String)
    .location(java.lang.String)
    .source(FirebaseAppHostingBuildSource)
//  .annotations(java.util.Map<java.lang.String, java.lang.String>)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .timeouts(FirebaseAppHostingBuildTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.Initializer.parameter.backend">backend</a></code> | <code>java.lang.String</code> | The ID of the Backend that this Build applies to. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.Initializer.parameter.buildId">buildId</a></code> | <code>java.lang.String</code> | The user-specified ID of the build being created. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The location of the Backend that this Build applies to. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.Initializer.parameter.source">source</a></code> | <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSource">FirebaseAppHostingBuildSource</a></code> | source block. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.Initializer.parameter.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Unstructured key value map that may be set by external tools to store and arbitrary metadata. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Human-readable name. 63 character limit. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/firebase_app_hosting_build#id FirebaseAppHostingBuild#id}. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Unstructured key value map that can be used to organize and categorize objects. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/firebase_app_hosting_build#project FirebaseAppHostingBuild#project}. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeouts">FirebaseAppHostingBuildTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.Initializer.parameter.backend"></a>

- *Type:* java.lang.String

The ID of the Backend that this Build applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/firebase_app_hosting_build#backend FirebaseAppHostingBuild#backend}

---

##### `buildId`<sup>Required</sup> <a name="buildId" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.Initializer.parameter.buildId"></a>

- *Type:* java.lang.String

The user-specified ID of the build being created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/firebase_app_hosting_build#build_id FirebaseAppHostingBuild#build_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The location of the Backend that this Build applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/firebase_app_hosting_build#location FirebaseAppHostingBuild#location}

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.Initializer.parameter.source"></a>

- *Type:* <a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSource">FirebaseAppHostingBuildSource</a>

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/firebase_app_hosting_build#source FirebaseAppHostingBuild#source}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.Initializer.parameter.annotations"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Unstructured key value map that may be set by external tools to store and arbitrary metadata.

They are not queryable and should be
preserved when modifying objects.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/firebase_app_hosting_build#annotations FirebaseAppHostingBuild#annotations}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Human-readable name. 63 character limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/firebase_app_hosting_build#display_name FirebaseAppHostingBuild#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/firebase_app_hosting_build#id FirebaseAppHostingBuild#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Unstructured key value map that can be used to organize and categorize objects.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/firebase_app_hosting_build#labels FirebaseAppHostingBuild#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/firebase_app_hosting_build#project FirebaseAppHostingBuild#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeouts">FirebaseAppHostingBuildTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/firebase_app_hosting_build#timeouts FirebaseAppHostingBuild#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.putSource">putSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.resetAnnotations">resetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSource` <a name="putSource" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.putSource"></a>

```java
public void putSource(FirebaseAppHostingBuildSource value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.putSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSource">FirebaseAppHostingBuildSource</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.putTimeouts"></a>

```java
public void putTimeouts(FirebaseAppHostingBuildTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeouts">FirebaseAppHostingBuildTimeouts</a>

---

##### `resetAnnotations` <a name="resetAnnotations" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.resetAnnotations"></a>

```java
public void resetAnnotations()
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a FirebaseAppHostingBuild resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.isConstruct"></a>

```java
import io.cdktn.providers.google.firebase_app_hosting_build.FirebaseAppHostingBuild;

FirebaseAppHostingBuild.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.isTerraformElement"></a>

```java
import io.cdktn.providers.google.firebase_app_hosting_build.FirebaseAppHostingBuild;

FirebaseAppHostingBuild.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.isTerraformResource"></a>

```java
import io.cdktn.providers.google.firebase_app_hosting_build.FirebaseAppHostingBuild;

FirebaseAppHostingBuild.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.firebase_app_hosting_build.FirebaseAppHostingBuild;

FirebaseAppHostingBuild.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),FirebaseAppHostingBuild.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a FirebaseAppHostingBuild resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the FirebaseAppHostingBuild to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing FirebaseAppHostingBuild that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/firebase_app_hosting_build#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the FirebaseAppHostingBuild to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.buildLogsUri">buildLogsUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.effectiveAnnotations">effectiveAnnotations</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.effectiveLabels">effectiveLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.environment">environment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.error">error</a></code> | <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorList">FirebaseAppHostingBuildErrorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.errorSource">errorSource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.image">image</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.source">source</a></code> | <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference">FirebaseAppHostingBuildSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.terraformLabels">terraformLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference">FirebaseAppHostingBuildTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.uid">uid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.annotationsInput">annotationsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.backendInput">backendInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.buildIdInput">buildIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.sourceInput">sourceInput</a></code> | <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSource">FirebaseAppHostingBuildSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeouts">FirebaseAppHostingBuildTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.backend">backend</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.buildId">buildId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `buildLogsUri`<sup>Required</sup> <a name="buildLogsUri" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.buildLogsUri"></a>

```java
public java.lang.String getBuildLogsUri();
```

- *Type:* java.lang.String

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `effectiveAnnotations`<sup>Required</sup> <a name="effectiveAnnotations" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.effectiveAnnotations"></a>

```java
public StringMap getEffectiveAnnotations();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.environment"></a>

```java
public java.lang.String getEnvironment();
```

- *Type:* java.lang.String

---

##### `error`<sup>Required</sup> <a name="error" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.error"></a>

```java
public FirebaseAppHostingBuildErrorList getError();
```

- *Type:* <a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorList">FirebaseAppHostingBuildErrorList</a>

---

##### `errorSource`<sup>Required</sup> <a name="errorSource" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.errorSource"></a>

```java
public java.lang.String getErrorSource();
```

- *Type:* java.lang.String

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.image"></a>

```java
public java.lang.String getImage();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.source"></a>

```java
public FirebaseAppHostingBuildSourceOutputReference getSource();
```

- *Type:* <a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference">FirebaseAppHostingBuildSourceOutputReference</a>

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.timeouts"></a>

```java
public FirebaseAppHostingBuildTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference">FirebaseAppHostingBuildTimeoutsOutputReference</a>

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.uid"></a>

```java
public java.lang.String getUid();
```

- *Type:* java.lang.String

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `annotationsInput`<sup>Optional</sup> <a name="annotationsInput" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.annotationsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotationsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `backendInput`<sup>Optional</sup> <a name="backendInput" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.backendInput"></a>

```java
public java.lang.String getBackendInput();
```

- *Type:* java.lang.String

---

##### `buildIdInput`<sup>Optional</sup> <a name="buildIdInput" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.buildIdInput"></a>

```java
public java.lang.String getBuildIdInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.sourceInput"></a>

```java
public FirebaseAppHostingBuildSource getSourceInput();
```

- *Type:* <a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSource">FirebaseAppHostingBuildSource</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.timeoutsInput"></a>

```java
public IResolvable|FirebaseAppHostingBuildTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeouts">FirebaseAppHostingBuildTimeouts</a>

---

##### `annotations`<sup>Required</sup> <a name="annotations" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.annotations"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotations();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.backend"></a>

```java
public java.lang.String getBackend();
```

- *Type:* java.lang.String

---

##### `buildId`<sup>Required</sup> <a name="buildId" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.buildId"></a>

```java
public java.lang.String getBuildId();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuild.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### FirebaseAppHostingBuildConfig <a name="FirebaseAppHostingBuildConfig" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildConfig.Initializer"></a>

```java
import io.cdktn.providers.google.firebase_app_hosting_build.FirebaseAppHostingBuildConfig;

FirebaseAppHostingBuildConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .backend(java.lang.String)
    .buildId(java.lang.String)
    .location(java.lang.String)
    .source(FirebaseAppHostingBuildSource)
//  .annotations(java.util.Map<java.lang.String, java.lang.String>)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .timeouts(FirebaseAppHostingBuildTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildConfig.property.backend">backend</a></code> | <code>java.lang.String</code> | The ID of the Backend that this Build applies to. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildConfig.property.buildId">buildId</a></code> | <code>java.lang.String</code> | The user-specified ID of the build being created. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildConfig.property.location">location</a></code> | <code>java.lang.String</code> | The location of the Backend that this Build applies to. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildConfig.property.source">source</a></code> | <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSource">FirebaseAppHostingBuildSource</a></code> | source block. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildConfig.property.annotations">annotations</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Unstructured key value map that may be set by external tools to store and arbitrary metadata. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Human-readable name. 63 character limit. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/firebase_app_hosting_build#id FirebaseAppHostingBuild#id}. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Unstructured key value map that can be used to organize and categorize objects. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/firebase_app_hosting_build#project FirebaseAppHostingBuild#project}. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeouts">FirebaseAppHostingBuildTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `backend`<sup>Required</sup> <a name="backend" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildConfig.property.backend"></a>

```java
public java.lang.String getBackend();
```

- *Type:* java.lang.String

The ID of the Backend that this Build applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/firebase_app_hosting_build#backend FirebaseAppHostingBuild#backend}

---

##### `buildId`<sup>Required</sup> <a name="buildId" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildConfig.property.buildId"></a>

```java
public java.lang.String getBuildId();
```

- *Type:* java.lang.String

The user-specified ID of the build being created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/firebase_app_hosting_build#build_id FirebaseAppHostingBuild#build_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The location of the Backend that this Build applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/firebase_app_hosting_build#location FirebaseAppHostingBuild#location}

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildConfig.property.source"></a>

```java
public FirebaseAppHostingBuildSource getSource();
```

- *Type:* <a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSource">FirebaseAppHostingBuildSource</a>

source block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/firebase_app_hosting_build#source FirebaseAppHostingBuild#source}

---

##### `annotations`<sup>Optional</sup> <a name="annotations" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildConfig.property.annotations"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAnnotations();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Unstructured key value map that may be set by external tools to store and arbitrary metadata.

They are not queryable and should be
preserved when modifying objects.

**Note**: This field is non-authoritative, and will only manage the annotations present in your configuration.
Please refer to the field 'effective_annotations' for all of the annotations present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/firebase_app_hosting_build#annotations FirebaseAppHostingBuild#annotations}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Human-readable name. 63 character limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/firebase_app_hosting_build#display_name FirebaseAppHostingBuild#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/firebase_app_hosting_build#id FirebaseAppHostingBuild#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Unstructured key value map that can be used to organize and categorize objects.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/firebase_app_hosting_build#labels FirebaseAppHostingBuild#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/firebase_app_hosting_build#project FirebaseAppHostingBuild#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildConfig.property.timeouts"></a>

```java
public FirebaseAppHostingBuildTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeouts">FirebaseAppHostingBuildTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/firebase_app_hosting_build#timeouts FirebaseAppHostingBuild#timeouts}

---

### FirebaseAppHostingBuildError <a name="FirebaseAppHostingBuildError" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildError"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildError.Initializer"></a>

```java
import io.cdktn.providers.google.firebase_app_hosting_build.FirebaseAppHostingBuildError;

FirebaseAppHostingBuildError.builder()
    .build();
```


### FirebaseAppHostingBuildSource <a name="FirebaseAppHostingBuildSource" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSource.Initializer"></a>

```java
import io.cdktn.providers.google.firebase_app_hosting_build.FirebaseAppHostingBuildSource;

FirebaseAppHostingBuildSource.builder()
//  .codebase(FirebaseAppHostingBuildSourceCodebase)
//  .container(FirebaseAppHostingBuildSourceContainer)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSource.property.codebase">codebase</a></code> | <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebase">FirebaseAppHostingBuildSourceCodebase</a></code> | codebase block. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSource.property.container">container</a></code> | <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainer">FirebaseAppHostingBuildSourceContainer</a></code> | container block. |

---

##### `codebase`<sup>Optional</sup> <a name="codebase" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSource.property.codebase"></a>

```java
public FirebaseAppHostingBuildSourceCodebase getCodebase();
```

- *Type:* <a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebase">FirebaseAppHostingBuildSourceCodebase</a>

codebase block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/firebase_app_hosting_build#codebase FirebaseAppHostingBuild#codebase}

---

##### `container`<sup>Optional</sup> <a name="container" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSource.property.container"></a>

```java
public FirebaseAppHostingBuildSourceContainer getContainer();
```

- *Type:* <a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainer">FirebaseAppHostingBuildSourceContainer</a>

container block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/firebase_app_hosting_build#container FirebaseAppHostingBuild#container}

---

### FirebaseAppHostingBuildSourceCodebase <a name="FirebaseAppHostingBuildSourceCodebase" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebase"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebase.Initializer"></a>

```java
import io.cdktn.providers.google.firebase_app_hosting_build.FirebaseAppHostingBuildSourceCodebase;

FirebaseAppHostingBuildSourceCodebase.builder()
//  .branch(java.lang.String)
//  .commit(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebase.property.branch">branch</a></code> | <code>java.lang.String</code> | The branch in the codebase to build from, using the latest commit. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebase.property.commit">commit</a></code> | <code>java.lang.String</code> | The commit in the codebase to build from. |

---

##### `branch`<sup>Optional</sup> <a name="branch" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebase.property.branch"></a>

```java
public java.lang.String getBranch();
```

- *Type:* java.lang.String

The branch in the codebase to build from, using the latest commit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/firebase_app_hosting_build#branch FirebaseAppHostingBuild#branch}

---

##### `commit`<sup>Optional</sup> <a name="commit" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebase.property.commit"></a>

```java
public java.lang.String getCommit();
```

- *Type:* java.lang.String

The commit in the codebase to build from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/firebase_app_hosting_build#commit FirebaseAppHostingBuild#commit}

---

### FirebaseAppHostingBuildSourceCodebaseAuthor <a name="FirebaseAppHostingBuildSourceCodebaseAuthor" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthor"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthor.Initializer"></a>

```java
import io.cdktn.providers.google.firebase_app_hosting_build.FirebaseAppHostingBuildSourceCodebaseAuthor;

FirebaseAppHostingBuildSourceCodebaseAuthor.builder()
    .build();
```


### FirebaseAppHostingBuildSourceContainer <a name="FirebaseAppHostingBuildSourceContainer" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainer.Initializer"></a>

```java
import io.cdktn.providers.google.firebase_app_hosting_build.FirebaseAppHostingBuildSourceContainer;

FirebaseAppHostingBuildSourceContainer.builder()
    .image(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainer.property.image">image</a></code> | <code>java.lang.String</code> | A URI representing a container for the backend to use. |

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainer.property.image"></a>

```java
public java.lang.String getImage();
```

- *Type:* java.lang.String

A URI representing a container for the backend to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/firebase_app_hosting_build#image FirebaseAppHostingBuild#image}

---

### FirebaseAppHostingBuildTimeouts <a name="FirebaseAppHostingBuildTimeouts" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google.firebase_app_hosting_build.FirebaseAppHostingBuildTimeouts;

FirebaseAppHostingBuildTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/firebase_app_hosting_build#create FirebaseAppHostingBuild#create}. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/firebase_app_hosting_build#delete FirebaseAppHostingBuild#delete}. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/firebase_app_hosting_build#update FirebaseAppHostingBuild#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/firebase_app_hosting_build#create FirebaseAppHostingBuild#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/firebase_app_hosting_build#delete FirebaseAppHostingBuild#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/resources/firebase_app_hosting_build#update FirebaseAppHostingBuild#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### FirebaseAppHostingBuildErrorList <a name="FirebaseAppHostingBuildErrorList" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorList.Initializer"></a>

```java
import io.cdktn.providers.google.firebase_app_hosting_build.FirebaseAppHostingBuildErrorList;

new FirebaseAppHostingBuildErrorList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorList.get"></a>

```java
public FirebaseAppHostingBuildErrorOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### FirebaseAppHostingBuildErrorOutputReference <a name="FirebaseAppHostingBuildErrorOutputReference" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.firebase_app_hosting_build.FirebaseAppHostingBuildErrorOutputReference;

new FirebaseAppHostingBuildErrorOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.property.code">code</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.property.details">details</a></code> | <code>io.cdktn.cdktn.StringMapList</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.property.message">message</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildError">FirebaseAppHostingBuildError</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.property.code"></a>

```java
public java.lang.Number getCode();
```

- *Type:* java.lang.Number

---

##### `details`<sup>Required</sup> <a name="details" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.property.details"></a>

```java
public StringMapList getDetails();
```

- *Type:* io.cdktn.cdktn.StringMapList

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildErrorOutputReference.property.internalValue"></a>

```java
public FirebaseAppHostingBuildError getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildError">FirebaseAppHostingBuildError</a>

---


### FirebaseAppHostingBuildSourceCodebaseAuthorList <a name="FirebaseAppHostingBuildSourceCodebaseAuthorList" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorList.Initializer"></a>

```java
import io.cdktn.providers.google.firebase_app_hosting_build.FirebaseAppHostingBuildSourceCodebaseAuthorList;

new FirebaseAppHostingBuildSourceCodebaseAuthorList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorList.get"></a>

```java
public FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference <a name="FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.firebase_app_hosting_build.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference;

new FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.property.email">email</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.property.imageUri">imageUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthor">FirebaseAppHostingBuildSourceCodebaseAuthor</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

---

##### `imageUri`<sup>Required</sup> <a name="imageUri" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.property.imageUri"></a>

```java
public java.lang.String getImageUri();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorOutputReference.property.internalValue"></a>

```java
public FirebaseAppHostingBuildSourceCodebaseAuthor getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthor">FirebaseAppHostingBuildSourceCodebaseAuthor</a>

---


### FirebaseAppHostingBuildSourceCodebaseOutputReference <a name="FirebaseAppHostingBuildSourceCodebaseOutputReference" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.firebase_app_hosting_build.FirebaseAppHostingBuildSourceCodebaseOutputReference;

new FirebaseAppHostingBuildSourceCodebaseOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.resetBranch">resetBranch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.resetCommit">resetCommit</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBranch` <a name="resetBranch" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.resetBranch"></a>

```java
public void resetBranch()
```

##### `resetCommit` <a name="resetCommit" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.resetCommit"></a>

```java
public void resetCommit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.property.author">author</a></code> | <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorList">FirebaseAppHostingBuildSourceCodebaseAuthorList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.property.commitMessage">commitMessage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.property.commitTime">commitTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.property.hash">hash</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.property.uri">uri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.property.branchInput">branchInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.property.commitInput">commitInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.property.branch">branch</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.property.commit">commit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebase">FirebaseAppHostingBuildSourceCodebase</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `author`<sup>Required</sup> <a name="author" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.property.author"></a>

```java
public FirebaseAppHostingBuildSourceCodebaseAuthorList getAuthor();
```

- *Type:* <a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseAuthorList">FirebaseAppHostingBuildSourceCodebaseAuthorList</a>

---

##### `commitMessage`<sup>Required</sup> <a name="commitMessage" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.property.commitMessage"></a>

```java
public java.lang.String getCommitMessage();
```

- *Type:* java.lang.String

---

##### `commitTime`<sup>Required</sup> <a name="commitTime" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.property.commitTime"></a>

```java
public java.lang.String getCommitTime();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `hash`<sup>Required</sup> <a name="hash" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.property.hash"></a>

```java
public java.lang.String getHash();
```

- *Type:* java.lang.String

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.property.uri"></a>

```java
public java.lang.String getUri();
```

- *Type:* java.lang.String

---

##### `branchInput`<sup>Optional</sup> <a name="branchInput" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.property.branchInput"></a>

```java
public java.lang.String getBranchInput();
```

- *Type:* java.lang.String

---

##### `commitInput`<sup>Optional</sup> <a name="commitInput" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.property.commitInput"></a>

```java
public java.lang.String getCommitInput();
```

- *Type:* java.lang.String

---

##### `branch`<sup>Required</sup> <a name="branch" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.property.branch"></a>

```java
public java.lang.String getBranch();
```

- *Type:* java.lang.String

---

##### `commit`<sup>Required</sup> <a name="commit" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.property.commit"></a>

```java
public java.lang.String getCommit();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference.property.internalValue"></a>

```java
public FirebaseAppHostingBuildSourceCodebase getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebase">FirebaseAppHostingBuildSourceCodebase</a>

---


### FirebaseAppHostingBuildSourceContainerOutputReference <a name="FirebaseAppHostingBuildSourceContainerOutputReference" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.firebase_app_hosting_build.FirebaseAppHostingBuildSourceContainerOutputReference;

new FirebaseAppHostingBuildSourceContainerOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.property.imageInput">imageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.property.image">image</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainer">FirebaseAppHostingBuildSourceContainer</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `imageInput`<sup>Optional</sup> <a name="imageInput" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.property.imageInput"></a>

```java
public java.lang.String getImageInput();
```

- *Type:* java.lang.String

---

##### `image`<sup>Required</sup> <a name="image" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.property.image"></a>

```java
public java.lang.String getImage();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference.property.internalValue"></a>

```java
public FirebaseAppHostingBuildSourceContainer getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainer">FirebaseAppHostingBuildSourceContainer</a>

---


### FirebaseAppHostingBuildSourceOutputReference <a name="FirebaseAppHostingBuildSourceOutputReference" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.firebase_app_hosting_build.FirebaseAppHostingBuildSourceOutputReference;

new FirebaseAppHostingBuildSourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.putCodebase">putCodebase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.putContainer">putContainer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.resetCodebase">resetCodebase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.resetContainer">resetContainer</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCodebase` <a name="putCodebase" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.putCodebase"></a>

```java
public void putCodebase(FirebaseAppHostingBuildSourceCodebase value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.putCodebase.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebase">FirebaseAppHostingBuildSourceCodebase</a>

---

##### `putContainer` <a name="putContainer" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.putContainer"></a>

```java
public void putContainer(FirebaseAppHostingBuildSourceContainer value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.putContainer.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainer">FirebaseAppHostingBuildSourceContainer</a>

---

##### `resetCodebase` <a name="resetCodebase" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.resetCodebase"></a>

```java
public void resetCodebase()
```

##### `resetContainer` <a name="resetContainer" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.resetContainer"></a>

```java
public void resetContainer()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.property.codebase">codebase</a></code> | <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference">FirebaseAppHostingBuildSourceCodebaseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.property.container">container</a></code> | <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference">FirebaseAppHostingBuildSourceContainerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.property.codebaseInput">codebaseInput</a></code> | <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebase">FirebaseAppHostingBuildSourceCodebase</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.property.containerInput">containerInput</a></code> | <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainer">FirebaseAppHostingBuildSourceContainer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSource">FirebaseAppHostingBuildSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `codebase`<sup>Required</sup> <a name="codebase" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.property.codebase"></a>

```java
public FirebaseAppHostingBuildSourceCodebaseOutputReference getCodebase();
```

- *Type:* <a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebaseOutputReference">FirebaseAppHostingBuildSourceCodebaseOutputReference</a>

---

##### `container`<sup>Required</sup> <a name="container" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.property.container"></a>

```java
public FirebaseAppHostingBuildSourceContainerOutputReference getContainer();
```

- *Type:* <a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainerOutputReference">FirebaseAppHostingBuildSourceContainerOutputReference</a>

---

##### `codebaseInput`<sup>Optional</sup> <a name="codebaseInput" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.property.codebaseInput"></a>

```java
public FirebaseAppHostingBuildSourceCodebase getCodebaseInput();
```

- *Type:* <a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceCodebase">FirebaseAppHostingBuildSourceCodebase</a>

---

##### `containerInput`<sup>Optional</sup> <a name="containerInput" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.property.containerInput"></a>

```java
public FirebaseAppHostingBuildSourceContainer getContainerInput();
```

- *Type:* <a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceContainer">FirebaseAppHostingBuildSourceContainer</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSourceOutputReference.property.internalValue"></a>

```java
public FirebaseAppHostingBuildSource getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildSource">FirebaseAppHostingBuildSource</a>

---


### FirebaseAppHostingBuildTimeoutsOutputReference <a name="FirebaseAppHostingBuildTimeoutsOutputReference" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.firebase_app_hosting_build.FirebaseAppHostingBuildTimeoutsOutputReference;

new FirebaseAppHostingBuildTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeouts">FirebaseAppHostingBuildTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|FirebaseAppHostingBuildTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.firebaseAppHostingBuild.FirebaseAppHostingBuildTimeouts">FirebaseAppHostingBuildTimeouts</a>

---



