# `ephemeralGoogleServiceAccountKey` Submodule <a name="`ephemeralGoogleServiceAccountKey` Submodule" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EphemeralGoogleServiceAccountKey <a name="EphemeralGoogleServiceAccountKey" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/ephemeral-resources/service_account_key google_service_account_key}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.Initializer"></a>

```java
import io.cdktn.providers.google.ephemeral_google_service_account_key.EphemeralGoogleServiceAccountKey;

EphemeralGoogleServiceAccountKey.Builder.create(Construct scope, java.lang.String id)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformEphemeralResourceLifecycle)
//  .provider(TerraformProvider)
//  .fetchKey(java.lang.Boolean|IResolvable)
//  .keyAlgorithm(java.lang.String)
//  .name(java.lang.String)
//  .privateKey(java.lang.String)
//  .privateKeyType(java.lang.String)
//  .publicKeyData(java.lang.String)
//  .publicKeyType(java.lang.String)
//  .serviceAccountId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.Initializer.parameter.fetchKey">fetchKey</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to fetch the public key. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.Initializer.parameter.keyAlgorithm">keyAlgorithm</a></code> | <code>java.lang.String</code> | The algorithm used to generate the key. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the service account key. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.Initializer.parameter.privateKey">privateKey</a></code> | <code>java.lang.String</code> | The private key, base64 encoded. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.Initializer.parameter.privateKeyType">privateKeyType</a></code> | <code>java.lang.String</code> | The type of the private key. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.Initializer.parameter.publicKeyData">publicKeyData</a></code> | <code>java.lang.String</code> | The public key, base64 encoded. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.Initializer.parameter.publicKeyType">publicKeyType</a></code> | <code>java.lang.String</code> | The output format of the public key requested. TYPE_X509_PEM_FILE is the default output format. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.Initializer.parameter.serviceAccountId">serviceAccountId</a></code> | <code>java.lang.String</code> | The ID of the parent service account of the key. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `fetchKey`<sup>Optional</sup> <a name="fetchKey" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.Initializer.parameter.fetchKey"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to fetch the public key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/ephemeral-resources/service_account_key#fetch_key EphemeralGoogleServiceAccountKey#fetch_key}

---

##### `keyAlgorithm`<sup>Optional</sup> <a name="keyAlgorithm" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.Initializer.parameter.keyAlgorithm"></a>

- *Type:* java.lang.String

The algorithm used to generate the key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/ephemeral-resources/service_account_key#key_algorithm EphemeralGoogleServiceAccountKey#key_algorithm}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the service account key.

This must have format `projects/{PROJECT_ID}/serviceAccounts/{ACCOUNT}/keys/{KEYID}`, where `{ACCOUNT}` is the email address or unique id of the service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/ephemeral-resources/service_account_key#name EphemeralGoogleServiceAccountKey#name}

---

##### `privateKey`<sup>Optional</sup> <a name="privateKey" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.Initializer.parameter.privateKey"></a>

- *Type:* java.lang.String

The private key, base64 encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/ephemeral-resources/service_account_key#private_key EphemeralGoogleServiceAccountKey#private_key}

---

##### `privateKeyType`<sup>Optional</sup> <a name="privateKeyType" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.Initializer.parameter.privateKeyType"></a>

- *Type:* java.lang.String

The type of the private key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/ephemeral-resources/service_account_key#private_key_type EphemeralGoogleServiceAccountKey#private_key_type}

---

##### `publicKeyData`<sup>Optional</sup> <a name="publicKeyData" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.Initializer.parameter.publicKeyData"></a>

- *Type:* java.lang.String

The public key, base64 encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/ephemeral-resources/service_account_key#public_key_data EphemeralGoogleServiceAccountKey#public_key_data}

---

##### `publicKeyType`<sup>Optional</sup> <a name="publicKeyType" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.Initializer.parameter.publicKeyType"></a>

- *Type:* java.lang.String

The output format of the public key requested. TYPE_X509_PEM_FILE is the default output format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/ephemeral-resources/service_account_key#public_key_type EphemeralGoogleServiceAccountKey#public_key_type}

---

##### `serviceAccountId`<sup>Optional</sup> <a name="serviceAccountId" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.Initializer.parameter.serviceAccountId"></a>

- *Type:* java.lang.String

The ID of the parent service account of the key.

This can be a string in the format {ACCOUNT} or projects/{PROJECT_ID}/serviceAccounts/{ACCOUNT}, where {ACCOUNT} is the email address or unique id of the service account. If the {ACCOUNT} syntax is used, the project will be inferred from the provider's configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/ephemeral-resources/service_account_key#service_account_id EphemeralGoogleServiceAccountKey#service_account_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.toTerraform">toTerraform</a></code> | Adds this ephemeral resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.resetFetchKey">resetFetchKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.resetKeyAlgorithm">resetKeyAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.resetPrivateKey">resetPrivateKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.resetPrivateKeyType">resetPrivateKeyType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.resetPublicKeyData">resetPublicKeyData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.resetPublicKeyType">resetPublicKeyType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.resetServiceAccountId">resetServiceAccountId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this ephemeral resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetFetchKey` <a name="resetFetchKey" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.resetFetchKey"></a>

