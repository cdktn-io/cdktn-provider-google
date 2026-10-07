# `vertexAiSemanticGovernancePolicy` Submodule <a name="`vertexAiSemanticGovernancePolicy` Submodule" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### VertexAiSemanticGovernancePolicy <a name="VertexAiSemanticGovernancePolicy" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_semantic_governance_policy google_vertex_ai_semantic_governance_policy}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_semantic_governance_policy.VertexAiSemanticGovernancePolicy;

VertexAiSemanticGovernancePolicy.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .agent(java.lang.String)
    .naturalLanguageConstraint(java.lang.String)
    .semanticGovernancePolicyId(java.lang.String)
//  .agentResponseCustomization(VertexAiSemanticGovernancePolicyAgentResponseCustomization)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .mcpTools(VertexAiSemanticGovernancePolicyMcpTools)
//  .project(java.lang.String)
//  .region(java.lang.String)
//  .timeouts(VertexAiSemanticGovernancePolicyTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.Initializer.parameter.agent">agent</a></code> | <code>java.lang.String</code> | The name of the agent in Agent Registry that is affected by this policy. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.Initializer.parameter.naturalLanguageConstraint">naturalLanguageConstraint</a></code> | <code>java.lang.String</code> | The natural language constraint of the SemanticGovernancePolicy. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.Initializer.parameter.semanticGovernancePolicyId">semanticGovernancePolicyId</a></code> | <code>java.lang.String</code> | The ID of the SemanticGovernancePolicy, which will become the final component of the resource name. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.Initializer.parameter.agentResponseCustomization">agentResponseCustomization</a></code> | <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomization">VertexAiSemanticGovernancePolicyAgentResponseCustomization</a></code> | agent_response_customization block. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | The description of the SemanticGovernancePolicy. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | The user-defined name of the SemanticGovernancePolicy. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_semantic_governance_policy#id VertexAiSemanticGovernancePolicy#id}. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.Initializer.parameter.mcpTools">mcpTools</a></code> | <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpTools">VertexAiSemanticGovernancePolicyMcpTools</a></code> | mcp_tools block. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_semantic_governance_policy#project VertexAiSemanticGovernancePolicy#project}. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.Initializer.parameter.region">region</a></code> | <code>java.lang.String</code> | The region of the SemanticGovernancePolicy, e.g. 'us-central1'. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeouts">VertexAiSemanticGovernancePolicyTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `agent`<sup>Required</sup> <a name="agent" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.Initializer.parameter.agent"></a>

- *Type:* java.lang.String

The name of the agent in Agent Registry that is affected by this policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_semantic_governance_policy#agent VertexAiSemanticGovernancePolicy#agent}

---

##### `naturalLanguageConstraint`<sup>Required</sup> <a name="naturalLanguageConstraint" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.Initializer.parameter.naturalLanguageConstraint"></a>

- *Type:* java.lang.String

The natural language constraint of the SemanticGovernancePolicy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_semantic_governance_policy#natural_language_constraint VertexAiSemanticGovernancePolicy#natural_language_constraint}

---

##### `semanticGovernancePolicyId`<sup>Required</sup> <a name="semanticGovernancePolicyId" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.Initializer.parameter.semanticGovernancePolicyId"></a>

- *Type:* java.lang.String

The ID of the SemanticGovernancePolicy, which will become the final component of the resource name.

This value may be up to 63 characters, and valid characters are [a-z0-9-]. The first character cannot be a number or hyphen. The last character must be a letter or a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_semantic_governance_policy#semantic_governance_policy_id VertexAiSemanticGovernancePolicy#semantic_governance_policy_id}

---

##### `agentResponseCustomization`<sup>Optional</sup> <a name="agentResponseCustomization" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.Initializer.parameter.agentResponseCustomization"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomization">VertexAiSemanticGovernancePolicyAgentResponseCustomization</a>

agent_response_customization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_semantic_governance_policy#agent_response_customization VertexAiSemanticGovernancePolicy#agent_response_customization}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_semantic_governance_policy#deletion_policy VertexAiSemanticGovernancePolicy#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.Initializer.parameter.description"></a>

