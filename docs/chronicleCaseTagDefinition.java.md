# `chronicleCaseTagDefinition` Submodule <a name="`chronicleCaseTagDefinition` Submodule" id="@cdktn/provider-google.chronicleCaseTagDefinition"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ChronicleCaseTagDefinition <a name="ChronicleCaseTagDefinition" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/chronicle_case_tag_definition google_chronicle_case_tag_definition}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.Initializer"></a>

```java
import io.cdktn.providers.google.chronicle_case_tag_definition.ChronicleCaseTagDefinition;

ChronicleCaseTagDefinition.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .canBeCaseTitle(java.lang.Boolean|IResolvable)
    .comparisonType(java.lang.String)
    .displayName(java.lang.String)
    .instance(java.lang.String)
    .location(java.lang.String)
    .matchCriteria(java.lang.String)
    .priority(java.lang.Number)
    .value(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .propertyName(java.lang.String)
//  .timeouts(ChronicleCaseTagDefinitionTimeouts)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.Initializer.parameter.canBeCaseTitle">canBeCaseTitle</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | When checked, the tag will be assigned as the title of the case if it meets the conditions. |
| <code><a href="#@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.Initializer.parameter.comparisonType">comparisonType</a></code> | <code>java.lang.String</code> | The type of comparison to be used when comparing the value to the case. |
| <code><a href="#@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | This is the name of the tag that will be applied to the case. |
| <code><a href="#@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.Initializer.parameter.instance">instance</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.Initializer.parameter.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.Initializer.parameter.matchCriteria">matchCriteria</a></code> | <code>java.lang.String</code> | The criteria to match the case against. Possible values: ["BY_VENDOR", "BY_PRODUCT", "BY_RULE_GENERATOR", "BY_ENTITY_PROPERTY_NAME", "DATA_DRIVEN", "SYSTEM"]. |
| <code><a href="#@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.Initializer.parameter.priority">priority</a></code> | <code>java.lang.Number</code> | Note that Google Security Operations merges priority with other alerts and entities and events so that the priority here is not absolute. |
| <code><a href="#@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.Initializer.parameter.value">value</a></code> | <code>java.lang.String</code> | Specific value to search in case - in addition to SearchIn property. |
| <code><a href="#@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.Initializer.parameter.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/chronicle_case_tag_definition#id ChronicleCaseTagDefinition#id}. |
| <code><a href="#@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.Initializer.parameter.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/chronicle_case_tag_definition#project ChronicleCaseTagDefinition#project}. |
| <code><a href="#@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.Initializer.parameter.propertyName">propertyName</a></code> | <code>java.lang.String</code> | Specific Entity property name to search in case. This is relevant only when a SearchIn of type BY_ENTITY_PROPERTY_NAME was chosen. |
| <code><a href="#@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinitionTimeouts">ChronicleCaseTagDefinitionTimeouts</a></code> | timeouts block. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `canBeCaseTitle`<sup>Required</sup> <a name="canBeCaseTitle" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.Initializer.parameter.canBeCaseTitle"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

When checked, the tag will be assigned as the title of the case if it meets the conditions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/chronicle_case_tag_definition#can_be_case_title ChronicleCaseTagDefinition#can_be_case_title}

---

##### `comparisonType`<sup>Required</sup> <a name="comparisonType" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.Initializer.parameter.comparisonType"></a>

- *Type:* java.lang.String

The type of comparison to be used when comparing the value to the case.

Possible values: ["EXACT", "START_WITH", "CONTAIN", "ENDS_WITH"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/chronicle_case_tag_definition#comparison_type ChronicleCaseTagDefinition#comparison_type}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

This is the name of the tag that will be applied to the case.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/chronicle_case_tag_definition#display_name ChronicleCaseTagDefinition#display_name}

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.Initializer.parameter.instance"></a>

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/chronicle_case_tag_definition#instance ChronicleCaseTagDefinition#instance}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.Initializer.parameter.location"></a>

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/chronicle_case_tag_definition#location ChronicleCaseTagDefinition#location}

---

##### `matchCriteria`<sup>Required</sup> <a name="matchCriteria" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.Initializer.parameter.matchCriteria"></a>

- *Type:* java.lang.String

The criteria to match the case against. Possible values: ["BY_VENDOR", "BY_PRODUCT", "BY_RULE_GENERATOR", "BY_ENTITY_PROPERTY_NAME", "DATA_DRIVEN", "SYSTEM"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/chronicle_case_tag_definition#match_criteria ChronicleCaseTagDefinition#match_criteria}

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.Initializer.parameter.priority"></a>

- *Type:* java.lang.Number

Note that Google Security Operations merges priority with other alerts and entities and events so that the priority here is not absolute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/chronicle_case_tag_definition#priority ChronicleCaseTagDefinition#priority}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.Initializer.parameter.value"></a>

- *Type:* java.lang.String

Specific value to search in case - in addition to SearchIn property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/chronicle_case_tag_definition#value ChronicleCaseTagDefinition#value}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.Initializer.parameter.deletionPolicy"></a>

- *Type:* java.lang.String

Whether Terraform will be prevented from destroying the instance.

Defaults to "DELETE".
When a 'terraform destroy' or 'terraform apply' would delete the instance,
the command will fail if this field is set to "PREVENT" in Terraform state.
When set to "ABANDON", the command will remove the resource from Terraform
management without updating or deleting the resource in the API.
When set to "DELETE", deleting the resource is allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/chronicle_case_tag_definition#deletion_policy ChronicleCaseTagDefinition#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/chronicle_case_tag_definition#id ChronicleCaseTagDefinition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.Initializer.parameter.project"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/chronicle_case_tag_definition#project ChronicleCaseTagDefinition#project}.

---

##### `propertyName`<sup>Optional</sup> <a name="propertyName" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.Initializer.parameter.propertyName"></a>

- *Type:* java.lang.String

Specific Entity property name to search in case. This is relevant only when a SearchIn of type BY_ENTITY_PROPERTY_NAME was chosen.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/chronicle_case_tag_definition#property_name ChronicleCaseTagDefinition#property_name}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinitionTimeouts">ChronicleCaseTagDefinitionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/chronicle_case_tag_definition#timeouts ChronicleCaseTagDefinition#timeouts}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.putTimeouts">putTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.resetDeletionPolicy">resetDeletionPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.resetPropertyName">resetPropertyName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.resetTimeouts">resetTimeouts</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTimeouts` <a name="putTimeouts" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.putTimeouts"></a>

