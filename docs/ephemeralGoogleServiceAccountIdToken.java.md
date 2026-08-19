# `ephemeralGoogleServiceAccountIdToken` Submodule <a name="`ephemeralGoogleServiceAccountIdToken` Submodule" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EphemeralGoogleServiceAccountIdToken <a name="EphemeralGoogleServiceAccountIdToken" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/ephemeral-resources/service_account_id_token google_service_account_id_token}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.Initializer"></a>

```java
import io.cdktn.providers.google.ephemeral_google_service_account_id_token.EphemeralGoogleServiceAccountIdToken;

EphemeralGoogleServiceAccountIdToken.Builder.create(Construct scope, java.lang.String id)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformEphemeralResourceLifecycle)
//  .provider(TerraformProvider)
    .targetAudience(java.lang.String)
//  .delegates(java.util.List<java.lang.String>)
//  .includeEmail(java.lang.Boolean|IResolvable)
//  .targetServiceAccount(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.Initializer.parameter.targetAudience">targetAudience</a></code> | <code>java.lang.String</code> | The audience claim for the `id_token`. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.Initializer.parameter.delegates">delegates</a></code> | <code>java.util.List<java.lang.String></code> | Delegate chain of approvals needed to perform full impersonation. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.Initializer.parameter.includeEmail">includeEmail</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Include the verified email in the claim. Used only when using impersonation mode. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.Initializer.parameter.targetServiceAccount">targetServiceAccount</a></code> | <code>java.lang.String</code> | The email of the service account being impersonated.  Used only when using impersonation mode. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `targetAudience`<sup>Required</sup> <a name="targetAudience" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.Initializer.parameter.targetAudience"></a>

- *Type:* java.lang.String

The audience claim for the `id_token`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/ephemeral-resources/service_account_id_token#target_audience EphemeralGoogleServiceAccountIdToken#target_audience}

---

##### `delegates`<sup>Optional</sup> <a name="delegates" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.Initializer.parameter.delegates"></a>

- *Type:* java.util.List<java.lang.String>

Delegate chain of approvals needed to perform full impersonation.

Specify the fully qualified service account name.  Used only when using impersonation mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/ephemeral-resources/service_account_id_token#delegates EphemeralGoogleServiceAccountIdToken#delegates}

---

##### `includeEmail`<sup>Optional</sup> <a name="includeEmail" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.Initializer.parameter.includeEmail"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Include the verified email in the claim. Used only when using impersonation mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/ephemeral-resources/service_account_id_token#include_email EphemeralGoogleServiceAccountIdToken#include_email}

---

##### `targetServiceAccount`<sup>Optional</sup> <a name="targetServiceAccount" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.Initializer.parameter.targetServiceAccount"></a>

- *Type:* java.lang.String

The email of the service account being impersonated.  Used only when using impersonation mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/ephemeral-resources/service_account_id_token#target_service_account EphemeralGoogleServiceAccountIdToken#target_service_account}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.toTerraform">toTerraform</a></code> | Adds this ephemeral resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.resetDelegates">resetDelegates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.resetIncludeEmail">resetIncludeEmail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.resetTargetServiceAccount">resetTargetServiceAccount</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this ephemeral resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetDelegates` <a name="resetDelegates" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.resetDelegates"></a>

```java
public void resetDelegates()
```

##### `resetIncludeEmail` <a name="resetIncludeEmail" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.resetIncludeEmail"></a>

```java
public void resetIncludeEmail()
```

##### `resetTargetServiceAccount` <a name="resetTargetServiceAccount" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.resetTargetServiceAccount"></a>

```java
public void resetTargetServiceAccount()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.isTerraformEphemeralResource">isTerraformEphemeralResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.isConstruct"></a>

```java
import io.cdktn.providers.google.ephemeral_google_service_account_id_token.EphemeralGoogleServiceAccountIdToken;

EphemeralGoogleServiceAccountIdToken.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.isTerraformElement"></a>

```java
import io.cdktn.providers.google.ephemeral_google_service_account_id_token.EphemeralGoogleServiceAccountIdToken;

EphemeralGoogleServiceAccountIdToken.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformEphemeralResource` <a name="isTerraformEphemeralResource" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.isTerraformEphemeralResource"></a>

```java
import io.cdktn.providers.google.ephemeral_google_service_account_id_token.EphemeralGoogleServiceAccountIdToken;

EphemeralGoogleServiceAccountIdToken.isTerraformEphemeralResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.isTerraformEphemeralResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.idToken">idToken</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.delegatesInput">delegatesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.includeEmailInput">includeEmailInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.targetAudienceInput">targetAudienceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.targetServiceAccountInput">targetServiceAccountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.delegates">delegates</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.includeEmail">includeEmail</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.targetAudience">targetAudience</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.targetServiceAccount">targetServiceAccount</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.lifecycle"></a>

```java
public TerraformEphemeralResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `idToken`<sup>Required</sup> <a name="idToken" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.idToken"></a>

