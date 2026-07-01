# `beyondcorpSecurityGatewayApplication` Submodule <a name="`beyondcorpSecurityGatewayApplication` Submodule" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BeyondcorpSecurityGatewayApplication <a name="BeyondcorpSecurityGatewayApplication" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/beyondcorp_security_gateway_application google_beyondcorp_security_gateway_application}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.Initializer"></a>

```java
import io.cdktn.providers.google.beyondcorp_security_gateway_application.BeyondcorpSecurityGatewayApplication;

BeyondcorpSecurityGatewayApplication.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .applicationId(java.lang.String)
    .securityGatewayId(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .displayName(java.lang.String)
//  .endpointMatchers(IResolvable|java.util.List<BeyondcorpSecurityGatewayApplicationEndpointMatchers>)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .schema(java.lang.String)
//  .timeouts(BeyondcorpSecurityGatewayApplicationTimeouts)
//  .upstreams(IResolvable|java.util.List<BeyondcorpSecurityGatewayApplicationUpstreams>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.Initializer.parameter.applicationId">applicationId</a></code> | <code>java.lang.String</code> | User-settable Application resource ID. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.Initializer.parameter.securityGatewayId">securityGatewayId</a></code> | <code>java.lang.String</code> | ID of the Security Gateway resource this belongs to. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Optional. An arbitrary user-provided name for the Application resource. Cannot exceed 64 characters. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.Initializer.parameter.endpointMatchers">endpointMatchers</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchers">BeyondcorpSecurityGatewayApplicationEndpointMatchers</a>></code> | endpoint_matchers block. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/beyondcorp_security_gateway_application#id BeyondcorpSecurityGatewayApplication#id}. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/beyondcorp_security_gateway_application#project BeyondcorpSecurityGatewayApplication#project}. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.Initializer.parameter.schema">schema</a></code> | <code>java.lang.String</code> | Type of the external application. Possible values: ["PROXY_GATEWAY", "API_GATEWAY"]. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeouts">BeyondcorpSecurityGatewayApplicationTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.Initializer.parameter.upstreams">upstreams</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreams">BeyondcorpSecurityGatewayApplicationUpstreams</a>></code> | upstreams block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.Initializer.parameter.applicationId"></a>

- *Type:* java.lang.String

User-settable Application resource ID.

* Must start with a letter.
* Must contain between 4-63 characters from '/a-z-/'.
* Must end with a number or letter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/beyondcorp_security_gateway_application#application_id BeyondcorpSecurityGatewayApplication#application_id}

---

##### `securityGatewayId`<sup>Required</sup> <a name="securityGatewayId" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.Initializer.parameter.securityGatewayId"></a>

- *Type:* java.lang.String

ID of the Security Gateway resource this belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/beyondcorp_security_gateway_application#security_gateway_id BeyondcorpSecurityGatewayApplication#security_gateway_id}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/beyondcorp_security_gateway_application#deletion_policy BeyondcorpSecurityGatewayApplication#deletion_policy}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Optional. An arbitrary user-provided name for the Application resource. Cannot exceed 64 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/beyondcorp_security_gateway_application#display_name BeyondcorpSecurityGatewayApplication#display_name}

---

##### `endpointMatchers`<sup>Optional</sup> <a name="endpointMatchers" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.Initializer.parameter.endpointMatchers"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchers">BeyondcorpSecurityGatewayApplicationEndpointMatchers</a>>

endpoint_matchers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/beyondcorp_security_gateway_application#endpoint_matchers BeyondcorpSecurityGatewayApplication#endpoint_matchers}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/beyondcorp_security_gateway_application#id BeyondcorpSecurityGatewayApplication#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/beyondcorp_security_gateway_application#project BeyondcorpSecurityGatewayApplication#project}.

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.Initializer.parameter.schema"></a>

- *Type:* java.lang.String

Type of the external application. Possible values: ["PROXY_GATEWAY", "API_GATEWAY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/beyondcorp_security_gateway_application#schema BeyondcorpSecurityGatewayApplication#schema}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeouts">BeyondcorpSecurityGatewayApplicationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/beyondcorp_security_gateway_application#timeouts BeyondcorpSecurityGatewayApplication#timeouts}

---

##### `upstreams`<sup>Optional</sup> <a name="upstreams" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.Initializer.parameter.upstreams"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreams">BeyondcorpSecurityGatewayApplicationUpstreams</a>>

upstreams block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/beyondcorp_security_gateway_application#upstreams BeyondcorpSecurityGatewayApplication#upstreams}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.putEndpointMatchers">putEndpointMatchers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.putUpstreams">putUpstreams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.resetEndpointMatchers">resetEndpointMatchers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.resetSchema">resetSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.resetUpstreams">resetUpstreams</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putEndpointMatchers` <a name="putEndpointMatchers" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.putEndpointMatchers"></a>

