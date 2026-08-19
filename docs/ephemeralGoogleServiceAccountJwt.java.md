# `ephemeralGoogleServiceAccountJwt` Submodule <a name="`ephemeralGoogleServiceAccountJwt` Submodule" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EphemeralGoogleServiceAccountJwt <a name="EphemeralGoogleServiceAccountJwt" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/ephemeral-resources/service_account_jwt google_service_account_jwt}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.Initializer"></a>

```java
import io.cdktn.providers.google.ephemeral_google_service_account_jwt.EphemeralGoogleServiceAccountJwt;

EphemeralGoogleServiceAccountJwt.Builder.create(Construct scope, java.lang.String id)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformEphemeralResourceLifecycle)
//  .provider(TerraformProvider)
    .payload(java.lang.String)
    .targetServiceAccount(java.lang.String)
//  .delegates(java.util.List<java.lang.String>)
//  .expiresIn(java.lang.Number)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.Initializer.parameter.payload">payload</a></code> | <code>java.lang.String</code> | A JSON-encoded JWT claims set that will be included in the signed JWT. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.Initializer.parameter.targetServiceAccount">targetServiceAccount</a></code> | <code>java.lang.String</code> | The email of the service account that will sign the JWT. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.Initializer.parameter.delegates">delegates</a></code> | <code>java.util.List<java.lang.String></code> | Delegate chain of approvals needed to perform full impersonation. Specify the fully qualified service account name. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.Initializer.parameter.expiresIn">expiresIn</a></code> | <code>java.lang.Number</code> | Number of seconds until the JWT expires. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `payload`<sup>Required</sup> <a name="payload" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.Initializer.parameter.payload"></a>

- *Type:* java.lang.String

A JSON-encoded JWT claims set that will be included in the signed JWT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/ephemeral-resources/service_account_jwt#payload EphemeralGoogleServiceAccountJwt#payload}

---

##### `targetServiceAccount`<sup>Required</sup> <a name="targetServiceAccount" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.Initializer.parameter.targetServiceAccount"></a>

- *Type:* java.lang.String

The email of the service account that will sign the JWT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/ephemeral-resources/service_account_jwt#target_service_account EphemeralGoogleServiceAccountJwt#target_service_account}

---

##### `delegates`<sup>Optional</sup> <a name="delegates" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.Initializer.parameter.delegates"></a>

- *Type:* java.util.List<java.lang.String>

Delegate chain of approvals needed to perform full impersonation. Specify the fully qualified service account name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/ephemeral-resources/service_account_jwt#delegates EphemeralGoogleServiceAccountJwt#delegates}

---

##### `expiresIn`<sup>Optional</sup> <a name="expiresIn" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.Initializer.parameter.expiresIn"></a>

- *Type:* java.lang.Number

Number of seconds until the JWT expires.

If set and non-zero an `exp` claim will be added to the payload derived from the current timestamp plus expires_in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/ephemeral-resources/service_account_jwt#expires_in EphemeralGoogleServiceAccountJwt#expires_in}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.toTerraform">toTerraform</a></code> | Adds this ephemeral resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.resetDelegates">resetDelegates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.resetExpiresIn">resetExpiresIn</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this ephemeral resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetDelegates` <a name="resetDelegates" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.resetDelegates"></a>

```java
public void resetDelegates()
```

##### `resetExpiresIn` <a name="resetExpiresIn" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.resetExpiresIn"></a>

```java
public void resetExpiresIn()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.isTerraformEphemeralResource">isTerraformEphemeralResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.isConstruct"></a>

```java
import io.cdktn.providers.google.ephemeral_google_service_account_jwt.EphemeralGoogleServiceAccountJwt;

EphemeralGoogleServiceAccountJwt.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.isTerraformElement"></a>

```java
import io.cdktn.providers.google.ephemeral_google_service_account_jwt.EphemeralGoogleServiceAccountJwt;

EphemeralGoogleServiceAccountJwt.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformEphemeralResource` <a name="isTerraformEphemeralResource" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.isTerraformEphemeralResource"></a>

```java
import io.cdktn.providers.google.ephemeral_google_service_account_jwt.EphemeralGoogleServiceAccountJwt;

EphemeralGoogleServiceAccountJwt.isTerraformEphemeralResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.isTerraformEphemeralResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.jwt">jwt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.delegatesInput">delegatesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.expiresInInput">expiresInInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.payloadInput">payloadInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.targetServiceAccountInput">targetServiceAccountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.delegates">delegates</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.expiresIn">expiresIn</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.payload">payload</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.targetServiceAccount">targetServiceAccount</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.lifecycle"></a>

```java
public TerraformEphemeralResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `jwt`<sup>Required</sup> <a name="jwt" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.jwt"></a>

```java
public java.lang.String getJwt();
```

- *Type:* java.lang.String