```java
public java.lang.String getIdToken();
```

- *Type:* java.lang.String

---

##### `delegatesInput`<sup>Optional</sup> <a name="delegatesInput" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.delegatesInput"></a>

```java
public java.util.List<java.lang.String> getDelegatesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `includeEmailInput`<sup>Optional</sup> <a name="includeEmailInput" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.includeEmailInput"></a>

```java
public java.lang.Boolean|IResolvable getIncludeEmailInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `targetAudienceInput`<sup>Optional</sup> <a name="targetAudienceInput" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.targetAudienceInput"></a>

```java
public java.lang.String getTargetAudienceInput();
```

- *Type:* java.lang.String

---

##### `targetServiceAccountInput`<sup>Optional</sup> <a name="targetServiceAccountInput" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.targetServiceAccountInput"></a>

```java
public java.lang.String getTargetServiceAccountInput();
```

- *Type:* java.lang.String

---

##### `delegates`<sup>Required</sup> <a name="delegates" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.delegates"></a>

```java
public java.util.List<java.lang.String> getDelegates();
```

- *Type:* java.util.List<java.lang.String>

---

##### `includeEmail`<sup>Required</sup> <a name="includeEmail" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.includeEmail"></a>

```java
public java.lang.Boolean|IResolvable getIncludeEmail();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `targetAudience`<sup>Required</sup> <a name="targetAudience" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.targetAudience"></a>

```java
public java.lang.String getTargetAudience();
```

- *Type:* java.lang.String

---

##### `targetServiceAccount`<sup>Required</sup> <a name="targetServiceAccount" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.targetServiceAccount"></a>

```java
public java.lang.String getTargetServiceAccount();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdToken.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### EphemeralGoogleServiceAccountIdTokenConfig <a name="EphemeralGoogleServiceAccountIdTokenConfig" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdTokenConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdTokenConfig.Initializer"></a>

```java
import io.cdktn.providers.google.ephemeral_google_service_account_id_token.EphemeralGoogleServiceAccountIdTokenConfig;

EphemeralGoogleServiceAccountIdTokenConfig.builder()
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformEphemeralResourceLifecycle)
//  .provider(TerraformProvider)
    .targetAudience(java.lang.String)
//  .delegates(java.util.List<java.lang.String>)
//  .includeEmail(java.lang.Boolean|IResolvable)
//  .targetServiceAccount(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdTokenConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdTokenConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdTokenConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdTokenConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdTokenConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdTokenConfig.property.targetAudience">targetAudience</a></code> | <code>java.lang.String</code> | The audience claim for the `id_token`. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdTokenConfig.property.delegates">delegates</a></code> | <code>java.util.List<java.lang.String></code> | Delegate chain of approvals needed to perform full impersonation. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdTokenConfig.property.includeEmail">includeEmail</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Include the verified email in the claim. Used only when using impersonation mode. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdTokenConfig.property.targetServiceAccount">targetServiceAccount</a></code> | <code>java.lang.String</code> | The email of the service account being impersonated.  Used only when using impersonation mode. |

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdTokenConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdTokenConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdTokenConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdTokenConfig.property.lifecycle"></a>

```java
public TerraformEphemeralResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdTokenConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `targetAudience`<sup>Required</sup> <a name="targetAudience" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdTokenConfig.property.targetAudience"></a>

```java
public java.lang.String getTargetAudience();
```

- *Type:* java.lang.String

The audience claim for the `id_token`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/ephemeral-resources/service_account_id_token#target_audience EphemeralGoogleServiceAccountIdToken#target_audience}

---

##### `delegates`<sup>Optional</sup> <a name="delegates" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdTokenConfig.property.delegates"></a>

```java
public java.util.List<java.lang.String> getDelegates();
```

- *Type:* java.util.List<java.lang.String>

Delegate chain of approvals needed to perform full impersonation.

Specify the fully qualified service account name.  Used only when using impersonation mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/ephemeral-resources/service_account_id_token#delegates EphemeralGoogleServiceAccountIdToken#delegates}

---

##### `includeEmail`<sup>Optional</sup> <a name="includeEmail" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdTokenConfig.property.includeEmail"></a>

```java
public java.lang.Boolean|IResolvable getIncludeEmail();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Include the verified email in the claim. Used only when using impersonation mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/ephemeral-resources/service_account_id_token#include_email EphemeralGoogleServiceAccountIdToken#include_email}

---

##### `targetServiceAccount`<sup>Optional</sup> <a name="targetServiceAccount" id="@cdktn/provider-google.ephemeralGoogleServiceAccountIdToken.EphemeralGoogleServiceAccountIdTokenConfig.property.targetServiceAccount"></a>

```java
public java.lang.String getTargetServiceAccount();
```

- *Type:* java.lang.String

The email of the service account being impersonated.  Used only when using impersonation mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.45.0/docs/ephemeral-resources/service_account_id_token#target_service_account EphemeralGoogleServiceAccountIdToken#target_service_account}

---



