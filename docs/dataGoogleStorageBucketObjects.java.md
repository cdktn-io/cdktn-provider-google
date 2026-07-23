# `dataGoogleStorageBucketObjects` Submodule <a name="`dataGoogleStorageBucketObjects` Submodule" id="@cdktn/provider-google.dataGoogleStorageBucketObjects"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleStorageBucketObjects <a name="DataGoogleStorageBucketObjects" id="@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjects"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/storage_bucket_objects google_storage_bucket_objects}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjects.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_storage_bucket_objects.DataGoogleStorageBucketObjects;

DataGoogleStorageBucketObjects.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .bucket(java.lang.String)
//  .id(java.lang.String)
//  .matchGlob(java.lang.String)
//  .prefix(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjects.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjects.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjects.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjects.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjects.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjects.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjects.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjects.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjects.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjects.Initializer.parameter.bucket">bucket</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/storage_bucket_objects#bucket DataGoogleStorageBucketObjects#bucket}. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjects.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/storage_bucket_objects#id DataGoogleStorageBucketObjects#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjects.Initializer.parameter.matchGlob">matchGlob</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/storage_bucket_objects#match_glob DataGoogleStorageBucketObjects#match_glob}. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjects.Initializer.parameter.prefix">prefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/storage_bucket_objects#prefix DataGoogleStorageBucketObjects#prefix}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjects.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjects.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjects.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjects.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjects.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjects.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjects.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjects.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjects.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjects.Initializer.parameter.bucket"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/storage_bucket_objects#bucket DataGoogleStorageBucketObjects#bucket}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjects.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/storage_bucket_objects#id DataGoogleStorageBucketObjects#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `matchGlob`<sup>Optional</sup> <a name="matchGlob" id="@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjects.Initializer.parameter.matchGlob"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/storage_bucket_objects#match_glob DataGoogleStorageBucketObjects#match_glob}.

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjects.Initializer.parameter.prefix"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/storage_bucket_objects#prefix DataGoogleStorageBucketObjects#prefix}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjects.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjects.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjects.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjects.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjects.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjects.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjects.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjects.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjects.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjects.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjects.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjects.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjects.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjects.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjects.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjects.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjects.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjects.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjects.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjects.resetMatchGlob">resetMatchGlob</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjects.resetPrefix">resetPrefix</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjects.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjects.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjects.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjects.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjects.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjects.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjects.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjects.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjects.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjects.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjects.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjects.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjects.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjects.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjects.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjects.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjects.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjects.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjects.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjects.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjects.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjects.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjects.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjects.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjects.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjects.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjects.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjects.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjects.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjects.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjects.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjects.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjects.resetId"></a>

```java
public void resetId()
```

##### `resetMatchGlob` <a name="resetMatchGlob" id="@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjects.resetMatchGlob"></a>

```java
public void resetMatchGlob()
```

##### `resetPrefix` <a name="resetPrefix" id="@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjects.resetPrefix"></a>

```java
public void resetPrefix()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjects.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjects.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjects.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjects.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleStorageBucketObjects resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjects.isConstruct"></a>

```java
import io.cdktn.providers.google.data_google_storage_bucket_objects.DataGoogleStorageBucketObjects;

DataGoogleStorageBucketObjects.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjects.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjects.isTerraformElement"></a>

```java
import io.cdktn.providers.google.data_google_storage_bucket_objects.DataGoogleStorageBucketObjects;

DataGoogleStorageBucketObjects.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjects.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjects.isTerraformDataSource"></a>

```java
import io.cdktn.providers.google.data_google_storage_bucket_objects.DataGoogleStorageBucketObjects;

DataGoogleStorageBucketObjects.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjects.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjects.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.data_google_storage_bucket_objects.DataGoogleStorageBucketObjects;