---

##### `delegatesInput`<sup>Optional</sup> <a name="delegatesInput" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.delegatesInput"></a>

```java
public java.util.List<java.lang.String> getDelegatesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `expiresInInput`<sup>Optional</sup> <a name="expiresInInput" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.expiresInInput"></a>

```java
public java.lang.Number getExpiresInInput();
```

- *Type:* java.lang.Number

---

##### `payloadInput`<sup>Optional</sup> <a name="payloadInput" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.payloadInput"></a>

```java
public java.lang.String getPayloadInput();
```

- *Type:* java.lang.String

---

##### `targetServiceAccountInput`<sup>Optional</sup> <a name="targetServiceAccountInput" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.targetServiceAccountInput"></a>

```java
public java.lang.String getTargetServiceAccountInput();
```

- *Type:* java.lang.String

---

##### `delegates`<sup>Required</sup> <a name="delegates" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.delegates"></a>

```java
public java.util.List<java.lang.String> getDelegates();
```

- *Type:* java.util.List<java.lang.String>

---

##### `expiresIn`<sup>Required</sup> <a name="expiresIn" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.expiresIn"></a>

```java
public java.lang.Number getExpiresIn();
```

- *Type:* java.lang.Number

---

##### `payload`<sup>Required</sup> <a name="payload" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.payload"></a>

```java
public java.lang.String getPayload();
```

- *Type:* java.lang.String

---

##### `targetServiceAccount`<sup>Required</sup> <a name="targetServiceAccount" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.targetServiceAccount"></a>

```java
public java.lang.String getTargetServiceAccount();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwt.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### EphemeralGoogleServiceAccountJwtConfig <a name="EphemeralGoogleServiceAccountJwtConfig" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwtConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwtConfig.Initializer"></a>

```java
import io.cdktn.providers.google.ephemeral_google_service_account_jwt.EphemeralGoogleServiceAccountJwtConfig;

EphemeralGoogleServiceAccountJwtConfig.builder()
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformEphemeralResourceLifecycle)
//  .provider(TerraformProvider)
    .payload(java.lang.String)
    .targetServiceAccount(java.lang.String)
//  .delegates(java.util.List<java.lang.String>)
//  .expiresIn(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwtConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwtConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwtConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwtConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwtConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwtConfig.property.payload">payload</a></code> | <code>java.lang.String</code> | A JSON-encoded JWT claims set that will be included in the signed JWT. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwtConfig.property.targetServiceAccount">targetServiceAccount</a></code> | <code>java.lang.String</code> | The email of the service account that will sign the JWT. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwtConfig.property.delegates">delegates</a></code> | <code>java.util.List<java.lang.String></code> | Delegate chain of approvals needed to perform full impersonation. Specify the fully qualified service account name. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwtConfig.property.expiresIn">expiresIn</a></code> | <code>java.lang.Number</code> | Number of seconds until the JWT expires. |

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwtConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwtConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwtConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwtConfig.property.lifecycle"></a>

```java
public TerraformEphemeralResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwtConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `payload`<sup>Required</sup> <a name="payload" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwtConfig.property.payload"></a>

```java
public java.lang.String getPayload();
```

- *Type:* java.lang.String

A JSON-encoded JWT claims set that will be included in the signed JWT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/ephemeral-resources/service_account_jwt#payload EphemeralGoogleServiceAccountJwt#payload}

---

##### `targetServiceAccount`<sup>Required</sup> <a name="targetServiceAccount" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwtConfig.property.targetServiceAccount"></a>

```java
public java.lang.String getTargetServiceAccount();
```

- *Type:* java.lang.String

The email of the service account that will sign the JWT.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/ephemeral-resources/service_account_jwt#target_service_account EphemeralGoogleServiceAccountJwt#target_service_account}

---

##### `delegates`<sup>Optional</sup> <a name="delegates" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwtConfig.property.delegates"></a>

```java
public java.util.List<java.lang.String> getDelegates();
```

- *Type:* java.util.List<java.lang.String>

Delegate chain of approvals needed to perform full impersonation. Specify the fully qualified service account name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/ephemeral-resources/service_account_jwt#delegates EphemeralGoogleServiceAccountJwt#delegates}

---

##### `expiresIn`<sup>Optional</sup> <a name="expiresIn" id="@cdktn/provider-google.ephemeralGoogleServiceAccountJwt.EphemeralGoogleServiceAccountJwtConfig.property.expiresIn"></a>

```java
public java.lang.Number getExpiresIn();
```

- *Type:* java.lang.Number

Number of seconds until the JWT expires.

If set and non-zero an `exp` claim will be added to the payload derived from the current timestamp plus expires_in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/ephemeral-resources/service_account_jwt#expires_in EphemeralGoogleServiceAccountJwt#expires_in}

---