```java
public void putTimeouts(ChronicleCaseTagDefinitionTimeouts value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.putTimeouts.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinitionTimeouts">ChronicleCaseTagDefinitionTimeouts</a>

---

##### `resetDeletionPolicy` <a name="resetDeletionPolicy" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.resetDeletionPolicy"></a>

```java
public void resetDeletionPolicy()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.resetId"></a>

```java
public void resetId()
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.resetProject"></a>

```java
public void resetProject()
```

##### `resetPropertyName` <a name="resetPropertyName" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.resetPropertyName"></a>

```java
public void resetPropertyName()
```

##### `resetTimeouts` <a name="resetTimeouts" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.resetTimeouts"></a>

```java
public void resetTimeouts()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ChronicleCaseTagDefinition resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.isConstruct"></a>

```java
import io.cdktn.providers.google.chronicle_case_tag_definition.ChronicleCaseTagDefinition;

ChronicleCaseTagDefinition.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.isTerraformElement"></a>

```java
import io.cdktn.providers.google.chronicle_case_tag_definition.ChronicleCaseTagDefinition;

ChronicleCaseTagDefinition.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.isTerraformResource"></a>

```java
import io.cdktn.providers.google.chronicle_case_tag_definition.ChronicleCaseTagDefinition;

ChronicleCaseTagDefinition.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.generateConfigForImport"></a>

```java
import io.cdktn.providers.google.chronicle_case_tag_definition.ChronicleCaseTagDefinition;

