# `computeBackendBucketSignedUrlKey` Submodule <a name="`computeBackendBucketSignedUrlKey` Submodule" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeBackendBucketSignedUrlKey <a name="ComputeBackendBucketSignedUrlKey" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/compute_backend_bucket_signed_url_key google_compute_backend_bucket_signed_url_key}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.Initializer"></a>

```java
import io.cdktn.providers.google.compute_backend_bucket_signed_url_key.ComputeBackendBucketSignedUrlKey;

ComputeBackendBucketSignedUrlKey.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .backendBucket(java.lang.String)
    .keyValue(java.lang.String)
    .name(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(ComputeBackendBucketSignedUrlKeyTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.Initializer.parameter.backendBucket">backendBucket</a></code> | <code>java.lang.String</code> | The backend bucket this signed URL key belongs. |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.Initializer.parameter.keyValue">keyValue</a></code> | <code>java.lang.String</code> | 128-bit key value used for signing the URL. |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the signed URL key. |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/compute_backend_bucket_signed_url_key#id ComputeBackendBucketSignedUrlKey#id}. |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/compute_backend_bucket_signed_url_key#project ComputeBackendBucketSignedUrlKey#project}. |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeouts">ComputeBackendBucketSignedUrlKeyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `backendBucket`<sup>Required</sup> <a name="backendBucket" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.Initializer.parameter.backendBucket"></a>

- *Type:* java.lang.String

The backend bucket this signed URL key belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/compute_backend_bucket_signed_url_key#backend_bucket ComputeBackendBucketSignedUrlKey#backend_bucket}

---

##### `keyValue`<sup>Required</sup> <a name="keyValue" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.Initializer.parameter.keyValue"></a>

- *Type:* java.lang.String

128-bit key value used for signing the URL.

The key value must be a
valid RFC 4648 Section 5 base64url encoded string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/compute_backend_bucket_signed_url_key#key_value ComputeBackendBucketSignedUrlKey#key_value}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the signed URL key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/compute_backend_bucket_signed_url_key#name ComputeBackendBucketSignedUrlKey#name}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/compute_backend_bucket_signed_url_key#deletion_policy ComputeBackendBucketSignedUrlKey#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/compute_backend_bucket_signed_url_key#id ComputeBackendBucketSignedUrlKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/compute_backend_bucket_signed_url_key#project ComputeBackendBucketSignedUrlKey#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeouts">ComputeBackendBucketSignedUrlKeyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/compute_backend_bucket_signed_url_key#timeouts ComputeBackendBucketSignedUrlKey#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.putTimeouts"></a>

```java
public void putTimeouts(ComputeBackendBucketSignedUrlKeyTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeouts">ComputeBackendBucketSignedUrlKeyTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ComputeBackendBucketSignedUrlKey resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.isConstruct"></a>

```java
import io.cdktn.providers.google.compute_backend_bucket_signed_url_key.ComputeBackendBucketSignedUrlKey;

ComputeBackendBucketSignedUrlKey.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.isTerraformElement"></a>

```java
import io.cdktn.providers.google.compute_backend_bucket_signed_url_key.ComputeBackendBucketSignedUrlKey;

ComputeBackendBucketSignedUrlKey.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.isTerraformResource"></a>

```java
import io.cdktn.providers.google.compute_backend_bucket_signed_url_key.ComputeBackendBucketSignedUrlKey;

ComputeBackendBucketSignedUrlKey.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.compute_backend_bucket_signed_url_key.ComputeBackendBucketSignedUrlKey;

ComputeBackendBucketSignedUrlKey.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ComputeBackendBucketSignedUrlKey.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ComputeBackendBucketSignedUrlKey resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ComputeBackendBucketSignedUrlKey to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ComputeBackendBucketSignedUrlKey that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/compute_backend_bucket_signed_url_key#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ComputeBackendBucketSignedUrlKey to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference">ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.backendBucketInput">backendBucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.keyValueInput">keyValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeouts">ComputeBackendBucketSignedUrlKeyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.backendBucket">backendBucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.keyValue">keyValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.timeouts"></a>

```java
public ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference">ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference</a>

---

##### `backendBucketInput`<sup>Optional</sup> <a name="backendBucketInput" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.backendBucketInput"></a>

```java
public java.lang.String getBackendBucketInput();
```

- *Type:* java.lang.String

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `keyValueInput`<sup>Optional</sup> <a name="keyValueInput" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.keyValueInput"></a>

```java
public java.lang.String getKeyValueInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.timeoutsInput"></a>

```java
public IResolvable|ComputeBackendBucketSignedUrlKeyTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeouts">ComputeBackendBucketSignedUrlKeyTimeouts</a>

---

##### `backendBucket`<sup>Required</sup> <a name="backendBucket" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.backendBucket"></a>

```java
public java.lang.String getBackendBucket();
```

- *Type:* java.lang.String

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `keyValue`<sup>Required</sup> <a name="keyValue" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.keyValue"></a>

```java
public java.lang.String getKeyValue();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKey.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeBackendBucketSignedUrlKeyConfig <a name="ComputeBackendBucketSignedUrlKeyConfig" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyConfig.Initializer"></a>

```java
import io.cdktn.providers.google.compute_backend_bucket_signed_url_key.ComputeBackendBucketSignedUrlKeyConfig;

ComputeBackendBucketSignedUrlKeyConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .backendBucket(java.lang.String)
    .keyValue(java.lang.String)
    .name(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(ComputeBackendBucketSignedUrlKeyTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyConfig.property.backendBucket">backendBucket</a></code> | <code>java.lang.String</code> | The backend bucket this signed URL key belongs. |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyConfig.property.keyValue">keyValue</a></code> | <code>java.lang.String</code> | 128-bit key value used for signing the URL. |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the signed URL key. |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/compute_backend_bucket_signed_url_key#id ComputeBackendBucketSignedUrlKey#id}. |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/compute_backend_bucket_signed_url_key#project ComputeBackendBucketSignedUrlKey#project}. |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeouts">ComputeBackendBucketSignedUrlKeyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `backendBucket`<sup>Required</sup> <a name="backendBucket" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyConfig.property.backendBucket"></a>

```java
public java.lang.String getBackendBucket();
```

- *Type:* java.lang.String

The backend bucket this signed URL key belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/compute_backend_bucket_signed_url_key#backend_bucket ComputeBackendBucketSignedUrlKey#backend_bucket}

---

##### `keyValue`<sup>Required</sup> <a name="keyValue" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyConfig.property.keyValue"></a>

```java
public java.lang.String getKeyValue();
```

- *Type:* java.lang.String

128-bit key value used for signing the URL.

The key value must be a
valid RFC 4648 Section 5 base64url encoded string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/compute_backend_bucket_signed_url_key#key_value ComputeBackendBucketSignedUrlKey#key_value}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the signed URL key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/compute_backend_bucket_signed_url_key#name ComputeBackendBucketSignedUrlKey#name}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/compute_backend_bucket_signed_url_key#deletion_policy ComputeBackendBucketSignedUrlKey#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/compute_backend_bucket_signed_url_key#id ComputeBackendBucketSignedUrlKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/compute_backend_bucket_signed_url_key#project ComputeBackendBucketSignedUrlKey#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyConfig.property.timeouts"></a>

```java
public ComputeBackendBucketSignedUrlKeyTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeouts">ComputeBackendBucketSignedUrlKeyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/compute_backend_bucket_signed_url_key#timeouts ComputeBackendBucketSignedUrlKey#timeouts}

---

### ComputeBackendBucketSignedUrlKeyTimeouts <a name="ComputeBackendBucketSignedUrlKeyTimeouts" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google.compute_backend_bucket_signed_url_key.ComputeBackendBucketSignedUrlKeyTimeouts;

ComputeBackendBucketSignedUrlKeyTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/compute_backend_bucket_signed_url_key#create ComputeBackendBucketSignedUrlKey#create}. |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/compute_backend_bucket_signed_url_key#delete ComputeBackendBucketSignedUrlKey#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/compute_backend_bucket_signed_url_key#create ComputeBackendBucketSignedUrlKey#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.37.0/docs/resources/compute_backend_bucket_signed_url_key#delete ComputeBackendBucketSignedUrlKey#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference <a name="ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.compute_backend_bucket_signed_url_key.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference;

new ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeouts">ComputeBackendBucketSignedUrlKeyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|ComputeBackendBucketSignedUrlKeyTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.computeBackendBucketSignedUrlKey.ComputeBackendBucketSignedUrlKeyTimeouts">ComputeBackendBucketSignedUrlKeyTimeouts</a>

---