- *Type:* java.lang.String

The description of the SemanticGovernancePolicy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_semantic_governance_policy#description VertexAiSemanticGovernancePolicy#description}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

The user-defined name of the SemanticGovernancePolicy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_semantic_governance_policy#display_name VertexAiSemanticGovernancePolicy#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_semantic_governance_policy#id VertexAiSemanticGovernancePolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mcpTools`<sup>Optional</sup> <a name="mcpTools" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.Initializer.parameter.mcpTools"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpTools">VertexAiSemanticGovernancePolicyMcpTools</a>

mcp_tools block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_semantic_governance_policy#mcp_tools VertexAiSemanticGovernancePolicy#mcp_tools}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_semantic_governance_policy#project VertexAiSemanticGovernancePolicy#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.Initializer.parameter.region"></a>

- *Type:* java.lang.String

The region of the SemanticGovernancePolicy, e.g. 'us-central1'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_semantic_governance_policy#region VertexAiSemanticGovernancePolicy#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeouts">VertexAiSemanticGovernancePolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_semantic_governance_policy#timeouts VertexAiSemanticGovernancePolicy#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.putAgentResponseCustomization">putAgentResponseCustomization</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.putMcpTools">putMcpTools</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.resetAgentResponseCustomization">resetAgentResponseCustomization</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.resetMcpTools">resetMcpTools</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAgentResponseCustomization` <a name="putAgentResponseCustomization" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.putAgentResponseCustomization"></a>

```java
public void putAgentResponseCustomization(VertexAiSemanticGovernancePolicyAgentResponseCustomization value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.putAgentResponseCustomization.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomization">VertexAiSemanticGovernancePolicyAgentResponseCustomization</a>

---

##### `putMcpTools` <a name="putMcpTools" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.putMcpTools"></a>

```java
public void putMcpTools(VertexAiSemanticGovernancePolicyMcpTools value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.putMcpTools.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpTools">VertexAiSemanticGovernancePolicyMcpTools</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.putTimeouts"></a>

```java
public void putTimeouts(VertexAiSemanticGovernancePolicyTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeouts">VertexAiSemanticGovernancePolicyTimeouts</a>

---

##### `resetAgentResponseCustomization` <a name="resetAgentResponseCustomization" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.resetAgentResponseCustomization"></a>

```java
public void resetAgentResponseCustomization()
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.resetId"></a>

```java
public void resetId()
```

##### `resetMcpTools` <a name="resetMcpTools" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.resetMcpTools"></a>

```java
public void resetMcpTools()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.resetProject"></a>

```java
public void resetProject()
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.resetRegion"></a>

```java
public void resetRegion()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a VertexAiSemanticGovernancePolicy resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.isConstruct"></a>

```java
import io.cdktn.providers.google.vertex_ai_semantic_governance_policy.VertexAiSemanticGovernancePolicy;

VertexAiSemanticGovernancePolicy.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.isTerraformElement"></a>

```java
import io.cdktn.providers.google.vertex_ai_semantic_governance_policy.VertexAiSemanticGovernancePolicy;

VertexAiSemanticGovernancePolicy.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.isTerraformResource"></a>

```java
import io.cdktn.providers.google.vertex_ai_semantic_governance_policy.VertexAiSemanticGovernancePolicy;

VertexAiSemanticGovernancePolicy.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.vertex_ai_semantic_governance_policy.VertexAiSemanticGovernancePolicy;

VertexAiSemanticGovernancePolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),VertexAiSemanticGovernancePolicy.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a VertexAiSemanticGovernancePolicy resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the VertexAiSemanticGovernancePolicy to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing VertexAiSemanticGovernancePolicy that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_semantic_governance_policy#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the VertexAiSemanticGovernancePolicy to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.agentIdentity">agentIdentity</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.agentResponseCustomization">agentResponseCustomization</a></code> | <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference">VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.etag">etag</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.mcpTools">mcpTools</a></code> | <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference">VertexAiSemanticGovernancePolicyMcpToolsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference">VertexAiSemanticGovernancePolicyTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.updateTime">updateTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.agentInput">agentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.agentResponseCustomizationInput">agentResponseCustomizationInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomization">VertexAiSemanticGovernancePolicyAgentResponseCustomization</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.mcpToolsInput">mcpToolsInput</a></code> | <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpTools">VertexAiSemanticGovernancePolicyMcpTools</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.naturalLanguageConstraintInput">naturalLanguageConstraintInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.regionInput">regionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.semanticGovernancePolicyIdInput">semanticGovernancePolicyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeouts">VertexAiSemanticGovernancePolicyTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.agent">agent</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.naturalLanguageConstraint">naturalLanguageConstraint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.region">region</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.semanticGovernancePolicyId">semanticGovernancePolicyId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `agentIdentity`<sup>Required</sup> <a name="agentIdentity" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.agentIdentity"></a>