ChronicleCaseTagDefinition.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ChronicleCaseTagDefinition.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ChronicleCaseTagDefinition resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ChronicleCaseTagDefinition to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ChronicleCaseTagDefinition that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/chronicle_case_tag_definition#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ChronicleCaseTagDefinition to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.property.caseTagDefinitionId">caseTagDefinitionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinitionTimeoutsOutputReference">ChronicleCaseTagDefinitionTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.property.canBeCaseTitleInput">canBeCaseTitleInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.property.comparisonTypeInput">comparisonTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.property.deletionPolicyInput">deletionPolicyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.property.instanceInput">instanceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.property.locationInput">locationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.property.matchCriteriaInput">matchCriteriaInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.property.priorityInput">priorityInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.property.projectInput">projectInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.property.propertyNameInput">propertyNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.property.timeoutsInput">timeoutsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinitionTimeouts">ChronicleCaseTagDefinitionTimeouts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.property.canBeCaseTitle">canBeCaseTitle</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.property.comparisonType">comparisonType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.property.instance">instance</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.property.location">location</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.property.matchCriteria">matchCriteria</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.property.priority">priority</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.property.project">project</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.property.propertyName">propertyName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `caseTagDefinitionId`<sup>Required</sup> <a name="caseTagDefinitionId" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.property.caseTagDefinitionId"></a>

```java
public java.lang.String getCaseTagDefinitionId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.property.timeouts"></a>

```java
public ChronicleCaseTagDefinitionTimeoutsOutputReference getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinitionTimeoutsOutputReference">ChronicleCaseTagDefinitionTimeoutsOutputReference</a>

---

##### `canBeCaseTitleInput`<sup>Optional</sup> <a name="canBeCaseTitleInput" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.property.canBeCaseTitleInput"></a>

```java
public java.lang.Boolean|IResolvable getCanBeCaseTitleInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `comparisonTypeInput`<sup>Optional</sup> <a name="comparisonTypeInput" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.property.comparisonTypeInput"></a>

```java
public java.lang.String getComparisonTypeInput();
```

- *Type:* java.lang.String

---

##### `deletionPolicyInput`<sup>Optional</sup> <a name="deletionPolicyInput" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.property.deletionPolicyInput"></a>

```java
public java.lang.String getDeletionPolicyInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `instanceInput`<sup>Optional</sup> <a name="instanceInput" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.property.instanceInput"></a>

```java
public java.lang.String getInstanceInput();
```

- *Type:* java.lang.String

---

##### `locationInput`<sup>Optional</sup> <a name="locationInput" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.property.locationInput"></a>

```java
public java.lang.String getLocationInput();
```

- *Type:* java.lang.String

---

##### `matchCriteriaInput`<sup>Optional</sup> <a name="matchCriteriaInput" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.property.matchCriteriaInput"></a>

```java
public java.lang.String getMatchCriteriaInput();
```

- *Type:* java.lang.String

---

##### `priorityInput`<sup>Optional</sup> <a name="priorityInput" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.property.priorityInput"></a>

```java
public java.lang.Number getPriorityInput();
```

- *Type:* java.lang.Number

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.property.projectInput"></a>

```java
public java.lang.String getProjectInput();
```

- *Type:* java.lang.String

---

##### `propertyNameInput`<sup>Optional</sup> <a name="propertyNameInput" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.property.propertyNameInput"></a>

```java
public java.lang.String getPropertyNameInput();
```

- *Type:* java.lang.String

---

##### `timeoutsInput`<sup>Optional</sup> <a name="timeoutsInput" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.property.timeoutsInput"></a>

```java
public IResolvable|ChronicleCaseTagDefinitionTimeouts getTimeoutsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinitionTimeouts">ChronicleCaseTagDefinitionTimeouts</a>

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `canBeCaseTitle`<sup>Required</sup> <a name="canBeCaseTitle" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.property.canBeCaseTitle"></a>

```java
public java.lang.Boolean|IResolvable getCanBeCaseTitle();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `comparisonType`<sup>Required</sup> <a name="comparisonType" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.property.comparisonType"></a>

```java
public java.lang.String getComparisonType();
```

- *Type:* java.lang.String

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.property.deletionPolicy"></a>

