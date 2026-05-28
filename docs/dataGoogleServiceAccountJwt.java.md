# `dataGoogleServiceAccountJwt` Submodule <a name="`dataGoogleServiceAccountJwt` Submodule" id="@cdktn/provider-google.dataGoogleServiceAccountJwt"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleServiceAccountJwt <a name="DataGoogleServiceAccountJwt" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/service_account_jwt google_service_account_jwt}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_service_account_jwt.DataGoogleServiceAccountJwt;

DataGoogleServiceAccountJwt.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .payload(java.lang.String)
    .targetServiceAccount(java.lang.String)
//  .delegates(java.util.List<java.lang.String>)
//  .expiresIn(java.lang.Number)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.Initializer.parameter.payload">payload</a></code> | <code>java.lang.String</code> | A JSON-encoded JWT claims set that will be included in the signed JWT. |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.Initializer.parameter.targetServiceAccount">targetServiceAccount</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/service_account_jwt#target_service_account DataGoogleServiceAccountJwt#target_service_account}. |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.Initializer.parameter.delegates">delegates</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/service_account_jwt#delegates DataGoogleServiceAccountJwt#delegates}. |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.Initializer.parameter.expiresIn">expiresIn</a></code> | <code>java.lang.Number</code> | Number of seconds until the JWT expires. |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/service_account_jwt#id DataGoogleServiceAccountJwt#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `payload`<sup>Required</sup> <a name="payload" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.Initializer.parameter.payload"></a>

- *Type:* java.lang.String

A JSON-encoded JWT claims set that will be included in the signed JWT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/service_account_jwt#payload DataGoogleServiceAccountJwt#payload}

---

##### `targetServiceAccount`<sup>Required</sup> <a name="targetServiceAccount" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.Initializer.parameter.targetServiceAccount"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/service_account_jwt#target_service_account DataGoogleServiceAccountJwt#target_service_account}.

---

##### `delegates`<sup>Optional</sup> <a name="delegates" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.Initializer.parameter.delegates"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/service_account_jwt#delegates DataGoogleServiceAccountJwt#delegates}.

---

##### `expiresIn`<sup>Optional</sup> <a name="expiresIn" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.Initializer.parameter.expiresIn"></a>

- *Type:* java.lang.Number

Number of seconds until the JWT expires.

If set and non-zero an `exp` claim will be added to the payload derived from the current timestamp plus expires_in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/service_account_jwt#expires_in DataGoogleServiceAccountJwt#expires_in}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/service_account_jwt#id DataGoogleServiceAccountJwt#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.resetDelegates">resetDelegates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.resetExpiresIn">resetExpiresIn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetDelegates` <a name="resetDelegates" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.resetDelegates"></a>

```java
public void resetDelegates()
```

##### `resetExpiresIn` <a name="resetExpiresIn" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.resetExpiresIn"></a>

```java
public void resetExpiresIn()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleServiceAccountJwt resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.isConstruct"></a>

```java
import io.cdktn.providers.google.data_google_service_account_jwt.DataGoogleServiceAccountJwt;

DataGoogleServiceAccountJwt.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.isTerraformElement"></a>

```java
import io.cdktn.providers.google.data_google_service_account_jwt.DataGoogleServiceAccountJwt;

DataGoogleServiceAccountJwt.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.isTerraformDataSource"></a>

```java
import io.cdktn.providers.google.data_google_service_account_jwt.DataGoogleServiceAccountJwt;

DataGoogleServiceAccountJwt.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.data_google_service_account_jwt.DataGoogleServiceAccountJwt;

DataGoogleServiceAccountJwt.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataGoogleServiceAccountJwt.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataGoogleServiceAccountJwt resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataGoogleServiceAccountJwt to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataGoogleServiceAccountJwt that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/service_account_jwt#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleServiceAccountJwt to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.jwt">jwt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.delegatesInput">delegatesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.expiresInInput">expiresInInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.payloadInput">payloadInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.targetServiceAccountInput">targetServiceAccountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.delegates">delegates</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.expiresIn">expiresIn</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.payload">payload</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.targetServiceAccount">targetServiceAccount</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `jwt`<sup>Required</sup> <a name="jwt" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.jwt"></a>

```java
public java.lang.String getJwt();
```

- *Type:* java.lang.String

---