```java
public java.lang.String getAgentIdentity();
```

- *Type:* java.lang.String

---

##### `agentResponseCustomization`<sup>Required</sup> <a name="agentResponseCustomization" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.agentResponseCustomization"></a>

```java
public VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference getAgentResponseCustomization();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference">VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference</a>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `etag`<sup>Required</sup> <a name="etag" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.etag"></a>

```java
public java.lang.String getEtag();
```

- *Type:* java.lang.String

---

##### `mcpTools`<sup>Required</sup> <a name="mcpTools" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.mcpTools"></a>

```java
public VertexAiSemanticGovernancePolicyMcpToolsOutputReference getMcpTools();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference">VertexAiSemanticGovernancePolicyMcpToolsOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.timeouts"></a>

```java
public VertexAiSemanticGovernancePolicyTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference">VertexAiSemanticGovernancePolicyTimeoutsOutputReference</a>

---

##### `updateTime`<sup>Required</sup> <a name="updateTime" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.updateTime"></a>

```java
public java.lang.String getUpdateTime();
```

- *Type:* java.lang.String

---

##### `agentInput`<sup>Optional</sup> <a name="agentInput" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.agentInput"></a>

```java
public java.lang.String getAgentInput();
```

- *Type:* java.lang.String

---

##### `agentResponseCustomizationInput`<sup>Optional</sup> <a name="agentResponseCustomizationInput" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.agentResponseCustomizationInput"></a>

```java
public VertexAiSemanticGovernancePolicyAgentResponseCustomization getAgentResponseCustomizationInput();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomization">VertexAiSemanticGovernancePolicyAgentResponseCustomization</a>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `mcpToolsInput`<sup>Optional</sup> <a name="mcpToolsInput" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.mcpToolsInput"></a>

```java
public VertexAiSemanticGovernancePolicyMcpTools getMcpToolsInput();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpTools">VertexAiSemanticGovernancePolicyMcpTools</a>

---

##### `naturalLanguageConstraintInput`<sup>Optional</sup> <a name="naturalLanguageConstraintInput" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.naturalLanguageConstraintInput"></a>

```java
public java.lang.String getNaturalLanguageConstraintInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.regionInput"></a>

```java
public java.lang.String getRegionInput();
```

- *Type:* java.lang.String

---

##### `semanticGovernancePolicyIdInput`<sup>Optional</sup> <a name="semanticGovernancePolicyIdInput" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.semanticGovernancePolicyIdInput"></a>

```java
public java.lang.String getSemanticGovernancePolicyIdInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.timeoutsInput"></a>

```java
public IResolvable|VertexAiSemanticGovernancePolicyTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeouts">VertexAiSemanticGovernancePolicyTimeouts</a>

---

##### `agent`<sup>Required</sup> <a name="agent" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.agent"></a>

```java
public java.lang.String getAgent();
```

- *Type:* java.lang.String

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `naturalLanguageConstraint`<sup>Required</sup> <a name="naturalLanguageConstraint" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.naturalLanguageConstraint"></a>