```java
public void resetFetchKey()
```

##### `resetKeyAlgorithm` <a name="resetKeyAlgorithm" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.resetKeyAlgorithm"></a>

```java
public void resetKeyAlgorithm()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.resetName"></a>

```java
public void resetName()
```

##### `resetPrivateKey` <a name="resetPrivateKey" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.resetPrivateKey"></a>

```java
public void resetPrivateKey()
```

##### `resetPrivateKeyType` <a name="resetPrivateKeyType" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.resetPrivateKeyType"></a>

```java
public void resetPrivateKeyType()
```

##### `resetPublicKeyData` <a name="resetPublicKeyData" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.resetPublicKeyData"></a>

```java
public void resetPublicKeyData()
```

##### `resetPublicKeyType` <a name="resetPublicKeyType" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.resetPublicKeyType"></a>

```java
public void resetPublicKeyType()
```

##### `resetServiceAccountId` <a name="resetServiceAccountId" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.resetServiceAccountId"></a>

```java
public void resetServiceAccountId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.isTerraformEphemeralResource">isTerraformEphemeralResource</a></code> | *No description.* |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.isConstruct"></a>

```java
import io.cdktn.providers.google.ephemeral_google_service_account_key.EphemeralGoogleServiceAccountKey;

EphemeralGoogleServiceAccountKey.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.isTerraformElement"></a>

```java
import io.cdktn.providers.google.ephemeral_google_service_account_key.EphemeralGoogleServiceAccountKey;

EphemeralGoogleServiceAccountKey.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformEphemeralResource` <a name="isTerraformEphemeralResource" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.isTerraformEphemeralResource"></a>

```java
import io.cdktn.providers.google.ephemeral_google_service_account_key.EphemeralGoogleServiceAccountKey;

EphemeralGoogleServiceAccountKey.isTerraformEphemeralResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.isTerraformEphemeralResource.parameter.x"></a>

- *Type:* java.lang.Object

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.fetchKeyInput">fetchKeyInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.keyAlgorithmInput">keyAlgorithmInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.privateKeyInput">privateKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.privateKeyTypeInput">privateKeyTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.publicKeyDataInput">publicKeyDataInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.publicKeyTypeInput">publicKeyTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.serviceAccountIdInput">serviceAccountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.fetchKey">fetchKey</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.keyAlgorithm">keyAlgorithm</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.privateKey">privateKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.privateKeyType">privateKeyType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.publicKeyData">publicKeyData</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.publicKeyType">publicKeyType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.serviceAccountId">serviceAccountId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.lifecycle"></a>

```java
public TerraformEphemeralResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `fetchKeyInput`<sup>Optional</sup> <a name="fetchKeyInput" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.fetchKeyInput"></a>

```java
public java.lang.Boolean|IResolvable getFetchKeyInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `keyAlgorithmInput`<sup>Optional</sup> <a name="keyAlgorithmInput" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.keyAlgorithmInput"></a>

