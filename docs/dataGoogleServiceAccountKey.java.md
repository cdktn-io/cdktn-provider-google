# `dataGoogleServiceAccountKey` Submodule <a name="`dataGoogleServiceAccountKey` Submodule" id="@cdktn/provider-google.dataGoogleServiceAccountKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleServiceAccountKey <a name="DataGoogleServiceAccountKey" id="@cdktn/provider-google.dataGoogleServiceAccountKey.DataGoogleServiceAccountKey"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/service_account_key google_service_account_key}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleServiceAccountKey.DataGoogleServiceAccountKey.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_service_account_key.DataGoogleServiceAccountKey;

DataGoogleServiceAccountKey.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .id(java.lang.String)
//  .publicKeyType(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountKey.DataGoogleServiceAccountKey.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountKey.DataGoogleServiceAccountKey.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountKey.DataGoogleServiceAccountKey.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountKey.DataGoogleServiceAccountKey.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountKey.DataGoogleServiceAccountKey.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountKey.DataGoogleServiceAccountKey.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountKey.DataGoogleServiceAccountKey.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountKey.DataGoogleServiceAccountKey.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountKey.DataGoogleServiceAccountKey.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountKey.DataGoogleServiceAccountKey.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/service_account_key#name DataGoogleServiceAccountKey#name}. |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountKey.DataGoogleServiceAccountKey.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/service_account_key#id DataGoogleServiceAccountKey#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountKey.DataGoogleServiceAccountKey.Initializer.parameter.publicKeyType">publicKeyType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/service_account_key#public_key_type DataGoogleServiceAccountKey#public_key_type}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleServiceAccountKey.DataGoogleServiceAccountKey.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleServiceAccountKey.DataGoogleServiceAccountKey.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleServiceAccountKey.DataGoogleServiceAccountKey.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleServiceAccountKey.DataGoogleServiceAccountKey.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleServiceAccountKey.DataGoogleServiceAccountKey.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleServiceAccountKey.DataGoogleServiceAccountKey.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleServiceAccountKey.DataGoogleServiceAccountKey.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleServiceAccountKey.DataGoogleServiceAccountKey.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleServiceAccountKey.DataGoogleServiceAccountKey.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleServiceAccountKey.DataGoogleServiceAccountKey.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/service_account_key#name DataGoogleServiceAccountKey#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleServiceAccountKey.DataGoogleServiceAccountKey.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/service_account_key#id DataGoogleServiceAccountKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `publicKeyType`<sup>Optional</sup> <a name="publicKeyType" id="@cdktn/provider-google.dataGoogleServiceAccountKey.DataGoogleServiceAccountKey.Initializer.parameter.publicKeyType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/service_account_key#public_key_type DataGoogleServiceAccountKey#public_key_type}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountKey.DataGoogleServiceAccountKey.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountKey.DataGoogleServiceAccountKey.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountKey.DataGoogleServiceAccountKey.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountKey.DataGoogleServiceAccountKey.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountKey.DataGoogleServiceAccountKey.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountKey.DataGoogleServiceAccountKey.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountKey.DataGoogleServiceAccountKey.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountKey.DataGoogleServiceAccountKey.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountKey.DataGoogleServiceAccountKey.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountKey.DataGoogleServiceAccountKey.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountKey.DataGoogleServiceAccountKey.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountKey.DataGoogleServiceAccountKey.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountKey.DataGoogleServiceAccountKey.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountKey.DataGoogleServiceAccountKey.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountKey.DataGoogleServiceAccountKey.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountKey.DataGoogleServiceAccountKey.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountKey.DataGoogleServiceAccountKey.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountKey.DataGoogleServiceAccountKey.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountKey.DataGoogleServiceAccountKey.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountKey.DataGoogleServiceAccountKey.resetPublicKeyType">resetPublicKeyType</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleServiceAccountKey.DataGoogleServiceAccountKey.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataGoogleServiceAccountKey.DataGoogleServiceAccountKey.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleServiceAccountKey.DataGoogleServiceAccountKey.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.dataGoogleServiceAccountKey.DataGoogleServiceAccountKey.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleServiceAccountKey.DataGoogleServiceAccountKey.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleServiceAccountKey.DataGoogleServiceAccountKey.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.dataGoogleServiceAccountKey.DataGoogleServiceAccountKey.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dataGoogleServiceAccountKey.DataGoogleServiceAccountKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleServiceAccountKey.DataGoogleServiceAccountKey.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.dataGoogleServiceAccountKey.DataGoogleServiceAccountKey.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.dataGoogleServiceAccountKey.DataGoogleServiceAccountKey.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.dataGoogleServiceAccountKey.DataGoogleServiceAccountKey.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleServiceAccountKey.DataGoogleServiceAccountKey.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleServiceAccountKey.DataGoogleServiceAccountKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleServiceAccountKey.DataGoogleServiceAccountKey.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleServiceAccountKey.DataGoogleServiceAccountKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleServiceAccountKey.DataGoogleServiceAccountKey.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleServiceAccountKey.DataGoogleServiceAccountKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleServiceAccountKey.DataGoogleServiceAccountKey.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleServiceAccountKey.DataGoogleServiceAccountKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleServiceAccountKey.DataGoogleServiceAccountKey.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleServiceAccountKey.DataGoogleServiceAccountKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleServiceAccountKey.DataGoogleServiceAccountKey.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleServiceAccountKey.DataGoogleServiceAccountKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleServiceAccountKey.DataGoogleServiceAccountKey.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleServiceAccountKey.DataGoogleServiceAccountKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleServiceAccountKey.DataGoogleServiceAccountKey.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleServiceAccountKey.DataGoogleServiceAccountKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleServiceAccountKey.DataGoogleServiceAccountKey.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleServiceAccountKey.DataGoogleServiceAccountKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleServiceAccountKey.DataGoogleServiceAccountKey.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleServiceAccountKey.DataGoogleServiceAccountKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktn/provider-google.dataGoogleServiceAccountKey.DataGoogleServiceAccountKey.resetId"></a>