```java
public java.lang.String getNaturalLanguageConstraint();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

---

##### `semanticGovernancePolicyId`<sup>Required</sup> <a name="semanticGovernancePolicyId" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.semanticGovernancePolicyId"></a>

```java
public java.lang.String getSemanticGovernancePolicyId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicy.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### VertexAiSemanticGovernancePolicyAgentResponseCustomization <a name="VertexAiSemanticGovernancePolicyAgentResponseCustomization" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomization"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomization.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_semantic_governance_policy.VertexAiSemanticGovernancePolicyAgentResponseCustomization;

VertexAiSemanticGovernancePolicyAgentResponseCustomization.builder()
//  .denialMessage(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomization.property.denialMessage">denialMessage</a></code> | <code>java.lang.String</code> | Custom message shown to the end user when the policy check results in a denial. |

---

##### `denialMessage`<sup>Optional</sup> <a name="denialMessage" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomization.property.denialMessage"></a>

```java
public java.lang.String getDenialMessage();
```

- *Type:* java.lang.String

Custom message shown to the end user when the policy check results in a denial.

Use this
to explain the rationale to the user. Max 1000 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_semantic_governance_policy#denial_message VertexAiSemanticGovernancePolicy#denial_message}

---

### VertexAiSemanticGovernancePolicyConfig <a name="VertexAiSemanticGovernancePolicyConfig" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_semantic_governance_policy.VertexAiSemanticGovernancePolicyConfig;

VertexAiSemanticGovernancePolicyConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .agent(java.lang.String)
    .naturalLanguageConstraint(java.lang.String)
    .semanticGovernancePolicyId(java.lang.String)
//  .agentResponseCustomization(VertexAiSemanticGovernancePolicyAgentResponseCustomization)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .displayName(java.lang.String)
//  .id(java.lang.String)
//  .mcpTools(VertexAiSemanticGovernancePolicyMcpTools)
//  .project(java.lang.String)
//  .region(java.lang.String)
//  .timeouts(VertexAiSemanticGovernancePolicyTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig.property.agent">agent</a></code> | <code>java.lang.String</code> | The name of the agent in Agent Registry that is affected by this policy. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig.property.naturalLanguageConstraint">naturalLanguageConstraint</a></code> | <code>java.lang.String</code> | The natural language constraint of the SemanticGovernancePolicy. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig.property.semanticGovernancePolicyId">semanticGovernancePolicyId</a></code> | <code>java.lang.String</code> | The ID of the SemanticGovernancePolicy, which will become the final component of the resource name. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig.property.agentResponseCustomization">agentResponseCustomization</a></code> | <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomization">VertexAiSemanticGovernancePolicyAgentResponseCustomization</a></code> | agent_response_customization block. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig.property.description">description</a></code> | <code>java.lang.String</code> | The description of the SemanticGovernancePolicy. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | The user-defined name of the SemanticGovernancePolicy. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_semantic_governance_policy#id VertexAiSemanticGovernancePolicy#id}. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig.property.mcpTools">mcpTools</a></code> | <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpTools">VertexAiSemanticGovernancePolicyMcpTools</a></code> | mcp_tools block. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_semantic_governance_policy#project VertexAiSemanticGovernancePolicy#project}. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig.property.region">region</a></code> | <code>java.lang.String</code> | The region of the SemanticGovernancePolicy, e.g. 'us-central1'. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeouts">VertexAiSemanticGovernancePolicyTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `agent`<sup>Required</sup> <a name="agent" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig.property.agent"></a>

```java
public java.lang.String getAgent();
```

- *Type:* java.lang.String

The name of the agent in Agent Registry that is affected by this policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_semantic_governance_policy#agent VertexAiSemanticGovernancePolicy#agent}

---

##### `naturalLanguageConstraint`<sup>Required</sup> <a name="naturalLanguageConstraint" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig.property.naturalLanguageConstraint"></a>

```java
public java.lang.String getNaturalLanguageConstraint();
```

- *Type:* java.lang.String