##### `delegatesInput`<sup>Optional</sup> <a name="delegatesInput" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.delegatesInput"></a>

```java
public java.util.List<java.lang.String> getDelegatesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `expiresInInput`<sup>Optional</sup> <a name="expiresInInput" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.expiresInInput"></a>

```java
public java.lang.Number getExpiresInInput();
```

- *Type:* java.lang.Number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `payloadInput`<sup>Optional</sup> <a name="payloadInput" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.payloadInput"></a>

```java
public java.lang.String getPayloadInput();
```

- *Type:* java.lang.String

---

##### `targetServiceAccountInput`<sup>Optional</sup> <a name="targetServiceAccountInput" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.targetServiceAccountInput"></a>

```java
public java.lang.String getTargetServiceAccountInput();
```

- *Type:* java.lang.String

---

##### `delegates`<sup>Required</sup> <a name="delegates" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.delegates"></a>

```java
public java.util.List<java.lang.String> getDelegates();
```

- *Type:* java.util.List<java.lang.String>

---

##### `expiresIn`<sup>Required</sup> <a name="expiresIn" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.expiresIn"></a>

```java
public java.lang.Number getExpiresIn();
```

- *Type:* java.lang.Number

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `payload`<sup>Required</sup> <a name="payload" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.payload"></a>

```java
public java.lang.String getPayload();
```

- *Type:* java.lang.String

---

##### `targetServiceAccount`<sup>Required</sup> <a name="targetServiceAccount" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.targetServiceAccount"></a>

```java
public java.lang.String getTargetServiceAccount();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwt.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleServiceAccountJwtConfig <a name="DataGoogleServiceAccountJwtConfig" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwtConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwtConfig.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_service_account_jwt.DataGoogleServiceAccountJwtConfig;

DataGoogleServiceAccountJwtConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .payload(java.lang.String)
    .targetServiceAccount(java.lang.String)
//  .delegates(java.util.List<java.lang.String>)
//  .expiresIn(java.lang.Number)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwtConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwtConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwtConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwtConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwtConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwtConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwtConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwtConfig.property.payload">payload</a></code> | <code>java.lang.String</code> | A JSON-encoded JWT claims set that will be included in the signed JWT. |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwtConfig.property.targetServiceAccount">targetServiceAccount</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/service_account_jwt#target_service_account DataGoogleServiceAccountJwt#target_service_account}. |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwtConfig.property.delegates">delegates</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/service_account_jwt#delegates DataGoogleServiceAccountJwt#delegates}. |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwtConfig.property.expiresIn">expiresIn</a></code> | <code>java.lang.Number</code> | Number of seconds until the JWT expires. |
| <code><a href="#@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwtConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/service_account_jwt#id DataGoogleServiceAccountJwt#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwtConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwtConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwtConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwtConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwtConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwtConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwtConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `payload`<sup>Required</sup> <a name="payload" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwtConfig.property.payload"></a>

```java
public java.lang.String getPayload();
```

- *Type:* java.lang.String

A JSON-encoded JWT claims set that will be included in the signed JWT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/service_account_jwt#payload DataGoogleServiceAccountJwt#payload}

---

##### `targetServiceAccount`<sup>Required</sup> <a name="targetServiceAccount" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwtConfig.property.targetServiceAccount"></a>

```java
public java.lang.String getTargetServiceAccount();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/service_account_jwt#target_service_account DataGoogleServiceAccountJwt#target_service_account}.

---

##### `delegates`<sup>Optional</sup> <a name="delegates" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwtConfig.property.delegates"></a>

```java
public java.util.List<java.lang.String> getDelegates();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/service_account_jwt#delegates DataGoogleServiceAccountJwt#delegates}.

---

##### `expiresIn`<sup>Optional</sup> <a name="expiresIn" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwtConfig.property.expiresIn"></a>

```java
public java.lang.Number getExpiresIn();
```

- *Type:* java.lang.Number

Number of seconds until the JWT expires.

If set and non-zero an `exp` claim will be added to the payload derived from the current timestamp plus expires_in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/service_account_jwt#expires_in DataGoogleServiceAccountJwt#expires_in}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleServiceAccountJwt.DataGoogleServiceAccountJwtConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/service_account_jwt#id DataGoogleServiceAccountJwt#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