DataGoogleStorageBucketObjects.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataGoogleStorageBucketObjects.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataGoogleStorageBucketObjects resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjects.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjects.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataGoogleStorageBucketObjects to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjects.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataGoogleStorageBucketObjects that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/storage_bucket_objects#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjects.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleStorageBucketObjects to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjects.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjects.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjects.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjects.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjects.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjects.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjects.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjects.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjects.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjects.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjects.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjects.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjects.property.bucketObjects">bucketObjects</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjectsBucketObjectsList">DataGoogleStorageBucketObjectsBucketObjectsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjects.property.bucketInput">bucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjects.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjects.property.matchGlobInput">matchGlobInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjects.property.prefixInput">prefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjects.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjects.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjects.property.matchGlob">matchGlob</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjects.property.prefix">prefix</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjects.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjects.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjects.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjects.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjects.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjects.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjects.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjects.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjects.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjects.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjects.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjects.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `bucketObjects`<sup>Required</sup> <a name="bucketObjects" id="@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjects.property.bucketObjects"></a>

```java
public DataGoogleStorageBucketObjectsBucketObjectsList getBucketObjects();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjectsBucketObjectsList">DataGoogleStorageBucketObjectsBucketObjectsList</a>

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjects.property.bucketInput"></a>

```java
public java.lang.String getBucketInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjects.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `matchGlobInput`<sup>Optional</sup> <a name="matchGlobInput" id="@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjects.property.matchGlobInput"></a>

```java
public java.lang.String getMatchGlobInput();
```

- *Type:* java.lang.String

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjects.property.prefixInput"></a>

```java
public java.lang.String getPrefixInput();
```

- *Type:* java.lang.String

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjects.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjects.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `matchGlob`<sup>Required</sup> <a name="matchGlob" id="@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjects.property.matchGlob"></a>

```java
public java.lang.String getMatchGlob();
```

- *Type:* java.lang.String

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjects.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjects.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjects.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleStorageBucketObjectsBucketObjects <a name="DataGoogleStorageBucketObjectsBucketObjects" id="@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjectsBucketObjects"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjectsBucketObjects.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_storage_bucket_objects.DataGoogleStorageBucketObjectsBucketObjects;

DataGoogleStorageBucketObjectsBucketObjects.builder()
    .build();
```


### DataGoogleStorageBucketObjectsConfig <a name="DataGoogleStorageBucketObjectsConfig" id="@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjectsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjectsConfig.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_storage_bucket_objects.DataGoogleStorageBucketObjectsConfig;

DataGoogleStorageBucketObjectsConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .bucket(java.lang.String)
//  .id(java.lang.String)
//  .matchGlob(java.lang.String)
//  .prefix(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjectsConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjectsConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjectsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjectsConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjectsConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjectsConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjectsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjectsConfig.property.bucket">bucket</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/storage_bucket_objects#bucket DataGoogleStorageBucketObjects#bucket}. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjectsConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/storage_bucket_objects#id DataGoogleStorageBucketObjects#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjectsConfig.property.matchGlob">matchGlob</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/storage_bucket_objects#match_glob DataGoogleStorageBucketObjects#match_glob}. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjectsConfig.property.prefix">prefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/storage_bucket_objects#prefix DataGoogleStorageBucketObjects#prefix}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjectsConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjectsConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjectsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjectsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjectsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjectsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjectsConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjectsConfig.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/storage_bucket_objects#bucket DataGoogleStorageBucketObjects#bucket}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjectsConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/storage_bucket_objects#id DataGoogleStorageBucketObjects#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `matchGlob`<sup>Optional</sup> <a name="matchGlob" id="@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjectsConfig.property.matchGlob"></a>

```java
public java.lang.String getMatchGlob();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/storage_bucket_objects#match_glob DataGoogleStorageBucketObjects#match_glob}.

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjectsConfig.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.41.0/docs/data-sources/storage_bucket_objects#prefix DataGoogleStorageBucketObjects#prefix}.

---

## Classes <a name="Classes" id="Classes"></a>

