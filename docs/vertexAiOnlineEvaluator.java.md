# `vertexAiOnlineEvaluator` Submodule <a name="`vertexAiOnlineEvaluator` Submodule" id="@cdktn/provider-google.vertexAiOnlineEvaluator"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VertexAiOnlineEvaluator <a name="VertexAiOnlineEvaluator" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator google_vertex_ai_online_evaluator}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_online_evaluator.VertexAiOnlineEvaluator;

VertexAiOnlineEvaluator.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .agentResource(java.lang.String)
    .cloudObservability(VertexAiOnlineEvaluatorCloudObservability)
    .config(VertexAiOnlineEvaluatorConfigA)
    .metricSources(IResolvable|java.util.List<VertexAiOnlineEvaluatorMetricSources>)
//  .deletionPolicy(java.lang.String)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .region(java.lang.String)
//  .timeouts(VertexAiOnlineEvaluatorTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.Initializer.parameter.agentResource">agentResource</a></code> | <code>java.lang.String</code> | The name of the agent that the OnlineEvaluator evaluates periodically. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.Initializer.parameter.cloudObservability">cloudObservability</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservability">VertexAiOnlineEvaluatorCloudObservability</a></code> | cloud_observability block. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigA">VertexAiOnlineEvaluatorConfigA</a></code> | config block. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.Initializer.parameter.metricSources">metricSources</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSources">VertexAiOnlineEvaluatorMetricSources</a>></code> | metric_sources block. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Human-readable name for the OnlineEvaluator. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#id VertexAiOnlineEvaluator#id}. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#project VertexAiOnlineEvaluator#project}. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | The region of the OnlineEvaluator (e.g. us-central1). If unset, the provider's region is used. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeouts">VertexAiOnlineEvaluatorTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `agentResource`<sup>Required</sup> <a name="agentResource" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.Initializer.parameter.agentResource"></a>

- *Type:* java.lang.String

The name of the agent that the OnlineEvaluator evaluates periodically.

This value is used to filter the traces with a matching cloud.resource_id
and link the evaluation results with relevant dashboards/UIs. This field
is immutable; once set, it cannot be changed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#agent_resource VertexAiOnlineEvaluator#agent_resource}

---

##### `cloudObservability`<sup>Required</sup> <a name="cloudObservability" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.Initializer.parameter.cloudObservability"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservability">VertexAiOnlineEvaluatorCloudObservability</a>

cloud_observability block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#cloud_observability VertexAiOnlineEvaluator#cloud_observability}

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigA">VertexAiOnlineEvaluatorConfigA</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#config VertexAiOnlineEvaluator#config}

---

##### `metricSources`<sup>Required</sup> <a name="metricSources" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.Initializer.parameter.metricSources"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSources">VertexAiOnlineEvaluatorMetricSources</a>>

metric_sources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#metric_sources VertexAiOnlineEvaluator#metric_sources}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#deletion_policy VertexAiOnlineEvaluator#deletion_policy}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Human-readable name for the OnlineEvaluator.

The name doesn't have to be
unique. The name can consist of any UTF-8 characters. The maximum length
is 63 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#display_name VertexAiOnlineEvaluator#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#id VertexAiOnlineEvaluator#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#project VertexAiOnlineEvaluator#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.Initializer.parameter.region"></a>

- *Type:* java.lang.String

The region of the OnlineEvaluator (e.g. us-central1). If unset, the provider's region is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#region VertexAiOnlineEvaluator#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeouts">VertexAiOnlineEvaluatorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#timeouts VertexAiOnlineEvaluator#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.putCloudObservability">putCloudObservability</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.putConfig">putConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.putMetricSources">putMetricSources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCloudObservability` <a name="putCloudObservability" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.putCloudObservability"></a>

