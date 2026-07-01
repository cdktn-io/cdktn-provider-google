# `dialogflowGenerator` Submodule <a name="`dialogflowGenerator` Submodule" id="@cdktn/provider-google.dialogflowGenerator"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DialogflowGenerator <a name="DialogflowGenerator" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dialogflow_generator google_dialogflow_generator}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.Initializer"></a>

```java
import io.cdktn.providers.google.dialogflow_generator.DialogflowGenerator;

DialogflowGenerator.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .location(java.lang.String)
    .summarizationContext(DialogflowGeneratorSummarizationContext)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .generatorId(java.lang.String)
//  .id(java.lang.String)
//  .inferenceParameter(DialogflowGeneratorInferenceParameter)
//  .project(java.lang.String)
//  .publishedModel(java.lang.String)
//  .timeouts(DialogflowGeneratorTimeouts)
//  .triggerEvent(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | desc. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.Initializer.parameter.summarizationContext">summarizationContext</a></code> | <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContext">DialogflowGeneratorSummarizationContext</a></code> | summarization_context block. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Optional. Human readable description of the generator. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.Initializer.parameter.generatorId">generatorId</a></code> | <code>java.lang.String</code> | Optional. The ID to use for the generator, which will become the final component of the generator's resource name. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dialogflow_generator#id DialogflowGenerator#id}. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.Initializer.parameter.inferenceParameter">inferenceParameter</a></code> | <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameter">DialogflowGeneratorInferenceParameter</a></code> | inference_parameter block. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dialogflow_generator#project DialogflowGenerator#project}. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.Initializer.parameter.publishedModel">publishedModel</a></code> | <code>java.lang.String</code> | Optional. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeouts">DialogflowGeneratorTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.Initializer.parameter.triggerEvent">triggerEvent</a></code> | <code>java.lang.String</code> | Optional. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.Initializer.parameter.location"></a>

- *Type:* java.lang.String

desc.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dialogflow_generator#location DialogflowGenerator#location}

---

##### `summarizationContext`<sup>Required</sup> <a name="summarizationContext" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.Initializer.parameter.summarizationContext"></a>

- *Type:* <a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContext">DialogflowGeneratorSummarizationContext</a>

summarization_context block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dialogflow_generator#summarization_context DialogflowGenerator#summarization_context}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dialogflow_generator#deletion_policy DialogflowGenerator#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Optional. Human readable description of the generator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dialogflow_generator#description DialogflowGenerator#description}

---

##### `generatorId`<sup>Optional</sup> <a name="generatorId" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.Initializer.parameter.generatorId"></a>

- *Type:* java.lang.String

Optional. The ID to use for the generator, which will become the final component of the generator's resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dialogflow_generator#generator_id DialogflowGenerator#generator_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dialogflow_generator#id DialogflowGenerator#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `inferenceParameter`<sup>Optional</sup> <a name="inferenceParameter" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.Initializer.parameter.inferenceParameter"></a>

- *Type:* <a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameter">DialogflowGeneratorInferenceParameter</a>

inference_parameter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dialogflow_generator#inference_parameter DialogflowGenerator#inference_parameter}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dialogflow_generator#project DialogflowGenerator#project}.

---

##### `publishedModel`<sup>Optional</sup> <a name="publishedModel" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.Initializer.parameter.publishedModel"></a>

- *Type:* java.lang.String

Optional.

The published Large Language Model name. * To use the latest model version, specify the model name without version number. Example: text-bison * To use a stable model version, specify the version number as well. Example: text-bison@002.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dialogflow_generator#published_model DialogflowGenerator#published_model}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeouts">DialogflowGeneratorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dialogflow_generator#timeouts DialogflowGenerator#timeouts}

---

##### `triggerEvent`<sup>Optional</sup> <a name="triggerEvent" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.Initializer.parameter.triggerEvent"></a>

- *Type:* java.lang.String

Optional.

The trigger event of the generator. It defines when the generator is triggered in a conversation. Possible values: ["END_OF_UTTERANCE", "MANUAL_CALL", "CUSTOMER_MESSAGE", "AGENT_MESSAGE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dialogflow_generator#trigger_event DialogflowGenerator#trigger_event}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.putInferenceParameter">putInferenceParameter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.putSummarizationContext">putSummarizationContext</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.resetGeneratorId">resetGeneratorId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.resetInferenceParameter">resetInferenceParameter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.resetPublishedModel">resetPublishedModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.resetTriggerEvent">resetTriggerEvent</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putInferenceParameter` <a name="putInferenceParameter" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.putInferenceParameter"></a>