```java
public java.lang.String getKeyAlgorithmInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `privateKeyInput`<sup>Optional</sup> <a name="privateKeyInput" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.privateKeyInput"></a>

```java
public java.lang.String getPrivateKeyInput();
```

- *Type:* java.lang.String

---

##### `privateKeyTypeInput`<sup>Optional</sup> <a name="privateKeyTypeInput" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.privateKeyTypeInput"></a>

```java
public java.lang.String getPrivateKeyTypeInput();
```

- *Type:* java.lang.String

---

##### `publicKeyDataInput`<sup>Optional</sup> <a name="publicKeyDataInput" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.publicKeyDataInput"></a>

```java
public java.lang.String getPublicKeyDataInput();
```

- *Type:* java.lang.String

---

##### `publicKeyTypeInput`<sup>Optional</sup> <a name="publicKeyTypeInput" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.publicKeyTypeInput"></a>

```java
public java.lang.String getPublicKeyTypeInput();
```

- *Type:* java.lang.String

---

##### `serviceAccountIdInput`<sup>Optional</sup> <a name="serviceAccountIdInput" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.serviceAccountIdInput"></a>

```java
public java.lang.String getServiceAccountIdInput();
```

- *Type:* java.lang.String

---

##### `fetchKey`<sup>Required</sup> <a name="fetchKey" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.fetchKey"></a>

```java
public java.lang.Boolean|IResolvable getFetchKey();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `keyAlgorithm`<sup>Required</sup> <a name="keyAlgorithm" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.keyAlgorithm"></a>

```java
public java.lang.String getKeyAlgorithm();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `privateKey`<sup>Required</sup> <a name="privateKey" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.privateKey"></a>

```java
public java.lang.String getPrivateKey();
```

- *Type:* java.lang.String

---

##### `privateKeyType`<sup>Required</sup> <a name="privateKeyType" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.privateKeyType"></a>

```java
public java.lang.String getPrivateKeyType();
```

- *Type:* java.lang.String

---

##### `publicKeyData`<sup>Required</sup> <a name="publicKeyData" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.publicKeyData"></a>

```java
public java.lang.String getPublicKeyData();
```

- *Type:* java.lang.String

---

##### `publicKeyType`<sup>Required</sup> <a name="publicKeyType" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.publicKeyType"></a>

```java
public java.lang.String getPublicKeyType();
```

- *Type:* java.lang.String

---

##### `serviceAccountId`<sup>Required</sup> <a name="serviceAccountId" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.serviceAccountId"></a>

```java
public java.lang.String getServiceAccountId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKey.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### EphemeralGoogleServiceAccountKeyConfig <a name="EphemeralGoogleServiceAccountKeyConfig" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKeyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKeyConfig.Initializer"></a>

```java
import io.cdktn.providers.google.ephemeral_google_service_account_key.EphemeralGoogleServiceAccountKeyConfig;

EphemeralGoogleServiceAccountKeyConfig.builder()
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformEphemeralResourceLifecycle)
//  .provider(TerraformProvider)
//  .fetchKey(java.lang.Boolean|IResolvable)
//  .keyAlgorithm(java.lang.String)
//  .name(java.lang.String)
//  .privateKey(java.lang.String)
//  .privateKeyType(java.lang.String)
//  .publicKeyData(java.lang.String)
//  .publicKeyType(java.lang.String)
//  .serviceAccountId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKeyConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKeyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKeyConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKeyConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformEphemeralResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKeyConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKeyConfig.property.fetchKey">fetchKey</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to fetch the public key. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKeyConfig.property.keyAlgorithm">keyAlgorithm</a></code> | <code>java.lang.String</code> | The algorithm used to generate the key. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKeyConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the service account key. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKeyConfig.property.privateKey">privateKey</a></code> | <code>java.lang.String</code> | The private key, base64 encoded. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKeyConfig.property.privateKeyType">privateKeyType</a></code> | <code>java.lang.String</code> | The type of the private key. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKeyConfig.property.publicKeyData">publicKeyData</a></code> | <code>java.lang.String</code> | The public key, base64 encoded. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKeyConfig.property.publicKeyType">publicKeyType</a></code> | <code>java.lang.String</code> | The output format of the public key requested. TYPE_X509_PEM_FILE is the default output format. |
| <code><a href="#@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKeyConfig.property.serviceAccountId">serviceAccountId</a></code> | <code>java.lang.String</code> | The ID of the parent service account of the key. |

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKeyConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKeyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKeyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKeyConfig.property.lifecycle"></a>

```java
public TerraformEphemeralResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformEphemeralResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKeyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `fetchKey`<sup>Optional</sup> <a name="fetchKey" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKeyConfig.property.fetchKey"></a>