```java
public void putCloudObservability(VertexAiOnlineEvaluatorCloudObservability value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.putCloudObservability.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservability">VertexAiOnlineEvaluatorCloudObservability</a>

---

##### `putConfig` <a name="putConfig" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.putConfig"></a>

```java
public void putConfig(VertexAiOnlineEvaluatorConfigA value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigA">VertexAiOnlineEvaluatorConfigA</a>

---

##### `putMetricSources` <a name="putMetricSources" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.putMetricSources"></a>

```java
public void putMetricSources(IResolvable|java.util.List<VertexAiOnlineEvaluatorMetricSources> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.putMetricSources.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSources">VertexAiOnlineEvaluatorMetricSources</a>>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.putTimeouts"></a>

```java
public void putTimeouts(VertexAiOnlineEvaluatorTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeouts">VertexAiOnlineEvaluatorTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.resetProject"></a>

```java
public void resetProject()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a VertexAiOnlineEvaluator resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.isConstruct"></a>

```java
import io.cdktn.providers.google.vertex_ai_online_evaluator.VertexAiOnlineEvaluator;

VertexAiOnlineEvaluator.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.isTerraformElement"></a>

```java
import io.cdktn.providers.google.vertex_ai_online_evaluator.VertexAiOnlineEvaluator;

VertexAiOnlineEvaluator.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.isTerraformResource"></a>

```java
import io.cdktn.providers.google.vertex_ai_online_evaluator.VertexAiOnlineEvaluator;

VertexAiOnlineEvaluator.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.vertex_ai_online_evaluator.VertexAiOnlineEvaluator;

VertexAiOnlineEvaluator.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),VertexAiOnlineEvaluator.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a VertexAiOnlineEvaluator resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the VertexAiOnlineEvaluator to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing VertexAiOnlineEvaluator that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the VertexAiOnlineEvaluator to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.cloudObservability">cloudObservability</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference">VertexAiOnlineEvaluatorCloudObservabilityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.config">config</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference">VertexAiOnlineEvaluatorConfigAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.metricSources">metricSources</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesList">VertexAiOnlineEvaluatorMetricSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.stateDetails">stateDetails</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsList">VertexAiOnlineEvaluatorStateDetailsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference">VertexAiOnlineEvaluatorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.agentResourceInput">agentResourceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.cloudObservabilityInput">cloudObservabilityInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservability">VertexAiOnlineEvaluatorCloudObservability</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.configInput">configInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigA">VertexAiOnlineEvaluatorConfigA</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.metricSourcesInput">metricSourcesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSources">VertexAiOnlineEvaluatorMetricSources</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeouts">VertexAiOnlineEvaluatorTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.agentResource">agentResource</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `cloudObservability`<sup>Required</sup> <a name="cloudObservability" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.cloudObservability"></a>

```java
public VertexAiOnlineEvaluatorCloudObservabilityOutputReference getCloudObservability();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference">VertexAiOnlineEvaluatorCloudObservabilityOutputReference</a>

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.config"></a>

```java
public VertexAiOnlineEvaluatorConfigAOutputReference getConfig();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference">VertexAiOnlineEvaluatorConfigAOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `metricSources`<sup>Required</sup> <a name="metricSources" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.metricSources"></a>

```java
public VertexAiOnlineEvaluatorMetricSourcesList getMetricSources();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesList">VertexAiOnlineEvaluatorMetricSourcesList</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `stateDetails`<sup>Required</sup> <a name="stateDetails" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.stateDetails"></a>

```java
public VertexAiOnlineEvaluatorStateDetailsList getStateDetails();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsList">VertexAiOnlineEvaluatorStateDetailsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.timeouts"></a>

```java
public VertexAiOnlineEvaluatorTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference">VertexAiOnlineEvaluatorTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `agentResourceInput`<sup>Optional</sup> <a name="agentResourceInput" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.agentResourceInput"></a>

```java
public java.lang.String getAgentResourceInput();
```

- *Type:* java.lang.String

---

##### `cloudObservabilityInput`<sup>Optional</sup> <a name="cloudObservabilityInput" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.cloudObservabilityInput"></a>

```java
public VertexAiOnlineEvaluatorCloudObservability getCloudObservabilityInput();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservability">VertexAiOnlineEvaluatorCloudObservability</a>

---

##### `configInput`<sup>Optional</sup> <a name="configInput" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.configInput"></a>

```java
public VertexAiOnlineEvaluatorConfigA getConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigA">VertexAiOnlineEvaluatorConfigA</a>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `metricSourcesInput`<sup>Optional</sup> <a name="metricSourcesInput" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.metricSourcesInput"></a>

```java
public IResolvable|java.util.List<VertexAiOnlineEvaluatorMetricSources> getMetricSourcesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSources">VertexAiOnlineEvaluatorMetricSources</a>>

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.timeoutsInput"></a>

```java
public IResolvable|VertexAiOnlineEvaluatorTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeouts">VertexAiOnlineEvaluatorTimeouts</a>

---

##### `agentResource`<sup>Required</sup> <a name="agentResource" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.agentResource"></a>

```java
public java.lang.String getAgentResource();
```

- *Type:* java.lang.String

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluator.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### VertexAiOnlineEvaluatorCloudObservability <a name="VertexAiOnlineEvaluatorCloudObservability" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservability"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservability.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_online_evaluator.VertexAiOnlineEvaluatorCloudObservability;

VertexAiOnlineEvaluatorCloudObservability.builder()
    .openTelemetry(VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry)
//  .logView(java.lang.String)
//  .sessionScope(VertexAiOnlineEvaluatorCloudObservabilitySessionScope)
//  .traceScope(VertexAiOnlineEvaluatorCloudObservabilityTraceScope)
//  .traceView(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservability.property.openTelemetry">openTelemetry</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry">VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry</a></code> | open_telemetry block. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservability.property.logView">logView</a></code> | <code>java.lang.String</code> | Optional log view that will be used to query logs. If empty, the project's default view ('projects/{{project_id}}') will be used. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservability.property.sessionScope">sessionScope</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScope">VertexAiOnlineEvaluatorCloudObservabilitySessionScope</a></code> | session_scope block. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservability.property.traceScope">traceScope</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScope">VertexAiOnlineEvaluatorCloudObservabilityTraceScope</a></code> | trace_scope block. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservability.property.traceView">traceView</a></code> | <code>java.lang.String</code> | Optional trace view that will be used to query traces. |

---

##### `openTelemetry`<sup>Required</sup> <a name="openTelemetry" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservability.property.openTelemetry"></a>

```java
public VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry getOpenTelemetry();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry">VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry</a>

open_telemetry block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#open_telemetry VertexAiOnlineEvaluator#open_telemetry}

---

##### `logView`<sup>Optional</sup> <a name="logView" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservability.property.logView"></a>

```java
public java.lang.String getLogView();
```

- *Type:* java.lang.String

Optional log view that will be used to query logs. If empty, the project's default view ('projects/{{project_id}}') will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#log_view VertexAiOnlineEvaluator#log_view}

---

##### `sessionScope`<sup>Optional</sup> <a name="sessionScope" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservability.property.sessionScope"></a>

```java
public VertexAiOnlineEvaluatorCloudObservabilitySessionScope getSessionScope();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScope">VertexAiOnlineEvaluatorCloudObservabilitySessionScope</a>

session_scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#session_scope VertexAiOnlineEvaluator#session_scope}

---

##### `traceScope`<sup>Optional</sup> <a name="traceScope" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservability.property.traceScope"></a>

```java
public VertexAiOnlineEvaluatorCloudObservabilityTraceScope getTraceScope();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScope">VertexAiOnlineEvaluatorCloudObservabilityTraceScope</a>

trace_scope block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#trace_scope VertexAiOnlineEvaluator#trace_scope}

---

##### `traceView`<sup>Optional</sup> <a name="traceView" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservability.property.traceView"></a>

```java
public java.lang.String getTraceView();
```

- *Type:* java.lang.String

Optional trace view that will be used to query traces.

If empty, the
'_AllSpans' view from the '_Trace' US bucket will be used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#trace_view VertexAiOnlineEvaluator#trace_view}

---

### VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry <a name="VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_online_evaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry;

VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry.builder()
    .semconvVersion(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry.property.semconvVersion">semconvVersion</a></code> | <code>java.lang.String</code> | Defines which version of the OTel Semantic Convention the data follows. Can be "1.39.0" or newer. |

---

##### `semconvVersion`<sup>Required</sup> <a name="semconvVersion" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry.property.semconvVersion"></a>

```java
public java.lang.String getSemconvVersion();
```

- *Type:* java.lang.String

Defines which version of the OTel Semantic Convention the data follows. Can be "1.39.0" or newer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#semconv_version VertexAiOnlineEvaluator#semconv_version}

---

### VertexAiOnlineEvaluatorCloudObservabilitySessionScope <a name="VertexAiOnlineEvaluatorCloudObservabilitySessionScope" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScope"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScope.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_online_evaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScope;

VertexAiOnlineEvaluatorCloudObservabilitySessionScope.builder()
//  .filter(IResolvable|java.util.List<VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter>)
//  .inactivityTrigger(VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScope.property.filter">filter</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter</a>></code> | filter block. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScope.property.inactivityTrigger">inactivityTrigger</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger</a></code> | inactivity_trigger block. |

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScope.property.filter"></a>

```java
public IResolvable|java.util.List<VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter> getFilter();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#filter VertexAiOnlineEvaluator#filter}

---

##### `inactivityTrigger`<sup>Optional</sup> <a name="inactivityTrigger" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScope.property.inactivityTrigger"></a>

```java
public VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger getInactivityTrigger();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger</a>

inactivity_trigger block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#inactivity_trigger VertexAiOnlineEvaluator#inactivity_trigger}

---

### VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter <a name="VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_online_evaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter;

VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter.builder()
//  .duration(VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration)
//  .modelCallErrors(VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors)
//  .modelCalls(VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls)
//  .toolCallErrors(VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors)
//  .toolCalls(VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls)
//  .totalTokenUsage(VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage)
//  .userTurns(VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter.property.duration">duration</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration</a></code> | duration block. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter.property.modelCallErrors">modelCallErrors</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors</a></code> | model_call_errors block. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter.property.modelCalls">modelCalls</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls</a></code> | model_calls block. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter.property.toolCallErrors">toolCallErrors</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors</a></code> | tool_call_errors block. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter.property.toolCalls">toolCalls</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls</a></code> | tool_calls block. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter.property.totalTokenUsage">totalTokenUsage</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage</a></code> | total_token_usage block. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter.property.userTurns">userTurns</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns</a></code> | user_turns block. |

---

##### `duration`<sup>Optional</sup> <a name="duration" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter.property.duration"></a>

```java
public VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration getDuration();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration</a>

duration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#duration VertexAiOnlineEvaluator#duration}

---

##### `modelCallErrors`<sup>Optional</sup> <a name="modelCallErrors" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter.property.modelCallErrors"></a>

```java
public VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors getModelCallErrors();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors</a>

model_call_errors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#model_call_errors VertexAiOnlineEvaluator#model_call_errors}

---

##### `modelCalls`<sup>Optional</sup> <a name="modelCalls" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter.property.modelCalls"></a>

```java
public VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls getModelCalls();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls</a>

model_calls block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#model_calls VertexAiOnlineEvaluator#model_calls}

---

##### `toolCallErrors`<sup>Optional</sup> <a name="toolCallErrors" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter.property.toolCallErrors"></a>

```java
public VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors getToolCallErrors();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors</a>

tool_call_errors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#tool_call_errors VertexAiOnlineEvaluator#tool_call_errors}

---

##### `toolCalls`<sup>Optional</sup> <a name="toolCalls" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter.property.toolCalls"></a>

```java
public VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls getToolCalls();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls</a>

tool_calls block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#tool_calls VertexAiOnlineEvaluator#tool_calls}

---

##### `totalTokenUsage`<sup>Optional</sup> <a name="totalTokenUsage" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter.property.totalTokenUsage"></a>

```java
public VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage getTotalTokenUsage();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage</a>

total_token_usage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#total_token_usage VertexAiOnlineEvaluator#total_token_usage}

---

##### `userTurns`<sup>Optional</sup> <a name="userTurns" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter.property.userTurns"></a>

```java
public VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns getUserTurns();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns</a>

user_turns block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#user_turns VertexAiOnlineEvaluator#user_turns}

---

### VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration <a name="VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_online_evaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration;

VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration.builder()
    .comparisonOperator(java.lang.String)
    .value(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration.property.comparisonOperator">comparisonOperator</a></code> | <code>java.lang.String</code> | The comparison operator to apply. Possible values are: LESS, LESS_OR_EQUAL, EQUAL, NOT_EQUAL, GREATER_OR_EQUAL, GREATER. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration.property.value">value</a></code> | <code>java.lang.Number</code> | The value to compare against. |

---

##### `comparisonOperator`<sup>Required</sup> <a name="comparisonOperator" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration.property.comparisonOperator"></a>

```java
public java.lang.String getComparisonOperator();
```

- *Type:* java.lang.String

The comparison operator to apply. Possible values are: LESS, LESS_OR_EQUAL, EQUAL, NOT_EQUAL, GREATER_OR_EQUAL, GREATER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#comparison_operator VertexAiOnlineEvaluator#comparison_operator}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

The value to compare against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#value VertexAiOnlineEvaluator#value}

---

### VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors <a name="VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_online_evaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors;

VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors.builder()
    .comparisonOperator(java.lang.String)
    .value(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors.property.comparisonOperator">comparisonOperator</a></code> | <code>java.lang.String</code> | The comparison operator to apply. Possible values are: LESS, LESS_OR_EQUAL, EQUAL, NOT_EQUAL, GREATER_OR_EQUAL, GREATER. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors.property.value">value</a></code> | <code>java.lang.Number</code> | The value to compare against. |

---

##### `comparisonOperator`<sup>Required</sup> <a name="comparisonOperator" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors.property.comparisonOperator"></a>

```java
public java.lang.String getComparisonOperator();
```

- *Type:* java.lang.String

The comparison operator to apply. Possible values are: LESS, LESS_OR_EQUAL, EQUAL, NOT_EQUAL, GREATER_OR_EQUAL, GREATER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#comparison_operator VertexAiOnlineEvaluator#comparison_operator}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

The value to compare against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#value VertexAiOnlineEvaluator#value}

---

### VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls <a name="VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_online_evaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls;

VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls.builder()
    .comparisonOperator(java.lang.String)
    .value(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls.property.comparisonOperator">comparisonOperator</a></code> | <code>java.lang.String</code> | The comparison operator to apply. Possible values are: LESS, LESS_OR_EQUAL, EQUAL, NOT_EQUAL, GREATER_OR_EQUAL, GREATER. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls.property.value">value</a></code> | <code>java.lang.Number</code> | The value to compare against. |

---

##### `comparisonOperator`<sup>Required</sup> <a name="comparisonOperator" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls.property.comparisonOperator"></a>

```java
public java.lang.String getComparisonOperator();
```

- *Type:* java.lang.String

The comparison operator to apply. Possible values are: LESS, LESS_OR_EQUAL, EQUAL, NOT_EQUAL, GREATER_OR_EQUAL, GREATER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#comparison_operator VertexAiOnlineEvaluator#comparison_operator}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

The value to compare against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#value VertexAiOnlineEvaluator#value}

---

### VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors <a name="VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_online_evaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors;

VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors.builder()
    .comparisonOperator(java.lang.String)
    .value(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors.property.comparisonOperator">comparisonOperator</a></code> | <code>java.lang.String</code> | The comparison operator to apply. Possible values are: LESS, LESS_OR_EQUAL, EQUAL, NOT_EQUAL, GREATER_OR_EQUAL, GREATER. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors.property.value">value</a></code> | <code>java.lang.Number</code> | The value to compare against. |

---

##### `comparisonOperator`<sup>Required</sup> <a name="comparisonOperator" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors.property.comparisonOperator"></a>

```java
public java.lang.String getComparisonOperator();
```

- *Type:* java.lang.String

The comparison operator to apply. Possible values are: LESS, LESS_OR_EQUAL, EQUAL, NOT_EQUAL, GREATER_OR_EQUAL, GREATER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#comparison_operator VertexAiOnlineEvaluator#comparison_operator}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

The value to compare against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#value VertexAiOnlineEvaluator#value}

---

### VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls <a name="VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_online_evaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls;

VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls.builder()
    .comparisonOperator(java.lang.String)
    .value(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls.property.comparisonOperator">comparisonOperator</a></code> | <code>java.lang.String</code> | The comparison operator to apply. Possible values are: LESS, LESS_OR_EQUAL, EQUAL, NOT_EQUAL, GREATER_OR_EQUAL, GREATER. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls.property.value">value</a></code> | <code>java.lang.Number</code> | The value to compare against. |

---

##### `comparisonOperator`<sup>Required</sup> <a name="comparisonOperator" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls.property.comparisonOperator"></a>

```java
public java.lang.String getComparisonOperator();
```

- *Type:* java.lang.String

The comparison operator to apply. Possible values are: LESS, LESS_OR_EQUAL, EQUAL, NOT_EQUAL, GREATER_OR_EQUAL, GREATER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#comparison_operator VertexAiOnlineEvaluator#comparison_operator}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

The value to compare against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#value VertexAiOnlineEvaluator#value}

---

### VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage <a name="VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_online_evaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage;

VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage.builder()
    .comparisonOperator(java.lang.String)
    .value(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage.property.comparisonOperator">comparisonOperator</a></code> | <code>java.lang.String</code> | The comparison operator to apply. Possible values are: LESS, LESS_OR_EQUAL, EQUAL, NOT_EQUAL, GREATER_OR_EQUAL, GREATER. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage.property.value">value</a></code> | <code>java.lang.Number</code> | The value to compare against. |

---

##### `comparisonOperator`<sup>Required</sup> <a name="comparisonOperator" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage.property.comparisonOperator"></a>

```java
public java.lang.String getComparisonOperator();
```

- *Type:* java.lang.String

The comparison operator to apply. Possible values are: LESS, LESS_OR_EQUAL, EQUAL, NOT_EQUAL, GREATER_OR_EQUAL, GREATER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#comparison_operator VertexAiOnlineEvaluator#comparison_operator}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

The value to compare against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#value VertexAiOnlineEvaluator#value}

---

### VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns <a name="VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_online_evaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns;

VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns.builder()
    .comparisonOperator(java.lang.String)
    .value(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns.property.comparisonOperator">comparisonOperator</a></code> | <code>java.lang.String</code> | The comparison operator to apply. Possible values are: LESS, LESS_OR_EQUAL, EQUAL, NOT_EQUAL, GREATER_OR_EQUAL, GREATER. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns.property.value">value</a></code> | <code>java.lang.Number</code> | The value to compare against. |

---

##### `comparisonOperator`<sup>Required</sup> <a name="comparisonOperator" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns.property.comparisonOperator"></a>

```java
public java.lang.String getComparisonOperator();
```

- *Type:* java.lang.String

The comparison operator to apply. Possible values are: LESS, LESS_OR_EQUAL, EQUAL, NOT_EQUAL, GREATER_OR_EQUAL, GREATER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#comparison_operator VertexAiOnlineEvaluator#comparison_operator}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

The value to compare against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#value VertexAiOnlineEvaluator#value}

---

### VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger <a name="VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_online_evaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger;

VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger.builder()
    .threshold(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger.property.threshold">threshold</a></code> | <code>java.lang.String</code> | The amount of time that must pass with no new traces before a session is considered ready for evaluation. |

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger.property.threshold"></a>

```java
public java.lang.String getThreshold();
```

- *Type:* java.lang.String

The amount of time that must pass with no new traces before a session is considered ready for evaluation.

Must be a positive
duration no greater than 7 days (604800 seconds), e.g. "3600s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#threshold VertexAiOnlineEvaluator#threshold}

---

### VertexAiOnlineEvaluatorCloudObservabilityTraceScope <a name="VertexAiOnlineEvaluatorCloudObservabilityTraceScope" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScope"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScope.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_online_evaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScope;

VertexAiOnlineEvaluatorCloudObservabilityTraceScope.builder()
//  .filter(IResolvable|java.util.List<VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScope.property.filter">filter</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter">VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter</a>></code> | filter block. |

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScope.property.filter"></a>

```java
public IResolvable|java.util.List<VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter> getFilter();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter">VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter</a>>

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#filter VertexAiOnlineEvaluator#filter}

---

### VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter <a name="VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_online_evaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter;

VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter.builder()
//  .duration(VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration)
//  .totalTokenUsage(VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter.property.duration">duration</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration">VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration</a></code> | duration block. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter.property.totalTokenUsage">totalTokenUsage</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage">VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage</a></code> | total_token_usage block. |

---

##### `duration`<sup>Optional</sup> <a name="duration" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter.property.duration"></a>

```java
public VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration getDuration();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration">VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration</a>

duration block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#duration VertexAiOnlineEvaluator#duration}

---

##### `totalTokenUsage`<sup>Optional</sup> <a name="totalTokenUsage" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter.property.totalTokenUsage"></a>

```java
public VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage getTotalTokenUsage();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage">VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage</a>

total_token_usage block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#total_token_usage VertexAiOnlineEvaluator#total_token_usage}

---

### VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration <a name="VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_online_evaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration;

VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration.builder()
    .comparisonOperator(java.lang.String)
    .value(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration.property.comparisonOperator">comparisonOperator</a></code> | <code>java.lang.String</code> | The comparison operator to apply. Possible values are: LESS, LESS_OR_EQUAL, EQUAL, NOT_EQUAL, GREATER_OR_EQUAL, GREATER. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration.property.value">value</a></code> | <code>java.lang.Number</code> | The value to compare against. |

---

##### `comparisonOperator`<sup>Required</sup> <a name="comparisonOperator" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration.property.comparisonOperator"></a>

```java
public java.lang.String getComparisonOperator();
```

- *Type:* java.lang.String

The comparison operator to apply. Possible values are: LESS, LESS_OR_EQUAL, EQUAL, NOT_EQUAL, GREATER_OR_EQUAL, GREATER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#comparison_operator VertexAiOnlineEvaluator#comparison_operator}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

The value to compare against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#value VertexAiOnlineEvaluator#value}

---

### VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage <a name="VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_online_evaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage;

VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage.builder()
    .comparisonOperator(java.lang.String)
    .value(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage.property.comparisonOperator">comparisonOperator</a></code> | <code>java.lang.String</code> | The comparison operator to apply. Possible values are: LESS, LESS_OR_EQUAL, EQUAL, NOT_EQUAL, GREATER_OR_EQUAL, GREATER. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage.property.value">value</a></code> | <code>java.lang.Number</code> | The value to compare against. |

---

##### `comparisonOperator`<sup>Required</sup> <a name="comparisonOperator" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage.property.comparisonOperator"></a>

```java
public java.lang.String getComparisonOperator();
```

- *Type:* java.lang.String

The comparison operator to apply. Possible values are: LESS, LESS_OR_EQUAL, EQUAL, NOT_EQUAL, GREATER_OR_EQUAL, GREATER.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#comparison_operator VertexAiOnlineEvaluator#comparison_operator}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

The value to compare against.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#value VertexAiOnlineEvaluator#value}

---

### VertexAiOnlineEvaluatorConfig <a name="VertexAiOnlineEvaluatorConfig" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfig.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_online_evaluator.VertexAiOnlineEvaluatorConfig;

VertexAiOnlineEvaluatorConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .agentResource(java.lang.String)
    .cloudObservability(VertexAiOnlineEvaluatorCloudObservability)
    .config(VertexAiOnlineEvaluatorConfigA)
    .metricSources(IResolvable|java.util.List<VertexAiOnlineEvaluatorMetricSources>)
//  .deletionPolicy(java.lang.String)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .region(java.lang.String)
//  .timeouts(VertexAiOnlineEvaluatorTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfig.property.agentResource">agentResource</a></code> | <code>java.lang.String</code> | The name of the agent that the OnlineEvaluator evaluates periodically. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfig.property.cloudObservability">cloudObservability</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservability">VertexAiOnlineEvaluatorCloudObservability</a></code> | cloud_observability block. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfig.property.config">config</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigA">VertexAiOnlineEvaluatorConfigA</a></code> | config block. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfig.property.metricSources">metricSources</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSources">VertexAiOnlineEvaluatorMetricSources</a>></code> | metric_sources block. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Human-readable name for the OnlineEvaluator. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#id VertexAiOnlineEvaluator#id}. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#project VertexAiOnlineEvaluator#project}. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfig.property.region">region</a></code> | <code>java.lang.String</code> | The region of the OnlineEvaluator (e.g. us-central1). If unset, the provider's region is used. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeouts">VertexAiOnlineEvaluatorTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `agentResource`<sup>Required</sup> <a name="agentResource" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfig.property.agentResource"></a>

```java
public java.lang.String getAgentResource();
```

- *Type:* java.lang.String

The name of the agent that the OnlineEvaluator evaluates periodically.

This value is used to filter the traces with a matching cloud.resource_id
and link the evaluation results with relevant dashboards/UIs. This field
is immutable; once set, it cannot be changed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#agent_resource VertexAiOnlineEvaluator#agent_resource}

---

##### `cloudObservability`<sup>Required</sup> <a name="cloudObservability" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfig.property.cloudObservability"></a>

```java
public VertexAiOnlineEvaluatorCloudObservability getCloudObservability();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservability">VertexAiOnlineEvaluatorCloudObservability</a>

cloud_observability block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#cloud_observability VertexAiOnlineEvaluator#cloud_observability}

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfig.property.config"></a>

```java
public VertexAiOnlineEvaluatorConfigA getConfig();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigA">VertexAiOnlineEvaluatorConfigA</a>

config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#config VertexAiOnlineEvaluator#config}

---

##### `metricSources`<sup>Required</sup> <a name="metricSources" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfig.property.metricSources"></a>

```java
public IResolvable|java.util.List<VertexAiOnlineEvaluatorMetricSources> getMetricSources();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSources">VertexAiOnlineEvaluatorMetricSources</a>>

metric_sources block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#metric_sources VertexAiOnlineEvaluator#metric_sources}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#deletion_policy VertexAiOnlineEvaluator#deletion_policy}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Human-readable name for the OnlineEvaluator.

The name doesn't have to be
unique. The name can consist of any UTF-8 characters. The maximum length
is 63 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#display_name VertexAiOnlineEvaluator#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#id VertexAiOnlineEvaluator#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#project VertexAiOnlineEvaluator#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

The region of the OnlineEvaluator (e.g. us-central1). If unset, the provider's region is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#region VertexAiOnlineEvaluator#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfig.property.timeouts"></a>

```java
public VertexAiOnlineEvaluatorTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeouts">VertexAiOnlineEvaluatorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#timeouts VertexAiOnlineEvaluator#timeouts}

---

### VertexAiOnlineEvaluatorConfigA <a name="VertexAiOnlineEvaluatorConfigA" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigA.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_online_evaluator.VertexAiOnlineEvaluatorConfigA;

VertexAiOnlineEvaluatorConfigA.builder()
//  .maxEvaluatedSamplesPerRun(java.lang.String)
//  .randomSampling(VertexAiOnlineEvaluatorConfigRandomSampling)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigA.property.maxEvaluatedSamplesPerRun">maxEvaluatedSamplesPerRun</a></code> | <code>java.lang.String</code> | The maximum number of evaluations to perform per run. If set to 0, the number is unbounded. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigA.property.randomSampling">randomSampling</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSampling">VertexAiOnlineEvaluatorConfigRandomSampling</a></code> | random_sampling block. |

---

##### `maxEvaluatedSamplesPerRun`<sup>Optional</sup> <a name="maxEvaluatedSamplesPerRun" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigA.property.maxEvaluatedSamplesPerRun"></a>

```java
public java.lang.String getMaxEvaluatedSamplesPerRun();
```

- *Type:* java.lang.String

The maximum number of evaluations to perform per run. If set to 0, the number is unbounded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#max_evaluated_samples_per_run VertexAiOnlineEvaluator#max_evaluated_samples_per_run}

---

##### `randomSampling`<sup>Optional</sup> <a name="randomSampling" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigA.property.randomSampling"></a>

```java
public VertexAiOnlineEvaluatorConfigRandomSampling getRandomSampling();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSampling">VertexAiOnlineEvaluatorConfigRandomSampling</a>

random_sampling block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#random_sampling VertexAiOnlineEvaluator#random_sampling}

---

### VertexAiOnlineEvaluatorConfigRandomSampling <a name="VertexAiOnlineEvaluatorConfigRandomSampling" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSampling"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSampling.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_online_evaluator.VertexAiOnlineEvaluatorConfigRandomSampling;

VertexAiOnlineEvaluatorConfigRandomSampling.builder()
    .percentage(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSampling.property.percentage">percentage</a></code> | <code>java.lang.Number</code> | The percentage of traces to sample for evaluation. Must be an integer between 1 and 100. |

---

##### `percentage`<sup>Required</sup> <a name="percentage" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSampling.property.percentage"></a>

```java
public java.lang.Number getPercentage();
```

- *Type:* java.lang.Number

The percentage of traces to sample for evaluation. Must be an integer between 1 and 100.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#percentage VertexAiOnlineEvaluator#percentage}

---

### VertexAiOnlineEvaluatorMetricSources <a name="VertexAiOnlineEvaluatorMetricSources" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSources.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_online_evaluator.VertexAiOnlineEvaluatorMetricSources;

VertexAiOnlineEvaluatorMetricSources.builder()
//  .metric(java.lang.String)
//  .metricResourceName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSources.property.metric">metric</a></code> | <code>java.lang.String</code> | Inline metric config, provided as a JSON-formatted string using camelCase field names to match the API format (see the [Metric API documentation](https://cloud.google.com/vertex-ai/docs/reference/rest/v1/Metric)). The suggested predefined 'metricSpecName' values depend on the evaluation scope configured in 'cloud_observability'; a predefined metric must match the scope or the create request will be rejected:   - 'trace_scope' (single trace): 'final_response_quality_v1',     'tool_use_quality_v1', 'hallucination_v1', 'safety_v1'.   - 'session_scope' (multi-turn session):     'multi_turn_task_success_v1', 'multi_turn_tool_use_quality_v1',     'multi_turn_trajectory_quality_v1'. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSources.property.metricResourceName">metricResourceName</a></code> | <code>java.lang.String</code> | Resource name of a registered metric (a 'google_vertex_ai_evaluation_metric'), e.g. projects/{{project}}/locations/{{region}}/evaluationMetrics/{{id}}. |

---

##### `metric`<sup>Optional</sup> <a name="metric" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSources.property.metric"></a>

```java
public java.lang.String getMetric();
```

- *Type:* java.lang.String

Inline metric config, provided as a JSON-formatted string using camelCase field names to match the API format (see the [Metric API documentation](https://cloud.google.com/vertex-ai/docs/reference/rest/v1/Metric)). The suggested predefined 'metricSpecName' values depend on the evaluation scope configured in 'cloud_observability'; a predefined metric must match the scope or the create request will be rejected:   - 'trace_scope' (single trace): 'final_response_quality_v1',     'tool_use_quality_v1', 'hallucination_v1', 'safety_v1'.   - 'session_scope' (multi-turn session):     'multi_turn_task_success_v1', 'multi_turn_tool_use_quality_v1',     'multi_turn_trajectory_quality_v1'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#metric VertexAiOnlineEvaluator#metric}

---

##### `metricResourceName`<sup>Optional</sup> <a name="metricResourceName" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSources.property.metricResourceName"></a>

```java
public java.lang.String getMetricResourceName();
```

- *Type:* java.lang.String

Resource name of a registered metric (a 'google_vertex_ai_evaluation_metric'), e.g. projects/{{project}}/locations/{{region}}/evaluationMetrics/{{id}}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#metric_resource_name VertexAiOnlineEvaluator#metric_resource_name}

---

### VertexAiOnlineEvaluatorStateDetails <a name="VertexAiOnlineEvaluatorStateDetails" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetails.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_online_evaluator.VertexAiOnlineEvaluatorStateDetails;

VertexAiOnlineEvaluatorStateDetails.builder()
    .build();
```


### VertexAiOnlineEvaluatorTimeouts <a name="VertexAiOnlineEvaluatorTimeouts" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_online_evaluator.VertexAiOnlineEvaluatorTimeouts;

VertexAiOnlineEvaluatorTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#create VertexAiOnlineEvaluator#create}. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#delete VertexAiOnlineEvaluator#delete}. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#update VertexAiOnlineEvaluator#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#create VertexAiOnlineEvaluator#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#delete VertexAiOnlineEvaluator#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.7.0/docs/resources/vertex_ai_online_evaluator#update VertexAiOnlineEvaluator#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference <a name="VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_online_evaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference;

new VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.property.semconvVersionInput">semconvVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.property.semconvVersion">semconvVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry">VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `semconvVersionInput`<sup>Optional</sup> <a name="semconvVersionInput" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.property.semconvVersionInput"></a>

```java
public java.lang.String getSemconvVersionInput();
```

- *Type:* java.lang.String

---

##### `semconvVersion`<sup>Required</sup> <a name="semconvVersion" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.property.semconvVersion"></a>

```java
public java.lang.String getSemconvVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference.property.internalValue"></a>

```java
public VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry">VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry</a>

---


### VertexAiOnlineEvaluatorCloudObservabilityOutputReference <a name="VertexAiOnlineEvaluatorCloudObservabilityOutputReference" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_online_evaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference;

new VertexAiOnlineEvaluatorCloudObservabilityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.putOpenTelemetry">putOpenTelemetry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.putSessionScope">putSessionScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.putTraceScope">putTraceScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.resetLogView">resetLogView</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.resetSessionScope">resetSessionScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.resetTraceScope">resetTraceScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.resetTraceView">resetTraceView</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOpenTelemetry` <a name="putOpenTelemetry" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.putOpenTelemetry"></a>

```java
public void putOpenTelemetry(VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.putOpenTelemetry.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry">VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry</a>

---

##### `putSessionScope` <a name="putSessionScope" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.putSessionScope"></a>

```java
public void putSessionScope(VertexAiOnlineEvaluatorCloudObservabilitySessionScope value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.putSessionScope.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScope">VertexAiOnlineEvaluatorCloudObservabilitySessionScope</a>

---

##### `putTraceScope` <a name="putTraceScope" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.putTraceScope"></a>

```java
public void putTraceScope(VertexAiOnlineEvaluatorCloudObservabilityTraceScope value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.putTraceScope.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScope">VertexAiOnlineEvaluatorCloudObservabilityTraceScope</a>

---

##### `resetLogView` <a name="resetLogView" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.resetLogView"></a>

```java
public void resetLogView()
```

##### `resetSessionScope` <a name="resetSessionScope" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.resetSessionScope"></a>

```java
public void resetSessionScope()
```

##### `resetTraceScope` <a name="resetTraceScope" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.resetTraceScope"></a>

```java
public void resetTraceScope()
```

##### `resetTraceView` <a name="resetTraceView" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.resetTraceView"></a>

```java
public void resetTraceView()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.openTelemetry">openTelemetry</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference">VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.sessionScope">sessionScope</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.traceScope">traceScope</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference">VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.logViewInput">logViewInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.openTelemetryInput">openTelemetryInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry">VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.sessionScopeInput">sessionScopeInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScope">VertexAiOnlineEvaluatorCloudObservabilitySessionScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.traceScopeInput">traceScopeInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScope">VertexAiOnlineEvaluatorCloudObservabilityTraceScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.traceViewInput">traceViewInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.logView">logView</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.traceView">traceView</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservability">VertexAiOnlineEvaluatorCloudObservability</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `openTelemetry`<sup>Required</sup> <a name="openTelemetry" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.openTelemetry"></a>

```java
public VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference getOpenTelemetry();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference">VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetryOutputReference</a>

---

##### `sessionScope`<sup>Required</sup> <a name="sessionScope" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.sessionScope"></a>

```java
public VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference getSessionScope();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference</a>

---

##### `traceScope`<sup>Required</sup> <a name="traceScope" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.traceScope"></a>

```java
public VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference getTraceScope();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference">VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference</a>

---

##### `logViewInput`<sup>Optional</sup> <a name="logViewInput" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.logViewInput"></a>

```java
public java.lang.String getLogViewInput();
```

- *Type:* java.lang.String

---

##### `openTelemetryInput`<sup>Optional</sup> <a name="openTelemetryInput" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.openTelemetryInput"></a>

```java
public VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry getOpenTelemetryInput();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry">VertexAiOnlineEvaluatorCloudObservabilityOpenTelemetry</a>

---

##### `sessionScopeInput`<sup>Optional</sup> <a name="sessionScopeInput" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.sessionScopeInput"></a>

```java
public VertexAiOnlineEvaluatorCloudObservabilitySessionScope getSessionScopeInput();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScope">VertexAiOnlineEvaluatorCloudObservabilitySessionScope</a>

---

##### `traceScopeInput`<sup>Optional</sup> <a name="traceScopeInput" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.traceScopeInput"></a>

```java
public VertexAiOnlineEvaluatorCloudObservabilityTraceScope getTraceScopeInput();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScope">VertexAiOnlineEvaluatorCloudObservabilityTraceScope</a>

---

##### `traceViewInput`<sup>Optional</sup> <a name="traceViewInput" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.traceViewInput"></a>

```java
public java.lang.String getTraceViewInput();
```

- *Type:* java.lang.String

---

##### `logView`<sup>Required</sup> <a name="logView" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.logView"></a>

```java
public java.lang.String getLogView();
```

- *Type:* java.lang.String

---

##### `traceView`<sup>Required</sup> <a name="traceView" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.traceView"></a>

```java
public java.lang.String getTraceView();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityOutputReference.property.internalValue"></a>

```java
public VertexAiOnlineEvaluatorCloudObservability getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservability">VertexAiOnlineEvaluatorCloudObservability</a>

---


### VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference <a name="VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_online_evaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference;

new VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.property.comparisonOperatorInput">comparisonOperatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.property.comparisonOperator">comparisonOperator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.property.value">value</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `comparisonOperatorInput`<sup>Optional</sup> <a name="comparisonOperatorInput" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.property.comparisonOperatorInput"></a>

```java
public java.lang.String getComparisonOperatorInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.property.valueInput"></a>

```java
public java.lang.Number getValueInput();
```

- *Type:* java.lang.Number

---

##### `comparisonOperator`<sup>Required</sup> <a name="comparisonOperator" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.property.comparisonOperator"></a>

```java
public java.lang.String getComparisonOperator();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference.property.internalValue"></a>

```java
public VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration</a>

---


### VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList <a name="VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_online_evaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList;

new VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.get"></a>

```java
public VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList.property.internalValue"></a>

```java
public IResolvable|java.util.List<VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter</a>>

---


### VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference <a name="VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_online_evaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference;

new VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.property.comparisonOperatorInput">comparisonOperatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.property.comparisonOperator">comparisonOperator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.property.value">value</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `comparisonOperatorInput`<sup>Optional</sup> <a name="comparisonOperatorInput" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.property.comparisonOperatorInput"></a>

```java
public java.lang.String getComparisonOperatorInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.property.valueInput"></a>

```java
public java.lang.Number getValueInput();
```

- *Type:* java.lang.Number

---

##### `comparisonOperator`<sup>Required</sup> <a name="comparisonOperator" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.property.comparisonOperator"></a>

```java
public java.lang.String getComparisonOperator();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference.property.internalValue"></a>

```java
public VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors</a>

---


### VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference <a name="VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_online_evaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference;

new VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.property.comparisonOperatorInput">comparisonOperatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.property.comparisonOperator">comparisonOperator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.property.value">value</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `comparisonOperatorInput`<sup>Optional</sup> <a name="comparisonOperatorInput" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.property.comparisonOperatorInput"></a>

```java
public java.lang.String getComparisonOperatorInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.property.valueInput"></a>

```java
public java.lang.Number getValueInput();
```

- *Type:* java.lang.Number

---

##### `comparisonOperator`<sup>Required</sup> <a name="comparisonOperator" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.property.comparisonOperator"></a>

```java
public java.lang.String getComparisonOperator();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference.property.internalValue"></a>

```java
public VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls</a>

---


### VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference <a name="VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_online_evaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference;

new VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.putDuration">putDuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.putModelCallErrors">putModelCallErrors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.putModelCalls">putModelCalls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.putToolCallErrors">putToolCallErrors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.putToolCalls">putToolCalls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.putTotalTokenUsage">putTotalTokenUsage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.putUserTurns">putUserTurns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.resetDuration">resetDuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.resetModelCallErrors">resetModelCallErrors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.resetModelCalls">resetModelCalls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.resetToolCallErrors">resetToolCallErrors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.resetToolCalls">resetToolCalls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.resetTotalTokenUsage">resetTotalTokenUsage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.resetUserTurns">resetUserTurns</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDuration` <a name="putDuration" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.putDuration"></a>

```java
public void putDuration(VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.putDuration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration</a>

---

##### `putModelCallErrors` <a name="putModelCallErrors" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.putModelCallErrors"></a>

```java
public void putModelCallErrors(VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.putModelCallErrors.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors</a>

---

##### `putModelCalls` <a name="putModelCalls" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.putModelCalls"></a>

```java
public void putModelCalls(VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.putModelCalls.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls</a>

---

##### `putToolCallErrors` <a name="putToolCallErrors" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.putToolCallErrors"></a>

```java
public void putToolCallErrors(VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.putToolCallErrors.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors</a>

---

##### `putToolCalls` <a name="putToolCalls" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.putToolCalls"></a>

```java
public void putToolCalls(VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.putToolCalls.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls</a>

---

##### `putTotalTokenUsage` <a name="putTotalTokenUsage" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.putTotalTokenUsage"></a>

```java
public void putTotalTokenUsage(VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.putTotalTokenUsage.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage</a>

---

##### `putUserTurns` <a name="putUserTurns" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.putUserTurns"></a>

```java
public void putUserTurns(VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.putUserTurns.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns</a>

---

##### `resetDuration` <a name="resetDuration" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.resetDuration"></a>

```java
public void resetDuration()
```

##### `resetModelCallErrors` <a name="resetModelCallErrors" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.resetModelCallErrors"></a>

```java
public void resetModelCallErrors()
```

##### `resetModelCalls` <a name="resetModelCalls" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.resetModelCalls"></a>

```java
public void resetModelCalls()
```

##### `resetToolCallErrors` <a name="resetToolCallErrors" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.resetToolCallErrors"></a>

```java
public void resetToolCallErrors()
```

##### `resetToolCalls` <a name="resetToolCalls" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.resetToolCalls"></a>

```java
public void resetToolCalls()
```

##### `resetTotalTokenUsage` <a name="resetTotalTokenUsage" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.resetTotalTokenUsage"></a>

```java
public void resetTotalTokenUsage()
```

##### `resetUserTurns` <a name="resetUserTurns" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.resetUserTurns"></a>

```java
public void resetUserTurns()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.duration">duration</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.modelCallErrors">modelCallErrors</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.modelCalls">modelCalls</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.toolCallErrors">toolCallErrors</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.toolCalls">toolCalls</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.totalTokenUsage">totalTokenUsage</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.userTurns">userTurns</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.durationInput">durationInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.modelCallErrorsInput">modelCallErrorsInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.modelCallsInput">modelCallsInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.toolCallErrorsInput">toolCallErrorsInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.toolCallsInput">toolCallsInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.totalTokenUsageInput">totalTokenUsageInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.userTurnsInput">userTurnsInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.duration"></a>

```java
public VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference getDuration();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDurationOutputReference</a>

---

##### `modelCallErrors`<sup>Required</sup> <a name="modelCallErrors" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.modelCallErrors"></a>

```java
public VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference getModelCallErrors();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrorsOutputReference</a>

---

##### `modelCalls`<sup>Required</sup> <a name="modelCalls" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.modelCalls"></a>

```java
public VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference getModelCalls();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallsOutputReference</a>

---

##### `toolCallErrors`<sup>Required</sup> <a name="toolCallErrors" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.toolCallErrors"></a>

```java
public VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference getToolCallErrors();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference</a>

---

##### `toolCalls`<sup>Required</sup> <a name="toolCalls" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.toolCalls"></a>

```java
public VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference getToolCalls();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference</a>

---

##### `totalTokenUsage`<sup>Required</sup> <a name="totalTokenUsage" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.totalTokenUsage"></a>

```java
public VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference getTotalTokenUsage();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference</a>

---

##### `userTurns`<sup>Required</sup> <a name="userTurns" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.userTurns"></a>

```java
public VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference getUserTurns();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference</a>

---

##### `durationInput`<sup>Optional</sup> <a name="durationInput" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.durationInput"></a>

```java
public VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration getDurationInput();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterDuration</a>

---

##### `modelCallErrorsInput`<sup>Optional</sup> <a name="modelCallErrorsInput" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.modelCallErrorsInput"></a>

```java
public VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors getModelCallErrorsInput();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCallErrors</a>

---

##### `modelCallsInput`<sup>Optional</sup> <a name="modelCallsInput" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.modelCallsInput"></a>

```java
public VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls getModelCallsInput();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterModelCalls</a>

---

##### `toolCallErrorsInput`<sup>Optional</sup> <a name="toolCallErrorsInput" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.toolCallErrorsInput"></a>

```java
public VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors getToolCallErrorsInput();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors</a>

---

##### `toolCallsInput`<sup>Optional</sup> <a name="toolCallsInput" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.toolCallsInput"></a>

```java
public VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls getToolCallsInput();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls</a>

---

##### `totalTokenUsageInput`<sup>Optional</sup> <a name="totalTokenUsageInput" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.totalTokenUsageInput"></a>

```java
public VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage getTotalTokenUsageInput();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage</a>

---

##### `userTurnsInput`<sup>Optional</sup> <a name="userTurnsInput" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.userTurnsInput"></a>

```java
public VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns getUserTurnsInput();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterOutputReference.property.internalValue"></a>

```java
public IResolvable|VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter</a>

---


### VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference <a name="VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_online_evaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference;

new VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.property.comparisonOperatorInput">comparisonOperatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.property.comparisonOperator">comparisonOperator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.property.value">value</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `comparisonOperatorInput`<sup>Optional</sup> <a name="comparisonOperatorInput" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.property.comparisonOperatorInput"></a>

```java
public java.lang.String getComparisonOperatorInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.property.valueInput"></a>

```java
public java.lang.Number getValueInput();
```

- *Type:* java.lang.Number

---

##### `comparisonOperator`<sup>Required</sup> <a name="comparisonOperator" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.property.comparisonOperator"></a>

```java
public java.lang.String getComparisonOperator();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrorsOutputReference.property.internalValue"></a>

```java
public VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallErrors</a>

---


### VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference <a name="VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_online_evaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference;

new VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.property.comparisonOperatorInput">comparisonOperatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.property.comparisonOperator">comparisonOperator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.property.value">value</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `comparisonOperatorInput`<sup>Optional</sup> <a name="comparisonOperatorInput" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.property.comparisonOperatorInput"></a>

```java
public java.lang.String getComparisonOperatorInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.property.valueInput"></a>

```java
public java.lang.Number getValueInput();
```

- *Type:* java.lang.Number

---

##### `comparisonOperator`<sup>Required</sup> <a name="comparisonOperator" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.property.comparisonOperator"></a>

```java
public java.lang.String getComparisonOperator();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCallsOutputReference.property.internalValue"></a>

```java
public VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterToolCalls</a>

---


### VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference <a name="VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_online_evaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference;

new VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.property.comparisonOperatorInput">comparisonOperatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.property.comparisonOperator">comparisonOperator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.property.value">value</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `comparisonOperatorInput`<sup>Optional</sup> <a name="comparisonOperatorInput" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.property.comparisonOperatorInput"></a>

```java
public java.lang.String getComparisonOperatorInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.property.valueInput"></a>

```java
public java.lang.Number getValueInput();
```

- *Type:* java.lang.Number

---

##### `comparisonOperator`<sup>Required</sup> <a name="comparisonOperator" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.property.comparisonOperator"></a>

```java
public java.lang.String getComparisonOperator();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsageOutputReference.property.internalValue"></a>

```java
public VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterTotalTokenUsage</a>

---


### VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference <a name="VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_online_evaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference;

new VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.property.comparisonOperatorInput">comparisonOperatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.property.comparisonOperator">comparisonOperator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.property.value">value</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `comparisonOperatorInput`<sup>Optional</sup> <a name="comparisonOperatorInput" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.property.comparisonOperatorInput"></a>

```java
public java.lang.String getComparisonOperatorInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.property.valueInput"></a>

```java
public java.lang.Number getValueInput();
```

- *Type:* java.lang.Number

---

##### `comparisonOperator`<sup>Required</sup> <a name="comparisonOperator" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.property.comparisonOperator"></a>

```java
public java.lang.String getComparisonOperator();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurnsOutputReference.property.internalValue"></a>

```java
public VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterUserTurns</a>

---


### VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference <a name="VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_online_evaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference;

new VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.property.thresholdInput">thresholdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.property.threshold">threshold</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `thresholdInput`<sup>Optional</sup> <a name="thresholdInput" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.property.thresholdInput"></a>

```java
public java.lang.String getThresholdInput();
```

- *Type:* java.lang.String

---

##### `threshold`<sup>Required</sup> <a name="threshold" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.property.threshold"></a>

```java
public java.lang.String getThreshold();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference.property.internalValue"></a>

```java
public VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger</a>

---


### VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference <a name="VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_online_evaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference;

new VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.putInactivityTrigger">putInactivityTrigger</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.resetInactivityTrigger">resetInactivityTrigger</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFilter` <a name="putFilter" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.putFilter"></a>

```java
public void putFilter(IResolvable|java.util.List<VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.putFilter.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter</a>>

---

##### `putInactivityTrigger` <a name="putInactivityTrigger" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.putInactivityTrigger"></a>

```java
public void putInactivityTrigger(VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.putInactivityTrigger.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger</a>

---

##### `resetFilter` <a name="resetFilter" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.resetFilter"></a>

```java
public void resetFilter()
```

##### `resetInactivityTrigger` <a name="resetInactivityTrigger" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.resetInactivityTrigger"></a>

```java
public void resetInactivityTrigger()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.property.inactivityTrigger">inactivityTrigger</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.property.filterInput">filterInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.property.inactivityTriggerInput">inactivityTriggerInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScope">VertexAiOnlineEvaluatorCloudObservabilitySessionScope</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.property.filter"></a>

```java
public VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList getFilter();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilterList</a>

---

##### `inactivityTrigger`<sup>Required</sup> <a name="inactivityTrigger" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.property.inactivityTrigger"></a>

```java
public VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference getInactivityTrigger();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTriggerOutputReference</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.property.filterInput"></a>

```java
public IResolvable|java.util.List<VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter> getFilterInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeFilter</a>>

---

##### `inactivityTriggerInput`<sup>Optional</sup> <a name="inactivityTriggerInput" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.property.inactivityTriggerInput"></a>

```java
public VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger getInactivityTriggerInput();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger">VertexAiOnlineEvaluatorCloudObservabilitySessionScopeInactivityTrigger</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScopeOutputReference.property.internalValue"></a>

```java
public VertexAiOnlineEvaluatorCloudObservabilitySessionScope getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilitySessionScope">VertexAiOnlineEvaluatorCloudObservabilitySessionScope</a>

---


### VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference <a name="VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_online_evaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference;

new VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.property.comparisonOperatorInput">comparisonOperatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.property.comparisonOperator">comparisonOperator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.property.value">value</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration">VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `comparisonOperatorInput`<sup>Optional</sup> <a name="comparisonOperatorInput" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.property.comparisonOperatorInput"></a>

```java
public java.lang.String getComparisonOperatorInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.property.valueInput"></a>

```java
public java.lang.Number getValueInput();
```

- *Type:* java.lang.Number

---

##### `comparisonOperator`<sup>Required</sup> <a name="comparisonOperator" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.property.comparisonOperator"></a>

```java
public java.lang.String getComparisonOperator();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference.property.internalValue"></a>

```java
public VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration">VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration</a>

---


### VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList <a name="VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_online_evaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList;

new VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.get"></a>

```java
public VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter">VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList.property.internalValue"></a>

```java
public IResolvable|java.util.List<VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter">VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter</a>>

---


### VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference <a name="VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_online_evaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference;

new VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.putDuration">putDuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.putTotalTokenUsage">putTotalTokenUsage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.resetDuration">resetDuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.resetTotalTokenUsage">resetTotalTokenUsage</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDuration` <a name="putDuration" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.putDuration"></a>

```java
public void putDuration(VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.putDuration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration">VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration</a>

---

##### `putTotalTokenUsage` <a name="putTotalTokenUsage" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.putTotalTokenUsage"></a>

```java
public void putTotalTokenUsage(VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.putTotalTokenUsage.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage">VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage</a>

---

##### `resetDuration` <a name="resetDuration" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.resetDuration"></a>

```java
public void resetDuration()
```

##### `resetTotalTokenUsage` <a name="resetTotalTokenUsage" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.resetTotalTokenUsage"></a>

```java
public void resetTotalTokenUsage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.property.duration">duration</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference">VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.property.totalTokenUsage">totalTokenUsage</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference">VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.property.durationInput">durationInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration">VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.property.totalTokenUsageInput">totalTokenUsageInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage">VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter">VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `duration`<sup>Required</sup> <a name="duration" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.property.duration"></a>

```java
public VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference getDuration();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference">VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDurationOutputReference</a>

---

##### `totalTokenUsage`<sup>Required</sup> <a name="totalTokenUsage" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.property.totalTokenUsage"></a>

```java
public VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference getTotalTokenUsage();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference">VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference</a>

---

##### `durationInput`<sup>Optional</sup> <a name="durationInput" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.property.durationInput"></a>

```java
public VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration getDurationInput();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration">VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterDuration</a>

---

##### `totalTokenUsageInput`<sup>Optional</sup> <a name="totalTokenUsageInput" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.property.totalTokenUsageInput"></a>

```java
public VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage getTotalTokenUsageInput();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage">VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterOutputReference.property.internalValue"></a>

```java
public IResolvable|VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter">VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter</a>

---


### VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference <a name="VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_online_evaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference;

new VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.property.comparisonOperatorInput">comparisonOperatorInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.property.comparisonOperator">comparisonOperator</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.property.value">value</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage">VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `comparisonOperatorInput`<sup>Optional</sup> <a name="comparisonOperatorInput" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.property.comparisonOperatorInput"></a>

```java
public java.lang.String getComparisonOperatorInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.property.valueInput"></a>

```java
public java.lang.Number getValueInput();
```

- *Type:* java.lang.Number

---

##### `comparisonOperator`<sup>Required</sup> <a name="comparisonOperator" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.property.comparisonOperator"></a>

```java
public java.lang.String getComparisonOperator();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsageOutputReference.property.internalValue"></a>

```java
public VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage">VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterTotalTokenUsage</a>

---


### VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference <a name="VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_online_evaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference;

new VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.putFilter">putFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.resetFilter">resetFilter</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFilter` <a name="putFilter" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.putFilter"></a>

```java
public void putFilter(IResolvable|java.util.List<VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.putFilter.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter">VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter</a>>

---

##### `resetFilter` <a name="resetFilter" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.resetFilter"></a>

```java
public void resetFilter()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.property.filter">filter</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList">VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.property.filterInput">filterInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter">VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScope">VertexAiOnlineEvaluatorCloudObservabilityTraceScope</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.property.filter"></a>

```java
public VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList getFilter();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList">VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilterList</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.property.filterInput"></a>

```java
public IResolvable|java.util.List<VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter> getFilterInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter">VertexAiOnlineEvaluatorCloudObservabilityTraceScopeFilter</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScopeOutputReference.property.internalValue"></a>

```java
public VertexAiOnlineEvaluatorCloudObservabilityTraceScope getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorCloudObservabilityTraceScope">VertexAiOnlineEvaluatorCloudObservabilityTraceScope</a>

---


### VertexAiOnlineEvaluatorConfigAOutputReference <a name="VertexAiOnlineEvaluatorConfigAOutputReference" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_online_evaluator.VertexAiOnlineEvaluatorConfigAOutputReference;

new VertexAiOnlineEvaluatorConfigAOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.putRandomSampling">putRandomSampling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.resetMaxEvaluatedSamplesPerRun">resetMaxEvaluatedSamplesPerRun</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.resetRandomSampling">resetRandomSampling</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRandomSampling` <a name="putRandomSampling" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.putRandomSampling"></a>

```java
public void putRandomSampling(VertexAiOnlineEvaluatorConfigRandomSampling value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.putRandomSampling.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSampling">VertexAiOnlineEvaluatorConfigRandomSampling</a>

---

##### `resetMaxEvaluatedSamplesPerRun` <a name="resetMaxEvaluatedSamplesPerRun" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.resetMaxEvaluatedSamplesPerRun"></a>

```java
public void resetMaxEvaluatedSamplesPerRun()
```

##### `resetRandomSampling` <a name="resetRandomSampling" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.resetRandomSampling"></a>

```java
public void resetRandomSampling()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.property.randomSampling">randomSampling</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference">VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.property.maxEvaluatedSamplesPerRunInput">maxEvaluatedSamplesPerRunInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.property.randomSamplingInput">randomSamplingInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSampling">VertexAiOnlineEvaluatorConfigRandomSampling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.property.maxEvaluatedSamplesPerRun">maxEvaluatedSamplesPerRun</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigA">VertexAiOnlineEvaluatorConfigA</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `randomSampling`<sup>Required</sup> <a name="randomSampling" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.property.randomSampling"></a>

```java
public VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference getRandomSampling();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference">VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference</a>

---

##### `maxEvaluatedSamplesPerRunInput`<sup>Optional</sup> <a name="maxEvaluatedSamplesPerRunInput" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.property.maxEvaluatedSamplesPerRunInput"></a>

```java
public java.lang.String getMaxEvaluatedSamplesPerRunInput();
```

- *Type:* java.lang.String

---

##### `randomSamplingInput`<sup>Optional</sup> <a name="randomSamplingInput" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.property.randomSamplingInput"></a>

```java
public VertexAiOnlineEvaluatorConfigRandomSampling getRandomSamplingInput();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSampling">VertexAiOnlineEvaluatorConfigRandomSampling</a>

---

##### `maxEvaluatedSamplesPerRun`<sup>Required</sup> <a name="maxEvaluatedSamplesPerRun" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.property.maxEvaluatedSamplesPerRun"></a>

```java
public java.lang.String getMaxEvaluatedSamplesPerRun();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigAOutputReference.property.internalValue"></a>

```java
public VertexAiOnlineEvaluatorConfigA getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigA">VertexAiOnlineEvaluatorConfigA</a>

---


### VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference <a name="VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_online_evaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference;

new VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.property.percentageInput">percentageInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.property.percentage">percentage</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSampling">VertexAiOnlineEvaluatorConfigRandomSampling</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `percentageInput`<sup>Optional</sup> <a name="percentageInput" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.property.percentageInput"></a>

```java
public java.lang.Number getPercentageInput();
```

- *Type:* java.lang.Number

---

##### `percentage`<sup>Required</sup> <a name="percentage" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.property.percentage"></a>

```java
public java.lang.Number getPercentage();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSamplingOutputReference.property.internalValue"></a>

```java
public VertexAiOnlineEvaluatorConfigRandomSampling getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorConfigRandomSampling">VertexAiOnlineEvaluatorConfigRandomSampling</a>

---


### VertexAiOnlineEvaluatorMetricSourcesList <a name="VertexAiOnlineEvaluatorMetricSourcesList" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesList.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_online_evaluator.VertexAiOnlineEvaluatorMetricSourcesList;

new VertexAiOnlineEvaluatorMetricSourcesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesList.get"></a>

```java
public VertexAiOnlineEvaluatorMetricSourcesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSources">VertexAiOnlineEvaluatorMetricSources</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<VertexAiOnlineEvaluatorMetricSources> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSources">VertexAiOnlineEvaluatorMetricSources</a>>

---


### VertexAiOnlineEvaluatorMetricSourcesOutputReference <a name="VertexAiOnlineEvaluatorMetricSourcesOutputReference" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_online_evaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference;

new VertexAiOnlineEvaluatorMetricSourcesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.resetMetric">resetMetric</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.resetMetricResourceName">resetMetricResourceName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMetric` <a name="resetMetric" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.resetMetric"></a>

```java
public void resetMetric()
```

##### `resetMetricResourceName` <a name="resetMetricResourceName" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.resetMetricResourceName"></a>

```java
public void resetMetricResourceName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.property.metricInput">metricInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.property.metricResourceNameInput">metricResourceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.property.metric">metric</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.property.metricResourceName">metricResourceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSources">VertexAiOnlineEvaluatorMetricSources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `metricInput`<sup>Optional</sup> <a name="metricInput" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.property.metricInput"></a>

```java
public java.lang.String getMetricInput();
```

- *Type:* java.lang.String

---

##### `metricResourceNameInput`<sup>Optional</sup> <a name="metricResourceNameInput" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.property.metricResourceNameInput"></a>

```java
public java.lang.String getMetricResourceNameInput();
```

- *Type:* java.lang.String

---

##### `metric`<sup>Required</sup> <a name="metric" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.property.metric"></a>

```java
public java.lang.String getMetric();
```

- *Type:* java.lang.String

---

##### `metricResourceName`<sup>Required</sup> <a name="metricResourceName" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.property.metricResourceName"></a>

```java
public java.lang.String getMetricResourceName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSourcesOutputReference.property.internalValue"></a>

```java
public IResolvable|VertexAiOnlineEvaluatorMetricSources getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorMetricSources">VertexAiOnlineEvaluatorMetricSources</a>

---


### VertexAiOnlineEvaluatorStateDetailsList <a name="VertexAiOnlineEvaluatorStateDetailsList" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsList.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_online_evaluator.VertexAiOnlineEvaluatorStateDetailsList;

new VertexAiOnlineEvaluatorStateDetailsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsList.get"></a>

```java
public VertexAiOnlineEvaluatorStateDetailsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### VertexAiOnlineEvaluatorStateDetailsOutputReference <a name="VertexAiOnlineEvaluatorStateDetailsOutputReference" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_online_evaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference;

new VertexAiOnlineEvaluatorStateDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.property.message">message</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetails">VertexAiOnlineEvaluatorStateDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `message`<sup>Required</sup> <a name="message" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.property.message"></a>

```java
public java.lang.String getMessage();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetailsOutputReference.property.internalValue"></a>

```java
public VertexAiOnlineEvaluatorStateDetails getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorStateDetails">VertexAiOnlineEvaluatorStateDetails</a>

---


### VertexAiOnlineEvaluatorTimeoutsOutputReference <a name="VertexAiOnlineEvaluatorTimeoutsOutputReference" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_online_evaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference;

new VertexAiOnlineEvaluatorTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeouts">VertexAiOnlineEvaluatorTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|VertexAiOnlineEvaluatorTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.vertexAiOnlineEvaluator.VertexAiOnlineEvaluatorTimeouts">VertexAiOnlineEvaluatorTimeouts</a>

---



