# `chronicleParserExtension` Submodule <a name="`chronicleParserExtension` Submodule" id="@cdktn/provider-google.chronicleParserExtension"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ChronicleParserExtension <a name="ChronicleParserExtension" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/chronicle_parser_extension google_chronicle_parser_extension}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.Initializer"></a>

```java
import io.cdktn.providers.google.chronicle_parser_extension.ChronicleParserExtension;

ChronicleParserExtension.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .instance(java.lang.String)
    .location(java.lang.String)
    .logType(java.lang.String)
//  .cbnSnippet(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .dynamicParsing(ChronicleParserExtensionDynamicParsing)
//  .fieldExtractors(ChronicleParserExtensionFieldExtractors)
//  .id(java.lang.String)
//  .log(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(ChronicleParserExtensionTimeouts)
//  .validationSkipped(java.lang.Boolean|IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.Initializer.parameter.instance">instance</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.Initializer.parameter.logType">logType</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.Initializer.parameter.cbnSnippet">cbnSnippet</a></code> | <code>java.lang.String</code> | Parser config could be a cbn snippet. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.Initializer.parameter.dynamicParsing">dynamicParsing</a></code> | <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsing">ChronicleParserExtensionDynamicParsing</a></code> | dynamic_parsing block. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.Initializer.parameter.fieldExtractors">fieldExtractors</a></code> | <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractors">ChronicleParserExtensionFieldExtractors</a></code> | field_extractors block. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/chronicle_parser_extension#id ChronicleParserExtension#id}. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.Initializer.parameter.log">log</a></code> | <code>java.lang.String</code> | Raw log used to assist the user in creation of augmentation. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/chronicle_parser_extension#project ChronicleParserExtension#project}. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeouts">ChronicleParserExtensionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.Initializer.parameter.validationSkipped">validationSkipped</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Flag to bypass parser extension validation. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.Initializer.parameter.instance"></a>

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/chronicle_parser_extension#instance ChronicleParserExtension#instance}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/chronicle_parser_extension#location ChronicleParserExtension#location}

---

##### `logType`<sup>Required</sup> <a name="logType" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.Initializer.parameter.logType"></a>

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/chronicle_parser_extension#log_type ChronicleParserExtension#log_type}

---

##### `cbnSnippet`<sup>Optional</sup> <a name="cbnSnippet" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.Initializer.parameter.cbnSnippet"></a>

- *Type:* java.lang.String

Parser config could be a cbn snippet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/chronicle_parser_extension#cbn_snippet ChronicleParserExtension#cbn_snippet}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/chronicle_parser_extension#deletion_policy ChronicleParserExtension#deletion_policy}

---

##### `dynamicParsing`<sup>Optional</sup> <a name="dynamicParsing" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.Initializer.parameter.dynamicParsing"></a>

- *Type:* <a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsing">ChronicleParserExtensionDynamicParsing</a>

dynamic_parsing block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/chronicle_parser_extension#dynamic_parsing ChronicleParserExtension#dynamic_parsing}

---

##### `fieldExtractors`<sup>Optional</sup> <a name="fieldExtractors" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.Initializer.parameter.fieldExtractors"></a>

- *Type:* <a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractors">ChronicleParserExtensionFieldExtractors</a>

field_extractors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/chronicle_parser_extension#field_extractors ChronicleParserExtension#field_extractors}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/chronicle_parser_extension#id ChronicleParserExtension#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `log`<sup>Optional</sup> <a name="log" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.Initializer.parameter.log"></a>

- *Type:* java.lang.String

Raw log used to assist the user in creation of augmentation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/chronicle_parser_extension#log ChronicleParserExtension#log}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/chronicle_parser_extension#project ChronicleParserExtension#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeouts">ChronicleParserExtensionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/chronicle_parser_extension#timeouts ChronicleParserExtension#timeouts}

---

##### `validationSkipped`<sup>Optional</sup> <a name="validationSkipped" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.Initializer.parameter.validationSkipped"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Flag to bypass parser extension validation.

If enabled, the parser extension won't be rejected during the validation
phase and validation will be skipped.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/chronicle_parser_extension#validation_skipped ChronicleParserExtension#validation_skipped}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.putDynamicParsing">putDynamicParsing</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.putFieldExtractors">putFieldExtractors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.resetCbnSnippet">resetCbnSnippet</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.resetDynamicParsing">resetDynamicParsing</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.resetFieldExtractors">resetFieldExtractors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.resetLog">resetLog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.resetTimeouts">resetTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.resetValidationSkipped">resetValidationSkipped</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDynamicParsing` <a name="putDynamicParsing" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.putDynamicParsing"></a>

