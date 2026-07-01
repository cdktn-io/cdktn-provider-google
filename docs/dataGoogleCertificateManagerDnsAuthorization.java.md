# `dataGoogleCertificateManagerDnsAuthorization` Submodule <a name="`dataGoogleCertificateManagerDnsAuthorization` Submodule" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleCertificateManagerDnsAuthorization <a name="DataGoogleCertificateManagerDnsAuthorization" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/certificate_manager_dns_authorization google_certificate_manager_dns_authorization}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_certificate_manager_dns_authorization.DataGoogleCertificateManagerDnsAuthorization;

DataGoogleCertificateManagerDnsAuthorization.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .domain(java.lang.String)
    .name(java.lang.String)
//  .id(java.lang.String)
//  .location(java.lang.String)
//  .project(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.Initializer.parameter.domain">domain</a></code> | <code>java.lang.String</code> | A domain which is being authorized. |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the resource; |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/certificate_manager_dns_authorization#id DataGoogleCertificateManagerDnsAuthorization#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | The Certificate Manager location. If not specified, "global" is used. |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/certificate_manager_dns_authorization#project DataGoogleCertificateManagerDnsAuthorization#project}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.Initializer.parameter.domain"></a>

- *Type:* java.lang.String

A domain which is being authorized.

A DnsAuthorization resource covers a
single domain and its wildcard, e.g. authorization for "example.com" can
be used to issue certificates for "example.com" and "*.example.com".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/certificate_manager_dns_authorization#domain DataGoogleCertificateManagerDnsAuthorization#domain}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the resource;

provided by the client when the resource is created.
The name must be 1-64 characters long, and match the regular expression [a-zA-Z][a-zA-Z0-9_-]* which means the first character must be a letter,
and all following characters must be a dash, underscore, letter or digit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/certificate_manager_dns_authorization#name DataGoogleCertificateManagerDnsAuthorization#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/certificate_manager_dns_authorization#id DataGoogleCertificateManagerDnsAuthorization#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.Initializer.parameter.location"></a>

- *Type:* java.lang.String

The Certificate Manager location. If not specified, "global" is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/certificate_manager_dns_authorization#location DataGoogleCertificateManagerDnsAuthorization#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/certificate_manager_dns_authorization#project DataGoogleCertificateManagerDnsAuthorization#project}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.resetLocation">resetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.resetProject">resetProject</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetId` <a name="resetId" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.resetId"></a>

```java
public void resetId()
```

##### `resetLocation` <a name="resetLocation" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.resetLocation"></a>

```java
public void resetLocation()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.resetProject"></a>

```java
public void resetProject()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleCertificateManagerDnsAuthorization resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.isConstruct"></a>

```java
import io.cdktn.providers.google.data_google_certificate_manager_dns_authorization.DataGoogleCertificateManagerDnsAuthorization;

DataGoogleCertificateManagerDnsAuthorization.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.isTerraformElement"></a>

```java
import io.cdktn.providers.google.data_google_certificate_manager_dns_authorization.DataGoogleCertificateManagerDnsAuthorization;

DataGoogleCertificateManagerDnsAuthorization.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.isTerraformDataSource"></a>

```java
import io.cdktn.providers.google.data_google_certificate_manager_dns_authorization.DataGoogleCertificateManagerDnsAuthorization;

DataGoogleCertificateManagerDnsAuthorization.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.data_google_certificate_manager_dns_authorization.DataGoogleCertificateManagerDnsAuthorization;

DataGoogleCertificateManagerDnsAuthorization.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataGoogleCertificateManagerDnsAuthorization.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataGoogleCertificateManagerDnsAuthorization resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataGoogleCertificateManagerDnsAuthorization to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataGoogleCertificateManagerDnsAuthorization that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/certificate_manager_dns_authorization#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleCertificateManagerDnsAuthorization to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.property.dnsResourceRecord">dnsResourceRecord</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordList">DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.property.effectiveLabels">effectiveLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.property.labels">labels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.property.terraformLabels">terraformLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.property.domainInput">domainInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.property.domain">domain</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `dnsResourceRecord`<sup>Required</sup> <a name="dnsResourceRecord" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.property.dnsResourceRecord"></a>

```java
public DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordList getDnsResourceRecord();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordList">DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordList</a>

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.property.labels"></a>

```java
public StringMap getLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `domainInput`<sup>Optional</sup> <a name="domainInput" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.property.domainInput"></a>

```java
public java.lang.String getDomainInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.property.domain"></a>

```java
public java.lang.String getDomain();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorization.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleCertificateManagerDnsAuthorizationConfig <a name="DataGoogleCertificateManagerDnsAuthorizationConfig" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationConfig.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_certificate_manager_dns_authorization.DataGoogleCertificateManagerDnsAuthorizationConfig;

DataGoogleCertificateManagerDnsAuthorizationConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .domain(java.lang.String)
    .name(java.lang.String)
//  .id(java.lang.String)
//  .location(java.lang.String)
//  .project(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationConfig.property.domain">domain</a></code> | <code>java.lang.String</code> | A domain which is being authorized. |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the resource; |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/certificate_manager_dns_authorization#id DataGoogleCertificateManagerDnsAuthorization#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationConfig.property.location">location</a></code> | <code>java.lang.String</code> | The Certificate Manager location. If not specified, "global" is used. |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/certificate_manager_dns_authorization#project DataGoogleCertificateManagerDnsAuthorization#project}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `domain`<sup>Required</sup> <a name="domain" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationConfig.property.domain"></a>

```java
public java.lang.String getDomain();
```

- *Type:* java.lang.String

A domain which is being authorized.

A DnsAuthorization resource covers a
single domain and its wildcard, e.g. authorization for "example.com" can
be used to issue certificates for "example.com" and "*.example.com".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/certificate_manager_dns_authorization#domain DataGoogleCertificateManagerDnsAuthorization#domain}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the resource;

provided by the client when the resource is created.
The name must be 1-64 characters long, and match the regular expression [a-zA-Z][a-zA-Z0-9_-]* which means the first character must be a letter,
and all following characters must be a dash, underscore, letter or digit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/certificate_manager_dns_authorization#name DataGoogleCertificateManagerDnsAuthorization#name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/certificate_manager_dns_authorization#id DataGoogleCertificateManagerDnsAuthorization#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `location`<sup>Optional</sup> <a name="location" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

The Certificate Manager location. If not specified, "global" is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/certificate_manager_dns_authorization#location DataGoogleCertificateManagerDnsAuthorization#location}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/data-sources/certificate_manager_dns_authorization#project DataGoogleCertificateManagerDnsAuthorization#project}.

---

### DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecord <a name="DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecord" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecord"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecord.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_certificate_manager_dns_authorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecord;

DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecord.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordList <a name="DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordList" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordList.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_certificate_manager_dns_authorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordList;

new DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordList.get"></a>

```java
public DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference <a name="DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.data_google_certificate_manager_dns_authorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference;

new DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.property.data">data</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecord">DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecord</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.property.data"></a>

```java
public java.lang.String getData();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecordOutputReference.property.internalValue"></a>

```java
public DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecord getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleCertificateManagerDnsAuthorization.DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecord">DataGoogleCertificateManagerDnsAuthorizationDnsResourceRecord</a>

---