```java
public java.lang.String getDeletionPolicy();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.property.instance"></a>

```java
public java.lang.String getInstance();
```

- *Type:* java.lang.String

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

---

##### `matchCriteria`<sup>Required</sup> <a name="matchCriteria" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.property.matchCriteria"></a>

```java
public java.lang.String getMatchCriteria();
```

- *Type:* java.lang.String

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

---

##### `propertyName`<sup>Required</sup> <a name="propertyName" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.property.propertyName"></a>

```java
public java.lang.String getPropertyName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinition.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ChronicleCaseTagDefinitionConfig <a name="ChronicleCaseTagDefinitionConfig" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinitionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinitionConfig.Initializer"></a>

```java
import io.cdktn.providers.google.chronicle_case_tag_definition.ChronicleCaseTagDefinitionConfig;

ChronicleCaseTagDefinitionConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .canBeCaseTitle(java.lang.Boolean|IResolvable)
    .comparisonType(java.lang.String)
    .displayName(java.lang.String)
    .instance(java.lang.String)
    .location(java.lang.String)
    .matchCriteria(java.lang.String)
    .priority(java.lang.Number)
    .value(java.lang.String)
//  .deletionPolicy(java.lang.String)
//  .id(java.lang.String)
//  .project(java.lang.String)
//  .propertyName(java.lang.String)
//  .timeouts(ChronicleCaseTagDefinitionTimeouts)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinitionConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinitionConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinitionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinitionConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinitionConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinitionConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinitionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinitionConfig.property.canBeCaseTitle">canBeCaseTitle</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | When checked, the tag will be assigned as the title of the case if it meets the conditions. |
| <code><a href="#@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinitionConfig.property.comparisonType">comparisonType</a></code> | <code>java.lang.String</code> | The type of comparison to be used when comparing the value to the case. |
| <code><a href="#@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinitionConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | This is the name of the tag that will be applied to the case. |
| <code><a href="#@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinitionConfig.property.instance">instance</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinitionConfig.property.location">location</a></code> | <code>java.lang.String</code> | Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122. |
| <code><a href="#@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinitionConfig.property.matchCriteria">matchCriteria</a></code> | <code>java.lang.String</code> | The criteria to match the case against. Possible values: ["BY_VENDOR", "BY_PRODUCT", "BY_RULE_GENERATOR", "BY_ENTITY_PROPERTY_NAME", "DATA_DRIVEN", "SYSTEM"]. |
| <code><a href="#@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinitionConfig.property.priority">priority</a></code> | <code>java.lang.Number</code> | Note that Google Security Operations merges priority with other alerts and entities and events so that the priority here is not absolute. |
| <code><a href="#@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinitionConfig.property.value">value</a></code> | <code>java.lang.String</code> | Specific value to search in case - in addition to SearchIn property. |
| <code><a href="#@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinitionConfig.property.deletionPolicy">deletionPolicy</a></code> | <code>java.lang.String</code> | Whether Terraform will be prevented from destroying the instance. |
| <code><a href="#@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinitionConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/chronicle_case_tag_definition#id ChronicleCaseTagDefinition#id}. |
| <code><a href="#@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinitionConfig.property.project">project</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/chronicle_case_tag_definition#project ChronicleCaseTagDefinition#project}. |
| <code><a href="#@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinitionConfig.property.propertyName">propertyName</a></code> | <code>java.lang.String</code> | Specific Entity property name to search in case. This is relevant only when a SearchIn of type BY_ENTITY_PROPERTY_NAME was chosen. |
| <code><a href="#@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinitionConfig.property.timeouts">timeouts</a></code> | <code><a href="#@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinitionTimeouts">ChronicleCaseTagDefinitionTimeouts</a></code> | timeouts block. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinitionConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinitionConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinitionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinitionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinitionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinitionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinitionConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `canBeCaseTitle`<sup>Required</sup> <a name="canBeCaseTitle" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinitionConfig.property.canBeCaseTitle"></a>

```java
public java.lang.Boolean|IResolvable getCanBeCaseTitle();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

When checked, the tag will be assigned as the title of the case if it meets the conditions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/chronicle_case_tag_definition#can_be_case_title ChronicleCaseTagDefinition#can_be_case_title}

---

##### `comparisonType`<sup>Required</sup> <a name="comparisonType" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinitionConfig.property.comparisonType"></a>

```java
public java.lang.String getComparisonType();
```

- *Type:* java.lang.String

