# `ephemeralGoogleSecretManagerSecretVersion` Submodule <a name="`ephemeralGoogleSecretManagerSecretVersion` Submodule" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EphemeralGoogleSecretManagerSecretVersion <a name="EphemeralGoogleSecretManagerSecretVersion" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/ephemeral-resources/secret_manager_secret_version google_secret_manager_secret_version}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.Initializer"></a>

```java
import io.cdktn.providers.google.ephemeral_google_secret_manager_secret_version.EphemeralGoogleSecretManagerSecretVersion;

EphemeralGoogleSecretManagerSecretVersion.Builder.create(Construct scope, java.lang.String id)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformEphemeralResourceLifecycle)
//  .provider(TerraformProvider)
    .secret(java.lang.String)
//  .isSecretDataBase64(java.lang.Boolean|IResolvable)
//  .project(java.lang.String)
//  .version(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.Initializer.parameter.secret">secret</a></code> | <code>java.lang.String</code> | The secret to get the secret version for. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.Initializer.parameter.isSecretDataBase64">isSecretDataBase64</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If true, the secret data returned will not get base64 decoded. Defaults to false. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | The project to get the secret version for. If it is not provided, the provider project is used. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.Initializer.parameter.version">version</a></code> | <code>java.lang.String</code> | The version of the secret to get. If it is not provided, the latest version is retrieved. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.Initializer.parameter.secret"></a>

- *Type:* java.lang.String

The secret to get the secret version for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/ephemeral-resources/secret_manager_secret_version#secret EphemeralGoogleSecretManagerSecretVersion#secret}

---

##### `isSecretDataBase64`<sup>Optional</sup> <a name="isSecretDataBase64" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.Initializer.parameter.isSecretDataBase64"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If true, the secret data returned will not get base64 decoded. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/ephemeral-resources/secret_manager_secret_version#is_secret_data_base64 EphemeralGoogleSecretManagerSecretVersion#is_secret_data_base64}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.Initializer.parameter.project"></a>

- *Type:* java.lang.String

The project to get the secret version for. If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/ephemeral-resources/secret_manager_secret_version#project EphemeralGoogleSecretManagerSecretVersion#project}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.Initializer.parameter.version"></a>

- *Type:* java.lang.String

The version of the secret to get. If it is not provided, the latest version is retrieved.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/ephemeral-resources/secret_manager_secret_version#version EphemeralGoogleSecretManagerSecretVersion#version}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.toTerraform">toTerraform</a></code> | Adds this ephemeral resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.resetIsSecretDataBase64">resetIsSecretDataBase64</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this ephemeral resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetIsSecretDataBase64` <a name="resetIsSecretDataBase64" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.resetIsSecretDataBase64"></a>

```java
public void resetIsSecretDataBase64()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.resetProject"></a>

```java
public void resetProject()
```

##### `resetVersion` <a name="resetVersion" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.resetVersion"></a>

```java
public void resetVersion()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.isTerraformEphemeralResource">isTerraformEphemeralResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.isConstruct"></a>

```java
import io.cdktn.providers.google.ephemeral_google_secret_manager_secret_version.EphemeralGoogleSecretManagerSecretVersion;

EphemeralGoogleSecretManagerSecretVersion.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.isTerraformElement"></a>

```java
import io.cdktn.providers.google.ephemeral_google_secret_manager_secret_version.EphemeralGoogleSecretManagerSecretVersion;

EphemeralGoogleSecretManagerSecretVersion.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformEphemeralResource` <a name="isTerraformEphemeralResource" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.isTerraformEphemeralResource"></a>

```java
import io.cdktn.providers.google.ephemeral_google_secret_manager_secret_version.EphemeralGoogleSecretManagerSecretVersion;

EphemeralGoogleSecretManagerSecretVersion.isTerraformEphemeralResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.isTerraformEphemeralResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.destroyTime">destroyTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.enabled">enabled</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.secretData">secretData</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.isSecretDataBase64Input">isSecretDataBase64Input</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.secretInput">secretInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.isSecretDataBase64">isSecretDataBase64</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.secret">secret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.lifecycle"></a>