```java
public void putEndpointMatchers(IResolvable|java.util.List<BeyondcorpSecurityGatewayApplicationEndpointMatchers> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.putEndpointMatchers.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchers">BeyondcorpSecurityGatewayApplicationEndpointMatchers</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.putTimeouts"></a>

```java
public void putTimeouts(BeyondcorpSecurityGatewayApplicationTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeouts">BeyondcorpSecurityGatewayApplicationTimeouts</a>

---

##### `putUpstreams` <a name="putUpstreams" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.putUpstreams"></a>

```java
public void putUpstreams(IResolvable|java.util.List<BeyondcorpSecurityGatewayApplicationUpstreams> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.putUpstreams.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreams">BeyondcorpSecurityGatewayApplicationUpstreams</a>>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetEndpointMatchers` <a name="resetEndpointMatchers" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.resetEndpointMatchers"></a>

```java
public void resetEndpointMatchers()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.resetProject"></a>

```java
public void resetProject()
```

##### `resetSchema` <a name="resetSchema" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.resetSchema"></a>

```java
public void resetSchema()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetUpstreams` <a name="resetUpstreams" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.resetUpstreams"></a>

```java
public void resetUpstreams()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a BeyondcorpSecurityGatewayApplication resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.isConstruct"></a>

```java
import io.cdktn.providers.google.beyondcorp_security_gateway_application.BeyondcorpSecurityGatewayApplication;

BeyondcorpSecurityGatewayApplication.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.isTerraformElement"></a>

```java
import io.cdktn.providers.google.beyondcorp_security_gateway_application.BeyondcorpSecurityGatewayApplication;

BeyondcorpSecurityGatewayApplication.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.isTerraformResource"></a>

```java
import io.cdktn.providers.google.beyondcorp_security_gateway_application.BeyondcorpSecurityGatewayApplication;

BeyondcorpSecurityGatewayApplication.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.beyondcorp_security_gateway_application.BeyondcorpSecurityGatewayApplication;

BeyondcorpSecurityGatewayApplication.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),BeyondcorpSecurityGatewayApplication.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a BeyondcorpSecurityGatewayApplication resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the BeyondcorpSecurityGatewayApplication to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing BeyondcorpSecurityGatewayApplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/beyondcorp_security_gateway_application#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the BeyondcorpSecurityGatewayApplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.endpointMatchers">endpointMatchers</a></code> | <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersList">BeyondcorpSecurityGatewayApplicationEndpointMatchersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference">BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.upstreams">upstreams</a></code> | <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsList">BeyondcorpSecurityGatewayApplicationUpstreamsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.applicationIdInput">applicationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.endpointMatchersInput">endpointMatchersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchers">BeyondcorpSecurityGatewayApplicationEndpointMatchers</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.schemaInput">schemaInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.securityGatewayIdInput">securityGatewayIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeouts">BeyondcorpSecurityGatewayApplicationTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.upstreamsInput">upstreamsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreams">BeyondcorpSecurityGatewayApplicationUpstreams</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.applicationId">applicationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.schema">schema</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.securityGatewayId">securityGatewayId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `endpointMatchers`<sup>Required</sup> <a name="endpointMatchers" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.endpointMatchers"></a>

```java
public BeyondcorpSecurityGatewayApplicationEndpointMatchersList getEndpointMatchers();
```

- *Type:* <a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersList">BeyondcorpSecurityGatewayApplicationEndpointMatchersList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.timeouts"></a>

```java
public BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference">BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `upstreams`<sup>Required</sup> <a name="upstreams" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.upstreams"></a>

```java
public BeyondcorpSecurityGatewayApplicationUpstreamsList getUpstreams();
```

- *Type:* <a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsList">BeyondcorpSecurityGatewayApplicationUpstreamsList</a>

---

##### `applicationIdInput`<sup>Optional</sup> <a name="applicationIdInput" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.applicationIdInput"></a>

```java
public java.lang.String getApplicationIdInput();
```

- *Type:* java.lang.String

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `endpointMatchersInput`<sup>Optional</sup> <a name="endpointMatchersInput" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.endpointMatchersInput"></a>

```java
public IResolvable|java.util.List<BeyondcorpSecurityGatewayApplicationEndpointMatchers> getEndpointMatchersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchers">BeyondcorpSecurityGatewayApplicationEndpointMatchers</a>>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `schemaInput`<sup>Optional</sup> <a name="schemaInput" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.schemaInput"></a>

```java
public java.lang.String getSchemaInput();
```

- *Type:* java.lang.String

---

##### `securityGatewayIdInput`<sup>Optional</sup> <a name="securityGatewayIdInput" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.securityGatewayIdInput"></a>

```java
public java.lang.String getSecurityGatewayIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.timeoutsInput"></a>

```java
public IResolvable|BeyondcorpSecurityGatewayApplicationTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeouts">BeyondcorpSecurityGatewayApplicationTimeouts</a>

---

##### `upstreamsInput`<sup>Optional</sup> <a name="upstreamsInput" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.upstreamsInput"></a>

```java
public IResolvable|java.util.List<BeyondcorpSecurityGatewayApplicationUpstreams> getUpstreamsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreams">BeyondcorpSecurityGatewayApplicationUpstreams</a>>

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.applicationId"></a>

```java
public java.lang.String getApplicationId();
```

- *Type:* java.lang.String

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.schema"></a>

```java
public java.lang.String getSchema();
```

- *Type:* java.lang.String

---

##### `securityGatewayId`<sup>Required</sup> <a name="securityGatewayId" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.securityGatewayId"></a>

```java
public java.lang.String getSecurityGatewayId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplication.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### BeyondcorpSecurityGatewayApplicationConfig <a name="BeyondcorpSecurityGatewayApplicationConfig" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationConfig.Initializer"></a>

```java
import io.cdktn.providers.google.beyondcorp_security_gateway_application.BeyondcorpSecurityGatewayApplicationConfig;

BeyondcorpSecurityGatewayApplicationConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .applicationId(java.lang.String)
    .securityGatewayId(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .displayName(java.lang.String)
//  .endpointMatchers(IResolvable|java.util.List<BeyondcorpSecurityGatewayApplicationEndpointMatchers>)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .schema(java.lang.String)
//  .timeouts(BeyondcorpSecurityGatewayApplicationTimeouts)
//  .upstreams(IResolvable|java.util.List<BeyondcorpSecurityGatewayApplicationUpstreams>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationConfig.property.applicationId">applicationId</a></code> | <code>java.lang.String</code> | User-settable Application resource ID. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationConfig.property.securityGatewayId">securityGatewayId</a></code> | <code>java.lang.String</code> | ID of the Security Gateway resource this belongs to. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Optional. An arbitrary user-provided name for the Application resource. Cannot exceed 64 characters. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationConfig.property.endpointMatchers">endpointMatchers</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchers">BeyondcorpSecurityGatewayApplicationEndpointMatchers</a>></code> | endpoint_matchers block. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/beyondcorp_security_gateway_application#id BeyondcorpSecurityGatewayApplication#id}. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/beyondcorp_security_gateway_application#project BeyondcorpSecurityGatewayApplication#project}. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationConfig.property.schema">schema</a></code> | <code>java.lang.String</code> | Type of the external application. Possible values: ["PROXY_GATEWAY", "API_GATEWAY"]. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeouts">BeyondcorpSecurityGatewayApplicationTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationConfig.property.upstreams">upstreams</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreams">BeyondcorpSecurityGatewayApplicationUpstreams</a>></code> | upstreams block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationConfig.property.applicationId"></a>

```java
public java.lang.String getApplicationId();
```

- *Type:* java.lang.String

User-settable Application resource ID.

* Must start with a letter.
* Must contain between 4-63 characters from '/a-z-/'.
* Must end with a number or letter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/beyondcorp_security_gateway_application#application_id BeyondcorpSecurityGatewayApplication#application_id}

---

##### `securityGatewayId`<sup>Required</sup> <a name="securityGatewayId" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationConfig.property.securityGatewayId"></a>

```java
public java.lang.String getSecurityGatewayId();
```

- *Type:* java.lang.String

ID of the Security Gateway resource this belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/beyondcorp_security_gateway_application#security_gateway_id BeyondcorpSecurityGatewayApplication#security_gateway_id}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/beyondcorp_security_gateway_application#deletion_policy BeyondcorpSecurityGatewayApplication#deletion_policy}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Optional. An arbitrary user-provided name for the Application resource. Cannot exceed 64 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/beyondcorp_security_gateway_application#display_name BeyondcorpSecurityGatewayApplication#display_name}

---

##### `endpointMatchers`<sup>Optional</sup> <a name="endpointMatchers" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationConfig.property.endpointMatchers"></a>

```java
public IResolvable|java.util.List<BeyondcorpSecurityGatewayApplicationEndpointMatchers> getEndpointMatchers();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchers">BeyondcorpSecurityGatewayApplicationEndpointMatchers</a>>

endpoint_matchers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/beyondcorp_security_gateway_application#endpoint_matchers BeyondcorpSecurityGatewayApplication#endpoint_matchers}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/beyondcorp_security_gateway_application#id BeyondcorpSecurityGatewayApplication#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/beyondcorp_security_gateway_application#project BeyondcorpSecurityGatewayApplication#project}.

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationConfig.property.schema"></a>

```java
public java.lang.String getSchema();
```

- *Type:* java.lang.String

Type of the external application. Possible values: ["PROXY_GATEWAY", "API_GATEWAY"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/beyondcorp_security_gateway_application#schema BeyondcorpSecurityGatewayApplication#schema}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationConfig.property.timeouts"></a>

```java
public BeyondcorpSecurityGatewayApplicationTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeouts">BeyondcorpSecurityGatewayApplicationTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/beyondcorp_security_gateway_application#timeouts BeyondcorpSecurityGatewayApplication#timeouts}

---

##### `upstreams`<sup>Optional</sup> <a name="upstreams" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationConfig.property.upstreams"></a>

```java
public IResolvable|java.util.List<BeyondcorpSecurityGatewayApplicationUpstreams> getUpstreams();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreams">BeyondcorpSecurityGatewayApplicationUpstreams</a>>

upstreams block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/beyondcorp_security_gateway_application#upstreams BeyondcorpSecurityGatewayApplication#upstreams}

---

### BeyondcorpSecurityGatewayApplicationEndpointMatchers <a name="BeyondcorpSecurityGatewayApplicationEndpointMatchers" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchers.Initializer"></a>

```java
import io.cdktn.providers.google.beyondcorp_security_gateway_application.BeyondcorpSecurityGatewayApplicationEndpointMatchers;

BeyondcorpSecurityGatewayApplicationEndpointMatchers.builder()
    .hostname(java.lang.String)
    .ports(java.util.List<java.lang.Number>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchers.property.hostname">hostname</a></code> | <code>java.lang.String</code> | Required. Hostname of the application. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchers.property.ports">ports</a></code> | <code>java.util.List<java.lang.Number></code> | Optional. Ports of the application. |

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchers.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

Required. Hostname of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/beyondcorp_security_gateway_application#hostname BeyondcorpSecurityGatewayApplication#hostname}

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchers.property.ports"></a>

```java
public java.util.List<java.lang.Number> getPorts();
```

- *Type:* java.util.List<java.lang.Number>

Optional. Ports of the application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/beyondcorp_security_gateway_application#ports BeyondcorpSecurityGatewayApplication#ports}

---

### BeyondcorpSecurityGatewayApplicationTimeouts <a name="BeyondcorpSecurityGatewayApplicationTimeouts" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google.beyondcorp_security_gateway_application.BeyondcorpSecurityGatewayApplicationTimeouts;

BeyondcorpSecurityGatewayApplicationTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/beyondcorp_security_gateway_application#create BeyondcorpSecurityGatewayApplication#create}. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/beyondcorp_security_gateway_application#delete BeyondcorpSecurityGatewayApplication#delete}. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/beyondcorp_security_gateway_application#update BeyondcorpSecurityGatewayApplication#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/beyondcorp_security_gateway_application#create BeyondcorpSecurityGatewayApplication#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/beyondcorp_security_gateway_application#delete BeyondcorpSecurityGatewayApplication#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/beyondcorp_security_gateway_application#update BeyondcorpSecurityGatewayApplication#update}.

---

### BeyondcorpSecurityGatewayApplicationUpstreams <a name="BeyondcorpSecurityGatewayApplicationUpstreams" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreams"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreams.Initializer"></a>

```java
import io.cdktn.providers.google.beyondcorp_security_gateway_application.BeyondcorpSecurityGatewayApplicationUpstreams;

BeyondcorpSecurityGatewayApplicationUpstreams.builder()
//  .egressPolicy(BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy)
//  .external(BeyondcorpSecurityGatewayApplicationUpstreamsExternal)
//  .network(BeyondcorpSecurityGatewayApplicationUpstreamsNetwork)
//  .proxyProtocol(BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocol)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreams.property.egressPolicy">egressPolicy</a></code> | <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy">BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy</a></code> | egress_policy block. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreams.property.external">external</a></code> | <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternal">BeyondcorpSecurityGatewayApplicationUpstreamsExternal</a></code> | external block. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreams.property.network">network</a></code> | <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetwork">BeyondcorpSecurityGatewayApplicationUpstreamsNetwork</a></code> | network block. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreams.property.proxyProtocol">proxyProtocol</a></code> | <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocol">BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocol</a></code> | proxy_protocol block. |

---

##### `egressPolicy`<sup>Optional</sup> <a name="egressPolicy" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreams.property.egressPolicy"></a>

```java
public BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy getEgressPolicy();
```

- *Type:* <a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy">BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy</a>

egress_policy block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/beyondcorp_security_gateway_application#egress_policy BeyondcorpSecurityGatewayApplication#egress_policy}

---

##### `external`<sup>Optional</sup> <a name="external" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreams.property.external"></a>

```java
public BeyondcorpSecurityGatewayApplicationUpstreamsExternal getExternal();
```

- *Type:* <a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternal">BeyondcorpSecurityGatewayApplicationUpstreamsExternal</a>

external block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/beyondcorp_security_gateway_application#external BeyondcorpSecurityGatewayApplication#external}

---

##### `network`<sup>Optional</sup> <a name="network" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreams.property.network"></a>

```java
public BeyondcorpSecurityGatewayApplicationUpstreamsNetwork getNetwork();
```

- *Type:* <a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetwork">BeyondcorpSecurityGatewayApplicationUpstreamsNetwork</a>

network block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/beyondcorp_security_gateway_application#network BeyondcorpSecurityGatewayApplication#network}

---

##### `proxyProtocol`<sup>Optional</sup> <a name="proxyProtocol" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreams.property.proxyProtocol"></a>

```java
public BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocol getProxyProtocol();
```

- *Type:* <a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocol">BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocol</a>

proxy_protocol block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/beyondcorp_security_gateway_application#proxy_protocol BeyondcorpSecurityGatewayApplication#proxy_protocol}

---

### BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy <a name="BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy.Initializer"></a>

```java
import io.cdktn.providers.google.beyondcorp_security_gateway_application.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy;

BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy.builder()
    .regions(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy.property.regions">regions</a></code> | <code>java.util.List<java.lang.String></code> | Required. List of regions where the application sends traffic to. |

---

##### `regions`<sup>Required</sup> <a name="regions" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy.property.regions"></a>

```java
public java.util.List<java.lang.String> getRegions();
```

- *Type:* java.util.List<java.lang.String>

Required. List of regions where the application sends traffic to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/beyondcorp_security_gateway_application#regions BeyondcorpSecurityGatewayApplication#regions}

---

### BeyondcorpSecurityGatewayApplicationUpstreamsExternal <a name="BeyondcorpSecurityGatewayApplicationUpstreamsExternal" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternal"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternal.Initializer"></a>

```java
import io.cdktn.providers.google.beyondcorp_security_gateway_application.BeyondcorpSecurityGatewayApplicationUpstreamsExternal;

BeyondcorpSecurityGatewayApplicationUpstreamsExternal.builder()
    .endpoints(IResolvable|java.util.List<BeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpoints>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternal.property.endpoints">endpoints</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpoints">BeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpoints</a>></code> | endpoints block. |

---

##### `endpoints`<sup>Required</sup> <a name="endpoints" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternal.property.endpoints"></a>

```java
public IResolvable|java.util.List<BeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpoints> getEndpoints();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpoints">BeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpoints</a>>

endpoints block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/beyondcorp_security_gateway_application#endpoints BeyondcorpSecurityGatewayApplication#endpoints}

---

### BeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpoints <a name="BeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpoints" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpoints.Initializer"></a>

```java
import io.cdktn.providers.google.beyondcorp_security_gateway_application.BeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpoints;

BeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpoints.builder()
    .hostname(java.lang.String)
    .port(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpoints.property.hostname">hostname</a></code> | <code>java.lang.String</code> | Hostname of the endpoint. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpoints.property.port">port</a></code> | <code>java.lang.Number</code> | Port of the endpoint. |

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpoints.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

Hostname of the endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/beyondcorp_security_gateway_application#hostname BeyondcorpSecurityGatewayApplication#hostname}

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpoints.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Port of the endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/beyondcorp_security_gateway_application#port BeyondcorpSecurityGatewayApplication#port}

---

### BeyondcorpSecurityGatewayApplicationUpstreamsNetwork <a name="BeyondcorpSecurityGatewayApplicationUpstreamsNetwork" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetwork"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetwork.Initializer"></a>

```java
import io.cdktn.providers.google.beyondcorp_security_gateway_application.BeyondcorpSecurityGatewayApplicationUpstreamsNetwork;

BeyondcorpSecurityGatewayApplicationUpstreamsNetwork.builder()
    .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetwork.property.name">name</a></code> | <code>java.lang.String</code> | Required. Network name is of the format: 'projects/{project}/global/networks/{network}'. |

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetwork.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Required. Network name is of the format: 'projects/{project}/global/networks/{network}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/beyondcorp_security_gateway_application#name BeyondcorpSecurityGatewayApplication#name}

---

### BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocol <a name="BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocol" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocol"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocol.Initializer"></a>

```java
import io.cdktn.providers.google.beyondcorp_security_gateway_application.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocol;

BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocol.builder()
//  .allowedClientHeaders(java.util.List<java.lang.String>)
//  .clientIp(java.lang.Boolean|IResolvable)
//  .contextualHeaders(BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeaders)
//  .gatewayIdentity(java.lang.String)
//  .metadataHeaders(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocol.property.allowedClientHeaders">allowedClientHeaders</a></code> | <code>java.util.List<java.lang.String></code> | The configuration for the proxy. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocol.property.clientIp">clientIp</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Client IP configuration. The client IP address is included if true. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocol.property.contextualHeaders">contextualHeaders</a></code> | <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeaders">BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeaders</a></code> | contextual_headers block. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocol.property.gatewayIdentity">gatewayIdentity</a></code> | <code>java.lang.String</code> | Gateway identity configuration. Possible values: ["RESOURCE_NAME"]. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocol.property.metadataHeaders">metadataHeaders</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Custom resource specific headers along with the values. |

---

##### `allowedClientHeaders`<sup>Optional</sup> <a name="allowedClientHeaders" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocol.property.allowedClientHeaders"></a>

```java
public java.util.List<java.lang.String> getAllowedClientHeaders();
```

- *Type:* java.util.List<java.lang.String>

The configuration for the proxy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/beyondcorp_security_gateway_application#allowed_client_headers BeyondcorpSecurityGatewayApplication#allowed_client_headers}

---

##### `clientIp`<sup>Optional</sup> <a name="clientIp" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocol.property.clientIp"></a>

```java
public java.lang.Boolean|IResolvable getClientIp();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Client IP configuration. The client IP address is included if true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/beyondcorp_security_gateway_application#client_ip BeyondcorpSecurityGatewayApplication#client_ip}

---

##### `contextualHeaders`<sup>Optional</sup> <a name="contextualHeaders" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocol.property.contextualHeaders"></a>

```java
public BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeaders getContextualHeaders();
```

- *Type:* <a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeaders">BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeaders</a>

contextual_headers block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/beyondcorp_security_gateway_application#contextual_headers BeyondcorpSecurityGatewayApplication#contextual_headers}

---

##### `gatewayIdentity`<sup>Optional</sup> <a name="gatewayIdentity" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocol.property.gatewayIdentity"></a>

```java
public java.lang.String getGatewayIdentity();
```

- *Type:* java.lang.String

Gateway identity configuration. Possible values: ["RESOURCE_NAME"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/beyondcorp_security_gateway_application#gateway_identity BeyondcorpSecurityGatewayApplication#gateway_identity}

---

##### `metadataHeaders`<sup>Optional</sup> <a name="metadataHeaders" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocol.property.metadataHeaders"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMetadataHeaders();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Custom resource specific headers along with the values.

The names should conform to RFC 9110:

> Field names SHOULD constrain themselves to alphanumeric characters, "-",
> and ".", and SHOULD begin with a letter.
> Field values SHOULD contain only ASCII printable characters and tab.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/beyondcorp_security_gateway_application#metadata_headers BeyondcorpSecurityGatewayApplication#metadata_headers}

---

### BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeaders <a name="BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeaders" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeaders.Initializer"></a>

```java
import io.cdktn.providers.google.beyondcorp_security_gateway_application.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeaders;

BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeaders.builder()
//  .deviceInfo(BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfo)
//  .groupInfo(BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfo)
//  .outputType(java.lang.String)
//  .userInfo(BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfo)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeaders.property.deviceInfo">deviceInfo</a></code> | <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfo">BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfo</a></code> | device_info block. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeaders.property.groupInfo">groupInfo</a></code> | <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfo">BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfo</a></code> | group_info block. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeaders.property.outputType">outputType</a></code> | <code>java.lang.String</code> | Default output type for all enabled headers. Possible values: ["PROTOBUF", "JSON", "NONE"]. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeaders.property.userInfo">userInfo</a></code> | <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfo">BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfo</a></code> | user_info block. |

---

##### `deviceInfo`<sup>Optional</sup> <a name="deviceInfo" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeaders.property.deviceInfo"></a>

```java
public BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfo getDeviceInfo();
```

- *Type:* <a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfo">BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfo</a>

device_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/beyondcorp_security_gateway_application#device_info BeyondcorpSecurityGatewayApplication#device_info}

---

##### `groupInfo`<sup>Optional</sup> <a name="groupInfo" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeaders.property.groupInfo"></a>

```java
public BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfo getGroupInfo();
```

- *Type:* <a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfo">BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfo</a>

group_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/beyondcorp_security_gateway_application#group_info BeyondcorpSecurityGatewayApplication#group_info}

---

##### `outputType`<sup>Optional</sup> <a name="outputType" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeaders.property.outputType"></a>

```java
public java.lang.String getOutputType();
```

- *Type:* java.lang.String

Default output type for all enabled headers. Possible values: ["PROTOBUF", "JSON", "NONE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/beyondcorp_security_gateway_application#output_type BeyondcorpSecurityGatewayApplication#output_type}

---

##### `userInfo`<sup>Optional</sup> <a name="userInfo" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeaders.property.userInfo"></a>

```java
public BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfo getUserInfo();
```

- *Type:* <a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfo">BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfo</a>

user_info block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/beyondcorp_security_gateway_application#user_info BeyondcorpSecurityGatewayApplication#user_info}

---

### BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfo <a name="BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfo" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfo.Initializer"></a>

```java
import io.cdktn.providers.google.beyondcorp_security_gateway_application.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfo;

BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfo.builder()
//  .outputType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfo.property.outputType">outputType</a></code> | <code>java.lang.String</code> | The output type of the delegated device info. Possible values: ["PROTOBUF", "JSON", "NONE"]. |

---

##### `outputType`<sup>Optional</sup> <a name="outputType" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfo.property.outputType"></a>

```java
public java.lang.String getOutputType();
```

- *Type:* java.lang.String

The output type of the delegated device info. Possible values: ["PROTOBUF", "JSON", "NONE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/beyondcorp_security_gateway_application#output_type BeyondcorpSecurityGatewayApplication#output_type}

---

### BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfo <a name="BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfo" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfo.Initializer"></a>

```java
import io.cdktn.providers.google.beyondcorp_security_gateway_application.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfo;

BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfo.builder()
//  .outputType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfo.property.outputType">outputType</a></code> | <code>java.lang.String</code> | The output type of the delegated group info. Possible values: ["PROTOBUF", "JSON", "NONE"]. |

---

##### `outputType`<sup>Optional</sup> <a name="outputType" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfo.property.outputType"></a>

```java
public java.lang.String getOutputType();
```

- *Type:* java.lang.String

The output type of the delegated group info. Possible values: ["PROTOBUF", "JSON", "NONE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/beyondcorp_security_gateway_application#output_type BeyondcorpSecurityGatewayApplication#output_type}

---

### BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfo <a name="BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfo" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfo.Initializer"></a>

```java
import io.cdktn.providers.google.beyondcorp_security_gateway_application.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfo;

BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfo.builder()
//  .outputType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfo.property.outputType">outputType</a></code> | <code>java.lang.String</code> | The output type of the delegated user info. Possible values: ["PROTOBUF", "JSON", "NONE"]. |

---

##### `outputType`<sup>Optional</sup> <a name="outputType" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfo.property.outputType"></a>

```java
public java.lang.String getOutputType();
```

- *Type:* java.lang.String

The output type of the delegated user info. Possible values: ["PROTOBUF", "JSON", "NONE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/beyondcorp_security_gateway_application#output_type BeyondcorpSecurityGatewayApplication#output_type}

---

## Classes <a name="Classes" id="Classes"></a>

### BeyondcorpSecurityGatewayApplicationEndpointMatchersList <a name="BeyondcorpSecurityGatewayApplicationEndpointMatchersList" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersList.Initializer"></a>

```java
import io.cdktn.providers.google.beyondcorp_security_gateway_application.BeyondcorpSecurityGatewayApplicationEndpointMatchersList;

new BeyondcorpSecurityGatewayApplicationEndpointMatchersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersList.get"></a>

```java
public BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchers">BeyondcorpSecurityGatewayApplicationEndpointMatchers</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersList.property.internalValue"></a>

```java
public IResolvable|java.util.List<BeyondcorpSecurityGatewayApplicationEndpointMatchers> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchers">BeyondcorpSecurityGatewayApplicationEndpointMatchers</a>>

---


### BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference <a name="BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.beyondcorp_security_gateway_application.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference;

new BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.property.hostnameInput">hostnameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.property.portsInput">portsInput</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.property.hostname">hostname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.property.ports">ports</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchers">BeyondcorpSecurityGatewayApplicationEndpointMatchers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hostnameInput`<sup>Optional</sup> <a name="hostnameInput" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.property.hostnameInput"></a>

```java
public java.lang.String getHostnameInput();
```

- *Type:* java.lang.String

---

##### `portsInput`<sup>Optional</sup> <a name="portsInput" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.property.portsInput"></a>

```java
public java.util.List<java.lang.Number> getPortsInput();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

---

##### `ports`<sup>Required</sup> <a name="ports" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.property.ports"></a>

```java
public java.util.List<java.lang.Number> getPorts();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchersOutputReference.property.internalValue"></a>

```java
public IResolvable|BeyondcorpSecurityGatewayApplicationEndpointMatchers getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationEndpointMatchers">BeyondcorpSecurityGatewayApplicationEndpointMatchers</a>

---


### BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference <a name="BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.beyondcorp_security_gateway_application.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference;

new BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeouts">BeyondcorpSecurityGatewayApplicationTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|BeyondcorpSecurityGatewayApplicationTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationTimeouts">BeyondcorpSecurityGatewayApplicationTimeouts</a>

---


### BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference <a name="BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.beyondcorp_security_gateway_application.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference;

new BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.property.regionsInput">regionsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.property.regions">regions</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy">BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `regionsInput`<sup>Optional</sup> <a name="regionsInput" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.property.regionsInput"></a>

```java
public java.util.List<java.lang.String> getRegionsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `regions`<sup>Required</sup> <a name="regions" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.property.regions"></a>

```java
public java.util.List<java.lang.String> getRegions();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference.property.internalValue"></a>

```java
public BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy">BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy</a>

---


### BeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsList <a name="BeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsList" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsList.Initializer"></a>

```java
import io.cdktn.providers.google.beyondcorp_security_gateway_application.BeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsList;

new BeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsList.get"></a>

```java
public BeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpoints">BeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpoints</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<BeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpoints> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpoints">BeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpoints</a>>

---


### BeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference <a name="BeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.beyondcorp_security_gateway_application.BeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference;

new BeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.property.hostnameInput">hostnameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.property.hostname">hostname</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpoints">BeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpoints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `hostnameInput`<sup>Optional</sup> <a name="hostnameInput" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.property.hostnameInput"></a>

```java
public java.lang.String getHostnameInput();
```

- *Type:* java.lang.String

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `hostname`<sup>Required</sup> <a name="hostname" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.property.hostname"></a>

```java
public java.lang.String getHostname();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsOutputReference.property.internalValue"></a>

```java
public IResolvable|BeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpoints getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpoints">BeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpoints</a>

---


### BeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference <a name="BeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.beyondcorp_security_gateway_application.BeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference;

new BeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference.putEndpoints">putEndpoints</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEndpoints` <a name="putEndpoints" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference.putEndpoints"></a>

```java
public void putEndpoints(IResolvable|java.util.List<BeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpoints> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference.putEndpoints.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpoints">BeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpoints</a>>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference.property.endpoints">endpoints</a></code> | <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsList">BeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference.property.endpointsInput">endpointsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpoints">BeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpoints</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternal">BeyondcorpSecurityGatewayApplicationUpstreamsExternal</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `endpoints`<sup>Required</sup> <a name="endpoints" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference.property.endpoints"></a>

```java
public BeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsList getEndpoints();
```

- *Type:* <a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsList">BeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpointsList</a>

---

##### `endpointsInput`<sup>Optional</sup> <a name="endpointsInput" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference.property.endpointsInput"></a>

```java
public IResolvable|java.util.List<BeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpoints> getEndpointsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpoints">BeyondcorpSecurityGatewayApplicationUpstreamsExternalEndpoints</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference.property.internalValue"></a>

```java
public BeyondcorpSecurityGatewayApplicationUpstreamsExternal getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternal">BeyondcorpSecurityGatewayApplicationUpstreamsExternal</a>

---


### BeyondcorpSecurityGatewayApplicationUpstreamsList <a name="BeyondcorpSecurityGatewayApplicationUpstreamsList" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsList.Initializer"></a>

```java
import io.cdktn.providers.google.beyondcorp_security_gateway_application.BeyondcorpSecurityGatewayApplicationUpstreamsList;

new BeyondcorpSecurityGatewayApplicationUpstreamsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsList.get"></a>

```java
public BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreams">BeyondcorpSecurityGatewayApplicationUpstreams</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<BeyondcorpSecurityGatewayApplicationUpstreams> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreams">BeyondcorpSecurityGatewayApplicationUpstreams</a>>

---


### BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference <a name="BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.beyondcorp_security_gateway_application.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference;

new BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetwork">BeyondcorpSecurityGatewayApplicationUpstreamsNetwork</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference.property.internalValue"></a>

```java
public BeyondcorpSecurityGatewayApplicationUpstreamsNetwork getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetwork">BeyondcorpSecurityGatewayApplicationUpstreamsNetwork</a>

---


### BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference <a name="BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.beyondcorp_security_gateway_application.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference;

new BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.putEgressPolicy">putEgressPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.putExternal">putExternal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.putNetwork">putNetwork</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.putProxyProtocol">putProxyProtocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.resetEgressPolicy">resetEgressPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.resetExternal">resetExternal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.resetNetwork">resetNetwork</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.resetProxyProtocol">resetProxyProtocol</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEgressPolicy` <a name="putEgressPolicy" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.putEgressPolicy"></a>

```java
public void putEgressPolicy(BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.putEgressPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy">BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy</a>

---

##### `putExternal` <a name="putExternal" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.putExternal"></a>

```java
public void putExternal(BeyondcorpSecurityGatewayApplicationUpstreamsExternal value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.putExternal.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternal">BeyondcorpSecurityGatewayApplicationUpstreamsExternal</a>

---

##### `putNetwork` <a name="putNetwork" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.putNetwork"></a>

```java
public void putNetwork(BeyondcorpSecurityGatewayApplicationUpstreamsNetwork value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.putNetwork.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetwork">BeyondcorpSecurityGatewayApplicationUpstreamsNetwork</a>

---

##### `putProxyProtocol` <a name="putProxyProtocol" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.putProxyProtocol"></a>

```java
public void putProxyProtocol(BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocol value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.putProxyProtocol.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocol">BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocol</a>

---

##### `resetEgressPolicy` <a name="resetEgressPolicy" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.resetEgressPolicy"></a>

```java
public void resetEgressPolicy()
```

##### `resetExternal` <a name="resetExternal" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.resetExternal"></a>

```java
public void resetExternal()
```

##### `resetNetwork` <a name="resetNetwork" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.resetNetwork"></a>

```java
public void resetNetwork()
```

##### `resetProxyProtocol` <a name="resetProxyProtocol" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.resetProxyProtocol"></a>

```java
public void resetProxyProtocol()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.property.egressPolicy">egressPolicy</a></code> | <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference">BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.property.external">external</a></code> | <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference">BeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.property.network">network</a></code> | <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference">BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.property.proxyProtocol">proxyProtocol</a></code> | <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference">BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.property.egressPolicyInput">egressPolicyInput</a></code> | <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy">BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.property.externalInput">externalInput</a></code> | <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternal">BeyondcorpSecurityGatewayApplicationUpstreamsExternal</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.property.networkInput">networkInput</a></code> | <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetwork">BeyondcorpSecurityGatewayApplicationUpstreamsNetwork</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.property.proxyProtocolInput">proxyProtocolInput</a></code> | <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocol">BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreams">BeyondcorpSecurityGatewayApplicationUpstreams</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `egressPolicy`<sup>Required</sup> <a name="egressPolicy" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.property.egressPolicy"></a>

```java
public BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference getEgressPolicy();
```

- *Type:* <a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference">BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicyOutputReference</a>

---

##### `external`<sup>Required</sup> <a name="external" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.property.external"></a>

```java
public BeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference getExternal();
```

- *Type:* <a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference">BeyondcorpSecurityGatewayApplicationUpstreamsExternalOutputReference</a>

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.property.network"></a>

```java
public BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference getNetwork();
```

- *Type:* <a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference">BeyondcorpSecurityGatewayApplicationUpstreamsNetworkOutputReference</a>

---

##### `proxyProtocol`<sup>Required</sup> <a name="proxyProtocol" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.property.proxyProtocol"></a>

```java
public BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference getProxyProtocol();
```

- *Type:* <a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference">BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference</a>

---

##### `egressPolicyInput`<sup>Optional</sup> <a name="egressPolicyInput" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.property.egressPolicyInput"></a>

```java
public BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy getEgressPolicyInput();
```

- *Type:* <a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy">BeyondcorpSecurityGatewayApplicationUpstreamsEgressPolicy</a>

---

##### `externalInput`<sup>Optional</sup> <a name="externalInput" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.property.externalInput"></a>

```java
public BeyondcorpSecurityGatewayApplicationUpstreamsExternal getExternalInput();
```

- *Type:* <a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsExternal">BeyondcorpSecurityGatewayApplicationUpstreamsExternal</a>

---

##### `networkInput`<sup>Optional</sup> <a name="networkInput" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.property.networkInput"></a>

```java
public BeyondcorpSecurityGatewayApplicationUpstreamsNetwork getNetworkInput();
```

- *Type:* <a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsNetwork">BeyondcorpSecurityGatewayApplicationUpstreamsNetwork</a>

---

##### `proxyProtocolInput`<sup>Optional</sup> <a name="proxyProtocolInput" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.property.proxyProtocolInput"></a>

```java
public BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocol getProxyProtocolInput();
```

- *Type:* <a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocol">BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocol</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsOutputReference.property.internalValue"></a>

```java
public IResolvable|BeyondcorpSecurityGatewayApplicationUpstreams getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreams">BeyondcorpSecurityGatewayApplicationUpstreams</a>

---


### BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference <a name="BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.beyondcorp_security_gateway_application.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference;

new BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference.resetOutputType">resetOutputType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOutputType` <a name="resetOutputType" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference.resetOutputType"></a>

```java
public void resetOutputType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference.property.outputTypeInput">outputTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference.property.outputType">outputType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfo">BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `outputTypeInput`<sup>Optional</sup> <a name="outputTypeInput" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference.property.outputTypeInput"></a>

```java
public java.lang.String getOutputTypeInput();
```

- *Type:* java.lang.String

---

##### `outputType`<sup>Required</sup> <a name="outputType" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference.property.outputType"></a>

```java
public java.lang.String getOutputType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference.property.internalValue"></a>

```java
public BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfo getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfo">BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfo</a>

---


### BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference <a name="BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.beyondcorp_security_gateway_application.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference;

new BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference.resetOutputType">resetOutputType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOutputType` <a name="resetOutputType" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference.resetOutputType"></a>

```java
public void resetOutputType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference.property.outputTypeInput">outputTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference.property.outputType">outputType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfo">BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `outputTypeInput`<sup>Optional</sup> <a name="outputTypeInput" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference.property.outputTypeInput"></a>

```java
public java.lang.String getOutputTypeInput();
```

- *Type:* java.lang.String

---

##### `outputType`<sup>Required</sup> <a name="outputType" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference.property.outputType"></a>

```java
public java.lang.String getOutputType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference.property.internalValue"></a>

```java
public BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfo getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfo">BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfo</a>

---


### BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference <a name="BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.beyondcorp_security_gateway_application.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference;

new BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.putDeviceInfo">putDeviceInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.putGroupInfo">putGroupInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.putUserInfo">putUserInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.resetDeviceInfo">resetDeviceInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.resetGroupInfo">resetGroupInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.resetOutputType">resetOutputType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.resetUserInfo">resetUserInfo</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDeviceInfo` <a name="putDeviceInfo" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.putDeviceInfo"></a>

```java
public void putDeviceInfo(BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfo value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.putDeviceInfo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfo">BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfo</a>

---

##### `putGroupInfo` <a name="putGroupInfo" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.putGroupInfo"></a>

```java
public void putGroupInfo(BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfo value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.putGroupInfo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfo">BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfo</a>

---

##### `putUserInfo` <a name="putUserInfo" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.putUserInfo"></a>

```java
public void putUserInfo(BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfo value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.putUserInfo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfo">BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfo</a>

---

##### `resetDeviceInfo` <a name="resetDeviceInfo" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.resetDeviceInfo"></a>

```java
public void resetDeviceInfo()
```

##### `resetGroupInfo` <a name="resetGroupInfo" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.resetGroupInfo"></a>

```java
public void resetGroupInfo()
```

##### `resetOutputType` <a name="resetOutputType" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.resetOutputType"></a>

```java
public void resetOutputType()
```

##### `resetUserInfo` <a name="resetUserInfo" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.resetUserInfo"></a>

```java
public void resetUserInfo()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.property.deviceInfo">deviceInfo</a></code> | <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference">BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.property.groupInfo">groupInfo</a></code> | <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference">BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.property.userInfo">userInfo</a></code> | <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference">BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.property.deviceInfoInput">deviceInfoInput</a></code> | <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfo">BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.property.groupInfoInput">groupInfoInput</a></code> | <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfo">BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.property.outputTypeInput">outputTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.property.userInfoInput">userInfoInput</a></code> | <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfo">BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.property.outputType">outputType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeaders">BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeaders</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `deviceInfo`<sup>Required</sup> <a name="deviceInfo" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.property.deviceInfo"></a>

```java
public BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference getDeviceInfo();
```

- *Type:* <a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference">BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfoOutputReference</a>

---

##### `groupInfo`<sup>Required</sup> <a name="groupInfo" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.property.groupInfo"></a>

```java
public BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference getGroupInfo();
```

- *Type:* <a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference">BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfoOutputReference</a>

---

##### `userInfo`<sup>Required</sup> <a name="userInfo" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.property.userInfo"></a>

```java
public BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference getUserInfo();
```

- *Type:* <a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference">BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference</a>

---

##### `deviceInfoInput`<sup>Optional</sup> <a name="deviceInfoInput" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.property.deviceInfoInput"></a>

```java
public BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfo getDeviceInfoInput();
```

- *Type:* <a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfo">BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersDeviceInfo</a>

---

##### `groupInfoInput`<sup>Optional</sup> <a name="groupInfoInput" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.property.groupInfoInput"></a>

```java
public BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfo getGroupInfoInput();
```

- *Type:* <a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfo">BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersGroupInfo</a>

---

##### `outputTypeInput`<sup>Optional</sup> <a name="outputTypeInput" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.property.outputTypeInput"></a>

```java
public java.lang.String getOutputTypeInput();
```

- *Type:* java.lang.String

---

##### `userInfoInput`<sup>Optional</sup> <a name="userInfoInput" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.property.userInfoInput"></a>

```java
public BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfo getUserInfoInput();
```

- *Type:* <a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfo">BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfo</a>

---

##### `outputType`<sup>Required</sup> <a name="outputType" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.property.outputType"></a>

```java
public java.lang.String getOutputType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference.property.internalValue"></a>

```java
public BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeaders getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeaders">BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeaders</a>

---


### BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference <a name="BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.beyondcorp_security_gateway_application.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference;

new BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference.resetOutputType">resetOutputType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOutputType` <a name="resetOutputType" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference.resetOutputType"></a>

```java
public void resetOutputType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference.property.outputTypeInput">outputTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference.property.outputType">outputType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfo">BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `outputTypeInput`<sup>Optional</sup> <a name="outputTypeInput" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference.property.outputTypeInput"></a>

```java
public java.lang.String getOutputTypeInput();
```

- *Type:* java.lang.String

---

##### `outputType`<sup>Required</sup> <a name="outputType" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference.property.outputType"></a>

```java
public java.lang.String getOutputType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfoOutputReference.property.internalValue"></a>

```java
public BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfo getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfo">BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersUserInfo</a>

---


### BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference <a name="BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.beyondcorp_security_gateway_application.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference;

new BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.putContextualHeaders">putContextualHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.resetAllowedClientHeaders">resetAllowedClientHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.resetClientIp">resetClientIp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.resetContextualHeaders">resetContextualHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.resetGatewayIdentity">resetGatewayIdentity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.resetMetadataHeaders">resetMetadataHeaders</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putContextualHeaders` <a name="putContextualHeaders" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.putContextualHeaders"></a>

```java
public void putContextualHeaders(BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeaders value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.putContextualHeaders.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeaders">BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeaders</a>

---

##### `resetAllowedClientHeaders` <a name="resetAllowedClientHeaders" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.resetAllowedClientHeaders"></a>

```java
public void resetAllowedClientHeaders()
```

##### `resetClientIp` <a name="resetClientIp" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.resetClientIp"></a>

```java
public void resetClientIp()
```

##### `resetContextualHeaders` <a name="resetContextualHeaders" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.resetContextualHeaders"></a>

```java
public void resetContextualHeaders()
```

##### `resetGatewayIdentity` <a name="resetGatewayIdentity" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.resetGatewayIdentity"></a>

```java
public void resetGatewayIdentity()
```

##### `resetMetadataHeaders` <a name="resetMetadataHeaders" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.resetMetadataHeaders"></a>

```java
public void resetMetadataHeaders()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.property.contextualHeaders">contextualHeaders</a></code> | <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference">BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.property.allowedClientHeadersInput">allowedClientHeadersInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.property.clientIpInput">clientIpInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.property.contextualHeadersInput">contextualHeadersInput</a></code> | <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeaders">BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.property.gatewayIdentityInput">gatewayIdentityInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.property.metadataHeadersInput">metadataHeadersInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.property.allowedClientHeaders">allowedClientHeaders</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.property.clientIp">clientIp</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.property.gatewayIdentity">gatewayIdentity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.property.metadataHeaders">metadataHeaders</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocol">BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocol</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `contextualHeaders`<sup>Required</sup> <a name="contextualHeaders" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.property.contextualHeaders"></a>

```java
public BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference getContextualHeaders();
```

- *Type:* <a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference">BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeadersOutputReference</a>

---

##### `allowedClientHeadersInput`<sup>Optional</sup> <a name="allowedClientHeadersInput" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.property.allowedClientHeadersInput"></a>

```java
public java.util.List<java.lang.String> getAllowedClientHeadersInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `clientIpInput`<sup>Optional</sup> <a name="clientIpInput" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.property.clientIpInput"></a>

```java
public java.lang.Boolean|IResolvable getClientIpInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `contextualHeadersInput`<sup>Optional</sup> <a name="contextualHeadersInput" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.property.contextualHeadersInput"></a>

```java
public BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeaders getContextualHeadersInput();
```

- *Type:* <a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeaders">BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolContextualHeaders</a>

---

##### `gatewayIdentityInput`<sup>Optional</sup> <a name="gatewayIdentityInput" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.property.gatewayIdentityInput"></a>

```java
public java.lang.String getGatewayIdentityInput();
```

- *Type:* java.lang.String

---

##### `metadataHeadersInput`<sup>Optional</sup> <a name="metadataHeadersInput" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.property.metadataHeadersInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMetadataHeadersInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `allowedClientHeaders`<sup>Required</sup> <a name="allowedClientHeaders" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.property.allowedClientHeaders"></a>

```java
public java.util.List<java.lang.String> getAllowedClientHeaders();
```

- *Type:* java.util.List<java.lang.String>

---

##### `clientIp`<sup>Required</sup> <a name="clientIp" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.property.clientIp"></a>

```java
public java.lang.Boolean|IResolvable getClientIp();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `gatewayIdentity`<sup>Required</sup> <a name="gatewayIdentity" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.property.gatewayIdentity"></a>

```java
public java.lang.String getGatewayIdentity();
```

- *Type:* java.lang.String

---

##### `metadataHeaders`<sup>Required</sup> <a name="metadataHeaders" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.property.metadataHeaders"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getMetadataHeaders();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocolOutputReference.property.internalValue"></a>

```java
public BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocol getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.beyondcorpSecurityGatewayApplication.BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocol">BeyondcorpSecurityGatewayApplicationUpstreamsProxyProtocol</a>

---



