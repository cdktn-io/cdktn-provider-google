# `computeRegionSslCertificate` Submodule <a name="`computeRegionSslCertificate` Submodule" id="@cdktn/provider-google.computeRegionSslCertificate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeRegionSslCertificate <a name="ComputeRegionSslCertificate" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_region_ssl_certificate google_compute_region_ssl_certificate}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.Initializer"></a>

```java
import io.cdktn.providers.google.compute_region_ssl_certificate.ComputeRegionSslCertificate;

ComputeRegionSslCertificate.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .certificate(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .name(java.lang.String)
//  .namePrefix(java.lang.String)
//  .privateKey(java.lang.String)
//  .privateKeyWo(java.lang.String)
//  .privateKeyWoVersion(java.lang.String)
//  .project(java.lang.String)
//  .region(java.lang.String)
//  .timeouts(ComputeRegionSslCertificateTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.Initializer.parameter.certificate">certificate</a></code> | <code>java.lang.String</code> | The certificate in PEM format. |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | An optional description of this resource. |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_region_ssl_certificate#id ComputeRegionSslCertificate#id}. |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the resource. |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.Initializer.parameter.namePrefix">namePrefix</a></code> | <code>java.lang.String</code> | Creates a unique name beginning with the specified prefix. Conflicts with name. |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.Initializer.parameter.privateKey">privateKey</a></code> | <code>java.lang.String</code> | The write-only private key in PEM format. |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.Initializer.parameter.privateKeyWo">privateKeyWo</a></code> | <code>java.lang.String</code> | The write-only private key in PEM format. |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.Initializer.parameter.privateKeyWoVersion">privateKeyWoVersion</a></code> | <code>java.lang.String</code> | Triggers update of 'private_key_wo' write-only. |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_region_ssl_certificate#project ComputeRegionSslCertificate#project}. |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | The Region in which the created regional ssl certificate should reside. |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeouts">ComputeRegionSslCertificateTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.Initializer.parameter.certificate"></a>

- *Type:* java.lang.String

The certificate in PEM format.

The certificate chain must be no greater than 5 certs long.
The chain must include at least one intermediate cert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_region_ssl_certificate#certificate ComputeRegionSslCertificate#certificate}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_region_ssl_certificate#deletion_policy ComputeRegionSslCertificate#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.Initializer.parameter.description"></a>

- *Type:* java.lang.String

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_region_ssl_certificate#description ComputeRegionSslCertificate#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_region_ssl_certificate#id ComputeRegionSslCertificate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the resource.

Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

These are in the same namespace as the managed SSL certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_region_ssl_certificate#name ComputeRegionSslCertificate#name}

---

##### `namePrefix`<sup>Optional</sup> <a name="namePrefix" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.Initializer.parameter.namePrefix"></a>

- *Type:* java.lang.String

Creates a unique name beginning with the specified prefix. Conflicts with name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_region_ssl_certificate#name_prefix ComputeRegionSslCertificate#name_prefix}

---

##### `privateKey`<sup>Optional</sup> <a name="privateKey" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.Initializer.parameter.privateKey"></a>

- *Type:* java.lang.String

The write-only private key in PEM format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_region_ssl_certificate#private_key ComputeRegionSslCertificate#private_key}

---

##### `privateKeyWo`<sup>Optional</sup> <a name="privateKeyWo" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.Initializer.parameter.privateKeyWo"></a>

- *Type:* java.lang.String

The write-only private key in PEM format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_region_ssl_certificate#private_key_wo ComputeRegionSslCertificate#private_key_wo}

---

##### `privateKeyWoVersion`<sup>Optional</sup> <a name="privateKeyWoVersion" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.Initializer.parameter.privateKeyWoVersion"></a>

- *Type:* java.lang.String

Triggers update of 'private_key_wo' write-only.

Increment this value when an update to 'private_key_wo' is needed. For more info see [updating write-only arguments](/docs/providers/google/guides/using_write_only_arguments.html#updating-write-only-arguments)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_region_ssl_certificate#private_key_wo_version ComputeRegionSslCertificate#private_key_wo_version}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_region_ssl_certificate#project ComputeRegionSslCertificate#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.Initializer.parameter.region"></a>

- *Type:* java.lang.String

The Region in which the created regional ssl certificate should reside.

If it is not provided, the provider region is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_region_ssl_certificate#region ComputeRegionSslCertificate#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeouts">ComputeRegionSslCertificateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_region_ssl_certificate#timeouts ComputeRegionSslCertificate#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.resetNamePrefix">resetNamePrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.resetPrivateKey">resetPrivateKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.resetPrivateKeyWo">resetPrivateKeyWo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.resetPrivateKeyWoVersion">resetPrivateKeyWoVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.putTimeouts"></a>

```java
public void putTimeouts(ComputeRegionSslCertificateTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeouts">ComputeRegionSslCertificateTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.resetId"></a>

```java
public void resetId()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.resetName"></a>

```java
public void resetName()
```

##### `resetNamePrefix` <a name="resetNamePrefix" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.resetNamePrefix"></a>

```java
public void resetNamePrefix()
```

##### `resetPrivateKey` <a name="resetPrivateKey" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.resetPrivateKey"></a>

```java
public void resetPrivateKey()
```

##### `resetPrivateKeyWo` <a name="resetPrivateKeyWo" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.resetPrivateKeyWo"></a>

```java
public void resetPrivateKeyWo()
```

##### `resetPrivateKeyWoVersion` <a name="resetPrivateKeyWoVersion" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.resetPrivateKeyWoVersion"></a>

```java
public void resetPrivateKeyWoVersion()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.resetProject"></a>

```java
public void resetProject()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ComputeRegionSslCertificate resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.isConstruct"></a>

```java
import io.cdktn.providers.google.compute_region_ssl_certificate.ComputeRegionSslCertificate;

ComputeRegionSslCertificate.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.isTerraformElement"></a>

```java
import io.cdktn.providers.google.compute_region_ssl_certificate.ComputeRegionSslCertificate;

ComputeRegionSslCertificate.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.isTerraformResource"></a>

```java
import io.cdktn.providers.google.compute_region_ssl_certificate.ComputeRegionSslCertificate;

ComputeRegionSslCertificate.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.compute_region_ssl_certificate.ComputeRegionSslCertificate;

ComputeRegionSslCertificate.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ComputeRegionSslCertificate.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ComputeRegionSslCertificate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ComputeRegionSslCertificate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ComputeRegionSslCertificate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_region_ssl_certificate#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ComputeRegionSslCertificate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.certificateId">certificateId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.creationTimestamp">creationTimestamp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.expireTime">expireTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.selfLink">selfLink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference">ComputeRegionSslCertificateTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.certificateInput">certificateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.namePrefixInput">namePrefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.privateKeyInput">privateKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.privateKeyWoInput">privateKeyWoInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.privateKeyWoVersionInput">privateKeyWoVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeouts">ComputeRegionSslCertificateTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.certificate">certificate</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.namePrefix">namePrefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.privateKey">privateKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.privateKeyWo">privateKeyWo</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.privateKeyWoVersion">privateKeyWoVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `certificateId`<sup>Required</sup> <a name="certificateId" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.certificateId"></a>

```java
public java.lang.Number getCertificateId();
```

- *Type:* java.lang.Number

---

##### `creationTimestamp`<sup>Required</sup> <a name="creationTimestamp" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.creationTimestamp"></a>

```java
public java.lang.String getCreationTimestamp();
```

- *Type:* java.lang.String

---

##### `expireTime`<sup>Required</sup> <a name="expireTime" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.expireTime"></a>

```java
public java.lang.String getExpireTime();
```

- *Type:* java.lang.String

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.selfLink"></a>

```java
public java.lang.String getSelfLink();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.timeouts"></a>

```java
public ComputeRegionSslCertificateTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference">ComputeRegionSslCertificateTimeoutsOutputReference</a>

---

##### `certificateInput`<sup>Optional</sup> <a name="certificateInput" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.certificateInput"></a>

```java
public java.lang.String getCertificateInput();
```

- *Type:* java.lang.String

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `namePrefixInput`<sup>Optional</sup> <a name="namePrefixInput" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.namePrefixInput"></a>

```java
public java.lang.String getNamePrefixInput();
```

- *Type:* java.lang.String

---

##### `privateKeyInput`<sup>Optional</sup> <a name="privateKeyInput" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.privateKeyInput"></a>

```java
public java.lang.String getPrivateKeyInput();
```

- *Type:* java.lang.String

---

##### `privateKeyWoInput`<sup>Optional</sup> <a name="privateKeyWoInput" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.privateKeyWoInput"></a>

```java
public java.lang.String getPrivateKeyWoInput();
```

- *Type:* java.lang.String

---

##### `privateKeyWoVersionInput`<sup>Optional</sup> <a name="privateKeyWoVersionInput" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.privateKeyWoVersionInput"></a>

```java
public java.lang.String getPrivateKeyWoVersionInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.timeoutsInput"></a>

```java
public IResolvable|ComputeRegionSslCertificateTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeouts">ComputeRegionSslCertificateTimeouts</a>

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.certificate"></a>

```java
public java.lang.String getCertificate();
```

- *Type:* java.lang.String

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `namePrefix`<sup>Required</sup> <a name="namePrefix" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.namePrefix"></a>

```java
public java.lang.String getNamePrefix();
```

- *Type:* java.lang.String

---

##### `privateKey`<sup>Required</sup> <a name="privateKey" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.privateKey"></a>

```java
public java.lang.String getPrivateKey();
```

- *Type:* java.lang.String

---

##### `privateKeyWo`<sup>Required</sup> <a name="privateKeyWo" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.privateKeyWo"></a>

```java
public java.lang.String getPrivateKeyWo();
```

- *Type:* java.lang.String

---

##### `privateKeyWoVersion`<sup>Required</sup> <a name="privateKeyWoVersion" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.privateKeyWoVersion"></a>

```java
public java.lang.String getPrivateKeyWoVersion();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificate.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeRegionSslCertificateConfig <a name="ComputeRegionSslCertificateConfig" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateConfig.Initializer"></a>

```java
import io.cdktn.providers.google.compute_region_ssl_certificate.ComputeRegionSslCertificateConfig;

ComputeRegionSslCertificateConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .certificate(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .name(java.lang.String)
//  .namePrefix(java.lang.String)
//  .privateKey(java.lang.String)
//  .privateKeyWo(java.lang.String)
//  .privateKeyWoVersion(java.lang.String)
//  .project(java.lang.String)
//  .region(java.lang.String)
//  .timeouts(ComputeRegionSslCertificateTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateConfig.property.certificate">certificate</a></code> | <code>java.lang.String</code> | The certificate in PEM format. |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateConfig.property.description">description</a></code> | <code>java.lang.String</code> | An optional description of this resource. |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_region_ssl_certificate#id ComputeRegionSslCertificate#id}. |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the resource. |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateConfig.property.namePrefix">namePrefix</a></code> | <code>java.lang.String</code> | Creates a unique name beginning with the specified prefix. Conflicts with name. |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateConfig.property.privateKey">privateKey</a></code> | <code>java.lang.String</code> | The write-only private key in PEM format. |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateConfig.property.privateKeyWo">privateKeyWo</a></code> | <code>java.lang.String</code> | The write-only private key in PEM format. |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateConfig.property.privateKeyWoVersion">privateKeyWoVersion</a></code> | <code>java.lang.String</code> | Triggers update of 'private_key_wo' write-only. |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_region_ssl_certificate#project ComputeRegionSslCertificate#project}. |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateConfig.property.region">region</a></code> | <code>java.lang.String</code> | The Region in which the created regional ssl certificate should reside. |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeouts">ComputeRegionSslCertificateTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateConfig.property.certificate"></a>

```java
public java.lang.String getCertificate();
```

- *Type:* java.lang.String

The certificate in PEM format.

The certificate chain must be no greater than 5 certs long.
The chain must include at least one intermediate cert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_region_ssl_certificate#certificate ComputeRegionSslCertificate#certificate}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateConfig.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_region_ssl_certificate#deletion_policy ComputeRegionSslCertificate#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_region_ssl_certificate#description ComputeRegionSslCertificate#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_region_ssl_certificate#id ComputeRegionSslCertificate#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the resource.

Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

These are in the same namespace as the managed SSL certificates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_region_ssl_certificate#name ComputeRegionSslCertificate#name}

---

##### `namePrefix`<sup>Optional</sup> <a name="namePrefix" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateConfig.property.namePrefix"></a>

```java
public java.lang.String getNamePrefix();
```

- *Type:* java.lang.String

Creates a unique name beginning with the specified prefix. Conflicts with name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_region_ssl_certificate#name_prefix ComputeRegionSslCertificate#name_prefix}

---

##### `privateKey`<sup>Optional</sup> <a name="privateKey" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateConfig.property.privateKey"></a>

```java
public java.lang.String getPrivateKey();
```

- *Type:* java.lang.String

The write-only private key in PEM format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_region_ssl_certificate#private_key ComputeRegionSslCertificate#private_key}

---

##### `privateKeyWo`<sup>Optional</sup> <a name="privateKeyWo" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateConfig.property.privateKeyWo"></a>

```java
public java.lang.String getPrivateKeyWo();
```

- *Type:* java.lang.String

The write-only private key in PEM format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_region_ssl_certificate#private_key_wo ComputeRegionSslCertificate#private_key_wo}

---

##### `privateKeyWoVersion`<sup>Optional</sup> <a name="privateKeyWoVersion" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateConfig.property.privateKeyWoVersion"></a>

```java
public java.lang.String getPrivateKeyWoVersion();
```

- *Type:* java.lang.String

Triggers update of 'private_key_wo' write-only.

Increment this value when an update to 'private_key_wo' is needed. For more info see [updating write-only arguments](/docs/providers/google/guides/using_write_only_arguments.html#updating-write-only-arguments)

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_region_ssl_certificate#private_key_wo_version ComputeRegionSslCertificate#private_key_wo_version}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_region_ssl_certificate#project ComputeRegionSslCertificate#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

The Region in which the created regional ssl certificate should reside.

If it is not provided, the provider region is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_region_ssl_certificate#region ComputeRegionSslCertificate#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateConfig.property.timeouts"></a>

```java
public ComputeRegionSslCertificateTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeouts">ComputeRegionSslCertificateTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_region_ssl_certificate#timeouts ComputeRegionSslCertificate#timeouts}

---

### ComputeRegionSslCertificateTimeouts <a name="ComputeRegionSslCertificateTimeouts" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google.compute_region_ssl_certificate.ComputeRegionSslCertificateTimeouts;

ComputeRegionSslCertificateTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_region_ssl_certificate#create ComputeRegionSslCertificate#create}. |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_region_ssl_certificate#delete ComputeRegionSslCertificate#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_region_ssl_certificate#create ComputeRegionSslCertificate#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.34.0/docs/resources/compute_region_ssl_certificate#delete ComputeRegionSslCertificate#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeRegionSslCertificateTimeoutsOutputReference <a name="ComputeRegionSslCertificateTimeoutsOutputReference" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.compute_region_ssl_certificate.ComputeRegionSslCertificateTimeoutsOutputReference;

new ComputeRegionSslCertificateTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeouts">ComputeRegionSslCertificateTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|ComputeRegionSslCertificateTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.computeRegionSslCertificate.ComputeRegionSslCertificateTimeouts">ComputeRegionSslCertificateTimeouts</a>

---



