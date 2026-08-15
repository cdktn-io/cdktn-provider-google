# `computeRegionSslPolicy` Submodule <a name="`computeRegionSslPolicy` Submodule" id="@cdktn/provider-google.computeRegionSslPolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ComputeRegionSslPolicy <a name="ComputeRegionSslPolicy" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_region_ssl_policy google_compute_region_ssl_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.Initializer"></a>

```java
import io.cdktn.providers.google.compute_region_ssl_policy.ComputeRegionSslPolicy;

ComputeRegionSslPolicy.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .customFeatures(java.util.List<java.lang.String>)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .minTlsVersion(java.lang.String)
//  .postQuantumKeyExchange(java.lang.String)
//  .profile(java.lang.String)
//  .project(java.lang.String)
//  .region(java.lang.String)
//  .timeouts(ComputeRegionSslPolicyTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the resource. |
| <code><a href="#@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.Initializer.parameter.customFeatures">customFeatures</a></code> | <code>java.util.List<java.lang.String></code> | A list of features enabled when the selected profile is CUSTOM. |
| <code><a href="#@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | An optional description of this resource. |
| <code><a href="#@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_region_ssl_policy#id ComputeRegionSslPolicy#id}. |
| <code><a href="#@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.Initializer.parameter.minTlsVersion">minTlsVersion</a></code> | <code>java.lang.String</code> | The minimum version of SSL protocol that can be used by the clients to establish a connection with the load balancer. |
| <code><a href="#@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.Initializer.parameter.postQuantumKeyExchange">postQuantumKeyExchange</a></code> | <code>java.lang.String</code> | One of 'DEFAULT', 'ENABLED', or 'DEFERRED'. |
| <code><a href="#@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.Initializer.parameter.profile">profile</a></code> | <code>java.lang.String</code> | Profile specifies the set of SSL features that can be used by the load balancer when negotiating SSL with clients. |
| <code><a href="#@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_region_ssl_policy#project ComputeRegionSslPolicy#project}. |
| <code><a href="#@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | The region where the regional SSL policy resides. |
| <code><a href="#@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeouts">ComputeRegionSslPolicyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the resource.

Provided by the client when the resource is
created. The name must be 1-63 characters long, and comply with
RFC1035. Specifically, the name must be 1-63 characters long and match
the regular expression '[a-z](%5B-a-z0-9%5D*%5Ba-z0-9%5D)?' which means the
first character must be a lowercase letter, and all following
characters must be a dash, lowercase letter, or digit, except the last
character, which cannot be a dash.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_region_ssl_policy#name ComputeRegionSslPolicy#name}

---

##### `customFeatures`<sup>Optional</sup> <a name="customFeatures" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.Initializer.parameter.customFeatures"></a>

- *Type:* java.util.List<java.lang.String>

A list of features enabled when the selected profile is CUSTOM.

The
method returns the set of features that can be specified in this
list. This field must be empty if the profile is not CUSTOM.

See the [official documentation](https://cloud.google.com/compute/docs/load-balancing/ssl-policies#profilefeaturesupport)
for which ciphers are available to use. **Note**: this argument
*must* be present when using the 'CUSTOM' profile. This argument
*must not* be present when using any other profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_region_ssl_policy#custom_features ComputeRegionSslPolicy#custom_features}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_region_ssl_policy#deletion_policy ComputeRegionSslPolicy#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.Initializer.parameter.description"></a>

- *Type:* java.lang.String

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_region_ssl_policy#description ComputeRegionSslPolicy#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_region_ssl_policy#id ComputeRegionSslPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `minTlsVersion`<sup>Optional</sup> <a name="minTlsVersion" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.Initializer.parameter.minTlsVersion"></a>

- *Type:* java.lang.String

The minimum version of SSL protocol that can be used by the clients to establish a connection with the load balancer.

When set to
'TLS_1_3', the profile field must be set to 'RESTRICTED'. Default value: "TLS_1_0" Possible values: ["TLS_1_0", "TLS_1_1", "TLS_1_2", "TLS_1_3"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_region_ssl_policy#min_tls_version ComputeRegionSslPolicy#min_tls_version}

---

##### `postQuantumKeyExchange`<sup>Optional</sup> <a name="postQuantumKeyExchange" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.Initializer.parameter.postQuantumKeyExchange"></a>

- *Type:* java.lang.String

One of 'DEFAULT', 'ENABLED', or 'DEFERRED'.

Controls whether the load balancer negotiates
X25519MLKEM768 key exchange when clients advertise support for it.
When set to 'DEFAULT', or if no SSL Policy is attached to
the target proxy, the load balancer disallows X25519MLKEM768 key
exchange before October 2026, and allows it afterward. When set to
'ENABLED', the load balancer allows X25519MLKEM768 key
exchange. When set to 'DEFERRED', the load balancer
disallows X25519MLKEM768 key exchange until October 2027, and allows
it afterward. Possible values: ["DEFAULT", "ENABLED", "DEFERRED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_region_ssl_policy#post_quantum_key_exchange ComputeRegionSslPolicy#post_quantum_key_exchange}

---

##### `profile`<sup>Optional</sup> <a name="profile" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.Initializer.parameter.profile"></a>

- *Type:* java.lang.String

Profile specifies the set of SSL features that can be used by the load balancer when negotiating SSL with clients.

If using 'CUSTOM',
the set of SSL features to enable must be specified in the
'customFeatures' field.

See the [official documentation](https://cloud.google.com/compute/docs/load-balancing/ssl-policies#profilefeaturesupport)
for information on what cipher suites each profile provides. If
'CUSTOM' is used, the 'custom_features' attribute **must be set**.
If set to 'FIPS_202205', 'minTlsVersion' must also be set to
'TLS_1_2'. Default value: "COMPATIBLE" Possible values: ["COMPATIBLE", "MODERN", "RESTRICTED", "CUSTOM", "FIPS_202205"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_region_ssl_policy#profile ComputeRegionSslPolicy#profile}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_region_ssl_policy#project ComputeRegionSslPolicy#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.Initializer.parameter.region"></a>

- *Type:* java.lang.String

The region where the regional SSL policy resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_region_ssl_policy#region ComputeRegionSslPolicy#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeouts">ComputeRegionSslPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_region_ssl_policy#timeouts ComputeRegionSslPolicy#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.resetCustomFeatures">resetCustomFeatures</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.resetMinTlsVersion">resetMinTlsVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.resetPostQuantumKeyExchange">resetPostQuantumKeyExchange</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.resetProfile">resetProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.putTimeouts"></a>

```java
public void putTimeouts(ComputeRegionSslPolicyTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeouts">ComputeRegionSslPolicyTimeouts</a>

---

##### `resetCustomFeatures` <a name="resetCustomFeatures" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.resetCustomFeatures"></a>

```java
public void resetCustomFeatures()
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.resetId"></a>

```java
public void resetId()
```

##### `resetMinTlsVersion` <a name="resetMinTlsVersion" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.resetMinTlsVersion"></a>

```java
public void resetMinTlsVersion()
```

##### `resetPostQuantumKeyExchange` <a name="resetPostQuantumKeyExchange" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.resetPostQuantumKeyExchange"></a>

```java
public void resetPostQuantumKeyExchange()
```

##### `resetProfile` <a name="resetProfile" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.resetProfile"></a>

```java
public void resetProfile()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.resetProject"></a>

```java
public void resetProject()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ComputeRegionSslPolicy resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.isConstruct"></a>

```java
import io.cdktn.providers.google.compute_region_ssl_policy.ComputeRegionSslPolicy;

ComputeRegionSslPolicy.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.isTerraformElement"></a>

```java
import io.cdktn.providers.google.compute_region_ssl_policy.ComputeRegionSslPolicy;

ComputeRegionSslPolicy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.isTerraformResource"></a>

```java
import io.cdktn.providers.google.compute_region_ssl_policy.ComputeRegionSslPolicy;

ComputeRegionSslPolicy.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.compute_region_ssl_policy.ComputeRegionSslPolicy;

ComputeRegionSslPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ComputeRegionSslPolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ComputeRegionSslPolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ComputeRegionSslPolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ComputeRegionSslPolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_region_ssl_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ComputeRegionSslPolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.property.creationTimestamp">creationTimestamp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.property.enabledFeatures">enabledFeatures</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.property.fingerprint">fingerprint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.property.selfLink">selfLink</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeoutsOutputReference">ComputeRegionSslPolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.property.customFeaturesInput">customFeaturesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.property.minTlsVersionInput">minTlsVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.property.postQuantumKeyExchangeInput">postQuantumKeyExchangeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.property.profileInput">profileInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeouts">ComputeRegionSslPolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.property.customFeatures">customFeatures</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.property.minTlsVersion">minTlsVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.property.postQuantumKeyExchange">postQuantumKeyExchange</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.property.profile">profile</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `creationTimestamp`<sup>Required</sup> <a name="creationTimestamp" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.property.creationTimestamp"></a>

```java
public java.lang.String getCreationTimestamp();
```

- *Type:* java.lang.String

---

##### `enabledFeatures`<sup>Required</sup> <a name="enabledFeatures" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.property.enabledFeatures"></a>

```java
public java.util.List<java.lang.String> getEnabledFeatures();
```

- *Type:* java.util.List<java.lang.String>

---

##### `fingerprint`<sup>Required</sup> <a name="fingerprint" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.property.fingerprint"></a>

```java
public java.lang.String getFingerprint();
```

- *Type:* java.lang.String

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.property.selfLink"></a>

```java
public java.lang.String getSelfLink();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.property.timeouts"></a>

```java
public ComputeRegionSslPolicyTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeoutsOutputReference">ComputeRegionSslPolicyTimeoutsOutputReference</a>

---

##### `customFeaturesInput`<sup>Optional</sup> <a name="customFeaturesInput" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.property.customFeaturesInput"></a>

```java
public java.util.List<java.lang.String> getCustomFeaturesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `minTlsVersionInput`<sup>Optional</sup> <a name="minTlsVersionInput" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.property.minTlsVersionInput"></a>

```java
public java.lang.String getMinTlsVersionInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `postQuantumKeyExchangeInput`<sup>Optional</sup> <a name="postQuantumKeyExchangeInput" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.property.postQuantumKeyExchangeInput"></a>

```java
public java.lang.String getPostQuantumKeyExchangeInput();
```

- *Type:* java.lang.String

---

##### `profileInput`<sup>Optional</sup> <a name="profileInput" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.property.profileInput"></a>

```java
public java.lang.String getProfileInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.property.timeoutsInput"></a>

```java
public IResolvable|ComputeRegionSslPolicyTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeouts">ComputeRegionSslPolicyTimeouts</a>

---

##### `customFeatures`<sup>Required</sup> <a name="customFeatures" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.property.customFeatures"></a>

```java
public java.util.List<java.lang.String> getCustomFeatures();
```

- *Type:* java.util.List<java.lang.String>

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `minTlsVersion`<sup>Required</sup> <a name="minTlsVersion" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.property.minTlsVersion"></a>

```java
public java.lang.String getMinTlsVersion();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `postQuantumKeyExchange`<sup>Required</sup> <a name="postQuantumKeyExchange" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.property.postQuantumKeyExchange"></a>

```java
public java.lang.String getPostQuantumKeyExchange();
```

- *Type:* java.lang.String

---

##### `profile`<sup>Required</sup> <a name="profile" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.property.profile"></a>

```java
public java.lang.String getProfile();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ComputeRegionSslPolicyConfig <a name="ComputeRegionSslPolicyConfig" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyConfig.Initializer"></a>

```java
import io.cdktn.providers.google.compute_region_ssl_policy.ComputeRegionSslPolicyConfig;

ComputeRegionSslPolicyConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .customFeatures(java.util.List<java.lang.String>)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .id(java.lang.String)
//  .minTlsVersion(java.lang.String)
//  .postQuantumKeyExchange(java.lang.String)
//  .profile(java.lang.String)
//  .project(java.lang.String)
//  .region(java.lang.String)
//  .timeouts(ComputeRegionSslPolicyTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the resource. |
| <code><a href="#@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyConfig.property.customFeatures">customFeatures</a></code> | <code>java.util.List<java.lang.String></code> | A list of features enabled when the selected profile is CUSTOM. |
| <code><a href="#@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyConfig.property.description">description</a></code> | <code>java.lang.String</code> | An optional description of this resource. |
| <code><a href="#@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_region_ssl_policy#id ComputeRegionSslPolicy#id}. |
| <code><a href="#@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyConfig.property.minTlsVersion">minTlsVersion</a></code> | <code>java.lang.String</code> | The minimum version of SSL protocol that can be used by the clients to establish a connection with the load balancer. |
| <code><a href="#@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyConfig.property.postQuantumKeyExchange">postQuantumKeyExchange</a></code> | <code>java.lang.String</code> | One of 'DEFAULT', 'ENABLED', or 'DEFERRED'. |
| <code><a href="#@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyConfig.property.profile">profile</a></code> | <code>java.lang.String</code> | Profile specifies the set of SSL features that can be used by the load balancer when negotiating SSL with clients. |
| <code><a href="#@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_region_ssl_policy#project ComputeRegionSslPolicy#project}. |
| <code><a href="#@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyConfig.property.region">region</a></code> | <code>java.lang.String</code> | The region where the regional SSL policy resides. |
| <code><a href="#@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeouts">ComputeRegionSslPolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyConfig.property.name"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_region_ssl_policy#name ComputeRegionSslPolicy#name}

---

##### `customFeatures`<sup>Optional</sup> <a name="customFeatures" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyConfig.property.customFeatures"></a>

```java
public java.util.List<java.lang.String> getCustomFeatures();
```

- *Type:* java.util.List<java.lang.String>

A list of features enabled when the selected profile is CUSTOM.

The
method returns the set of features that can be specified in this
list. This field must be empty if the profile is not CUSTOM.

See the [official documentation](https://cloud.google.com/compute/docs/load-balancing/ssl-policies#profilefeaturesupport)
for which ciphers are available to use. **Note**: this argument
*must* be present when using the 'CUSTOM' profile. This argument
*must not* be present when using any other profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_region_ssl_policy#custom_features ComputeRegionSslPolicy#custom_features}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_region_ssl_policy#deletion_policy ComputeRegionSslPolicy#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

An optional description of this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_region_ssl_policy#description ComputeRegionSslPolicy#description}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_region_ssl_policy#id ComputeRegionSslPolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `minTlsVersion`<sup>Optional</sup> <a name="minTlsVersion" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyConfig.property.minTlsVersion"></a>

```java
public java.lang.String getMinTlsVersion();
```

- *Type:* java.lang.String

The minimum version of SSL protocol that can be used by the clients to establish a connection with the load balancer.

When set to
'TLS_1_3', the profile field must be set to 'RESTRICTED'. Default value: "TLS_1_0" Possible values: ["TLS_1_0", "TLS_1_1", "TLS_1_2", "TLS_1_3"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_region_ssl_policy#min_tls_version ComputeRegionSslPolicy#min_tls_version}

---

##### `postQuantumKeyExchange`<sup>Optional</sup> <a name="postQuantumKeyExchange" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyConfig.property.postQuantumKeyExchange"></a>

```java
public java.lang.String getPostQuantumKeyExchange();
```

- *Type:* java.lang.String

One of 'DEFAULT', 'ENABLED', or 'DEFERRED'.

Controls whether the load balancer negotiates
X25519MLKEM768 key exchange when clients advertise support for it.
When set to 'DEFAULT', or if no SSL Policy is attached to
the target proxy, the load balancer disallows X25519MLKEM768 key
exchange before October 2026, and allows it afterward. When set to
'ENABLED', the load balancer allows X25519MLKEM768 key
exchange. When set to 'DEFERRED', the load balancer
disallows X25519MLKEM768 key exchange until October 2027, and allows
it afterward. Possible values: ["DEFAULT", "ENABLED", "DEFERRED"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_region_ssl_policy#post_quantum_key_exchange ComputeRegionSslPolicy#post_quantum_key_exchange}

---

##### `profile`<sup>Optional</sup> <a name="profile" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyConfig.property.profile"></a>

```java
public java.lang.String getProfile();
```

- *Type:* java.lang.String

Profile specifies the set of SSL features that can be used by the load balancer when negotiating SSL with clients.

If using 'CUSTOM',
the set of SSL features to enable must be specified in the
'customFeatures' field.

See the [official documentation](https://cloud.google.com/compute/docs/load-balancing/ssl-policies#profilefeaturesupport)
for information on what cipher suites each profile provides. If
'CUSTOM' is used, the 'custom_features' attribute **must be set**.
If set to 'FIPS_202205', 'minTlsVersion' must also be set to
'TLS_1_2'. Default value: "COMPATIBLE" Possible values: ["COMPATIBLE", "MODERN", "RESTRICTED", "CUSTOM", "FIPS_202205"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_region_ssl_policy#profile ComputeRegionSslPolicy#profile}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_region_ssl_policy#project ComputeRegionSslPolicy#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

The region where the regional SSL policy resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_region_ssl_policy#region ComputeRegionSslPolicy#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyConfig.property.timeouts"></a>

```java
public ComputeRegionSslPolicyTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeouts">ComputeRegionSslPolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_region_ssl_policy#timeouts ComputeRegionSslPolicy#timeouts}

---

### ComputeRegionSslPolicyTimeouts <a name="ComputeRegionSslPolicyTimeouts" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google.compute_region_ssl_policy.ComputeRegionSslPolicyTimeouts;

ComputeRegionSslPolicyTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_region_ssl_policy#create ComputeRegionSslPolicy#create}. |
| <code><a href="#@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_region_ssl_policy#delete ComputeRegionSslPolicy#delete}. |
| <code><a href="#@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_region_ssl_policy#update ComputeRegionSslPolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_region_ssl_policy#create ComputeRegionSslPolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_region_ssl_policy#delete ComputeRegionSslPolicy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.44.0/docs/resources/compute_region_ssl_policy#update ComputeRegionSslPolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ComputeRegionSslPolicyTimeoutsOutputReference <a name="ComputeRegionSslPolicyTimeoutsOutputReference" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.compute_region_ssl_policy.ComputeRegionSslPolicyTimeoutsOutputReference;

new ComputeRegionSslPolicyTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeouts">ComputeRegionSslPolicyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|ComputeRegionSslPolicyTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.computeRegionSslPolicy.ComputeRegionSslPolicyTimeouts">ComputeRegionSslPolicyTimeouts</a>

---