The type of comparison to be used when comparing the value to the case.

Possible values: ["EXACT", "START_WITH", "CONTAIN", "ENDS_WITH"]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/chronicle_case_tag_definition#comparison_type ChronicleCaseTagDefinition#comparison_type}

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinitionConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

This is the name of the tag that will be applied to the case.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/chronicle_case_tag_definition#display_name ChronicleCaseTagDefinition#display_name}

---

##### `instance`<sup>Required</sup> <a name="instance" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinitionConfig.property.instance"></a>

```java
public java.lang.String getInstance();
```

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/chronicle_case_tag_definition#instance ChronicleCaseTagDefinition#instance}

---

##### `location`<sup>Required</sup> <a name="location" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinitionConfig.property.location"></a>

```java
public java.lang.String getLocation();
```

- *Type:* java.lang.String

Resource ID segment making up resource 'name'. It identifies the resource within its parent collection as described in https://google.aip.dev/122.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/chronicle_case_tag_definition#location ChronicleCaseTagDefinition#location}

---

##### `matchCriteria`<sup>Required</sup> <a name="matchCriteria" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinitionConfig.property.matchCriteria"></a>

```java
public java.lang.String getMatchCriteria();
```

- *Type:* java.lang.String

The criteria to match the case against. Possible values: ["BY_VENDOR", "BY_PRODUCT", "BY_RULE_GENERATOR", "BY_ENTITY_PROPERTY_NAME", "DATA_DRIVEN", "SYSTEM"].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/chronicle_case_tag_definition#match_criteria ChronicleCaseTagDefinition#match_criteria}

---

##### `priority`<sup>Required</sup> <a name="priority" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinitionConfig.property.priority"></a>

```java
public java.lang.Number getPriority();
```

- *Type:* java.lang.Number

Note that Google Security Operations merges priority with other alerts and entities and events so that the priority here is not absolute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/chronicle_case_tag_definition#priority ChronicleCaseTagDefinition#priority}

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinitionConfig.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Specific value to search in case - in addition to SearchIn property.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/chronicle_case_tag_definition#value ChronicleCaseTagDefinition#value}

---

##### `deletionPolicy`<sup>Optional</sup> <a name="deletionPolicy" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinitionConfig.property.deletionPolicy"></a>

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

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/chronicle_case_tag_definition#deletion_policy ChronicleCaseTagDefinition#deletion_policy}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinitionConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/chronicle_case_tag_definition#id ChronicleCaseTagDefinition#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinitionConfig.property.project"></a>

```java
public java.lang.String getProject();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/chronicle_case_tag_definition#project ChronicleCaseTagDefinition#project}.

---

##### `propertyName`<sup>Optional</sup> <a name="propertyName" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinitionConfig.property.propertyName"></a>

```java
public java.lang.String getPropertyName();
```

- *Type:* java.lang.String

Specific Entity property name to search in case. This is relevant only when a SearchIn of type BY_ENTITY_PROPERTY_NAME was chosen.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/chronicle_case_tag_definition#property_name ChronicleCaseTagDefinition#property_name}

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinitionConfig.property.timeouts"></a>

```java
public ChronicleCaseTagDefinitionTimeouts getTimeouts();
```

- *Type:* <a href="#@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinitionTimeouts">ChronicleCaseTagDefinitionTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/chronicle_case_tag_definition#timeouts ChronicleCaseTagDefinition#timeouts}

---

### ChronicleCaseTagDefinitionTimeouts <a name="ChronicleCaseTagDefinitionTimeouts" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinitionTimeouts"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinitionTimeouts.Initializer"></a>

```java
import io.cdktn.providers.google.chronicle_case_tag_definition.ChronicleCaseTagDefinitionTimeouts;