### DataGoogleStorageBucketObjectsBucketObjectsList <a name="DataGoogleStorageBucketObjectsBucketObjectsList" id="@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjectsBucketObjectsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjectsBucketObjectsList.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_storage_bucket_objects.DataGoogleStorageBucketObjectsBucketObjectsList;

new DataGoogleStorageBucketObjectsBucketObjectsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjectsBucketObjectsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjectsBucketObjectsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjectsBucketObjectsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjectsBucketObjectsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjectsBucketObjectsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjectsBucketObjectsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjectsBucketObjectsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjectsBucketObjectsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjectsBucketObjectsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjectsBucketObjectsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjectsBucketObjectsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjectsBucketObjectsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjectsBucketObjectsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjectsBucketObjectsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjectsBucketObjectsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjectsBucketObjectsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjectsBucketObjectsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjectsBucketObjectsList.get"></a>

```java
public DataGoogleStorageBucketObjectsBucketObjectsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjectsBucketObjectsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjectsBucketObjectsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjectsBucketObjectsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjectsBucketObjectsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjectsBucketObjectsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleStorageBucketObjectsBucketObjectsOutputReference <a name="DataGoogleStorageBucketObjectsBucketObjectsOutputReference" id="@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjectsBucketObjectsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjectsBucketObjectsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_storage_bucket_objects.DataGoogleStorageBucketObjectsBucketObjectsOutputReference;

new DataGoogleStorageBucketObjectsBucketObjectsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjectsBucketObjectsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjectsBucketObjectsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjectsBucketObjectsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjectsBucketObjectsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjectsBucketObjectsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjectsBucketObjectsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjectsBucketObjectsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjectsBucketObjectsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjectsBucketObjectsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjectsBucketObjectsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjectsBucketObjectsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjectsBucketObjectsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjectsBucketObjectsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjectsBucketObjectsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjectsBucketObjectsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjectsBucketObjectsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjectsBucketObjectsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjectsBucketObjectsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjectsBucketObjectsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjectsBucketObjectsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjectsBucketObjectsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjectsBucketObjectsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjectsBucketObjectsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjectsBucketObjectsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjectsBucketObjectsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjectsBucketObjectsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjectsBucketObjectsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjectsBucketObjectsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjectsBucketObjectsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjectsBucketObjectsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjectsBucketObjectsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjectsBucketObjectsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjectsBucketObjectsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjectsBucketObjectsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjectsBucketObjectsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjectsBucketObjectsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjectsBucketObjectsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjectsBucketObjectsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjectsBucketObjectsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjectsBucketObjectsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjectsBucketObjectsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjectsBucketObjectsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjectsBucketObjectsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjectsBucketObjectsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjectsBucketObjectsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjectsBucketObjectsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjectsBucketObjectsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjectsBucketObjectsOutputReference.property.contentType">contentType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjectsBucketObjectsOutputReference.property.mediaLink">mediaLink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjectsBucketObjectsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjectsBucketObjectsOutputReference.property.selfLink">selfLink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjectsBucketObjectsOutputReference.property.storageClass">storageClass</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjectsBucketObjectsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjectsBucketObjects">DataGoogleStorageBucketObjectsBucketObjects</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjectsBucketObjectsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjectsBucketObjectsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjectsBucketObjectsOutputReference.property.contentType"></a>

```java
public java.lang.String getContentType();
```

- *Type:* java.lang.String

---

##### `mediaLink`<sup>Required</sup> <a name="mediaLink" id="@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjectsBucketObjectsOutputReference.property.mediaLink"></a>

```java
public java.lang.String getMediaLink();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjectsBucketObjectsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjectsBucketObjectsOutputReference.property.selfLink"></a>

```java
public java.lang.String getSelfLink();
```

- *Type:* java.lang.String

---

##### `storageClass`<sup>Required</sup> <a name="storageClass" id="@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjectsBucketObjectsOutputReference.property.storageClass"></a>

```java
public java.lang.String getStorageClass();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjectsBucketObjectsOutputReference.property.internalValue"></a>

```java
public DataGoogleStorageBucketObjectsBucketObjects getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleStorageBucketObjects.DataGoogleStorageBucketObjectsBucketObjects">DataGoogleStorageBucketObjectsBucketObjects</a>

---