```java
public java.lang.Boolean|IResolvable getFetchKey();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to fetch the public key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/ephemeral-resources/service_account_key#fetch_key EphemeralGoogleServiceAccountKey#fetch_key}

---

##### `keyAlgorithm`<sup>Optional</sup> <a name="keyAlgorithm" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKeyConfig.property.keyAlgorithm"></a>

```java
public java.lang.String getKeyAlgorithm();
```

- *Type:* java.lang.String

The algorithm used to generate the key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/ephemeral-resources/service_account_key#key_algorithm EphemeralGoogleServiceAccountKey#key_algorithm}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKeyConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the service account key.

This must have format `projects/{PROJECT_ID}/serviceAccounts/{ACCOUNT}/keys/{KEYID}`, where `{ACCOUNT}` is the email address or unique id of the service account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/ephemeral-resources/service_account_key#name EphemeralGoogleServiceAccountKey#name}

---

##### `privateKey`<sup>Optional</sup> <a name="privateKey" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKeyConfig.property.privateKey"></a>

```java
public java.lang.String getPrivateKey();
```

- *Type:* java.lang.String

The private key, base64 encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/ephemeral-resources/service_account_key#private_key EphemeralGoogleServiceAccountKey#private_key}

---

##### `privateKeyType`<sup>Optional</sup> <a name="privateKeyType" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKeyConfig.property.privateKeyType"></a>

```java
public java.lang.String getPrivateKeyType();
```

- *Type:* java.lang.String

The type of the private key.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/ephemeral-resources/service_account_key#private_key_type EphemeralGoogleServiceAccountKey#private_key_type}

---

##### `publicKeyData`<sup>Optional</sup> <a name="publicKeyData" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKeyConfig.property.publicKeyData"></a>

```java
public java.lang.String getPublicKeyData();
```

- *Type:* java.lang.String

The public key, base64 encoded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/ephemeral-resources/service_account_key#public_key_data EphemeralGoogleServiceAccountKey#public_key_data}

---

##### `publicKeyType`<sup>Optional</sup> <a name="publicKeyType" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKeyConfig.property.publicKeyType"></a>

```java
public java.lang.String getPublicKeyType();
```

- *Type:* java.lang.String

The output format of the public key requested. TYPE_X509_PEM_FILE is the default output format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/ephemeral-resources/service_account_key#public_key_type EphemeralGoogleServiceAccountKey#public_key_type}

---

##### `serviceAccountId`<sup>Optional</sup> <a name="serviceAccountId" id="@cdktn/provider-google.ephemeralGoogleServiceAccountKey.EphemeralGoogleServiceAccountKeyConfig.property.serviceAccountId"></a>

```java
public java.lang.String getServiceAccountId();
```

- *Type:* java.lang.String

The ID of the parent service account of the key.

This can be a string in the format {ACCOUNT} or projects/{PROJECT_ID}/serviceAccounts/{ACCOUNT}, where {ACCOUNT} is the email address or unique id of the service account. If the {ACCOUNT} syntax is used, the project will be inferred from the provider's configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.46.1/docs/ephemeral-resources/service_account_key#service_account_id EphemeralGoogleServiceAccountKey#service_account_id}

---