ChronicleCaseTagDefinitionTimeouts.builder()
//  .create(java.lang.String)
//  .delete(java.lang.String)
//  .update(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinitionTimeouts.property.create">create</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/chronicle_case_tag_definition#create ChronicleCaseTagDefinition#create}. |
| <code><a href="#@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinitionTimeouts.property.delete">delete</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/chronicle_case_tag_definition#delete ChronicleCaseTagDefinition#delete}. |
| <code><a href="#@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinitionTimeouts.property.update">update</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/chronicle_case_tag_definition#update ChronicleCaseTagDefinition#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinitionTimeouts.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/chronicle_case_tag_definition#create ChronicleCaseTagDefinition#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinitionTimeouts.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/chronicle_case_tag_definition#delete ChronicleCaseTagDefinition#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinitionTimeouts.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/resources/chronicle_case_tag_definition#update ChronicleCaseTagDefinition#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### ChronicleCaseTagDefinitionTimeoutsOutputReference <a name="ChronicleCaseTagDefinitionTimeoutsOutputReference" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinitionTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinitionTimeoutsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.google.chronicle_case_tag_definition.ChronicleCaseTagDefinitionTimeoutsOutputReference;

new ChronicleCaseTagDefinitionTimeoutsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinitionTimeoutsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinitionTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinitionTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinitionTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinitionTimeoutsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinitionTimeoutsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinitionTimeoutsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinitionTimeoutsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinitionTimeoutsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinitionTimeoutsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinitionTimeoutsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinitionTimeoutsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinitionTimeoutsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinitionTimeoutsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinitionTimeoutsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinitionTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinitionTimeoutsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinitionTimeoutsOutputReference.resetCreate">resetCreate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinitionTimeoutsOutputReference.resetDelete">resetDelete</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinitionTimeoutsOutputReference.resetUpdate">resetUpdate</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinitionTimeoutsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinitionTimeoutsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinitionTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinitionTimeoutsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinitionTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinitionTimeoutsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinitionTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinitionTimeoutsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinitionTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinitionTimeoutsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinitionTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinitionTimeoutsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinitionTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinitionTimeoutsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinitionTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinitionTimeoutsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinitionTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinitionTimeoutsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinitionTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinitionTimeoutsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinitionTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinitionTimeoutsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinitionTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinitionTimeoutsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCreate` <a name="resetCreate" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinitionTimeoutsOutputReference.resetCreate"></a>

```java
public void resetCreate()
```

##### `resetDelete` <a name="resetDelete" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinitionTimeoutsOutputReference.resetDelete"></a>

```java
public void resetDelete()
```

##### `resetUpdate` <a name="resetUpdate" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinitionTimeoutsOutputReference.resetUpdate"></a>

```java
public void resetUpdate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinitionTimeoutsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinitionTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinitionTimeoutsOutputReference.property.createInput">createInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinitionTimeoutsOutputReference.property.deleteInput">deleteInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinitionTimeoutsOutputReference.property.updateInput">updateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinitionTimeoutsOutputReference.property.create">create</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinitionTimeoutsOutputReference.property.delete">delete</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinitionTimeoutsOutputReference.property.update">update</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinitionTimeoutsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinitionTimeouts">ChronicleCaseTagDefinitionTimeouts</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinitionTimeoutsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinitionTimeoutsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createInput`<sup>Optional</sup> <a name="createInput" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinitionTimeoutsOutputReference.property.createInput"></a>

```java
public java.lang.String getCreateInput();
```

- *Type:* java.lang.String

---

##### `deleteInput`<sup>Optional</sup> <a name="deleteInput" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinitionTimeoutsOutputReference.property.deleteInput"></a>

```java
public java.lang.String getDeleteInput();
```

- *Type:* java.lang.String

---

##### `updateInput`<sup>Optional</sup> <a name="updateInput" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinitionTimeoutsOutputReference.property.updateInput"></a>

```java
public java.lang.String getUpdateInput();
```

- *Type:* java.lang.String

---

##### `create`<sup>Required</sup> <a name="create" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinitionTimeoutsOutputReference.property.create"></a>

```java
public java.lang.String getCreate();
```

- *Type:* java.lang.String

---

##### `delete`<sup>Required</sup> <a name="delete" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinitionTimeoutsOutputReference.property.delete"></a>

```java
public java.lang.String getDelete();
```

- *Type:* java.lang.String

---

##### `update`<sup>Required</sup> <a name="update" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinitionTimeoutsOutputReference.property.update"></a>

```java
public java.lang.String getUpdate();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinitionTimeoutsOutputReference.property.internalValue"></a>

```java
public IResolvable|ChronicleCaseTagDefinitionTimeouts getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-google.chronicleCaseTagDefinition.ChronicleCaseTagDefinitionTimeouts">ChronicleCaseTagDefinitionTimeouts</a>

---