```java
public void resetId()
```

##### `resetPublicKeyType` <a name="resetPublicKeyType" id="@cdktn/provider-google.dataGoogleServiceAccountKey.DataGoogleServiceAccountKey.resetPublicKeyType"></a>

```java
public void resetPublicKeyType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountKey.DataGoogleServiceAccountKey.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountKey.DataGoogleServiceAccountKey.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountKey.DataGoogleServiceAccountKey.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountKey.DataGoogleServiceAccountKey.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleServiceAccountKey resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.dataGoogleServiceAccountKey.DataGoogleServiceAccountKey.isConstruct"></a>

```java
import io.cdktn.providers.google.data_google_service_account_key.DataGoogleServiceAccountKey;

DataGoogleServiceAccountKey.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleServiceAccountKey.DataGoogleServiceAccountKey.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.dataGoogleServiceAccountKey.DataGoogleServiceAccountKey.isTerraformElement"></a>

```java
import io.cdktn.providers.google.data_google_service_account_key.DataGoogleServiceAccountKey;

DataGoogleServiceAccountKey.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleServiceAccountKey.DataGoogleServiceAccountKey.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-google.dataGoogleServiceAccountKey.DataGoogleServiceAccountKey.isTerraformDataSource"></a>

```java
import io.cdktn.providers.google.data_google_service_account_key.DataGoogleServiceAccountKey;

DataGoogleServiceAccountKey.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleServiceAccountKey.DataGoogleServiceAccountKey.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.dataGoogleServiceAccountKey.DataGoogleServiceAccountKey.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.data_google_service_account_key.DataGoogleServiceAccountKey;

DataGoogleServiceAccountKey.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataGoogleServiceAccountKey.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataGoogleServiceAccountKey resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleServiceAccountKey.DataGoogleServiceAccountKey.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dataGoogleServiceAccountKey.DataGoogleServiceAccountKey.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataGoogleServiceAccountKey to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dataGoogleServiceAccountKey.DataGoogleServiceAccountKey.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataGoogleServiceAccountKey that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/service_account_key#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleServiceAccountKey.DataGoogleServiceAccountKey.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleServiceAccountKey to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountKey.DataGoogleServiceAccountKey.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountKey.DataGoogleServiceAccountKey.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountKey.DataGoogleServiceAccountKey.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountKey.DataGoogleServiceAccountKey.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountKey.DataGoogleServiceAccountKey.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountKey.DataGoogleServiceAccountKey.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountKey.DataGoogleServiceAccountKey.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountKey.DataGoogleServiceAccountKey.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountKey.DataGoogleServiceAccountKey.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountKey.DataGoogleServiceAccountKey.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountKey.DataGoogleServiceAccountKey.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountKey.DataGoogleServiceAccountKey.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountKey.DataGoogleServiceAccountKey.property.keyAlgorithm">keyAlgorithm</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountKey.DataGoogleServiceAccountKey.property.publicKey">publicKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountKey.DataGoogleServiceAccountKey.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountKey.DataGoogleServiceAccountKey.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountKey.DataGoogleServiceAccountKey.property.publicKeyTypeInput">publicKeyTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountKey.DataGoogleServiceAccountKey.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountKey.DataGoogleServiceAccountKey.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountKey.DataGoogleServiceAccountKey.property.publicKeyType">publicKeyType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataGoogleServiceAccountKey.DataGoogleServiceAccountKey.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.dataGoogleServiceAccountKey.DataGoogleServiceAccountKey.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleServiceAccountKey.DataGoogleServiceAccountKey.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.dataGoogleServiceAccountKey.DataGoogleServiceAccountKey.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.dataGoogleServiceAccountKey.DataGoogleServiceAccountKey.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.dataGoogleServiceAccountKey.DataGoogleServiceAccountKey.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleServiceAccountKey.DataGoogleServiceAccountKey.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleServiceAccountKey.DataGoogleServiceAccountKey.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleServiceAccountKey.DataGoogleServiceAccountKey.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleServiceAccountKey.DataGoogleServiceAccountKey.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleServiceAccountKey.DataGoogleServiceAccountKey.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleServiceAccountKey.DataGoogleServiceAccountKey.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `keyAlgorithm`<sup>Required</sup> <a name="keyAlgorithm" id="@cdktn/provider-google.dataGoogleServiceAccountKey.DataGoogleServiceAccountKey.property.keyAlgorithm"></a>

