# `dataGoogleHealthcareConsentStoreIamPolicy` Submodule <a name="`dataGoogleHealthcareConsentStoreIamPolicy` Submodule" id="@cdktn/provider-google.dataGoogleHealthcareConsentStoreIamPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleHealthcareConsentStoreIamPolicy <a name="DataGoogleHealthcareConsentStoreIamPolicy" id="@cdktn/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/data-sources/healthcare_consent_store_iam_policy google_healthcare_consent_store_iam_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_healthcare_consent_store_iam_policy.DataGoogleHealthcareConsentStoreIamPolicy;

DataGoogleHealthcareConsentStoreIamPolicy.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .consentStoreId(java.lang.String)
    .dataset(java.lang.String)
//  .id(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.Initializer.parameter.consentStoreId">consentStoreId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/data-sources/healthcare_consent_store_iam_policy#consent_store_id DataGoogleHealthcareConsentStoreIamPolicy#consent_store_id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.Initializer.parameter.dataset">dataset</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/data-sources/healthcare_consent_store_iam_policy#dataset DataGoogleHealthcareConsentStoreIamPolicy#dataset}. |
| <code><a href="#@cdktn/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/data-sources/healthcare_consent_store_iam_policy#id DataGoogleHealthcareConsentStoreIamPolicy#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `consentStoreId`<sup>Required</sup> <a name="consentStoreId" id="@cdktn/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.Initializer.parameter.consentStoreId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/data-sources/healthcare_consent_store_iam_policy#consent_store_id DataGoogleHealthcareConsentStoreIamPolicy#consent_store_id}.

---

##### `dataset`<sup>Required</sup> <a name="dataset" id="@cdktn/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.Initializer.parameter.dataset"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/data-sources/healthcare_consent_store_iam_policy#dataset DataGoogleHealthcareConsentStoreIamPolicy#dataset}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/data-sources/healthcare_consent_store_iam_policy#id DataGoogleHealthcareConsentStoreIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.resetId">resetId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktn/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.resetId"></a>

```java
public void resetId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleHealthcareConsentStoreIamPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.isConstruct"></a>

```java
import io.cdktn.providers.google.data_google_healthcare_consent_store_iam_policy.DataGoogleHealthcareConsentStoreIamPolicy;

DataGoogleHealthcareConsentStoreIamPolicy.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.isTerraformElement"></a>

```java
import io.cdktn.providers.google.data_google_healthcare_consent_store_iam_policy.DataGoogleHealthcareConsentStoreIamPolicy;

DataGoogleHealthcareConsentStoreIamPolicy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.isTerraformDataSource"></a>

```java
import io.cdktn.providers.google.data_google_healthcare_consent_store_iam_policy.DataGoogleHealthcareConsentStoreIamPolicy;

DataGoogleHealthcareConsentStoreIamPolicy.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.data_google_healthcare_consent_store_iam_policy.DataGoogleHealthcareConsentStoreIamPolicy;

DataGoogleHealthcareConsentStoreIamPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataGoogleHealthcareConsentStoreIamPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataGoogleHealthcareConsentStoreIamPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataGoogleHealthcareConsentStoreIamPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataGoogleHealthcareConsentStoreIamPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/data-sources/healthcare_consent_store_iam_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleHealthcareConsentStoreIamPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.property.policyData">policyData</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.property.consentStoreIdInput">consentStoreIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.property.datasetInput">datasetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.property.consentStoreId">consentStoreId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.property.dataset">dataset</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `policyData`<sup>Required</sup> <a name="policyData" id="@cdktn/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.property.policyData"></a>

```java
public java.lang.String getPolicyData();
```

- *Type:* java.lang.String

---

##### `consentStoreIdInput`<sup>Optional</sup> <a name="consentStoreIdInput" id="@cdktn/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.property.consentStoreIdInput"></a>

```java
public java.lang.String getConsentStoreIdInput();
```

- *Type:* java.lang.String

---

##### `datasetInput`<sup>Optional</sup> <a name="datasetInput" id="@cdktn/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.property.datasetInput"></a>

```java
public java.lang.String getDatasetInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `consentStoreId`<sup>Required</sup> <a name="consentStoreId" id="@cdktn/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.property.consentStoreId"></a>

```java
public java.lang.String getConsentStoreId();
```

- *Type:* java.lang.String

---

##### `dataset`<sup>Required</sup> <a name="dataset" id="@cdktn/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.property.dataset"></a>

```java
public java.lang.String getDataset();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleHealthcareConsentStoreIamPolicyConfig <a name="DataGoogleHealthcareConsentStoreIamPolicyConfig" id="@cdktn/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicyConfig.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_healthcare_consent_store_iam_policy.DataGoogleHealthcareConsentStoreIamPolicyConfig;

DataGoogleHealthcareConsentStoreIamPolicyConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .consentStoreId(java.lang.String)
    .dataset(java.lang.String)
//  .id(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicyConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicyConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicyConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicyConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicyConfig.property.consentStoreId">consentStoreId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/data-sources/healthcare_consent_store_iam_policy#consent_store_id DataGoogleHealthcareConsentStoreIamPolicy#consent_store_id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicyConfig.property.dataset">dataset</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/data-sources/healthcare_consent_store_iam_policy#dataset DataGoogleHealthcareConsentStoreIamPolicy#dataset}. |
| <code><a href="#@cdktn/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicyConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/data-sources/healthcare_consent_store_iam_policy#id DataGoogleHealthcareConsentStoreIamPolicy#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicyConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicyConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicyConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `consentStoreId`<sup>Required</sup> <a name="consentStoreId" id="@cdktn/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicyConfig.property.consentStoreId"></a>

```java
public java.lang.String getConsentStoreId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/data-sources/healthcare_consent_store_iam_policy#consent_store_id DataGoogleHealthcareConsentStoreIamPolicy#consent_store_id}.

---

##### `dataset`<sup>Required</sup> <a name="dataset" id="@cdktn/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicyConfig.property.dataset"></a>

```java
public java.lang.String getDataset();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/data-sources/healthcare_consent_store_iam_policy#dataset DataGoogleHealthcareConsentStoreIamPolicy#dataset}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleHealthcareConsentStoreIamPolicy.DataGoogleHealthcareConsentStoreIamPolicyConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.35.0/docs/data-sources/healthcare_consent_store_iam_policy#id DataGoogleHealthcareConsentStoreIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---