```java
public TerraformEphemeralResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `destroyTime`<sup>Required</sup> <a name="destroyTime" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.destroyTime"></a>

```java
public java.lang.String getDestroyTime();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.enabled"></a>

```java
public IResolvable getEnabled();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `secretData`<sup>Required</sup> <a name="secretData" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.secretData"></a>

```java
public java.lang.String getSecretData();
```

- *Type:* java.lang.String

---

##### `isSecretDataBase64Input`<sup>Optional</sup> <a name="isSecretDataBase64Input" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.isSecretDataBase64Input"></a>

```java
public java.lang.Boolean|IResolvable getIsSecretDataBase64Input();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `secretInput`<sup>Optional</sup> <a name="secretInput" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.secretInput"></a>

```java
public java.lang.String getSecretInput();
```

- *Type:* java.lang.String

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `isSecretDataBase64`<sup>Required</sup> <a name="isSecretDataBase64" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.isSecretDataBase64"></a>

```java
public java.lang.Boolean|IResolvable getIsSecretDataBase64();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.secret"></a>

```java
public java.lang.String getSecret();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersion.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### EphemeralGoogleSecretManagerSecretVersionConfig <a name="EphemeralGoogleSecretManagerSecretVersionConfig" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersionConfig.Initializer"></a>

```java
import io.cdktn.providers.google.ephemeral_google_secret_manager_secret_version.EphemeralGoogleSecretManagerSecretVersionConfig;

EphemeralGoogleSecretManagerSecretVersionConfig.builder()
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformEphemeralResourceLifecycle)
//  .provider(TerraformProvider)
    .secret(java.lang.String)
//  .isSecretDataBase64(java.lang.Boolean|IResolvable)
//  .project(java.lang.String)
//  .version(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersionConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersionConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersionConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersionConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersionConfig.property.secret">secret</a></code> | <code>java.lang.String</code> | The secret to get the secret version for. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersionConfig.property.isSecretDataBase64">isSecretDataBase64</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | If true, the secret data returned will not get base64 decoded. Defaults to false. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersionConfig.property.project">project</a></code> | <code>java.lang.String</code> | The project to get the secret version for. If it is not provided, the provider project is used. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersionConfig.property.version">version</a></code> | <code>java.lang.String</code> | The version of the secret to get. If it is not provided, the latest version is retrieved. |

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersionConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersionConfig.property.lifecycle"></a>

```java
public TerraformEphemeralResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `secret`<sup>Required</sup> <a name="secret" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersionConfig.property.secret"></a>

```java
public java.lang.String getSecret();
```

- *Type:* java.lang.String

The secret to get the secret version for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/ephemeral-resources/secret_manager_secret_version#secret EphemeralGoogleSecretManagerSecretVersion#secret}

---

##### `isSecretDataBase64`<sup>Optional</sup> <a name="isSecretDataBase64" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersionConfig.property.isSecretDataBase64"></a>

```java
public java.lang.Boolean|IResolvable getIsSecretDataBase64();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

If true, the secret data returned will not get base64 decoded. Defaults to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/ephemeral-resources/secret_manager_secret_version#is_secret_data_base64 EphemeralGoogleSecretManagerSecretVersion#is_secret_data_base64}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersionConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

The project to get the secret version for. If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/ephemeral-resources/secret_manager_secret_version#project EphemeralGoogleSecretManagerSecretVersion#project}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktn/provider-google.ephemeralGoogleSecretManagerSecretVersion.EphemeralGoogleSecretManagerSecretVersionConfig.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

The version of the secret to get. If it is not provided, the latest version is retrieved.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/ephemeral-resources/secret_manager_secret_version#version EphemeralGoogleSecretManagerSecretVersion#version}

---