```java
public void putDynamicParsing(ChronicleParserExtensionDynamicParsing value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.putDynamicParsing.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsing">ChronicleParserExtensionDynamicParsing</a>

---

##### `putFieldExtractors` <a name="putFieldExtractors" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.putFieldExtractors"></a>

```java
public void putFieldExtractors(ChronicleParserExtensionFieldExtractors value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.putFieldExtractors.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractors">ChronicleParserExtensionFieldExtractors</a>

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.putTimeouts"></a>

```java
public void putTimeouts(ChronicleParserExtensionTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeouts">ChronicleParserExtensionTimeouts</a>

---

##### `resetCbnSnippet` <a name="resetCbnSnippet" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.resetCbnSnippet"></a>

```java
public void resetCbnSnippet()
```

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetDynamicParsing` <a name="resetDynamicParsing" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.resetDynamicParsing"></a>

```java
public void resetDynamicParsing()
```

##### `resetFieldExtractors` <a name="resetFieldExtractors" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.resetFieldExtractors"></a>

```java
public void resetFieldExtractors()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.resetId"></a>

```java
public void resetId()
```

##### `resetLog` <a name="resetLog" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.resetLog"></a>

```java
public void resetLog()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.resetProject"></a>

```java
public void resetProject()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.resetTimeouts"></a>

```java
public void resetTimeouts()
```

##### `resetValidationSkipped` <a name="resetValidationSkipped" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.resetValidationSkipped"></a>

```java
public void resetValidationSkipped()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ChronicleParserExtension resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.isConstruct"></a>

```java
import io.cdktn.providers.google.chronicle_parser_extension.ChronicleParserExtension;

ChronicleParserExtension.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.isTerraformElement"></a>

```java
import io.cdktn.providers.google.chronicle_parser_extension.ChronicleParserExtension;

ChronicleParserExtension.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.isTerraformResource"></a>

```java
import io.cdktn.providers.google.chronicle_parser_extension.ChronicleParserExtension;

ChronicleParserExtension.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.chronicle_parser_extension.ChronicleParserExtension;

ChronicleParserExtension.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ChronicleParserExtension.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ChronicleParserExtension resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ChronicleParserExtension to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ChronicleParserExtension that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/chronicle_parser_extension#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ChronicleParserExtension to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.createTime">createTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.dynamicParsing">dynamicParsing</a></code> | <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference">ChronicleParserExtensionDynamicParsingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.extensionValidationReport">extensionValidationReport</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.fieldExtractors">fieldExtractors</a></code> | <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference">ChronicleParserExtensionFieldExtractorsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.lastLiveTime">lastLiveTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.parserextension">parserextension</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.stateLastChangedTime">stateLastChangedTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference">ChronicleParserExtensionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.validationReport">validationReport</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.cbnSnippetInput">cbnSnippetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.dynamicParsingInput">dynamicParsingInput</a></code> | <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsing">ChronicleParserExtensionDynamicParsing</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.fieldExtractorsInput">fieldExtractorsInput</a></code> | <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractors">ChronicleParserExtensionFieldExtractors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.instanceInput">instanceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.logInput">logInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.logTypeInput">logTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeouts">ChronicleParserExtensionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.validationSkippedInput">validationSkippedInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.cbnSnippet">cbnSnippet</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.instance">instance</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.log">log</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.logType">logType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.validationSkipped">validationSkipped</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `createTime`<sup>Required</sup> <a name="createTime" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.createTime"></a>

```java
public java.lang.String getCreateTime();
```

- *Type:* java.lang.String

---

##### `dynamicParsing`<sup>Required</sup> <a name="dynamicParsing" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.dynamicParsing"></a>

```java
public ChronicleParserExtensionDynamicParsingOutputReference getDynamicParsing();
```

- *Type:* <a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference">ChronicleParserExtensionDynamicParsingOutputReference</a>

---

##### `extensionValidationReport`<sup>Required</sup> <a name="extensionValidationReport" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.extensionValidationReport"></a>

```java
public java.lang.String getExtensionValidationReport();
```

- *Type:* java.lang.String

---

##### `fieldExtractors`<sup>Required</sup> <a name="fieldExtractors" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.fieldExtractors"></a>

```java
public ChronicleParserExtensionFieldExtractorsOutputReference getFieldExtractors();
```

- *Type:* <a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference">ChronicleParserExtensionFieldExtractorsOutputReference</a>

---

##### `lastLiveTime`<sup>Required</sup> <a name="lastLiveTime" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.lastLiveTime"></a>

```java
public java.lang.String getLastLiveTime();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `parserextension`<sup>Required</sup> <a name="parserextension" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.parserextension"></a>

```java
public java.lang.String getParserextension();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `stateLastChangedTime`<sup>Required</sup> <a name="stateLastChangedTime" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.stateLastChangedTime"></a>

```java
public java.lang.String getStateLastChangedTime();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.timeouts"></a>

```java
public ChronicleParserExtensionTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference">ChronicleParserExtensionTimeoutsOutputReference</a>

---

##### `validationReport`<sup>Required</sup> <a name="validationReport" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.validationReport"></a>

```java
public java.lang.String getValidationReport();
```

- *Type:* java.lang.String

---

##### `cbnSnippetInput`<sup>Optional</sup> <a name="cbnSnippetInput" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.cbnSnippetInput"></a>

```java
public java.lang.String getCbnSnippetInput();
```

- *Type:* java.lang.String

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `dynamicParsingInput`<sup>Optional</sup> <a name="dynamicParsingInput" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.dynamicParsingInput"></a>

```java
public ChronicleParserExtensionDynamicParsing getDynamicParsingInput();
```

- *Type:* <a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsing">ChronicleParserExtensionDynamicParsing</a>

---

##### `fieldExtractorsInput`<sup>Optional</sup> <a name="fieldExtractorsInput" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.fieldExtractorsInput"></a>

```java
public ChronicleParserExtensionFieldExtractors getFieldExtractorsInput();
```

- *Type:* <a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractors">ChronicleParserExtensionFieldExtractors</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `instanceInput`<sup>Optional</sup> <a name="instanceInput" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.instanceInput"></a>

```java
public java.lang.String getInstanceInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `logInput`<sup>Optional</sup> <a name="logInput" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.logInput"></a>

```java
public java.lang.String getLogInput();
```

- *Type:* java.lang.String

---

##### `logTypeInput`<sup>Optional</sup> <a name="logTypeInput" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.logTypeInput"></a>

```java
public java.lang.String getLogTypeInput();
```

- *Type:* java.lang.String

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.timeoutsInput"></a>

```java
public IResolvable|ChronicleParserExtensionTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeouts">ChronicleParserExtensionTimeouts</a>

---

##### `validationSkippedInput`<sup>Optional</sup> <a name="validationSkippedInput" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.validationSkippedInput"></a>

```java
public java.lang.Boolean|IResolvable getValidationSkippedInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `cbnSnippet`<sup>Required</sup> <a name="cbnSnippet" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.cbnSnippet"></a>

```java
public java.lang.String getCbnSnippet();
```

- *Type:* java.lang.String

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.instance"></a>

```java
public java.lang.String getInstance();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `log`<sup>Required</sup> <a name="log" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.log"></a>

```java
public java.lang.String getLog();
```

- *Type:* java.lang.String

---

##### `logType`<sup>Required</sup> <a name="logType" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.logType"></a>

```java
public java.lang.String getLogType();
```

- *Type:* java.lang.String

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `validationSkipped`<sup>Required</sup> <a name="validationSkipped" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.validationSkipped"></a>

```java
public java.lang.Boolean|IResolvable getValidationSkipped();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtension.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ChronicleParserExtensionConfig <a name="ChronicleParserExtensionConfig" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.Initializer"></a>

```java
import io.cdktn.providers.google.chronicle_parser_extension.ChronicleParserExtensionConfig;

ChronicleParserExtensionConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .instance(java.lang.String)
    .location(java.lang.String)
    .logType(java.lang.String)
//  .cbnSnippet(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .dynamicParsing(ChronicleParserExtensionDynamicParsing)
//  .fieldExtractors(ChronicleParserExtensionFieldExtractors)
//  .id(java.lang.String)
//  .log(java.lang.String)
//  .project(java.lang.String)
//  .timeouts(ChronicleParserExtensionTimeouts)
//  .validationSkipped(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.instance">instance</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.logType">logType</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.cbnSnippet">cbnSnippet</a></code> | <code>java.lang.String</code> | Parser config could be a cbn snippet. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.dynamicParsing">dynamicParsing</a></code> | <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsing">ChronicleParserExtensionDynamicParsing</a></code> | dynamic_parsing block. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.fieldExtractors">fieldExtractors</a></code> | <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractors">ChronicleParserExtensionFieldExtractors</a></code> | field_extractors block. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/chronicle_parser_extension#id ChronicleParserExtension#id}. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.log">log</a></code> | <code>java.lang.String</code> | Raw log used to assist the user in creation of augmentation. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/chronicle_parser_extension#project ChronicleParserExtension#project}. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeouts">ChronicleParserExtensionTimeouts</a></code> | timeouts block. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.validationSkipped">validationSkipped</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Flag to bypass parser extension validation. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.instance"></a>

```java
public java.lang.String getInstance();
```

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/chronicle_parser_extension#instance ChronicleParserExtension#instance}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/chronicle_parser_extension#location ChronicleParserExtension#location}

---

##### `logType`<sup>Required</sup> <a name="logType" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.logType"></a>

```java
public java.lang.String getLogType();
```

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/chronicle_parser_extension#log_type ChronicleParserExtension#log_type}

---

##### `cbnSnippet`<sup>Optional</sup> <a name="cbnSnippet" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.cbnSnippet"></a>

```java
public java.lang.String getCbnSnippet();
```

- *Type:* java.lang.String

Parser config could be a cbn snippet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/chronicle_parser_extension#cbn_snippet ChronicleParserExtension#cbn_snippet}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/chronicle_parser_extension#deletion_policy ChronicleParserExtension#deletion_policy}

---

##### `dynamicParsing`<sup>Optional</sup> <a name="dynamicParsing" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.dynamicParsing"></a>

```java
public ChronicleParserExtensionDynamicParsing getDynamicParsing();
```

- *Type:* <a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsing">ChronicleParserExtensionDynamicParsing</a>

dynamic_parsing block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/chronicle_parser_extension#dynamic_parsing ChronicleParserExtension#dynamic_parsing}

---

##### `fieldExtractors`<sup>Optional</sup> <a name="fieldExtractors" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.fieldExtractors"></a>

```java
public ChronicleParserExtensionFieldExtractors getFieldExtractors();
```

- *Type:* <a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractors">ChronicleParserExtensionFieldExtractors</a>

field_extractors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/chronicle_parser_extension#field_extractors ChronicleParserExtension#field_extractors}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/chronicle_parser_extension#id ChronicleParserExtension#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `log`<sup>Optional</sup> <a name="log" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.log"></a>

```java
public java.lang.String getLog();
```

- *Type:* java.lang.String

Raw log used to assist the user in creation of augmentation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/chronicle_parser_extension#log ChronicleParserExtension#log}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/chronicle_parser_extension#project ChronicleParserExtension#project}.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.timeouts"></a>

```java
public ChronicleParserExtensionTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeouts">ChronicleParserExtensionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/chronicle_parser_extension#timeouts ChronicleParserExtension#timeouts}

---

##### `validationSkipped`<sup>Optional</sup> <a name="validationSkipped" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionConfig.property.validationSkipped"></a>

```java
public java.lang.Boolean|IResolvable getValidationSkipped();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Flag to bypass parser extension validation.

If enabled, the parser extension won't be rejected during the validation
phase and validation will be skipped.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/chronicle_parser_extension#validation_skipped ChronicleParserExtension#validation_skipped}

---

### ChronicleParserExtensionDynamicParsing <a name="ChronicleParserExtensionDynamicParsing" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsing"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsing.Initializer"></a>

```java
import io.cdktn.providers.google.chronicle_parser_extension.ChronicleParserExtensionDynamicParsing;

ChronicleParserExtensionDynamicParsing.builder()
//  .optedFields(IResolvable|java.util.List<ChronicleParserExtensionDynamicParsingOptedFields>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsing.property.optedFields">optedFields</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFields">ChronicleParserExtensionDynamicParsingOptedFields</a>></code> | opted_fields block. |

---

##### `optedFields`<sup>Optional</sup> <a name="optedFields" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsing.property.optedFields"></a>

```java
public IResolvable|java.util.List<ChronicleParserExtensionDynamicParsingOptedFields> getOptedFields();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFields">ChronicleParserExtensionDynamicParsingOptedFields</a>>

opted_fields block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/chronicle_parser_extension#opted_fields ChronicleParserExtension#opted_fields}

---

### ChronicleParserExtensionDynamicParsingOptedFields <a name="ChronicleParserExtensionDynamicParsingOptedFields" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFields.Initializer"></a>

```java
import io.cdktn.providers.google.chronicle_parser_extension.ChronicleParserExtensionDynamicParsingOptedFields;

ChronicleParserExtensionDynamicParsingOptedFields.builder()
//  .path(java.lang.String)
//  .sampleValue(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFields.property.path">path</a></code> | <code>java.lang.String</code> | Path of the log field. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFields.property.sampleValue">sampleValue</a></code> | <code>java.lang.String</code> | Sample value of the log field. |

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFields.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

Path of the log field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/chronicle_parser_extension#path ChronicleParserExtension#path}

---

##### `sampleValue`<sup>Optional</sup> <a name="sampleValue" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFields.property.sampleValue"></a>

```java
public java.lang.String getSampleValue();
```

- *Type:* java.lang.String

Sample value of the log field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/chronicle_parser_extension#sample_value ChronicleParserExtension#sample_value}

---

### ChronicleParserExtensionFieldExtractors <a name="ChronicleParserExtensionFieldExtractors" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractors.Initializer"></a>

```java
import io.cdktn.providers.google.chronicle_parser_extension.ChronicleParserExtensionFieldExtractors;

ChronicleParserExtensionFieldExtractors.builder()
//  .appendRepeatedFields(java.lang.Boolean|IResolvable)
//  .extractors(IResolvable|java.util.List<ChronicleParserExtensionFieldExtractorsExtractors>)
//  .logFormat(java.lang.String)
//  .preprocessConfig(ChronicleParserExtensionFieldExtractorsPreprocessConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractors.property.appendRepeatedFields">appendRepeatedFields</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether to append repeated fields or not. When false, repeated fields will be replaced. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractors.property.extractors">extractors</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractors">ChronicleParserExtensionFieldExtractorsExtractors</a>></code> | extractors block. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractors.property.logFormat">logFormat</a></code> | <code>java.lang.String</code> | Possible values: JSON CSV XML. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractors.property.preprocessConfig">preprocessConfig</a></code> | <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfig">ChronicleParserExtensionFieldExtractorsPreprocessConfig</a></code> | preprocess_config block. |

---

##### `appendRepeatedFields`<sup>Optional</sup> <a name="appendRepeatedFields" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractors.property.appendRepeatedFields"></a>

```java
public java.lang.Boolean|IResolvable getAppendRepeatedFields();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether to append repeated fields or not. When false, repeated fields will be replaced.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/chronicle_parser_extension#append_repeated_fields ChronicleParserExtension#append_repeated_fields}

---

##### `extractors`<sup>Optional</sup> <a name="extractors" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractors.property.extractors"></a>

```java
public IResolvable|java.util.List<ChronicleParserExtensionFieldExtractorsExtractors> getExtractors();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractors">ChronicleParserExtensionFieldExtractorsExtractors</a>>

extractors block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/chronicle_parser_extension#extractors ChronicleParserExtension#extractors}

---

##### `logFormat`<sup>Optional</sup> <a name="logFormat" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractors.property.logFormat"></a>

```java
public java.lang.String getLogFormat();
```

- *Type:* java.lang.String

Possible values: JSON CSV XML.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/chronicle_parser_extension#log_format ChronicleParserExtension#log_format}

---

##### `preprocessConfig`<sup>Optional</sup> <a name="preprocessConfig" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractors.property.preprocessConfig"></a>

```java
public ChronicleParserExtensionFieldExtractorsPreprocessConfig getPreprocessConfig();
```

- *Type:* <a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfig">ChronicleParserExtensionFieldExtractorsPreprocessConfig</a>

preprocess_config block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/chronicle_parser_extension#preprocess_config ChronicleParserExtension#preprocess_config}

---

### ChronicleParserExtensionFieldExtractorsExtractors <a name="ChronicleParserExtensionFieldExtractorsExtractors" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractors.Initializer"></a>

```java
import io.cdktn.providers.google.chronicle_parser_extension.ChronicleParserExtensionFieldExtractorsExtractors;

ChronicleParserExtensionFieldExtractorsExtractors.builder()
//  .destinationPath(java.lang.String)
//  .fieldPath(java.lang.String)
//  .preconditionOp(java.lang.String)
//  .preconditionPath(java.lang.String)
//  .preconditionValue(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractors.property.destinationPath">destinationPath</a></code> | <code>java.lang.String</code> | Path in generated event which is to be populated. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractors.property.fieldPath">fieldPath</a></code> | <code>java.lang.String</code> | Field path could be a json path, xml path or csv column name depending on log format. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractors.property.preconditionOp">preconditionOp</a></code> | <code>java.lang.String</code> | Operator used for precondition. Possible values: EQUALS NOT_EQUALS. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractors.property.preconditionPath">preconditionPath</a></code> | <code>java.lang.String</code> | Precondition path could be a json path, xml path or csv column name depending on log format. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractors.property.preconditionValue">preconditionValue</a></code> | <code>java.lang.String</code> | Precondition value. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractors.property.value">value</a></code> | <code>java.lang.String</code> | Value to be mapped to the destination path directly. |

---

##### `destinationPath`<sup>Optional</sup> <a name="destinationPath" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractors.property.destinationPath"></a>

```java
public java.lang.String getDestinationPath();
```

- *Type:* java.lang.String

Path in generated event which is to be populated.

This is required if the
FieldExtractor is used to specify the parser extension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/chronicle_parser_extension#destination_path ChronicleParserExtension#destination_path}

---

##### `fieldPath`<sup>Optional</sup> <a name="fieldPath" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractors.property.fieldPath"></a>

```java
public java.lang.String getFieldPath();
```

- *Type:* java.lang.String

Field path could be a json path, xml path or csv column name depending on log format.

It refers to a section or substring in raw log.
This is required if the FieldExtractor is used to specify the parser
extension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/chronicle_parser_extension#field_path ChronicleParserExtension#field_path}

---

##### `preconditionOp`<sup>Optional</sup> <a name="preconditionOp" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractors.property.preconditionOp"></a>

```java
public java.lang.String getPreconditionOp();
```

- *Type:* java.lang.String

Operator used for precondition. Possible values: EQUALS NOT_EQUALS.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/chronicle_parser_extension#precondition_op ChronicleParserExtension#precondition_op}

---

##### `preconditionPath`<sup>Optional</sup> <a name="preconditionPath" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractors.property.preconditionPath"></a>

```java
public java.lang.String getPreconditionPath();
```

- *Type:* java.lang.String

Precondition path could be a json path, xml path or csv column name depending on log format.

It refers to a section or substring in raw log.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/chronicle_parser_extension#precondition_path ChronicleParserExtension#precondition_path}

---

##### `preconditionValue`<sup>Optional</sup> <a name="preconditionValue" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractors.property.preconditionValue"></a>

```java
public java.lang.String getPreconditionValue();
```

- *Type:* java.lang.String

Precondition value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/chronicle_parser_extension#precondition_value ChronicleParserExtension#precondition_value}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractors.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Value to be mapped to the destination path directly.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/chronicle_parser_extension#value ChronicleParserExtension#value}

---

### ChronicleParserExtensionFieldExtractorsPreprocessConfig <a name="ChronicleParserExtensionFieldExtractorsPreprocessConfig" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfig.Initializer"></a>

```java
import io.cdktn.providers.google.chronicle_parser_extension.ChronicleParserExtensionFieldExtractorsPreprocessConfig;

ChronicleParserExtensionFieldExtractorsPreprocessConfig.builder()
//  .grokRegex(java.lang.String)
//  .target(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfig.property.grokRegex">grokRegex</a></code> | <code>java.lang.String</code> | GROK Regex to extract the structured part of the log. syntax documentation: www.elastic.co/guide/en/logstash/current/plugins-filters-grok.html. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfig.property.target">target</a></code> | <code>java.lang.String</code> | Target field name for the structured part of the log. This should match a SEMANTIC identifier from the grok expression. |

---

##### `grokRegex`<sup>Optional</sup> <a name="grokRegex" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfig.property.grokRegex"></a>

```java
public java.lang.String getGrokRegex();
```

- *Type:* java.lang.String

GROK Regex to extract the structured part of the log. syntax documentation: www.elastic.co/guide/en/logstash/current/plugins-filters-grok.html.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/chronicle_parser_extension#grok_regex ChronicleParserExtension#grok_regex}

---

##### `target`<sup>Optional</sup> <a name="target" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfig.property.target"></a>

```java
public java.lang.String getTarget();
```

- *Type:* java.lang.String

Target field name for the structured part of the log. This should match a SEMANTIC identifier from the grok expression.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/chronicle_parser_extension#target ChronicleParserExtension#target}

---

### ChronicleParserExtensionTimeouts <a name="ChronicleParserExtensionTimeouts" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google.chronicle_parser_extension.ChronicleParserExtensionTimeouts;

ChronicleParserExtensionTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/chronicle_parser_extension#create ChronicleParserExtension#create}. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/chronicle_parser_extension#delete ChronicleParserExtension#delete}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/chronicle_parser_extension#create ChronicleParserExtension#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/resources/chronicle_parser_extension#delete ChronicleParserExtension#delete}.

---

## Classes <a name="Classes" id="Classes"></a>

### ChronicleParserExtensionDynamicParsingOptedFieldsList <a name="ChronicleParserExtensionDynamicParsingOptedFieldsList" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsList.Initializer"></a>

```java
import io.cdktn.providers.google.chronicle_parser_extension.ChronicleParserExtensionDynamicParsingOptedFieldsList;

new ChronicleParserExtensionDynamicParsingOptedFieldsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsList.get"></a>

```java
public ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFields">ChronicleParserExtensionDynamicParsingOptedFields</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ChronicleParserExtensionDynamicParsingOptedFields> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFields">ChronicleParserExtensionDynamicParsingOptedFields</a>>

---


### ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference <a name="ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.chronicle_parser_extension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference;

new ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.resetSampleValue">resetSampleValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPath` <a name="resetPath" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.resetPath"></a>

```java
public void resetPath()
```

##### `resetSampleValue` <a name="resetSampleValue" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.resetSampleValue"></a>

```java
public void resetSampleValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.property.sampleValueInput">sampleValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.property.sampleValue">sampleValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFields">ChronicleParserExtensionDynamicParsingOptedFields</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `sampleValueInput`<sup>Optional</sup> <a name="sampleValueInput" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.property.sampleValueInput"></a>

```java
public java.lang.String getSampleValueInput();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `sampleValue`<sup>Required</sup> <a name="sampleValue" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.property.sampleValue"></a>

```java
public java.lang.String getSampleValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsOutputReference.property.internalValue"></a>

```java
public IResolvable|ChronicleParserExtensionDynamicParsingOptedFields getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFields">ChronicleParserExtensionDynamicParsingOptedFields</a>

---


### ChronicleParserExtensionDynamicParsingOutputReference <a name="ChronicleParserExtensionDynamicParsingOutputReference" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.chronicle_parser_extension.ChronicleParserExtensionDynamicParsingOutputReference;

new ChronicleParserExtensionDynamicParsingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.putOptedFields">putOptedFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.resetOptedFields">resetOptedFields</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOptedFields` <a name="putOptedFields" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.putOptedFields"></a>

```java
public void putOptedFields(IResolvable|java.util.List<ChronicleParserExtensionDynamicParsingOptedFields> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.putOptedFields.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFields">ChronicleParserExtensionDynamicParsingOptedFields</a>>

---

##### `resetOptedFields` <a name="resetOptedFields" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.resetOptedFields"></a>

```java
public void resetOptedFields()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.property.optedFields">optedFields</a></code> | <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsList">ChronicleParserExtensionDynamicParsingOptedFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.property.optedFieldsInput">optedFieldsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFields">ChronicleParserExtensionDynamicParsingOptedFields</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsing">ChronicleParserExtensionDynamicParsing</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `optedFields`<sup>Required</sup> <a name="optedFields" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.property.optedFields"></a>

```java
public ChronicleParserExtensionDynamicParsingOptedFieldsList getOptedFields();
```

- *Type:* <a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFieldsList">ChronicleParserExtensionDynamicParsingOptedFieldsList</a>

---

##### `optedFieldsInput`<sup>Optional</sup> <a name="optedFieldsInput" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.property.optedFieldsInput"></a>

```java
public IResolvable|java.util.List<ChronicleParserExtensionDynamicParsingOptedFields> getOptedFieldsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOptedFields">ChronicleParserExtensionDynamicParsingOptedFields</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsingOutputReference.property.internalValue"></a>

```java
public ChronicleParserExtensionDynamicParsing getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionDynamicParsing">ChronicleParserExtensionDynamicParsing</a>

---


### ChronicleParserExtensionFieldExtractorsExtractorsList <a name="ChronicleParserExtensionFieldExtractorsExtractorsList" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsList.Initializer"></a>

```java
import io.cdktn.providers.google.chronicle_parser_extension.ChronicleParserExtensionFieldExtractorsExtractorsList;

new ChronicleParserExtensionFieldExtractorsExtractorsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsList.get"></a>

```java
public ChronicleParserExtensionFieldExtractorsExtractorsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractors">ChronicleParserExtensionFieldExtractorsExtractors</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ChronicleParserExtensionFieldExtractorsExtractors> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractors">ChronicleParserExtensionFieldExtractorsExtractors</a>>

---


### ChronicleParserExtensionFieldExtractorsExtractorsOutputReference <a name="ChronicleParserExtensionFieldExtractorsExtractorsOutputReference" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.chronicle_parser_extension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference;

new ChronicleParserExtensionFieldExtractorsExtractorsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.resetDestinationPath">resetDestinationPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.resetFieldPath">resetFieldPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.resetPreconditionOp">resetPreconditionOp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.resetPreconditionPath">resetPreconditionPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.resetPreconditionValue">resetPreconditionValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDestinationPath` <a name="resetDestinationPath" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.resetDestinationPath"></a>

```java
public void resetDestinationPath()
```

##### `resetFieldPath` <a name="resetFieldPath" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.resetFieldPath"></a>

```java
public void resetFieldPath()
```

##### `resetPreconditionOp` <a name="resetPreconditionOp" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.resetPreconditionOp"></a>

```java
public void resetPreconditionOp()
```

##### `resetPreconditionPath` <a name="resetPreconditionPath" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.resetPreconditionPath"></a>

```java
public void resetPreconditionPath()
```

##### `resetPreconditionValue` <a name="resetPreconditionValue" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.resetPreconditionValue"></a>

```java
public void resetPreconditionValue()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.destinationPathInput">destinationPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.fieldPathInput">fieldPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.preconditionOpInput">preconditionOpInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.preconditionPathInput">preconditionPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.preconditionValueInput">preconditionValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.destinationPath">destinationPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.fieldPath">fieldPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.preconditionOp">preconditionOp</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.preconditionPath">preconditionPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.preconditionValue">preconditionValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractors">ChronicleParserExtensionFieldExtractorsExtractors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `destinationPathInput`<sup>Optional</sup> <a name="destinationPathInput" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.destinationPathInput"></a>

```java
public java.lang.String getDestinationPathInput();
```

- *Type:* java.lang.String

---

##### `fieldPathInput`<sup>Optional</sup> <a name="fieldPathInput" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.fieldPathInput"></a>

```java
public java.lang.String getFieldPathInput();
```

- *Type:* java.lang.String

---

##### `preconditionOpInput`<sup>Optional</sup> <a name="preconditionOpInput" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.preconditionOpInput"></a>

```java
public java.lang.String getPreconditionOpInput();
```

- *Type:* java.lang.String

---

##### `preconditionPathInput`<sup>Optional</sup> <a name="preconditionPathInput" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.preconditionPathInput"></a>

```java
public java.lang.String getPreconditionPathInput();
```

- *Type:* java.lang.String

---

##### `preconditionValueInput`<sup>Optional</sup> <a name="preconditionValueInput" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.preconditionValueInput"></a>

```java
public java.lang.String getPreconditionValueInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `destinationPath`<sup>Required</sup> <a name="destinationPath" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.destinationPath"></a>

```java
public java.lang.String getDestinationPath();
```

- *Type:* java.lang.String

---

##### `fieldPath`<sup>Required</sup> <a name="fieldPath" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.fieldPath"></a>

```java
public java.lang.String getFieldPath();
```

- *Type:* java.lang.String

---

##### `preconditionOp`<sup>Required</sup> <a name="preconditionOp" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.preconditionOp"></a>

```java
public java.lang.String getPreconditionOp();
```

- *Type:* java.lang.String

---

##### `preconditionPath`<sup>Required</sup> <a name="preconditionPath" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.preconditionPath"></a>

```java
public java.lang.String getPreconditionPath();
```

- *Type:* java.lang.String

---

##### `preconditionValue`<sup>Required</sup> <a name="preconditionValue" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.preconditionValue"></a>

```java
public java.lang.String getPreconditionValue();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsOutputReference.property.internalValue"></a>

```java
public IResolvable|ChronicleParserExtensionFieldExtractorsExtractors getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractors">ChronicleParserExtensionFieldExtractorsExtractors</a>

---


### ChronicleParserExtensionFieldExtractorsOutputReference <a name="ChronicleParserExtensionFieldExtractorsOutputReference" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.chronicle_parser_extension.ChronicleParserExtensionFieldExtractorsOutputReference;

new ChronicleParserExtensionFieldExtractorsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.putExtractors">putExtractors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.putPreprocessConfig">putPreprocessConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.resetAppendRepeatedFields">resetAppendRepeatedFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.resetExtractors">resetExtractors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.resetLogFormat">resetLogFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.resetPreprocessConfig">resetPreprocessConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExtractors` <a name="putExtractors" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.putExtractors"></a>

```java
public void putExtractors(IResolvable|java.util.List<ChronicleParserExtensionFieldExtractorsExtractors> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.putExtractors.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractors">ChronicleParserExtensionFieldExtractorsExtractors</a>>

---

##### `putPreprocessConfig` <a name="putPreprocessConfig" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.putPreprocessConfig"></a>

```java
public void putPreprocessConfig(ChronicleParserExtensionFieldExtractorsPreprocessConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.putPreprocessConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfig">ChronicleParserExtensionFieldExtractorsPreprocessConfig</a>

---

##### `resetAppendRepeatedFields` <a name="resetAppendRepeatedFields" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.resetAppendRepeatedFields"></a>

```java
public void resetAppendRepeatedFields()
```

##### `resetExtractors` <a name="resetExtractors" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.resetExtractors"></a>

```java
public void resetExtractors()
```

##### `resetLogFormat` <a name="resetLogFormat" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.resetLogFormat"></a>

```java
public void resetLogFormat()
```

##### `resetPreprocessConfig` <a name="resetPreprocessConfig" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.resetPreprocessConfig"></a>

```java
public void resetPreprocessConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.property.extractors">extractors</a></code> | <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsList">ChronicleParserExtensionFieldExtractorsExtractorsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.property.preprocessConfig">preprocessConfig</a></code> | <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference">ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.property.transformedCbnSnippet">transformedCbnSnippet</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.property.appendRepeatedFieldsInput">appendRepeatedFieldsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.property.extractorsInput">extractorsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractors">ChronicleParserExtensionFieldExtractorsExtractors</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.property.logFormatInput">logFormatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.property.preprocessConfigInput">preprocessConfigInput</a></code> | <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfig">ChronicleParserExtensionFieldExtractorsPreprocessConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.property.appendRepeatedFields">appendRepeatedFields</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.property.logFormat">logFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractors">ChronicleParserExtensionFieldExtractors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `extractors`<sup>Required</sup> <a name="extractors" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.property.extractors"></a>

```java
public ChronicleParserExtensionFieldExtractorsExtractorsList getExtractors();
```

- *Type:* <a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractorsList">ChronicleParserExtensionFieldExtractorsExtractorsList</a>

---

##### `preprocessConfig`<sup>Required</sup> <a name="preprocessConfig" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.property.preprocessConfig"></a>

```java
public ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference getPreprocessConfig();
```

- *Type:* <a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference">ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference</a>

---

##### `transformedCbnSnippet`<sup>Required</sup> <a name="transformedCbnSnippet" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.property.transformedCbnSnippet"></a>

```java
public java.lang.String getTransformedCbnSnippet();
```

- *Type:* java.lang.String

---

##### `appendRepeatedFieldsInput`<sup>Optional</sup> <a name="appendRepeatedFieldsInput" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.property.appendRepeatedFieldsInput"></a>

```java
public java.lang.Boolean|IResolvable getAppendRepeatedFieldsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `extractorsInput`<sup>Optional</sup> <a name="extractorsInput" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.property.extractorsInput"></a>

```java
public IResolvable|java.util.List<ChronicleParserExtensionFieldExtractorsExtractors> getExtractorsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsExtractors">ChronicleParserExtensionFieldExtractorsExtractors</a>>

---

##### `logFormatInput`<sup>Optional</sup> <a name="logFormatInput" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.property.logFormatInput"></a>

```java
public java.lang.String getLogFormatInput();
```

- *Type:* java.lang.String

---

##### `preprocessConfigInput`<sup>Optional</sup> <a name="preprocessConfigInput" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.property.preprocessConfigInput"></a>

```java
public ChronicleParserExtensionFieldExtractorsPreprocessConfig getPreprocessConfigInput();
```

- *Type:* <a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfig">ChronicleParserExtensionFieldExtractorsPreprocessConfig</a>

---

##### `appendRepeatedFields`<sup>Required</sup> <a name="appendRepeatedFields" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.property.appendRepeatedFields"></a>

```java
public java.lang.Boolean|IResolvable getAppendRepeatedFields();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `logFormat`<sup>Required</sup> <a name="logFormat" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.property.logFormat"></a>

```java
public java.lang.String getLogFormat();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsOutputReference.property.internalValue"></a>

```java
public ChronicleParserExtensionFieldExtractors getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractors">ChronicleParserExtensionFieldExtractors</a>

---


### ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference <a name="ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.chronicle_parser_extension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference;

new ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.resetGrokRegex">resetGrokRegex</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.resetTarget">resetTarget</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGrokRegex` <a name="resetGrokRegex" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.resetGrokRegex"></a>

```java
public void resetGrokRegex()
```

##### `resetTarget` <a name="resetTarget" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.resetTarget"></a>

```java
public void resetTarget()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.property.grokRegexInput">grokRegexInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.property.targetInput">targetInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.property.grokRegex">grokRegex</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.property.target">target</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfig">ChronicleParserExtensionFieldExtractorsPreprocessConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `grokRegexInput`<sup>Optional</sup> <a name="grokRegexInput" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.property.grokRegexInput"></a>

```java
public java.lang.String getGrokRegexInput();
```

- *Type:* java.lang.String

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.property.targetInput"></a>

```java
public java.lang.String getTargetInput();
```

- *Type:* java.lang.String

---

##### `grokRegex`<sup>Required</sup> <a name="grokRegex" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.property.grokRegex"></a>

```java
public java.lang.String getGrokRegex();
```

- *Type:* java.lang.String

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.property.target"></a>

```java
public java.lang.String getTarget();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfigOutputReference.property.internalValue"></a>

```java
public ChronicleParserExtensionFieldExtractorsPreprocessConfig getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionFieldExtractorsPreprocessConfig">ChronicleParserExtensionFieldExtractorsPreprocessConfig</a>

---


### ChronicleParserExtensionTimeoutsOutputReference <a name="ChronicleParserExtensionTimeoutsOutputReference" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.chronicle_parser_extension.ChronicleParserExtensionTimeoutsOutputReference;

new ChronicleParserExtensionTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeouts">ChronicleParserExtensionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|ChronicleParserExtensionTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.chronicleParserExtension.ChronicleParserExtensionTimeouts">ChronicleParserExtensionTimeouts</a>

---