```java
public java.lang.String getKeyAlgorithm();
```

- *Type:* java.lang.String

---

##### `publicKey`<sup>Required</sup> <a name="publicKey" id="@cdktn/provider-google.dataGoogleServiceAccountKey.DataGoogleServiceAccountKey.property.publicKey"></a>

```java
public java.lang.String getPublicKey();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.dataGoogleServiceAccountKey.DataGoogleServiceAccountKey.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.dataGoogleServiceAccountKey.DataGoogleServiceAccountKey.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `publicKeyTypeInput`<sup>Optional</sup> <a name="publicKeyTypeInput" id="@cdktn/provider-google.dataGoogleServiceAccountKey.DataGoogleServiceAccountKey.property.publicKeyTypeInput"></a>

```java
public java.lang.String getPublicKeyTypeInput();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleServiceAccountKey.DataGoogleServiceAccountKey.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleServiceAccountKey.DataGoogleServiceAccountKey.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `publicKeyType`<sup>Required</sup> <a name="publicKeyType" id="@cdktn/provider-google.dataGoogleServiceAccountKey.DataGoogleServiceAccountKey.property.publicKeyType"></a>

```java
public java.lang.String getPublicKeyType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountKey.DataGoogleServiceAccountKey.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataGoogleServiceAccountKey.DataGoogleServiceAccountKey.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleServiceAccountKeyConfig <a name="DataGoogleServiceAccountKeyConfig" id="@cdktn/provider-google.dataGoogleServiceAccountKey.DataGoogleServiceAccountKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleServiceAccountKey.DataGoogleServiceAccountKeyConfig.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_service_account_key.DataGoogleServiceAccountKeyConfig;

DataGoogleServiceAccountKeyConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .id(java.lang.String)
//  .publicKeyType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountKey.DataGoogleServiceAccountKeyConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountKey.DataGoogleServiceAccountKeyConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountKey.DataGoogleServiceAccountKeyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountKey.DataGoogleServiceAccountKeyConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountKey.DataGoogleServiceAccountKeyConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountKey.DataGoogleServiceAccountKeyConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountKey.DataGoogleServiceAccountKeyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountKey.DataGoogleServiceAccountKeyConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/service_account_key#name DataGoogleServiceAccountKey#name}. |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountKey.DataGoogleServiceAccountKeyConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/service_account_key#id DataGoogleServiceAccountKey#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountKey.DataGoogleServiceAccountKeyConfig.property.publicKeyType">publicKeyType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/service_account_key#public_key_type DataGoogleServiceAccountKey#public_key_type}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleServiceAccountKey.DataGoogleServiceAccountKeyConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleServiceAccountKey.DataGoogleServiceAccountKeyConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleServiceAccountKey.DataGoogleServiceAccountKeyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleServiceAccountKey.DataGoogleServiceAccountKeyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleServiceAccountKey.DataGoogleServiceAccountKeyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleServiceAccountKey.DataGoogleServiceAccountKeyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleServiceAccountKey.DataGoogleServiceAccountKeyConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleServiceAccountKey.DataGoogleServiceAccountKeyConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/service_account_key#name DataGoogleServiceAccountKey#name}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleServiceAccountKey.DataGoogleServiceAccountKeyConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/service_account_key#id DataGoogleServiceAccountKey#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `publicKeyType`<sup>Optional</sup> <a name="publicKeyType" id="@cdktn/provider-google.dataGoogleServiceAccountKey.DataGoogleServiceAccountKeyConfig.property.publicKeyType"></a>

```java
public java.lang.String getPublicKeyType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/data-sources/service_account_key#public_key_type DataGoogleServiceAccountKey#public_key_type}.

---