The natural language constraint of the SemanticGovernancePolicy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_semantic_governance_policy#natural_language_constraint VertexAiSemanticGovernancePolicy#natural_language_constraint}

---

##### `semanticGovernancePolicyId`<sup>Required</sup> <a name="semanticGovernancePolicyId" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig.property.semanticGovernancePolicyId"></a>

```java
public java.lang.String getSemanticGovernancePolicyId();
```

- *Type:* java.lang.String

The ID of the SemanticGovernancePolicy, which will become the final component of the resource name.

This value may be up to 63 characters, and valid characters are [a-z0-9-]. The first character cannot be a number or hyphen. The last character must be a letter or a number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_semantic_governance_policy#semantic_governance_policy_id VertexAiSemanticGovernancePolicy#semantic_governance_policy_id}

---

##### `agentResponseCustomization`<sup>Optional</sup> <a name="agentResponseCustomization" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig.property.agentResponseCustomization"></a>

```java
public VertexAiSemanticGovernancePolicyAgentResponseCustomization getAgentResponseCustomization();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomization">VertexAiSemanticGovernancePolicyAgentResponseCustomization</a>

agent_response_customization block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_semantic_governance_policy#agent_response_customization VertexAiSemanticGovernancePolicy#agent_response_customization}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_semantic_governance_policy#deletion_policy VertexAiSemanticGovernancePolicy#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The description of the SemanticGovernancePolicy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_semantic_governance_policy#description VertexAiSemanticGovernancePolicy#description}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

The user-defined name of the SemanticGovernancePolicy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_semantic_governance_policy#display_name VertexAiSemanticGovernancePolicy#display_name}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_semantic_governance_policy#id VertexAiSemanticGovernancePolicy#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `mcpTools`<sup>Optional</sup> <a name="mcpTools" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig.property.mcpTools"></a>

```java
public VertexAiSemanticGovernancePolicyMcpTools getMcpTools();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpTools">VertexAiSemanticGovernancePolicyMcpTools</a>

mcp_tools block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_semantic_governance_policy#mcp_tools VertexAiSemanticGovernancePolicy#mcp_tools}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_semantic_governance_policy#project VertexAiSemanticGovernancePolicy#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig.property.region"></a>

```java
public java.lang.String getRegion();
```

- *Type:* java.lang.String

The region of the SemanticGovernancePolicy, e.g. 'us-central1'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_semantic_governance_policy#region VertexAiSemanticGovernancePolicy#region}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyConfig.property.timeouts"></a>

```java
public VertexAiSemanticGovernancePolicyTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeouts">VertexAiSemanticGovernancePolicyTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_semantic_governance_policy#timeouts VertexAiSemanticGovernancePolicy#timeouts}

---

### VertexAiSemanticGovernancePolicyMcpTools <a name="VertexAiSemanticGovernancePolicyMcpTools" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpTools"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpTools.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_semantic_governance_policy.VertexAiSemanticGovernancePolicyMcpTools;

VertexAiSemanticGovernancePolicyMcpTools.builder()
    .mcpServer(java.lang.String)
    .tools(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpTools.property.mcpServer">mcpServer</a></code> | <code>java.lang.String</code> | The resource name of the McpServer in Agent Registry that is affected by this policy. Format: 'projects/{project}/locations/{location}/mcpServers/{mcpServer}'. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpTools.property.tools">tools</a></code> | <code>java.util.List<java.lang.String></code> | The resource names of the McpTools used by the Agent that is affected by this policy. |

---

##### `mcpServer`<sup>Required</sup> <a name="mcpServer" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpTools.property.mcpServer"></a>

```java
public java.lang.String getMcpServer();
```

- *Type:* java.lang.String

The resource name of the McpServer in Agent Registry that is affected by this policy. Format: 'projects/{project}/locations/{location}/mcpServers/{mcpServer}'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_semantic_governance_policy#mcp_server VertexAiSemanticGovernancePolicy#mcp_server}

---

##### `tools`<sup>Required</sup> <a name="tools" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpTools.property.tools"></a>

```java
public java.util.List<java.lang.String> getTools();
```

- *Type:* java.util.List<java.lang.String>

The resource names of the McpTools used by the Agent that is affected by this policy.

At least one tool must be listed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_semantic_governance_policy#tools VertexAiSemanticGovernancePolicy#tools}

---

### VertexAiSemanticGovernancePolicyTimeouts <a name="VertexAiSemanticGovernancePolicyTimeouts" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_semantic_governance_policy.VertexAiSemanticGovernancePolicyTimeouts;

VertexAiSemanticGovernancePolicyTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_semantic_governance_policy#create VertexAiSemanticGovernancePolicy#create}. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_semantic_governance_policy#delete VertexAiSemanticGovernancePolicy#delete}. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_semantic_governance_policy#update VertexAiSemanticGovernancePolicy#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_semantic_governance_policy#create VertexAiSemanticGovernancePolicy#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_semantic_governance_policy#delete VertexAiSemanticGovernancePolicy#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/vertex_ai_semantic_governance_policy#update VertexAiSemanticGovernancePolicy#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference <a name="VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_semantic_governance_policy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference;

new VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.resetDenialMessage">resetDenialMessage</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDenialMessage` <a name="resetDenialMessage" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.resetDenialMessage"></a>