```java
public void putInferenceParameter(DialogflowGeneratorInferenceParameter value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.putInferenceParameter.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameter">DialogflowGeneratorInferenceParameter</a>

---

##### `putSummarizationContext` <a name="putSummarizationContext" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.putSummarizationContext"></a>

```java
public void putSummarizationContext(DialogflowGeneratorSummarizationContext value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.putSummarizationContext.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContext">DialogflowGeneratorSummarizationContext</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.putTimeouts"></a>

```java
public void putTimeouts(DialogflowGeneratorTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeouts">DialogflowGeneratorTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetGeneratorId` <a name="resetGeneratorId" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.resetGeneratorId"></a>

```java
public void resetGeneratorId()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.resetId"></a>

```java
public void resetId()
```

##### `resetInferenceParameter` <a name="resetInferenceParameter" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.resetInferenceParameter"></a>

```java
public void resetInferenceParameter()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.resetProject"></a>

```java
public void resetProject()
```

##### `resetPublishedModel` <a name="resetPublishedModel" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.resetPublishedModel"></a>

```java
public void resetPublishedModel()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetTriggerEvent` <a name="resetTriggerEvent" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.resetTriggerEvent"></a>

```java
public void resetTriggerEvent()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DialogflowGenerator resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.isConstruct"></a>

```java
import io.cdktn.providers.google.dialogflow_generator.DialogflowGenerator;

DialogflowGenerator.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.isTerraformElement"></a>

```java
import io.cdktn.providers.google.dialogflow_generator.DialogflowGenerator;

DialogflowGenerator.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.isTerraformResource"></a>

```java
import io.cdktn.providers.google.dialogflow_generator.DialogflowGenerator;

DialogflowGenerator.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.dialogflow_generator.DialogflowGenerator;

DialogflowGenerator.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DialogflowGenerator.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DialogflowGenerator resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DialogflowGenerator to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DialogflowGenerator that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dialogflow_generator#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DialogflowGenerator to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.property.inferenceParameter">inferenceParameter</a></code> | <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameterOutputReference">DialogflowGeneratorInferenceParameterOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.property.summarizationContext">summarizationContext</a></code> | <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextOutputReference">DialogflowGeneratorSummarizationContextOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeoutsOutputReference">DialogflowGeneratorTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.property.generatorIdInput">generatorIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.property.inferenceParameterInput">inferenceParameterInput</a></code> | <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameter">DialogflowGeneratorInferenceParameter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.property.publishedModelInput">publishedModelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.property.summarizationContextInput">summarizationContextInput</a></code> | <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContext">DialogflowGeneratorSummarizationContext</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeouts">DialogflowGeneratorTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.property.triggerEventInput">triggerEventInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.property.generatorId">generatorId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.property.publishedModel">publishedModel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.property.triggerEvent">triggerEvent</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `inferenceParameter`<sup>Required</sup> <a name="inferenceParameter" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.property.inferenceParameter"></a>

```java
public DialogflowGeneratorInferenceParameterOutputReference getInferenceParameter();
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameterOutputReference">DialogflowGeneratorInferenceParameterOutputReference</a>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `summarizationContext`<sup>Required</sup> <a name="summarizationContext" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.property.summarizationContext"></a>

```java
public DialogflowGeneratorSummarizationContextOutputReference getSummarizationContext();
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextOutputReference">DialogflowGeneratorSummarizationContextOutputReference</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.property.timeouts"></a>

```java
public DialogflowGeneratorTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeoutsOutputReference">DialogflowGeneratorTimeoutsOutputReference</a>

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `generatorIdInput`<sup>Optional</sup> <a name="generatorIdInput" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.property.generatorIdInput"></a>

```java
public java.lang.String getGeneratorIdInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `inferenceParameterInput`<sup>Optional</sup> <a name="inferenceParameterInput" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.property.inferenceParameterInput"></a>

```java
public DialogflowGeneratorInferenceParameter getInferenceParameterInput();
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameter">DialogflowGeneratorInferenceParameter</a>

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `publishedModelInput`<sup>Optional</sup> <a name="publishedModelInput" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.property.publishedModelInput"></a>

```java
public java.lang.String getPublishedModelInput();
```

- *Type:* java.lang.String

---

##### `summarizationContextInput`<sup>Optional</sup> <a name="summarizationContextInput" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.property.summarizationContextInput"></a>

```java
public DialogflowGeneratorSummarizationContext getSummarizationContextInput();
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContext">DialogflowGeneratorSummarizationContext</a>

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.property.timeoutsInput"></a>

```java
public IResolvable|DialogflowGeneratorTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeouts">DialogflowGeneratorTimeouts</a>

---

##### `triggerEventInput`<sup>Optional</sup> <a name="triggerEventInput" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.property.triggerEventInput"></a>

```java
public java.lang.String getTriggerEventInput();
```

- *Type:* java.lang.String

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `generatorId`<sup>Required</sup> <a name="generatorId" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.property.generatorId"></a>

```java
public java.lang.String getGeneratorId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `publishedModel`<sup>Required</sup> <a name="publishedModel" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.property.publishedModel"></a>

```java
public java.lang.String getPublishedModel();
```

- *Type:* java.lang.String

---

##### `triggerEvent`<sup>Required</sup> <a name="triggerEvent" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.property.triggerEvent"></a>

```java
public java.lang.String getTriggerEvent();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGenerator.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DialogflowGeneratorConfig <a name="DialogflowGeneratorConfig" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorConfig.Initializer"></a>

```java
import io.cdktn.providers.google.dialogflow_generator.DialogflowGeneratorConfig;

DialogflowGeneratorConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .location(java.lang.String)
    .summarizationContext(DialogflowGeneratorSummarizationContext)
//  .deletionPolicy(java.lang.String)
//  .description(java.lang.String)
//  .generatorId(java.lang.String)
//  .id(java.lang.String)
//  .inferenceParameter(DialogflowGeneratorInferenceParameter)
//  .project(java.lang.String)
//  .publishedModel(java.lang.String)
//  .timeouts(DialogflowGeneratorTimeouts)
//  .triggerEvent(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorConfig.property.location">location</a></code> | <code>java.lang.String</code> | desc. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorConfig.property.summarizationContext">summarizationContext</a></code> | <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContext">DialogflowGeneratorSummarizationContext</a></code> | summarization_context block. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorConfig.property.description">description</a></code> | <code>java.lang.String</code> | Optional. Human readable description of the generator. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorConfig.property.generatorId">generatorId</a></code> | <code>java.lang.String</code> | Optional. The ID to use for the generator, which will become the final component of the generator's resource name. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dialogflow_generator#id DialogflowGenerator#id}. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorConfig.property.inferenceParameter">inferenceParameter</a></code> | <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameter">DialogflowGeneratorInferenceParameter</a></code> | inference_parameter block. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dialogflow_generator#project DialogflowGenerator#project}. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorConfig.property.publishedModel">publishedModel</a></code> | <code>java.lang.String</code> | Optional. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeouts">DialogflowGeneratorTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorConfig.property.triggerEvent">triggerEvent</a></code> | <code>java.lang.String</code> | Optional. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

desc.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dialogflow_generator#location DialogflowGenerator#location}

---

##### `summarizationContext`<sup>Required</sup> <a name="summarizationContext" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorConfig.property.summarizationContext"></a>

```java
public DialogflowGeneratorSummarizationContext getSummarizationContext();
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContext">DialogflowGeneratorSummarizationContext</a>

summarization_context block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dialogflow_generator#summarization_context DialogflowGenerator#summarization_context}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dialogflow_generator#deletion_policy DialogflowGenerator#deletion_policy}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Optional. Human readable description of the generator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dialogflow_generator#description DialogflowGenerator#description}

---

##### `generatorId`<sup>Optional</sup> <a name="generatorId" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorConfig.property.generatorId"></a>

```java
public java.lang.String getGeneratorId();
```

- *Type:* java.lang.String

Optional. The ID to use for the generator, which will become the final component of the generator's resource name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dialogflow_generator#generator_id DialogflowGenerator#generator_id}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dialogflow_generator#id DialogflowGenerator#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `inferenceParameter`<sup>Optional</sup> <a name="inferenceParameter" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorConfig.property.inferenceParameter"></a>

```java
public DialogflowGeneratorInferenceParameter getInferenceParameter();
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameter">DialogflowGeneratorInferenceParameter</a>

inference_parameter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dialogflow_generator#inference_parameter DialogflowGenerator#inference_parameter}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dialogflow_generator#project DialogflowGenerator#project}.

---

##### `publishedModel`<sup>Optional</sup> <a name="publishedModel" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorConfig.property.publishedModel"></a>

```java
public java.lang.String getPublishedModel();
```

- *Type:* java.lang.String

Optional.

The published Large Language Model name. * To use the latest model version, specify the model name without version number. Example: text-bison * To use a stable model version, specify the version number as well. Example: text-bison@002.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dialogflow_generator#published_model DialogflowGenerator#published_model}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorConfig.property.timeouts"></a>

```java
public DialogflowGeneratorTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeouts">DialogflowGeneratorTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dialogflow_generator#timeouts DialogflowGenerator#timeouts}

---

##### `triggerEvent`<sup>Optional</sup> <a name="triggerEvent" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorConfig.property.triggerEvent"></a>

```java
public java.lang.String getTriggerEvent();
```

- *Type:* java.lang.String

Optional.

The trigger event of the generator. It defines when the generator is triggered in a conversation. Possible values: ["END_OF_UTTERANCE", "MANUAL_CALL", "CUSTOMER_MESSAGE", "AGENT_MESSAGE"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dialogflow_generator#trigger_event DialogflowGenerator#trigger_event}

---

### DialogflowGeneratorInferenceParameter <a name="DialogflowGeneratorInferenceParameter" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameter"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameter.Initializer"></a>

```java
import io.cdktn.providers.google.dialogflow_generator.DialogflowGeneratorInferenceParameter;

DialogflowGeneratorInferenceParameter.builder()
//  .maxOutputTokens(java.lang.Number)
//  .temperature(java.lang.Number)
//  .topK(java.lang.Number)
//  .topP(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameter.property.maxOutputTokens">maxOutputTokens</a></code> | <code>java.lang.Number</code> | Optional. Maximum number of the output tokens for the generator. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameter.property.temperature">temperature</a></code> | <code>java.lang.Number</code> | Optional. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameter.property.topK">topK</a></code> | <code>java.lang.Number</code> | Optional. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameter.property.topP">topP</a></code> | <code>java.lang.Number</code> | Optional. |

---

##### `maxOutputTokens`<sup>Optional</sup> <a name="maxOutputTokens" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameter.property.maxOutputTokens"></a>

```java
public java.lang.Number getMaxOutputTokens();
```

- *Type:* java.lang.Number

Optional. Maximum number of the output tokens for the generator.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dialogflow_generator#max_output_tokens DialogflowGenerator#max_output_tokens}

---

##### `temperature`<sup>Optional</sup> <a name="temperature" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameter.property.temperature"></a>

```java
public java.lang.Number getTemperature();
```

- *Type:* java.lang.Number

Optional.

Controls the randomness of LLM predictions. Low temperature = less random. High temperature = more random. If unset (or 0), uses a default value of 0.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dialogflow_generator#temperature DialogflowGenerator#temperature}

---

##### `topK`<sup>Optional</sup> <a name="topK" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameter.property.topK"></a>

```java
public java.lang.Number getTopK();
```

- *Type:* java.lang.Number

Optional.

Top-k changes how the model selects tokens for output. A top-k of 1 means the selected token is the most probable among all tokens in the model's vocabulary (also called greedy decoding), while a top-k of 3 means that the next token is selected from among the 3 most probable tokens (using temperature). For each token selection step, the top K tokens with the highest probabilities are sampled. Then tokens are further filtered based on topP with the final token selected using temperature sampling. Specify a lower value for less random responses and a higher value for more random responses. Acceptable value is [1, 40], default to 40.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dialogflow_generator#top_k DialogflowGenerator#top_k}

---

##### `topP`<sup>Optional</sup> <a name="topP" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameter.property.topP"></a>

```java
public java.lang.Number getTopP();
```

- *Type:* java.lang.Number

Optional.

Top-p changes how the model selects tokens for output. Tokens are selected from most K (see topK parameter) probable to least until the sum of their probabilities equals the top-p value. For example, if tokens A, B, and C have a probability of 0.3, 0.2, and 0.1 and the top-p value is 0.5, then the model will select either A or B as the next token (using temperature) and doesn't consider C. The default top-p value is 0.95. Specify a lower value for less random responses and a higher value for more random responses. Acceptable value is [0.0, 1.0], default to 0.95.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dialogflow_generator#top_p DialogflowGenerator#top_p}

---

### DialogflowGeneratorSummarizationContext <a name="DialogflowGeneratorSummarizationContext" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContext"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContext.Initializer"></a>

```java
import io.cdktn.providers.google.dialogflow_generator.DialogflowGeneratorSummarizationContext;

DialogflowGeneratorSummarizationContext.builder()
//  .fewShotExamples(IResolvable|java.util.List<DialogflowGeneratorSummarizationContextFewShotExamples>)
//  .outputLanguageCode(java.lang.String)
//  .summarizationSections(IResolvable|java.util.List<DialogflowGeneratorSummarizationContextSummarizationSections>)
//  .version(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContext.property.fewShotExamples">fewShotExamples</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamples">DialogflowGeneratorSummarizationContextFewShotExamples</a>></code> | few_shot_examples block. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContext.property.outputLanguageCode">outputLanguageCode</a></code> | <code>java.lang.String</code> | Optional. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContext.property.summarizationSections">summarizationSections</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSections">DialogflowGeneratorSummarizationContextSummarizationSections</a>></code> | summarization_sections block. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContext.property.version">version</a></code> | <code>java.lang.String</code> | Optional. Version of the feature. If not set, default to latest version. Current candidates are ["1.0"]. |

---

##### `fewShotExamples`<sup>Optional</sup> <a name="fewShotExamples" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContext.property.fewShotExamples"></a>

```java
public IResolvable|java.util.List<DialogflowGeneratorSummarizationContextFewShotExamples> getFewShotExamples();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamples">DialogflowGeneratorSummarizationContextFewShotExamples</a>>

few_shot_examples block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dialogflow_generator#few_shot_examples DialogflowGenerator#few_shot_examples}

---

##### `outputLanguageCode`<sup>Optional</sup> <a name="outputLanguageCode" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContext.property.outputLanguageCode"></a>

```java
public java.lang.String getOutputLanguageCode();
```

- *Type:* java.lang.String

Optional.

The target language of the generated summary. The language code for conversation will be used if this field is empty. Supported 2.0 and later versions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dialogflow_generator#output_language_code DialogflowGenerator#output_language_code}

---

##### `summarizationSections`<sup>Optional</sup> <a name="summarizationSections" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContext.property.summarizationSections"></a>

```java
public IResolvable|java.util.List<DialogflowGeneratorSummarizationContextSummarizationSections> getSummarizationSections();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSections">DialogflowGeneratorSummarizationContextSummarizationSections</a>>

summarization_sections block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dialogflow_generator#summarization_sections DialogflowGenerator#summarization_sections}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContext.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

Optional. Version of the feature. If not set, default to latest version. Current candidates are ["1.0"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dialogflow_generator#version DialogflowGenerator#version}

---

### DialogflowGeneratorSummarizationContextFewShotExamples <a name="DialogflowGeneratorSummarizationContextFewShotExamples" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamples"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamples.Initializer"></a>

```java
import io.cdktn.providers.google.dialogflow_generator.DialogflowGeneratorSummarizationContextFewShotExamples;

DialogflowGeneratorSummarizationContextFewShotExamples.builder()
    .output(DialogflowGeneratorSummarizationContextFewShotExamplesOutput)
//  .conversationContext(DialogflowGeneratorSummarizationContextFewShotExamplesConversationContext)
//  .extraInfo(java.util.Map<java.lang.String, java.lang.String>)
//  .summarizationSectionList(DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStruct)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamples.property.output">output</a></code> | <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutput">DialogflowGeneratorSummarizationContextFewShotExamplesOutput</a></code> | output block. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamples.property.conversationContext">conversationContext</a></code> | <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContext">DialogflowGeneratorSummarizationContextFewShotExamplesConversationContext</a></code> | conversation_context block. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamples.property.extraInfo">extraInfo</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Optional. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamples.property.summarizationSectionList">summarizationSectionList</a></code> | <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStruct">DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStruct</a></code> | summarization_section_list block. |

---

##### `output`<sup>Required</sup> <a name="output" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamples.property.output"></a>

```java
public DialogflowGeneratorSummarizationContextFewShotExamplesOutput getOutput();
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutput">DialogflowGeneratorSummarizationContextFewShotExamplesOutput</a>

output block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dialogflow_generator#output DialogflowGenerator#output}

---

##### `conversationContext`<sup>Optional</sup> <a name="conversationContext" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamples.property.conversationContext"></a>

```java
public DialogflowGeneratorSummarizationContextFewShotExamplesConversationContext getConversationContext();
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContext">DialogflowGeneratorSummarizationContextFewShotExamplesConversationContext</a>

conversation_context block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dialogflow_generator#conversation_context DialogflowGenerator#conversation_context}

---

##### `extraInfo`<sup>Optional</sup> <a name="extraInfo" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamples.property.extraInfo"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getExtraInfo();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Optional.

Key is the placeholder field name in input, value is the value of the placeholder. E.g. instruction contains "@price", and ingested data has <"price", "10">

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dialogflow_generator#extra_info DialogflowGenerator#extra_info}

---

##### `summarizationSectionList`<sup>Optional</sup> <a name="summarizationSectionList" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamples.property.summarizationSectionList"></a>

```java
public DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStruct getSummarizationSectionList();
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStruct">DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStruct</a>

summarization_section_list block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dialogflow_generator#summarization_section_list DialogflowGenerator#summarization_section_list}

---

### DialogflowGeneratorSummarizationContextFewShotExamplesConversationContext <a name="DialogflowGeneratorSummarizationContextFewShotExamplesConversationContext" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContext"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContext.Initializer"></a>

```java
import io.cdktn.providers.google.dialogflow_generator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContext;

DialogflowGeneratorSummarizationContextFewShotExamplesConversationContext.builder()
//  .messageEntries(IResolvable|java.util.List<DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntries>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContext.property.messageEntries">messageEntries</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntries">DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntries</a>></code> | message_entries block. |

---

##### `messageEntries`<sup>Optional</sup> <a name="messageEntries" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContext.property.messageEntries"></a>

```java
public IResolvable|java.util.List<DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntries> getMessageEntries();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntries">DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntries</a>>

message_entries block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dialogflow_generator#message_entries DialogflowGenerator#message_entries}

---

### DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntries <a name="DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntries" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntries"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntries.Initializer"></a>

```java
import io.cdktn.providers.google.dialogflow_generator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntries;

DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntries.builder()
//  .createTime(java.lang.String)
//  .languageCode(java.lang.String)
//  .role(java.lang.String)
//  .text(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntries.property.createTime">createTime</a></code> | <code>java.lang.String</code> | Optional. Create time of the message entry. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntries.property.languageCode">languageCode</a></code> | <code>java.lang.String</code> | Optional. The language of the text. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntries.property.role">role</a></code> | <code>java.lang.String</code> | Optional. Participant role of the message. Possible values: ["HUMAN_AGENT", "AUTOMATED_AGENT", "END_USER"]. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntries.property.text">text</a></code> | <code>java.lang.String</code> | Optional. Transcript content of the message. |

---

##### `createTime`<sup>Optional</sup> <a name="createTime" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntries.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

Optional. Create time of the message entry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dialogflow_generator#create_time DialogflowGenerator#create_time}

---

##### `languageCode`<sup>Optional</sup> <a name="languageCode" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntries.property.languageCode"></a>

```java
public java.lang.String getLanguageCode();
```

- *Type:* java.lang.String

Optional. The language of the text.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dialogflow_generator#language_code DialogflowGenerator#language_code}

---

##### `role`<sup>Optional</sup> <a name="role" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntries.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

Optional. Participant role of the message. Possible values: ["HUMAN_AGENT", "AUTOMATED_AGENT", "END_USER"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dialogflow_generator#role DialogflowGenerator#role}

---

##### `text`<sup>Optional</sup> <a name="text" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntries.property.text"></a>

```java
public java.lang.String getText();
```

- *Type:* java.lang.String

Optional. Transcript content of the message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dialogflow_generator#text DialogflowGenerator#text}

---

### DialogflowGeneratorSummarizationContextFewShotExamplesOutput <a name="DialogflowGeneratorSummarizationContextFewShotExamplesOutput" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutput.Initializer"></a>

```java
import io.cdktn.providers.google.dialogflow_generator.DialogflowGeneratorSummarizationContextFewShotExamplesOutput;

DialogflowGeneratorSummarizationContextFewShotExamplesOutput.builder()
//  .summarySuggestion(DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestion)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutput.property.summarySuggestion">summarySuggestion</a></code> | <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestion">DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestion</a></code> | summary_suggestion block. |

---

##### `summarySuggestion`<sup>Optional</sup> <a name="summarySuggestion" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutput.property.summarySuggestion"></a>

```java
public DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestion getSummarySuggestion();
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestion">DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestion</a>

summary_suggestion block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dialogflow_generator#summary_suggestion DialogflowGenerator#summary_suggestion}

---

### DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestion <a name="DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestion" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestion.Initializer"></a>

```java
import io.cdktn.providers.google.dialogflow_generator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestion;

DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestion.builder()
    .summarySections(IResolvable|java.util.List<DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySections>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestion.property.summarySections">summarySections</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySections">DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySections</a>></code> | summary_sections block. |

---

##### `summarySections`<sup>Required</sup> <a name="summarySections" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestion.property.summarySections"></a>

```java
public IResolvable|java.util.List<DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySections> getSummarySections();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySections">DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySections</a>>

summary_sections block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dialogflow_generator#summary_sections DialogflowGenerator#summary_sections}

---

### DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySections <a name="DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySections" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySections"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySections.Initializer"></a>

```java
import io.cdktn.providers.google.dialogflow_generator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySections;

DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySections.builder()
    .section(java.lang.String)
    .summary(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySections.property.section">section</a></code> | <code>java.lang.String</code> | Required. Name of the section. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySections.property.summary">summary</a></code> | <code>java.lang.String</code> | Required. Summary text for the section. |

---

##### `section`<sup>Required</sup> <a name="section" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySections.property.section"></a>

```java
public java.lang.String getSection();
```

- *Type:* java.lang.String

Required. Name of the section.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dialogflow_generator#section DialogflowGenerator#section}

---

##### `summary`<sup>Required</sup> <a name="summary" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySections.property.summary"></a>

```java
public java.lang.String getSummary();
```

- *Type:* java.lang.String

Required. Summary text for the section.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dialogflow_generator#summary DialogflowGenerator#summary}

---

### DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStruct <a name="DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStruct" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStruct"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStruct.Initializer"></a>

```java
import io.cdktn.providers.google.dialogflow_generator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStruct;

DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStruct.builder()
//  .summarizationSections(IResolvable|java.util.List<DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSections>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStruct.property.summarizationSections">summarizationSections</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSections">DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSections</a>></code> | summarization_sections block. |

---

##### `summarizationSections`<sup>Optional</sup> <a name="summarizationSections" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStruct.property.summarizationSections"></a>

```java
public IResolvable|java.util.List<DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSections> getSummarizationSections();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSections">DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSections</a>>

summarization_sections block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dialogflow_generator#summarization_sections DialogflowGenerator#summarization_sections}

---

### DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSections <a name="DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSections" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSections"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSections.Initializer"></a>

```java
import io.cdktn.providers.google.dialogflow_generator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSections;

DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSections.builder()
//  .definition(java.lang.String)
//  .key(java.lang.String)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSections.property.definition">definition</a></code> | <code>java.lang.String</code> | Optional. Definition of the section, for example, "what the customer needs help with or has question about.". |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSections.property.key">key</a></code> | <code>java.lang.String</code> | Optional. Name of the section, for example, "situation". |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSections.property.type">type</a></code> | <code>java.lang.String</code> | Optional. Type of the summarization section. Possible values: ["SITUATION", "ACTION", "RESOLUTION", "REASON_FOR_CANCELLATION", "CUSTOMER_SATISFACTION", "ENTITIES", "CUSTOMER_DEFINED", "SITUATION_CONCISE", "ACTION_CONCISE"]. |

---

##### `definition`<sup>Optional</sup> <a name="definition" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSections.property.definition"></a>

```java
public java.lang.String getDefinition();
```

- *Type:* java.lang.String

Optional. Definition of the section, for example, "what the customer needs help with or has question about.".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dialogflow_generator#definition DialogflowGenerator#definition}

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSections.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Optional. Name of the section, for example, "situation".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dialogflow_generator#key DialogflowGenerator#key}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSections.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Optional. Type of the summarization section. Possible values: ["SITUATION", "ACTION", "RESOLUTION", "REASON_FOR_CANCELLATION", "CUSTOMER_SATISFACTION", "ENTITIES", "CUSTOMER_DEFINED", "SITUATION_CONCISE", "ACTION_CONCISE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dialogflow_generator#type DialogflowGenerator#type}

---

### DialogflowGeneratorSummarizationContextSummarizationSections <a name="DialogflowGeneratorSummarizationContextSummarizationSections" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSections"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSections.Initializer"></a>

```java
import io.cdktn.providers.google.dialogflow_generator.DialogflowGeneratorSummarizationContextSummarizationSections;

DialogflowGeneratorSummarizationContextSummarizationSections.builder()
//  .definition(java.lang.String)
//  .key(java.lang.String)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSections.property.definition">definition</a></code> | <code>java.lang.String</code> | Optional. Definition of the section, for example, "what the customer needs help with or has question about.". |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSections.property.key">key</a></code> | <code>java.lang.String</code> | Optional. Name of the section, for example, "situation". |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSections.property.type">type</a></code> | <code>java.lang.String</code> | Optional. Type of the summarization section. Possible values: ["SITUATION", "ACTION", "RESOLUTION", "REASON_FOR_CANCELLATION", "CUSTOMER_SATISFACTION", "ENTITIES", "CUSTOMER_DEFINED", "SITUATION_CONCISE", "ACTION_CONCISE"]. |

---

##### `definition`<sup>Optional</sup> <a name="definition" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSections.property.definition"></a>

```java
public java.lang.String getDefinition();
```

- *Type:* java.lang.String

Optional. Definition of the section, for example, "what the customer needs help with or has question about.".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dialogflow_generator#definition DialogflowGenerator#definition}

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSections.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Optional. Name of the section, for example, "situation".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dialogflow_generator#key DialogflowGenerator#key}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSections.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Optional. Type of the summarization section. Possible values: ["SITUATION", "ACTION", "RESOLUTION", "REASON_FOR_CANCELLATION", "CUSTOMER_SATISFACTION", "ENTITIES", "CUSTOMER_DEFINED", "SITUATION_CONCISE", "ACTION_CONCISE"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dialogflow_generator#type DialogflowGenerator#type}

---

### DialogflowGeneratorTimeouts <a name="DialogflowGeneratorTimeouts" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google.dialogflow_generator.DialogflowGeneratorTimeouts;

DialogflowGeneratorTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dialogflow_generator#create DialogflowGenerator#create}. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dialogflow_generator#delete DialogflowGenerator#delete}. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dialogflow_generator#update DialogflowGenerator#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dialogflow_generator#create DialogflowGenerator#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dialogflow_generator#delete DialogflowGenerator#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.39.0/docs/resources/dialogflow_generator#update DialogflowGenerator#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### DialogflowGeneratorInferenceParameterOutputReference <a name="DialogflowGeneratorInferenceParameterOutputReference" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameterOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameterOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.dialogflow_generator.DialogflowGeneratorInferenceParameterOutputReference;

new DialogflowGeneratorInferenceParameterOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameterOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameterOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameterOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameterOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameterOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameterOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameterOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameterOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameterOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameterOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameterOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameterOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameterOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameterOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameterOutputReference.resetMaxOutputTokens">resetMaxOutputTokens</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameterOutputReference.resetTemperature">resetTemperature</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameterOutputReference.resetTopK">resetTopK</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameterOutputReference.resetTopP">resetTopP</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameterOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameterOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameterOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameterOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameterOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameterOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameterOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameterOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameterOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameterOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameterOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameterOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameterOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameterOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMaxOutputTokens` <a name="resetMaxOutputTokens" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameterOutputReference.resetMaxOutputTokens"></a>

```java
public void resetMaxOutputTokens()
```

##### `resetTemperature` <a name="resetTemperature" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameterOutputReference.resetTemperature"></a>

```java
public void resetTemperature()
```

##### `resetTopK` <a name="resetTopK" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameterOutputReference.resetTopK"></a>

```java
public void resetTopK()
```

##### `resetTopP` <a name="resetTopP" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameterOutputReference.resetTopP"></a>

```java
public void resetTopP()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameterOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameterOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameterOutputReference.property.maxOutputTokensInput">maxOutputTokensInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameterOutputReference.property.temperatureInput">temperatureInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameterOutputReference.property.topKInput">topKInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameterOutputReference.property.topPInput">topPInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameterOutputReference.property.maxOutputTokens">maxOutputTokens</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameterOutputReference.property.temperature">temperature</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameterOutputReference.property.topK">topK</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameterOutputReference.property.topP">topP</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameterOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameter">DialogflowGeneratorInferenceParameter</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameterOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameterOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxOutputTokensInput`<sup>Optional</sup> <a name="maxOutputTokensInput" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameterOutputReference.property.maxOutputTokensInput"></a>

```java
public java.lang.Number getMaxOutputTokensInput();
```

- *Type:* java.lang.Number

---

##### `temperatureInput`<sup>Optional</sup> <a name="temperatureInput" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameterOutputReference.property.temperatureInput"></a>

```java
public java.lang.Number getTemperatureInput();
```

- *Type:* java.lang.Number

---

##### `topKInput`<sup>Optional</sup> <a name="topKInput" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameterOutputReference.property.topKInput"></a>

```java
public java.lang.Number getTopKInput();
```

- *Type:* java.lang.Number

---

##### `topPInput`<sup>Optional</sup> <a name="topPInput" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameterOutputReference.property.topPInput"></a>

```java
public java.lang.Number getTopPInput();
```

- *Type:* java.lang.Number

---

##### `maxOutputTokens`<sup>Required</sup> <a name="maxOutputTokens" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameterOutputReference.property.maxOutputTokens"></a>

```java
public java.lang.Number getMaxOutputTokens();
```

- *Type:* java.lang.Number

---

##### `temperature`<sup>Required</sup> <a name="temperature" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameterOutputReference.property.temperature"></a>

```java
public java.lang.Number getTemperature();
```

- *Type:* java.lang.Number

---

##### `topK`<sup>Required</sup> <a name="topK" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameterOutputReference.property.topK"></a>

```java
public java.lang.Number getTopK();
```

- *Type:* java.lang.Number

---

##### `topP`<sup>Required</sup> <a name="topP" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameterOutputReference.property.topP"></a>

```java
public java.lang.Number getTopP();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameterOutputReference.property.internalValue"></a>

```java
public DialogflowGeneratorInferenceParameter getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorInferenceParameter">DialogflowGeneratorInferenceParameter</a>

---


### DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesList <a name="DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesList" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesList.Initializer"></a>

```java
import io.cdktn.providers.google.dialogflow_generator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesList;

new DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesList.get"></a>

```java
public DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntries">DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntries</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntries> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntries">DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntries</a>>

---


### DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference <a name="DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.dialogflow_generator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference;

new DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.resetCreateTime">resetCreateTime</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.resetLanguageCode">resetLanguageCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.resetRole">resetRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.resetText">resetText</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreateTime` <a name="resetCreateTime" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.resetCreateTime"></a>

```java
public void resetCreateTime()
```

##### `resetLanguageCode` <a name="resetLanguageCode" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.resetLanguageCode"></a>

```java
public void resetLanguageCode()
```

##### `resetRole` <a name="resetRole" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.resetRole"></a>

```java
public void resetRole()
```

##### `resetText` <a name="resetText" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.resetText"></a>

```java
public void resetText()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.property.createTimeInput">createTimeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.property.languageCodeInput">languageCodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.property.roleInput">roleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.property.textInput">textInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.property.languageCode">languageCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.property.role">role</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.property.text">text</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntries">DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntries</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createTimeInput`<sup>Optional</sup> <a name="createTimeInput" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.property.createTimeInput"></a>

```java
public java.lang.String getCreateTimeInput();
```

- *Type:* java.lang.String

---

##### `languageCodeInput`<sup>Optional</sup> <a name="languageCodeInput" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.property.languageCodeInput"></a>

```java
public java.lang.String getLanguageCodeInput();
```

- *Type:* java.lang.String

---

##### `roleInput`<sup>Optional</sup> <a name="roleInput" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.property.roleInput"></a>

```java
public java.lang.String getRoleInput();
```

- *Type:* java.lang.String

---

##### `textInput`<sup>Optional</sup> <a name="textInput" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.property.textInput"></a>

```java
public java.lang.String getTextInput();
```

- *Type:* java.lang.String

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `languageCode`<sup>Required</sup> <a name="languageCode" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.property.languageCode"></a>

```java
public java.lang.String getLanguageCode();
```

- *Type:* java.lang.String

---

##### `role`<sup>Required</sup> <a name="role" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.property.role"></a>

```java
public java.lang.String getRole();
```

- *Type:* java.lang.String

---

##### `text`<sup>Required</sup> <a name="text" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.property.text"></a>

```java
public java.lang.String getText();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesOutputReference.property.internalValue"></a>

```java
public IResolvable|DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntries getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntries">DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntries</a>

---


### DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference <a name="DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.dialogflow_generator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference;

new DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.putMessageEntries">putMessageEntries</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.resetMessageEntries">resetMessageEntries</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putMessageEntries` <a name="putMessageEntries" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.putMessageEntries"></a>

```java
public void putMessageEntries(IResolvable|java.util.List<DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntries> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.putMessageEntries.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntries">DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntries</a>>

---

##### `resetMessageEntries` <a name="resetMessageEntries" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.resetMessageEntries"></a>

```java
public void resetMessageEntries()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.property.messageEntries">messageEntries</a></code> | <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesList">DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.property.messageEntriesInput">messageEntriesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntries">DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntries</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContext">DialogflowGeneratorSummarizationContextFewShotExamplesConversationContext</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `messageEntries`<sup>Required</sup> <a name="messageEntries" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.property.messageEntries"></a>

```java
public DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesList getMessageEntries();
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesList">DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntriesList</a>

---

##### `messageEntriesInput`<sup>Optional</sup> <a name="messageEntriesInput" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.property.messageEntriesInput"></a>

```java
public IResolvable|java.util.List<DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntries> getMessageEntriesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntries">DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextMessageEntries</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference.property.internalValue"></a>

```java
public DialogflowGeneratorSummarizationContextFewShotExamplesConversationContext getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContext">DialogflowGeneratorSummarizationContextFewShotExamplesConversationContext</a>

---


### DialogflowGeneratorSummarizationContextFewShotExamplesList <a name="DialogflowGeneratorSummarizationContextFewShotExamplesList" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesList.Initializer"></a>

```java
import io.cdktn.providers.google.dialogflow_generator.DialogflowGeneratorSummarizationContextFewShotExamplesList;

new DialogflowGeneratorSummarizationContextFewShotExamplesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesList.get"></a>

```java
public DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamples">DialogflowGeneratorSummarizationContextFewShotExamples</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DialogflowGeneratorSummarizationContextFewShotExamples> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamples">DialogflowGeneratorSummarizationContextFewShotExamples</a>>

---


### DialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference <a name="DialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.dialogflow_generator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference;

new DialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.putSummarySuggestion">putSummarySuggestion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.resetSummarySuggestion">resetSummarySuggestion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSummarySuggestion` <a name="putSummarySuggestion" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.putSummarySuggestion"></a>

```java
public void putSummarySuggestion(DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestion value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.putSummarySuggestion.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestion">DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestion</a>

---

##### `resetSummarySuggestion` <a name="resetSummarySuggestion" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.resetSummarySuggestion"></a>

```java
public void resetSummarySuggestion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.property.summarySuggestion">summarySuggestion</a></code> | <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference">DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.property.summarySuggestionInput">summarySuggestionInput</a></code> | <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestion">DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutput">DialogflowGeneratorSummarizationContextFewShotExamplesOutput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `summarySuggestion`<sup>Required</sup> <a name="summarySuggestion" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.property.summarySuggestion"></a>

```java
public DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference getSummarySuggestion();
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference">DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference</a>

---

##### `summarySuggestionInput`<sup>Optional</sup> <a name="summarySuggestionInput" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.property.summarySuggestionInput"></a>

```java
public DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestion getSummarySuggestionInput();
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestion">DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestion</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference.property.internalValue"></a>

```java
public DialogflowGeneratorSummarizationContextFewShotExamplesOutput getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutput">DialogflowGeneratorSummarizationContextFewShotExamplesOutput</a>

---


### DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference <a name="DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.dialogflow_generator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference;

new DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.putConversationContext">putConversationContext</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.putOutput">putOutput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.putSummarizationSectionList">putSummarizationSectionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.resetConversationContext">resetConversationContext</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.resetExtraInfo">resetExtraInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.resetSummarizationSectionList">resetSummarizationSectionList</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putConversationContext` <a name="putConversationContext" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.putConversationContext"></a>

```java
public void putConversationContext(DialogflowGeneratorSummarizationContextFewShotExamplesConversationContext value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.putConversationContext.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContext">DialogflowGeneratorSummarizationContextFewShotExamplesConversationContext</a>

---

##### `putOutput` <a name="putOutput" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.putOutput"></a>

```java
public void putOutput(DialogflowGeneratorSummarizationContextFewShotExamplesOutput value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.putOutput.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutput">DialogflowGeneratorSummarizationContextFewShotExamplesOutput</a>

---

##### `putSummarizationSectionList` <a name="putSummarizationSectionList" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.putSummarizationSectionList"></a>

```java
public void putSummarizationSectionList(DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStruct value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.putSummarizationSectionList.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStruct">DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStruct</a>

---

##### `resetConversationContext` <a name="resetConversationContext" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.resetConversationContext"></a>

```java
public void resetConversationContext()
```

##### `resetExtraInfo` <a name="resetExtraInfo" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.resetExtraInfo"></a>

```java
public void resetExtraInfo()
```

##### `resetSummarizationSectionList` <a name="resetSummarizationSectionList" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.resetSummarizationSectionList"></a>

```java
public void resetSummarizationSectionList()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.property.conversationContext">conversationContext</a></code> | <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference">DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.property.output">output</a></code> | <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference">DialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.property.summarizationSectionList">summarizationSectionList</a></code> | <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference">DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.property.conversationContextInput">conversationContextInput</a></code> | <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContext">DialogflowGeneratorSummarizationContextFewShotExamplesConversationContext</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.property.extraInfoInput">extraInfoInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.property.outputInput">outputInput</a></code> | <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutput">DialogflowGeneratorSummarizationContextFewShotExamplesOutput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.property.summarizationSectionListInput">summarizationSectionListInput</a></code> | <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStruct">DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStruct</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.property.extraInfo">extraInfo</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamples">DialogflowGeneratorSummarizationContextFewShotExamples</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `conversationContext`<sup>Required</sup> <a name="conversationContext" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.property.conversationContext"></a>

```java
public DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference getConversationContext();
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference">DialogflowGeneratorSummarizationContextFewShotExamplesConversationContextOutputReference</a>

---

##### `output`<sup>Required</sup> <a name="output" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.property.output"></a>

```java
public DialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference getOutput();
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference">DialogflowGeneratorSummarizationContextFewShotExamplesOutputOutputReference</a>

---

##### `summarizationSectionList`<sup>Required</sup> <a name="summarizationSectionList" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.property.summarizationSectionList"></a>

```java
public DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference getSummarizationSectionList();
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference">DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference</a>

---

##### `conversationContextInput`<sup>Optional</sup> <a name="conversationContextInput" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.property.conversationContextInput"></a>

```java
public DialogflowGeneratorSummarizationContextFewShotExamplesConversationContext getConversationContextInput();
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesConversationContext">DialogflowGeneratorSummarizationContextFewShotExamplesConversationContext</a>

---

##### `extraInfoInput`<sup>Optional</sup> <a name="extraInfoInput" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.property.extraInfoInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getExtraInfoInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `outputInput`<sup>Optional</sup> <a name="outputInput" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.property.outputInput"></a>

```java
public DialogflowGeneratorSummarizationContextFewShotExamplesOutput getOutputInput();
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutput">DialogflowGeneratorSummarizationContextFewShotExamplesOutput</a>

---

##### `summarizationSectionListInput`<sup>Optional</sup> <a name="summarizationSectionListInput" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.property.summarizationSectionListInput"></a>

```java
public DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStruct getSummarizationSectionListInput();
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStruct">DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStruct</a>

---

##### `extraInfo`<sup>Required</sup> <a name="extraInfo" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.property.extraInfo"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getExtraInfo();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputReference.property.internalValue"></a>

```java
public IResolvable|DialogflowGeneratorSummarizationContextFewShotExamples getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamples">DialogflowGeneratorSummarizationContextFewShotExamples</a>

---


### DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference <a name="DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.dialogflow_generator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference;

new DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.putSummarySections">putSummarySections</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSummarySections` <a name="putSummarySections" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.putSummarySections"></a>

```java
public void putSummarySections(IResolvable|java.util.List<DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySections> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.putSummarySections.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySections">DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySections</a>>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.property.summarySections">summarySections</a></code> | <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsList">DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.property.summarySectionsInput">summarySectionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySections">DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySections</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestion">DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestion</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `summarySections`<sup>Required</sup> <a name="summarySections" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.property.summarySections"></a>

```java
public DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsList getSummarySections();
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsList">DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsList</a>

---

##### `summarySectionsInput`<sup>Optional</sup> <a name="summarySectionsInput" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.property.summarySectionsInput"></a>

```java
public IResolvable|java.util.List<DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySections> getSummarySectionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySections">DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySections</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionOutputReference.property.internalValue"></a>

```java
public DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestion getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestion">DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestion</a>

---


### DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsList <a name="DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsList" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsList.Initializer"></a>

```java
import io.cdktn.providers.google.dialogflow_generator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsList;

new DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsList.get"></a>

```java
public DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySections">DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySections</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySections> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySections">DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySections</a>>

---


### DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference <a name="DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.dialogflow_generator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference;

new DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.property.sectionInput">sectionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.property.summaryInput">summaryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.property.section">section</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.property.summary">summary</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySections">DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySections</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `sectionInput`<sup>Optional</sup> <a name="sectionInput" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.property.sectionInput"></a>

```java
public java.lang.String getSectionInput();
```

- *Type:* java.lang.String

---

##### `summaryInput`<sup>Optional</sup> <a name="summaryInput" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.property.summaryInput"></a>

```java
public java.lang.String getSummaryInput();
```

- *Type:* java.lang.String

---

##### `section`<sup>Required</sup> <a name="section" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.property.section"></a>

```java
public java.lang.String getSection();
```

- *Type:* java.lang.String

---

##### `summary`<sup>Required</sup> <a name="summary" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.property.summary"></a>

```java
public java.lang.String getSummary();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySectionsOutputReference.property.internalValue"></a>

```java
public IResolvable|DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySections getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySections">DialogflowGeneratorSummarizationContextFewShotExamplesOutputSummarySuggestionSummarySections</a>

---


### DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference <a name="DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.dialogflow_generator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference;

new DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.putSummarizationSections">putSummarizationSections</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.resetSummarizationSections">resetSummarizationSections</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSummarizationSections` <a name="putSummarizationSections" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.putSummarizationSections"></a>

```java
public void putSummarizationSections(IResolvable|java.util.List<DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSections> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.putSummarizationSections.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSections">DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSections</a>>

---

##### `resetSummarizationSections` <a name="resetSummarizationSections" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.resetSummarizationSections"></a>

```java
public void resetSummarizationSections()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.property.summarizationSections">summarizationSections</a></code> | <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsList">DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.property.summarizationSectionsInput">summarizationSectionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSections">DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSections</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStruct">DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStruct</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `summarizationSections`<sup>Required</sup> <a name="summarizationSections" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.property.summarizationSections"></a>

```java
public DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsList getSummarizationSections();
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsList">DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsList</a>

---

##### `summarizationSectionsInput`<sup>Optional</sup> <a name="summarizationSectionsInput" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.property.summarizationSectionsInput"></a>

```java
public IResolvable|java.util.List<DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSections> getSummarizationSectionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSections">DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSections</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStructOutputReference.property.internalValue"></a>

```java
public DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStruct getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStruct">DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListStruct</a>

---


### DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsList <a name="DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsList" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsList.Initializer"></a>

```java
import io.cdktn.providers.google.dialogflow_generator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsList;

new DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsList.get"></a>

```java
public DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSections">DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSections</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSections> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSections">DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSections</a>>

---


### DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference <a name="DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.dialogflow_generator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference;

new DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.resetDefinition">resetDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDefinition` <a name="resetDefinition" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.resetDefinition"></a>

```java
public void resetDefinition()
```

##### `resetKey` <a name="resetKey" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetType` <a name="resetType" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.property.definitionInput">definitionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.property.definition">definition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSections">DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSections</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `definitionInput`<sup>Optional</sup> <a name="definitionInput" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.property.definitionInput"></a>

```java
public java.lang.String getDefinitionInput();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `definition`<sup>Required</sup> <a name="definition" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.property.definition"></a>

```java
public java.lang.String getDefinition();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSectionsOutputReference.property.internalValue"></a>

```java
public IResolvable|DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSections getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSections">DialogflowGeneratorSummarizationContextFewShotExamplesSummarizationSectionListSummarizationSections</a>

---


### DialogflowGeneratorSummarizationContextOutputReference <a name="DialogflowGeneratorSummarizationContextOutputReference" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.dialogflow_generator.DialogflowGeneratorSummarizationContextOutputReference;

new DialogflowGeneratorSummarizationContextOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextOutputReference.putFewShotExamples">putFewShotExamples</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextOutputReference.putSummarizationSections">putSummarizationSections</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextOutputReference.resetFewShotExamples">resetFewShotExamples</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextOutputReference.resetOutputLanguageCode">resetOutputLanguageCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextOutputReference.resetSummarizationSections">resetSummarizationSections</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextOutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFewShotExamples` <a name="putFewShotExamples" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextOutputReference.putFewShotExamples"></a>

```java
public void putFewShotExamples(IResolvable|java.util.List<DialogflowGeneratorSummarizationContextFewShotExamples> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextOutputReference.putFewShotExamples.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamples">DialogflowGeneratorSummarizationContextFewShotExamples</a>>

---

##### `putSummarizationSections` <a name="putSummarizationSections" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextOutputReference.putSummarizationSections"></a>

```java
public void putSummarizationSections(IResolvable|java.util.List<DialogflowGeneratorSummarizationContextSummarizationSections> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextOutputReference.putSummarizationSections.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSections">DialogflowGeneratorSummarizationContextSummarizationSections</a>>

---

##### `resetFewShotExamples` <a name="resetFewShotExamples" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextOutputReference.resetFewShotExamples"></a>

```java
public void resetFewShotExamples()
```

##### `resetOutputLanguageCode` <a name="resetOutputLanguageCode" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextOutputReference.resetOutputLanguageCode"></a>

```java
public void resetOutputLanguageCode()
```

##### `resetSummarizationSections` <a name="resetSummarizationSections" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextOutputReference.resetSummarizationSections"></a>

```java
public void resetSummarizationSections()
```

##### `resetVersion` <a name="resetVersion" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextOutputReference.resetVersion"></a>

```java
public void resetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextOutputReference.property.fewShotExamples">fewShotExamples</a></code> | <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesList">DialogflowGeneratorSummarizationContextFewShotExamplesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextOutputReference.property.summarizationSections">summarizationSections</a></code> | <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsList">DialogflowGeneratorSummarizationContextSummarizationSectionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextOutputReference.property.fewShotExamplesInput">fewShotExamplesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamples">DialogflowGeneratorSummarizationContextFewShotExamples</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextOutputReference.property.outputLanguageCodeInput">outputLanguageCodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextOutputReference.property.summarizationSectionsInput">summarizationSectionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSections">DialogflowGeneratorSummarizationContextSummarizationSections</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextOutputReference.property.versionInput">versionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextOutputReference.property.outputLanguageCode">outputLanguageCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextOutputReference.property.version">version</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContext">DialogflowGeneratorSummarizationContext</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fewShotExamples`<sup>Required</sup> <a name="fewShotExamples" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextOutputReference.property.fewShotExamples"></a>

```java
public DialogflowGeneratorSummarizationContextFewShotExamplesList getFewShotExamples();
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamplesList">DialogflowGeneratorSummarizationContextFewShotExamplesList</a>

---

##### `summarizationSections`<sup>Required</sup> <a name="summarizationSections" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextOutputReference.property.summarizationSections"></a>

```java
public DialogflowGeneratorSummarizationContextSummarizationSectionsList getSummarizationSections();
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsList">DialogflowGeneratorSummarizationContextSummarizationSectionsList</a>

---

##### `fewShotExamplesInput`<sup>Optional</sup> <a name="fewShotExamplesInput" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextOutputReference.property.fewShotExamplesInput"></a>

```java
public IResolvable|java.util.List<DialogflowGeneratorSummarizationContextFewShotExamples> getFewShotExamplesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextFewShotExamples">DialogflowGeneratorSummarizationContextFewShotExamples</a>>

---

##### `outputLanguageCodeInput`<sup>Optional</sup> <a name="outputLanguageCodeInput" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextOutputReference.property.outputLanguageCodeInput"></a>

```java
public java.lang.String getOutputLanguageCodeInput();
```

- *Type:* java.lang.String

---

##### `summarizationSectionsInput`<sup>Optional</sup> <a name="summarizationSectionsInput" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextOutputReference.property.summarizationSectionsInput"></a>

```java
public IResolvable|java.util.List<DialogflowGeneratorSummarizationContextSummarizationSections> getSummarizationSectionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSections">DialogflowGeneratorSummarizationContextSummarizationSections</a>>

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextOutputReference.property.versionInput"></a>

```java
public java.lang.String getVersionInput();
```

- *Type:* java.lang.String

---

##### `outputLanguageCode`<sup>Required</sup> <a name="outputLanguageCode" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextOutputReference.property.outputLanguageCode"></a>

```java
public java.lang.String getOutputLanguageCode();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextOutputReference.property.version"></a>

```java
public java.lang.String getVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextOutputReference.property.internalValue"></a>

```java
public DialogflowGeneratorSummarizationContext getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContext">DialogflowGeneratorSummarizationContext</a>

---


### DialogflowGeneratorSummarizationContextSummarizationSectionsList <a name="DialogflowGeneratorSummarizationContextSummarizationSectionsList" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsList.Initializer"></a>

```java
import io.cdktn.providers.google.dialogflow_generator.DialogflowGeneratorSummarizationContextSummarizationSectionsList;

new DialogflowGeneratorSummarizationContextSummarizationSectionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsList.get"></a>

```java
public DialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSections">DialogflowGeneratorSummarizationContextSummarizationSections</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DialogflowGeneratorSummarizationContextSummarizationSections> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSections">DialogflowGeneratorSummarizationContextSummarizationSections</a>>

---


### DialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference <a name="DialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.dialogflow_generator.DialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference;

new DialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.resetDefinition">resetDefinition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDefinition` <a name="resetDefinition" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.resetDefinition"></a>

```java
public void resetDefinition()
```

##### `resetKey` <a name="resetKey" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetType` <a name="resetType" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.property.definitionInput">definitionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.property.definition">definition</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSections">DialogflowGeneratorSummarizationContextSummarizationSections</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `definitionInput`<sup>Optional</sup> <a name="definitionInput" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.property.definitionInput"></a>

```java
public java.lang.String getDefinitionInput();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `definition`<sup>Required</sup> <a name="definition" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.property.definition"></a>

```java
public java.lang.String getDefinition();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSectionsOutputReference.property.internalValue"></a>

```java
public IResolvable|DialogflowGeneratorSummarizationContextSummarizationSections getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorSummarizationContextSummarizationSections">DialogflowGeneratorSummarizationContextSummarizationSections</a>

---


### DialogflowGeneratorTimeoutsOutputReference <a name="DialogflowGeneratorTimeoutsOutputReference" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.dialogflow_generator.DialogflowGeneratorTimeoutsOutputReference;

new DialogflowGeneratorTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeouts">DialogflowGeneratorTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|DialogflowGeneratorTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.dialogflowGenerator.DialogflowGeneratorTimeouts">DialogflowGeneratorTimeouts</a>

---



