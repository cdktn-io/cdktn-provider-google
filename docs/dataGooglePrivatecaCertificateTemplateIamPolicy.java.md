# `dataGooglePrivatecaCertificateTemplateIamPolicy` Submodule <a name="`dataGooglePrivatecaCertificateTemplateIamPolicy` Submodule" id="@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGooglePrivatecaCertificateTemplateIamPolicy <a name="DataGooglePrivatecaCertificateTemplateIamPolicy" id="@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/privateca_certificate_template_iam_policy google_privateca_certificate_template_iam_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_privateca_certificate_template_iam_policy.DataGooglePrivatecaCertificateTemplateIamPolicy;

DataGooglePrivatecaCertificateTemplateIamPolicy.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .certificateTemplate(java.lang.String)
//  .id(java.lang.String)
//  .location(java.lang.String)
//  .project(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.Initializer.parameter.certificateTemplate">certificateTemplate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/privateca_certificate_template_iam_policy#certificate_template DataGooglePrivatecaCertificateTemplateIamPolicy#certificate_template}. |
| <code><a href="#@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/privateca_certificate_template_iam_policy#id DataGooglePrivatecaCertificateTemplateIamPolicy#id}. |
| <code><a href="#@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/privateca_certificate_template_iam_policy#location DataGooglePrivatecaCertificateTemplateIamPolicy#location}. |
| <code><a href="#@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/privateca_certificate_template_iam_policy#project DataGooglePrivatecaCertificateTemplateIamPolicy#project}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `certificateTemplate`<sup>Required</sup> <a name="certificateTemplate" id="@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.Initializer.parameter.certificateTemplate"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/privateca_certificate_template_iam_policy#certificate_template DataGooglePrivatecaCertificateTemplateIamPolicy#certificate_template}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/privateca_certificate_template_iam_policy#id DataGooglePrivatecaCertificateTemplateIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/privateca_certificate_template_iam_policy#location DataGooglePrivatecaCertificateTemplateIamPolicy#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/privateca_certificate_template_iam_policy#project DataGooglePrivatecaCertificateTemplateIamPolicy#project}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.resetId"></a>

```java
public void resetId()
```

##### `resetLocation` <a name="resetLocation" id="@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.resetLocation"></a>

```java
public void resetLocation()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.resetProject"></a>

```java
public void resetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataGooglePrivatecaCertificateTemplateIamPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.isConstruct"></a>

```java
import io.cdktn.providers.google.data_google_privateca_certificate_template_iam_policy.DataGooglePrivatecaCertificateTemplateIamPolicy;

DataGooglePrivatecaCertificateTemplateIamPolicy.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.isTerraformElement"></a>

```java
import io.cdktn.providers.google.data_google_privateca_certificate_template_iam_policy.DataGooglePrivatecaCertificateTemplateIamPolicy;

DataGooglePrivatecaCertificateTemplateIamPolicy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.isTerraformDataSource"></a>

```java
import io.cdktn.providers.google.data_google_privateca_certificate_template_iam_policy.DataGooglePrivatecaCertificateTemplateIamPolicy;

DataGooglePrivatecaCertificateTemplateIamPolicy.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.data_google_privateca_certificate_template_iam_policy.DataGooglePrivatecaCertificateTemplateIamPolicy;

DataGooglePrivatecaCertificateTemplateIamPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataGooglePrivatecaCertificateTemplateIamPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataGooglePrivatecaCertificateTemplateIamPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataGooglePrivatecaCertificateTemplateIamPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataGooglePrivatecaCertificateTemplateIamPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/privateca_certificate_template_iam_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataGooglePrivatecaCertificateTemplateIamPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.property.policyData">policyData</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.property.certificateTemplateInput">certificateTemplateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.property.certificateTemplate">certificateTemplate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `policyData`<sup>Required</sup> <a name="policyData" id="@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.property.policyData"></a>

```java
public java.lang.String getPolicyData();
```

- *Type:* java.lang.String

---

##### `certificateTemplateInput`<sup>Optional</sup> <a name="certificateTemplateInput" id="@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.property.certificateTemplateInput"></a>

```java
public java.lang.String getCertificateTemplateInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `certificateTemplate`<sup>Required</sup> <a name="certificateTemplate" id="@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.property.certificateTemplate"></a>

```java
public java.lang.String getCertificateTemplate();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataGooglePrivatecaCertificateTemplateIamPolicyConfig <a name="DataGooglePrivatecaCertificateTemplateIamPolicyConfig" id="@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicyConfig.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_privateca_certificate_template_iam_policy.DataGooglePrivatecaCertificateTemplateIamPolicyConfig;

DataGooglePrivatecaCertificateTemplateIamPolicyConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .certificateTemplate(java.lang.String)
//  .id(java.lang.String)
//  .location(java.lang.String)
//  .project(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicyConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicyConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicyConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicyConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicyConfig.property.certificateTemplate">certificateTemplate</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/privateca_certificate_template_iam_policy#certificate_template DataGooglePrivatecaCertificateTemplateIamPolicy#certificate_template}. |
| <code><a href="#@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicyConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/privateca_certificate_template_iam_policy#id DataGooglePrivatecaCertificateTemplateIamPolicy#id}. |
| <code><a href="#@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicyConfig.property.location">location</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/privateca_certificate_template_iam_policy#location DataGooglePrivatecaCertificateTemplateIamPolicy#location}. |
| <code><a href="#@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicyConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/privateca_certificate_template_iam_policy#project DataGooglePrivatecaCertificateTemplateIamPolicy#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicyConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicyConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicyConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `certificateTemplate`<sup>Required</sup> <a name="certificateTemplate" id="@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicyConfig.property.certificateTemplate"></a>

```java
public java.lang.String getCertificateTemplate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/privateca_certificate_template_iam_policy#certificate_template DataGooglePrivatecaCertificateTemplateIamPolicy#certificate_template}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicyConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/privateca_certificate_template_iam_policy#id DataGooglePrivatecaCertificateTemplateIamPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicyConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/privateca_certificate_template_iam_policy#location DataGooglePrivatecaCertificateTemplateIamPolicy#location}.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataGooglePrivatecaCertificateTemplateIamPolicy.DataGooglePrivatecaCertificateTemplateIamPolicyConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/data-sources/privateca_certificate_template_iam_policy#project DataGooglePrivatecaCertificateTemplateIamPolicy#project}.

---



