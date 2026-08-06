# `migrationCenterDiscoveryClient` Submodule <a name="`migrationCenterDiscoveryClient` Submodule" id="@cdktn/provider-google.migrationCenterDiscoveryClient"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MigrationCenterDiscoveryClient <a name="MigrationCenterDiscoveryClient" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/migration_center_discovery_client google_migration_center_discovery_client}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.Initializer"></a>

```java
import io.cdktn.providers.google.migration_center_discovery_client.MigrationCenterDiscoveryClient;

MigrationCenterDiscoveryClient.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .discoveryClientId(java.lang.String)
    .location(java.lang.String)
    .serviceAccount(java.lang.String)
    .source(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .displayName(java.lang.String)
//  .expireTime(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .timeouts(MigrationCenterDiscoveryClientTimeouts)
//  .ttl(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.Initializer.parameter.discoveryClientId">discoveryClientId</a></code> | <code>java.lang.String</code> | User specified ID for the discovery client. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.Initializer.parameter.serviceAccount">serviceAccount</a></code> | <code>java.lang.String</code> | Service account used by the discovery client for various operation. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.Initializer.parameter.source">source</a></code> | <code>java.lang.String</code> | Full name of the source object associated with this discovery client. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Free text description. Maximum length is 1000 characters. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Free text display name. Maximum length is 63 characters. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.Initializer.parameter.expireTime">expireTime</a></code> | <code>java.lang.String</code> | Client expiration time in UTC. If specified, the backend will not accept new frames after this time. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/migration_center_discovery_client#id MigrationCenterDiscoveryClient#id}. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.Initializer.parameter.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Labels as key value pairs. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/migration_center_discovery_client#project MigrationCenterDiscoveryClient#project}. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeouts">MigrationCenterDiscoveryClientTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.Initializer.parameter.ttl">ttl</a></code> | <code>java.lang.String</code> | Input only. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `discoveryClientId`<sup>Required</sup> <a name="discoveryClientId" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.Initializer.parameter.discoveryClientId"></a>

- *Type:* java.lang.String

User specified ID for the discovery client.

It will become the last
component of the discovery client name. The ID must be unique within the
project, is restricted to lower-cased letters and has a maximum length of
63 characters. The ID must match the regular expression:
'[a-z](%5Ba-z0-9-%5D%7B0,61%7D%5Ba-z0-9%5D)?'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/migration_center_discovery_client#discovery_client_id MigrationCenterDiscoveryClient#discovery_client_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/migration_center_discovery_client#location MigrationCenterDiscoveryClient#location}

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.Initializer.parameter.serviceAccount"></a>

- *Type:* java.lang.String

Service account used by the discovery client for various operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/migration_center_discovery_client#service_account MigrationCenterDiscoveryClient#service_account}

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.Initializer.parameter.source"></a>

- *Type:* java.lang.String

Full name of the source object associated with this discovery client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/migration_center_discovery_client#source MigrationCenterDiscoveryClient#source}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/migration_center_discovery_client#deletion_policy MigrationCenterDiscoveryClient#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Free text description. Maximum length is 1000 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/migration_center_discovery_client#description MigrationCenterDiscoveryClient#description}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Free text display name. Maximum length is 63 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/migration_center_discovery_client#display_name MigrationCenterDiscoveryClient#display_name}

---

##### `expireTime`<sup>Optional</sup> <a name="expireTime" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.Initializer.parameter.expireTime"></a>

- *Type:* java.lang.String

Client expiration time in UTC. If specified, the backend will not accept new frames after this time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/migration_center_discovery_client#expire_time MigrationCenterDiscoveryClient#expire_time}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/migration_center_discovery_client#id MigrationCenterDiscoveryClient#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.Initializer.parameter.labels"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/migration_center_discovery_client#labels MigrationCenterDiscoveryClient#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/migration_center_discovery_client#project MigrationCenterDiscoveryClient#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeouts">MigrationCenterDiscoveryClientTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/migration_center_discovery_client#timeouts MigrationCenterDiscoveryClient#timeouts}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.Initializer.parameter.ttl"></a>

- *Type:* java.lang.String

Input only.

Client time-to-live. If specified, the backend will not accept new
frames after this time.
This field is input only. The derived expiration time is provided as
output through the 'expire_time' field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/migration_center_discovery_client#ttl MigrationCenterDiscoveryClient#ttl}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.resetExpireTime">resetExpireTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.resetLabels">resetLabels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.resetTtl">resetTtl</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.putTimeouts"></a>

```java
public void putTimeouts(MigrationCenterDiscoveryClientTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeouts">MigrationCenterDiscoveryClientTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetExpireTime` <a name="resetExpireTime" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.resetExpireTime"></a>

```java
public void resetExpireTime()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.resetId"></a>

```java
public void resetId()
```

##### `resetLabels` <a name="resetLabels" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.resetLabels"></a>

```java
public void resetLabels()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetTtl` <a name="resetTtl" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.resetTtl"></a>

```java
public void resetTtl()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a MigrationCenterDiscoveryClient resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.isConstruct"></a>

```java
import io.cdktn.providers.google.migration_center_discovery_client.MigrationCenterDiscoveryClient;

MigrationCenterDiscoveryClient.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.isTerraformElement"></a>

```java
import io.cdktn.providers.google.migration_center_discovery_client.MigrationCenterDiscoveryClient;

MigrationCenterDiscoveryClient.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.isTerraformResource"></a>

```java
import io.cdktn.providers.google.migration_center_discovery_client.MigrationCenterDiscoveryClient;

MigrationCenterDiscoveryClient.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.migration_center_discovery_client.MigrationCenterDiscoveryClient;

MigrationCenterDiscoveryClient.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),MigrationCenterDiscoveryClient.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a MigrationCenterDiscoveryClient resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the MigrationCenterDiscoveryClient to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing MigrationCenterDiscoveryClient that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/migration_center_discovery_client#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the MigrationCenterDiscoveryClient to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.effectiveLabels">effectiveLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.errors">errors</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsList">MigrationCenterDiscoveryClientErrorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.heartbeatTime">heartbeatTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.signalsEndpoint">signalsEndpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.terraformLabels">terraformLabels</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference">MigrationCenterDiscoveryClientTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.discoveryClientIdInput">discoveryClientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.expireTimeInput">expireTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.labelsInput">labelsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.serviceAccountInput">serviceAccountInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.sourceInput">sourceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeouts">MigrationCenterDiscoveryClientTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.ttlInput">ttlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.discoveryClientId">discoveryClientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.expireTime">expireTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.serviceAccount">serviceAccount</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.source">source</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.ttl">ttl</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `effectiveLabels`<sup>Required</sup> <a name="effectiveLabels" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.effectiveLabels"></a>

```java
public StringMap getEffectiveLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `errors`<sup>Required</sup> <a name="errors" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.errors"></a>

```java
public MigrationCenterDiscoveryClientErrorsList getErrors();
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsList">MigrationCenterDiscoveryClientErrorsList</a>

---

##### `heartbeatTime`<sup>Required</sup> <a name="heartbeatTime" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.heartbeatTime"></a>

```java
public java.lang.String getHeartbeatTime();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `signalsEndpoint`<sup>Required</sup> <a name="signalsEndpoint" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.signalsEndpoint"></a>

```java
public java.lang.String getSignalsEndpoint();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `terraformLabels`<sup>Required</sup> <a name="terraformLabels" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.terraformLabels"></a>

```java
public StringMap getTerraformLabels();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.timeouts"></a>

```java
public MigrationCenterDiscoveryClientTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference">MigrationCenterDiscoveryClientTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `discoveryClientIdInput`<sup>Optional</sup> <a name="discoveryClientIdInput" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.discoveryClientIdInput"></a>

```java
public java.lang.String getDiscoveryClientIdInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `expireTimeInput`<sup>Optional</sup> <a name="expireTimeInput" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.expireTimeInput"></a>

```java
public java.lang.String getExpireTimeInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `labelsInput`<sup>Optional</sup> <a name="labelsInput" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.labelsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabelsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `serviceAccountInput`<sup>Optional</sup> <a name="serviceAccountInput" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.serviceAccountInput"></a>

```java
public java.lang.String getServiceAccountInput();
```

- *Type:* java.lang.String

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.sourceInput"></a>

```java
public java.lang.String getSourceInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.timeoutsInput"></a>

```java
public IResolvable|MigrationCenterDiscoveryClientTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeouts">MigrationCenterDiscoveryClientTimeouts</a>

---

##### `ttlInput`<sup>Optional</sup> <a name="ttlInput" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.ttlInput"></a>

```java
public java.lang.String getTtlInput();
```

- *Type:* java.lang.String

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `discoveryClientId`<sup>Required</sup> <a name="discoveryClientId" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.discoveryClientId"></a>

```java
public java.lang.String getDiscoveryClientId();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `expireTime`<sup>Required</sup> <a name="expireTime" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.expireTime"></a>

```java
public java.lang.String getExpireTime();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.serviceAccount"></a>

```java
public java.lang.String getServiceAccount();
```

- *Type:* java.lang.String

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

---

##### `ttl`<sup>Required</sup> <a name="ttl" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.ttl"></a>

```java
public java.lang.String getTtl();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClient.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### MigrationCenterDiscoveryClientConfig <a name="MigrationCenterDiscoveryClientConfig" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientConfig.Initializer"></a>

```java
import io.cdktn.providers.google.migration_center_discovery_client.MigrationCenterDiscoveryClientConfig;

MigrationCenterDiscoveryClientConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .discoveryClientId(java.lang.String)
    .location(java.lang.String)
    .serviceAccount(java.lang.String)
    .source(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .displayName(java.lang.String)
//  .expireTime(java.lang.String)
//  .id(java.lang.String)
//  .labels(java.util.Map<java.lang.String, java.lang.String>)
//  .project(java.lang.String)
//  .timeouts(MigrationCenterDiscoveryClientTimeouts)
//  .ttl(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientConfig.property.discoveryClientId">discoveryClientId</a></code> | <code>java.lang.String</code> | User specified ID for the discovery client. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientConfig.property.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientConfig.property.serviceAccount">serviceAccount</a></code> | <code>java.lang.String</code> | Service account used by the discovery client for various operation. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientConfig.property.source">source</a></code> | <code>java.lang.String</code> | Full name of the source object associated with this discovery client. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientConfig.property.description">description</a></code> | <code>java.lang.String</code> | Free text description. Maximum length is 1000 characters. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Free text display name. Maximum length is 63 characters. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientConfig.property.expireTime">expireTime</a></code> | <code>java.lang.String</code> | Client expiration time in UTC. If specified, the backend will not accept new frames after this time. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/migration_center_discovery_client#id MigrationCenterDiscoveryClient#id}. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientConfig.property.labels">labels</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Labels as key value pairs. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/migration_center_discovery_client#project MigrationCenterDiscoveryClient#project}. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeouts">MigrationCenterDiscoveryClientTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientConfig.property.ttl">ttl</a></code> | <code>java.lang.String</code> | Input only. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `discoveryClientId`<sup>Required</sup> <a name="discoveryClientId" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientConfig.property.discoveryClientId"></a>

```java
public java.lang.String getDiscoveryClientId();
```

- *Type:* java.lang.String

User specified ID for the discovery client.

It will become the last
component of the discovery client name. The ID must be unique within the
project, is restricted to lower-cased letters and has a maximum length of
63 characters. The ID must match the regular expression:
'[a-z](%5Ba-z0-9-%5D%7B0,61%7D%5Ba-z0-9%5D)?'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/migration_center_discovery_client#discovery_client_id MigrationCenterDiscoveryClient#discovery_client_id}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/migration_center_discovery_client#location MigrationCenterDiscoveryClient#location}

---

##### `serviceAccount`<sup>Required</sup> <a name="serviceAccount" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientConfig.property.serviceAccount"></a>

```java
public java.lang.String getServiceAccount();
```

- *Type:* java.lang.String

Service account used by the discovery client for various operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/migration_center_discovery_client#service_account MigrationCenterDiscoveryClient#service_account}

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientConfig.property.source"></a>

```java
public java.lang.String getSource();
```

- *Type:* java.lang.String

Full name of the source object associated with this discovery client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/migration_center_discovery_client#source MigrationCenterDiscoveryClient#source}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/migration_center_discovery_client#deletion_policy MigrationCenterDiscoveryClient#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Free text description. Maximum length is 1000 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/migration_center_discovery_client#description MigrationCenterDiscoveryClient#description}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Free text display name. Maximum length is 63 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/migration_center_discovery_client#display_name MigrationCenterDiscoveryClient#display_name}

---

##### `expireTime`<sup>Optional</sup> <a name="expireTime" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientConfig.property.expireTime"></a>

```java
public java.lang.String getExpireTime();
```

- *Type:* java.lang.String

Client expiration time in UTC. If specified, the backend will not accept new frames after this time.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/migration_center_discovery_client#expire_time MigrationCenterDiscoveryClient#expire_time}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/migration_center_discovery_client#id MigrationCenterDiscoveryClient#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `labels`<sup>Optional</sup> <a name="labels" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientConfig.property.labels"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getLabels();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Labels as key value pairs.

**Note**: This field is non-authoritative, and will only manage the labels present in your configuration.
Please refer to the field 'effective_labels' for all of the labels present on the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/migration_center_discovery_client#labels MigrationCenterDiscoveryClient#labels}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/migration_center_discovery_client#project MigrationCenterDiscoveryClient#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientConfig.property.timeouts"></a>

```java
public MigrationCenterDiscoveryClientTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeouts">MigrationCenterDiscoveryClientTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/migration_center_discovery_client#timeouts MigrationCenterDiscoveryClient#timeouts}

---

##### `ttl`<sup>Optional</sup> <a name="ttl" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientConfig.property.ttl"></a>

```java
public java.lang.String getTtl();
```

- *Type:* java.lang.String

Input only.

Client time-to-live. If specified, the backend will not accept new
frames after this time.
This field is input only. The derived expiration time is provided as
output through the 'expire_time' field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/migration_center_discovery_client#ttl MigrationCenterDiscoveryClient#ttl}

---

### MigrationCenterDiscoveryClientErrors <a name="MigrationCenterDiscoveryClientErrors" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrors.Initializer"></a>

```java
import io.cdktn.providers.google.migration_center_discovery_client.MigrationCenterDiscoveryClientErrors;

MigrationCenterDiscoveryClientErrors.builder()
    .build();
```


### MigrationCenterDiscoveryClientErrorsDetails <a name="MigrationCenterDiscoveryClientErrorsDetails" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetails.Initializer"></a>

```java
import io.cdktn.providers.google.migration_center_discovery_client.MigrationCenterDiscoveryClientErrorsDetails;

MigrationCenterDiscoveryClientErrorsDetails.builder()
    .build();
```


### MigrationCenterDiscoveryClientTimeouts <a name="MigrationCenterDiscoveryClientTimeouts" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google.migration_center_discovery_client.MigrationCenterDiscoveryClientTimeouts;

MigrationCenterDiscoveryClientTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/migration_center_discovery_client#create MigrationCenterDiscoveryClient#create}. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/migration_center_discovery_client#delete MigrationCenterDiscoveryClient#delete}. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/migration_center_discovery_client#update MigrationCenterDiscoveryClient#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/migration_center_discovery_client#create MigrationCenterDiscoveryClient#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/migration_center_discovery_client#delete MigrationCenterDiscoveryClient#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/resources/migration_center_discovery_client#update MigrationCenterDiscoveryClient#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### MigrationCenterDiscoveryClientErrorsDetailsList <a name="MigrationCenterDiscoveryClientErrorsDetailsList" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsList.Initializer"></a>

```java
import io.cdktn.providers.google.migration_center_discovery_client.MigrationCenterDiscoveryClientErrorsDetailsList;

new MigrationCenterDiscoveryClientErrorsDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsList.get"></a>

```java
public MigrationCenterDiscoveryClientErrorsDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### MigrationCenterDiscoveryClientErrorsDetailsOutputReference <a name="MigrationCenterDiscoveryClientErrorsDetailsOutputReference" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.migration_center_discovery_client.MigrationCenterDiscoveryClientErrorsDetailsOutputReference;

new MigrationCenterDiscoveryClientErrorsDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetails">MigrationCenterDiscoveryClientErrorsDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsOutputReference.property.internalValue"></a>

```java
public MigrationCenterDiscoveryClientErrorsDetails getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetails">MigrationCenterDiscoveryClientErrorsDetails</a>

---


### MigrationCenterDiscoveryClientErrorsList <a name="MigrationCenterDiscoveryClientErrorsList" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsList.Initializer"></a>

```java
import io.cdktn.providers.google.migration_center_discovery_client.MigrationCenterDiscoveryClientErrorsList;

new MigrationCenterDiscoveryClientErrorsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsList.get"></a>

```java
public MigrationCenterDiscoveryClientErrorsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### MigrationCenterDiscoveryClientErrorsOutputReference <a name="MigrationCenterDiscoveryClientErrorsOutputReference" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.migration_center_discovery_client.MigrationCenterDiscoveryClientErrorsOutputReference;

new MigrationCenterDiscoveryClientErrorsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.property.code">code</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.property.details">details</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsList">MigrationCenterDiscoveryClientErrorsDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.property.message">message</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrors">MigrationCenterDiscoveryClientErrors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `code`<sup>Required</sup> <a name="code" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.property.code"></a>

```java
public java.lang.Number getCode();
```

- *Type:* java.lang.Number

---

##### `details`<sup>Required</sup> <a name="details" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.property.details"></a>

```java
public MigrationCenterDiscoveryClientErrorsDetailsList getDetails();
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsDetailsList">MigrationCenterDiscoveryClientErrorsDetailsList</a>

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrorsOutputReference.property.internalValue"></a>

```java
public MigrationCenterDiscoveryClientErrors getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientErrors">MigrationCenterDiscoveryClientErrors</a>

---


### MigrationCenterDiscoveryClientTimeoutsOutputReference <a name="MigrationCenterDiscoveryClientTimeoutsOutputReference" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.migration_center_discovery_client.MigrationCenterDiscoveryClientTimeoutsOutputReference;

new MigrationCenterDiscoveryClientTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeouts">MigrationCenterDiscoveryClientTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|MigrationCenterDiscoveryClientTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.migrationCenterDiscoveryClient.MigrationCenterDiscoveryClientTimeouts">MigrationCenterDiscoveryClientTimeouts</a>

---



