# `dataGoogleComputeInstanceGroups` Submodule <a name="`dataGoogleComputeInstanceGroups` Submodule" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleComputeInstanceGroups <a name="DataGoogleComputeInstanceGroups" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroups"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/compute_instance_groups google_compute_instance_groups}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroups.Initializer"></a>

```typescript
import { dataGoogleComputeInstanceGroups } from '@cdktn/provider-google'

new dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroups(scope: Construct, id: string, config?: DataGoogleComputeInstanceGroupsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroups.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroups.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroups.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsConfig">DataGoogleComputeInstanceGroupsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroups.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroups.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroups.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsConfig">DataGoogleComputeInstanceGroupsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroups.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroups.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroups.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroups.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroups.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroups.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroups.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroups.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroups.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroups.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroups.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroups.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroups.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroups.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroups.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroups.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroups.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroups.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroups.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroups.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroups.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroups.resetZone">resetZone</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroups.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroups.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroups.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroups.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroups.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroups.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroups.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroups.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroups.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroups.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroups.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroups.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroups.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroups.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroups.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroups.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroups.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroups.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroups.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroups.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroups.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroups.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroups.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroups.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroups.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroups.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroups.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroups.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroups.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroups.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroups.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroups.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetFilter` <a name="resetFilter" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroups.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroups.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroups.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetZone` <a name="resetZone" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroups.resetZone"></a>

```typescript
public resetZone(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroups.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroups.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroups.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroups.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleComputeInstanceGroups resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroups.isConstruct"></a>

```typescript
import { dataGoogleComputeInstanceGroups } from '@cdktn/provider-google'

dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroups.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroups.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroups.isTerraformElement"></a>

```typescript
import { dataGoogleComputeInstanceGroups } from '@cdktn/provider-google'

dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroups.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroups.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroups.isTerraformDataSource"></a>

```typescript
import { dataGoogleComputeInstanceGroups } from '@cdktn/provider-google'

dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroups.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroups.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroups.generateConfigForImport"></a>

```typescript
import { dataGoogleComputeInstanceGroups } from '@cdktn/provider-google'

dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroups.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataGoogleComputeInstanceGroups resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroups.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroups.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleComputeInstanceGroups to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroups.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleComputeInstanceGroups that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/compute_instance_groups#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroups.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleComputeInstanceGroups to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroups.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroups.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroups.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroups.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroups.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroups.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroups.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroups.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroups.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroups.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroups.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroups.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroups.property.instanceGroups">instanceGroups</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsList">DataGoogleComputeInstanceGroupsInstanceGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroups.property.filterInput">filterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroups.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroups.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroups.property.zoneInput">zoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroups.property.filter">filter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroups.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroups.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroups.property.zone">zone</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroups.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroups.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroups.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroups.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroups.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroups.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroups.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroups.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroups.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroups.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroups.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroups.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `instanceGroups`<sup>Required</sup> <a name="instanceGroups" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroups.property.instanceGroups"></a>

```typescript
public readonly instanceGroups: DataGoogleComputeInstanceGroupsInstanceGroupsList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsList">DataGoogleComputeInstanceGroupsInstanceGroupsList</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroups.property.filterInput"></a>

```typescript
public readonly filterInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroups.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroups.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `zoneInput`<sup>Optional</sup> <a name="zoneInput" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroups.property.zoneInput"></a>

```typescript
public readonly zoneInput: string;
```

- *Type:* string

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroups.property.filter"></a>

```typescript
public readonly filter: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroups.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroups.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroups.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroups.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroups.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleComputeInstanceGroupsConfig <a name="DataGoogleComputeInstanceGroupsConfig" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsConfig.Initializer"></a>

```typescript
import { dataGoogleComputeInstanceGroups } from '@cdktn/provider-google'

const dataGoogleComputeInstanceGroupsConfig: dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsConfig.property.filter">filter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/compute_instance_groups#filter DataGoogleComputeInstanceGroups#filter}. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/compute_instance_groups#id DataGoogleComputeInstanceGroups#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/compute_instance_groups#project DataGoogleComputeInstanceGroups#project}. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsConfig.property.zone">zone</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/compute_instance_groups#zone DataGoogleComputeInstanceGroups#zone}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsConfig.property.filter"></a>

```typescript
public readonly filter: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/compute_instance_groups#filter DataGoogleComputeInstanceGroups#filter}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/compute_instance_groups#id DataGoogleComputeInstanceGroups#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/compute_instance_groups#project DataGoogleComputeInstanceGroups#project}.

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsConfig.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.42.0/docs/data-sources/compute_instance_groups#zone DataGoogleComputeInstanceGroups#zone}.

---

### DataGoogleComputeInstanceGroupsInstanceGroups <a name="DataGoogleComputeInstanceGroupsInstanceGroups" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroups"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroups.Initializer"></a>

```typescript
import { dataGoogleComputeInstanceGroups } from '@cdktn/provider-google'

const dataGoogleComputeInstanceGroupsInstanceGroups: dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroups = { ... }
```


### DataGoogleComputeInstanceGroupsInstanceGroupsNamedPort <a name="DataGoogleComputeInstanceGroupsInstanceGroupsNamedPort" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsNamedPort"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsNamedPort.Initializer"></a>

```typescript
import { dataGoogleComputeInstanceGroups } from '@cdktn/provider-google'

const dataGoogleComputeInstanceGroupsInstanceGroupsNamedPort: dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsNamedPort = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleComputeInstanceGroupsInstanceGroupsList <a name="DataGoogleComputeInstanceGroupsInstanceGroupsList" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsList.Initializer"></a>

```typescript
import { dataGoogleComputeInstanceGroups } from '@cdktn/provider-google'

new dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsList.get"></a>

```typescript
public get(index: number): DataGoogleComputeInstanceGroupsInstanceGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleComputeInstanceGroupsInstanceGroupsNamedPortList <a name="DataGoogleComputeInstanceGroupsInstanceGroupsNamedPortList" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsNamedPortList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsNamedPortList.Initializer"></a>

```typescript
import { dataGoogleComputeInstanceGroups } from '@cdktn/provider-google'

new dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsNamedPortList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsNamedPortList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsNamedPortList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsNamedPortList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsNamedPortList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsNamedPortList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsNamedPortList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsNamedPortList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsNamedPortList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsNamedPortList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsNamedPortList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsNamedPortList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsNamedPortList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsNamedPortList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsNamedPortList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsNamedPortList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsNamedPortList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsNamedPortList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsNamedPortList.get"></a>

```typescript
public get(index: number): DataGoogleComputeInstanceGroupsInstanceGroupsNamedPortOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsNamedPortList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsNamedPortList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsNamedPortList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsNamedPortList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsNamedPortList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleComputeInstanceGroupsInstanceGroupsNamedPortOutputReference <a name="DataGoogleComputeInstanceGroupsInstanceGroupsNamedPortOutputReference" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsNamedPortOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsNamedPortOutputReference.Initializer"></a>

```typescript
import { dataGoogleComputeInstanceGroups } from '@cdktn/provider-google'

new dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsNamedPortOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsNamedPortOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsNamedPortOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsNamedPortOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsNamedPortOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsNamedPortOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsNamedPortOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsNamedPortOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsNamedPortOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsNamedPortOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsNamedPortOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsNamedPortOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsNamedPortOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsNamedPortOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsNamedPortOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsNamedPortOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsNamedPortOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsNamedPortOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsNamedPortOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsNamedPortOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsNamedPortOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsNamedPortOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsNamedPortOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsNamedPortOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsNamedPortOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsNamedPortOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsNamedPortOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsNamedPortOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsNamedPortOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsNamedPortOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsNamedPortOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsNamedPortOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsNamedPortOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsNamedPortOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsNamedPortOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsNamedPortOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsNamedPortOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsNamedPortOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsNamedPortOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsNamedPortOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsNamedPortOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsNamedPortOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsNamedPortOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsNamedPortOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsNamedPortOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsNamedPortOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsNamedPortOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsNamedPortOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsNamedPortOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsNamedPortOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsNamedPortOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsNamedPort">DataGoogleComputeInstanceGroupsInstanceGroupsNamedPort</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsNamedPortOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsNamedPortOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsNamedPortOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsNamedPortOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsNamedPortOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleComputeInstanceGroupsInstanceGroupsNamedPort;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsNamedPort">DataGoogleComputeInstanceGroupsInstanceGroupsNamedPort</a>

---


### DataGoogleComputeInstanceGroupsInstanceGroupsOutputReference <a name="DataGoogleComputeInstanceGroupsInstanceGroupsOutputReference" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsOutputReference.Initializer"></a>

```typescript
import { dataGoogleComputeInstanceGroups } from '@cdktn/provider-google'

new dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsOutputReference.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsOutputReference.property.namedPort">namedPort</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsNamedPortList">DataGoogleComputeInstanceGroupsInstanceGroupsNamedPortList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsOutputReference.property.network">network</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsOutputReference.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsOutputReference.property.selfLink">selfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsOutputReference.property.size">size</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsOutputReference.property.zone">zone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroups">DataGoogleComputeInstanceGroupsInstanceGroups</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsOutputReference.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `namedPort`<sup>Required</sup> <a name="namedPort" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsOutputReference.property.namedPort"></a>

```typescript
public readonly namedPort: DataGoogleComputeInstanceGroupsInstanceGroupsNamedPortList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsNamedPortList">DataGoogleComputeInstanceGroupsInstanceGroupsNamedPortList</a>

---

##### `network`<sup>Required</sup> <a name="network" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsOutputReference.property.network"></a>

```typescript
public readonly network: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsOutputReference.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsOutputReference.property.selfLink"></a>

```typescript
public readonly selfLink: string;
```

- *Type:* string

---

##### `size`<sup>Required</sup> <a name="size" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsOutputReference.property.size"></a>

```typescript
public readonly size: number;
```

- *Type:* number

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsOutputReference.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroupsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleComputeInstanceGroupsInstanceGroups;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeInstanceGroups.DataGoogleComputeInstanceGroupsInstanceGroups">DataGoogleComputeInstanceGroupsInstanceGroups</a>

---