```java
public void resetDenialMessage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.property.denialMessageInput">denialMessageInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.property.denialMessage">denialMessage</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomization">VertexAiSemanticGovernancePolicyAgentResponseCustomization</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `denialMessageInput`<sup>Optional</sup> <a name="denialMessageInput" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.property.denialMessageInput"></a>

```java
public java.lang.String getDenialMessageInput();
```

- *Type:* java.lang.String

---

##### `denialMessage`<sup>Required</sup> <a name="denialMessage" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.property.denialMessage"></a>

```java
public java.lang.String getDenialMessage();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomizationOutputReference.property.internalValue"></a>

```java
public VertexAiSemanticGovernancePolicyAgentResponseCustomization getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyAgentResponseCustomization">VertexAiSemanticGovernancePolicyAgentResponseCustomization</a>

---


### VertexAiSemanticGovernancePolicyMcpToolsOutputReference <a name="VertexAiSemanticGovernancePolicyMcpToolsOutputReference" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_semantic_governance_policy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference;

new VertexAiSemanticGovernancePolicyMcpToolsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.property.mcpServerInput">mcpServerInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.property.toolsInput">toolsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.property.mcpServer">mcpServer</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.property.tools">tools</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpTools">VertexAiSemanticGovernancePolicyMcpTools</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `mcpServerInput`<sup>Optional</sup> <a name="mcpServerInput" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.property.mcpServerInput"></a>

```java
public java.lang.String getMcpServerInput();
```

- *Type:* java.lang.String

---

##### `toolsInput`<sup>Optional</sup> <a name="toolsInput" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.property.toolsInput"></a>

```java
public java.util.List<java.lang.String> getToolsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `mcpServer`<sup>Required</sup> <a name="mcpServer" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.property.mcpServer"></a>

```java
public java.lang.String getMcpServer();
```

- *Type:* java.lang.String

---

##### `tools`<sup>Required</sup> <a name="tools" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.property.tools"></a>

```java
public java.util.List<java.lang.String> getTools();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpToolsOutputReference.property.internalValue"></a>

```java
public VertexAiSemanticGovernancePolicyMcpTools getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyMcpTools">VertexAiSemanticGovernancePolicyMcpTools</a>

---


### VertexAiSemanticGovernancePolicyTimeoutsOutputReference <a name="VertexAiSemanticGovernancePolicyTimeoutsOutputReference" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.vertex_ai_semantic_governance_policy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference;

new VertexAiSemanticGovernancePolicyTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeouts">VertexAiSemanticGovernancePolicyTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|VertexAiSemanticGovernancePolicyTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.vertexAiSemanticGovernancePolicy.VertexAiSemanticGovernancePolicyTimeouts">VertexAiSemanticGovernancePolicyTimeouts</a>

---



