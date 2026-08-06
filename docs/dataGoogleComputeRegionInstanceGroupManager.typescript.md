# `dataGoogleComputeRegionInstanceGroupManager` Submodule <a name="`dataGoogleComputeRegionInstanceGroupManager` Submodule" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleComputeRegionInstanceGroupManager <a name="DataGoogleComputeRegionInstanceGroupManager" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/compute_region_instance_group_manager google_compute_region_instance_group_manager}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.Initializer"></a>

```typescript
import { dataGoogleComputeRegionInstanceGroupManager } from '@cdktn/provider-google'

new dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager(scope: Construct, id: string, config?: DataGoogleComputeRegionInstanceGroupManagerConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerConfig">DataGoogleComputeRegionInstanceGroupManagerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerConfig">DataGoogleComputeRegionInstanceGroupManagerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.resetRegion">resetRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.resetSelfLink">resetSelfLink</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.resetId"></a>

```typescript
public resetId(): void
```

##### `resetName` <a name="resetName" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.resetName"></a>

```typescript
public resetName(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.resetRegion"></a>

```typescript
public resetRegion(): void
```

##### `resetSelfLink` <a name="resetSelfLink" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.resetSelfLink"></a>

```typescript
public resetSelfLink(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleComputeRegionInstanceGroupManager resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.isConstruct"></a>

```typescript
import { dataGoogleComputeRegionInstanceGroupManager } from '@cdktn/provider-google'

dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.isTerraformElement"></a>

```typescript
import { dataGoogleComputeRegionInstanceGroupManager } from '@cdktn/provider-google'

dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.isTerraformDataSource"></a>

```typescript
import { dataGoogleComputeRegionInstanceGroupManager } from '@cdktn/provider-google'

dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.generateConfigForImport"></a>

```typescript
import { dataGoogleComputeRegionInstanceGroupManager } from '@cdktn/provider-google'

dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataGoogleComputeRegionInstanceGroupManager resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleComputeRegionInstanceGroupManager to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleComputeRegionInstanceGroupManager that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/compute_region_instance_group_manager#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleComputeRegionInstanceGroupManager to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.allInstancesConfig">allInstancesConfig</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigList">DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.autoHealingPolicies">autoHealingPolicies</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesList">DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.baseInstanceName">baseInstanceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.creationTimestamp">creationTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.distributionPolicyTargetShape">distributionPolicyTargetShape</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.distributionPolicyZones">distributionPolicyZones</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.fingerprint">fingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.instanceFlexibilityPolicy">instanceFlexibilityPolicy</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyList">DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.instanceGroup">instanceGroup</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.instanceGroupManagerId">instanceGroupManagerId</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.instanceLifecyclePolicy">instanceLifecyclePolicy</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyList">DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.listManagedInstancesResults">listManagedInstancesResults</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.namedPort">namedPort</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortList">DataGoogleComputeRegionInstanceGroupManagerNamedPortList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.resourcePolicies">resourcePolicies</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesList">DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.standbyPolicy">standbyPolicy</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyList">DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.statefulDisk">statefulDisk</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskList">DataGoogleComputeRegionInstanceGroupManagerStatefulDiskList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.statefulExternalIp">statefulExternalIp</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpList">DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.statefulInternalIp">statefulInternalIp</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpList">DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.status">status</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusList">DataGoogleComputeRegionInstanceGroupManagerStatusList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.targetPools">targetPools</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.targetSize">targetSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.targetSizePolicy">targetSizePolicy</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyList">DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.targetStoppedSize">targetStoppedSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.targetSuspendedSize">targetSuspendedSize</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.updatePolicy">updatePolicy</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyList">DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.version">version</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionList">DataGoogleComputeRegionInstanceGroupManagerVersionList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.waitForInstances">waitForInstances</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.waitForInstancesStatus">waitForInstancesStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.selfLinkInput">selfLinkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.selfLink">selfLink</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `allInstancesConfig`<sup>Required</sup> <a name="allInstancesConfig" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.allInstancesConfig"></a>

```typescript
public readonly allInstancesConfig: DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigList">DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigList</a>

---

##### `autoHealingPolicies`<sup>Required</sup> <a name="autoHealingPolicies" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.autoHealingPolicies"></a>

```typescript
public readonly autoHealingPolicies: DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesList">DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesList</a>

---

##### `baseInstanceName`<sup>Required</sup> <a name="baseInstanceName" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.baseInstanceName"></a>

```typescript
public readonly baseInstanceName: string;
```

- *Type:* string

---

##### `creationTimestamp`<sup>Required</sup> <a name="creationTimestamp" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.creationTimestamp"></a>

```typescript
public readonly creationTimestamp: string;
```

- *Type:* string

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `distributionPolicyTargetShape`<sup>Required</sup> <a name="distributionPolicyTargetShape" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.distributionPolicyTargetShape"></a>

```typescript
public readonly distributionPolicyTargetShape: string;
```

- *Type:* string

---

##### `distributionPolicyZones`<sup>Required</sup> <a name="distributionPolicyZones" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.distributionPolicyZones"></a>

```typescript
public readonly distributionPolicyZones: string[];
```

- *Type:* string[]

---

##### `fingerprint`<sup>Required</sup> <a name="fingerprint" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.fingerprint"></a>

```typescript
public readonly fingerprint: string;
```

- *Type:* string

---

##### `instanceFlexibilityPolicy`<sup>Required</sup> <a name="instanceFlexibilityPolicy" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.instanceFlexibilityPolicy"></a>

```typescript
public readonly instanceFlexibilityPolicy: DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyList">DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyList</a>

---

##### `instanceGroup`<sup>Required</sup> <a name="instanceGroup" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.instanceGroup"></a>

```typescript
public readonly instanceGroup: string;
```

- *Type:* string

---

##### `instanceGroupManagerId`<sup>Required</sup> <a name="instanceGroupManagerId" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.instanceGroupManagerId"></a>

```typescript
public readonly instanceGroupManagerId: number;
```

- *Type:* number

---

##### `instanceLifecyclePolicy`<sup>Required</sup> <a name="instanceLifecyclePolicy" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.instanceLifecyclePolicy"></a>

```typescript
public readonly instanceLifecyclePolicy: DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyList">DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyList</a>

---

##### `listManagedInstancesResults`<sup>Required</sup> <a name="listManagedInstancesResults" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.listManagedInstancesResults"></a>

```typescript
public readonly listManagedInstancesResults: string;
```

- *Type:* string

---

##### `namedPort`<sup>Required</sup> <a name="namedPort" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.namedPort"></a>

```typescript
public readonly namedPort: DataGoogleComputeRegionInstanceGroupManagerNamedPortList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortList">DataGoogleComputeRegionInstanceGroupManagerNamedPortList</a>

---

##### `resourcePolicies`<sup>Required</sup> <a name="resourcePolicies" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.resourcePolicies"></a>

```typescript
public readonly resourcePolicies: DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesList">DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesList</a>

---

##### `standbyPolicy`<sup>Required</sup> <a name="standbyPolicy" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.standbyPolicy"></a>

```typescript
public readonly standbyPolicy: DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyList">DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyList</a>

---

##### `statefulDisk`<sup>Required</sup> <a name="statefulDisk" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.statefulDisk"></a>

```typescript
public readonly statefulDisk: DataGoogleComputeRegionInstanceGroupManagerStatefulDiskList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskList">DataGoogleComputeRegionInstanceGroupManagerStatefulDiskList</a>

---

##### `statefulExternalIp`<sup>Required</sup> <a name="statefulExternalIp" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.statefulExternalIp"></a>

```typescript
public readonly statefulExternalIp: DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpList">DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpList</a>

---

##### `statefulInternalIp`<sup>Required</sup> <a name="statefulInternalIp" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.statefulInternalIp"></a>

```typescript
public readonly statefulInternalIp: DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpList">DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpList</a>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.status"></a>

```typescript
public readonly status: DataGoogleComputeRegionInstanceGroupManagerStatusList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusList">DataGoogleComputeRegionInstanceGroupManagerStatusList</a>

---

##### `targetPools`<sup>Required</sup> <a name="targetPools" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.targetPools"></a>

```typescript
public readonly targetPools: string[];
```

- *Type:* string[]

---

##### `targetSize`<sup>Required</sup> <a name="targetSize" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.targetSize"></a>

```typescript
public readonly targetSize: number;
```

- *Type:* number

---

##### `targetSizePolicy`<sup>Required</sup> <a name="targetSizePolicy" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.targetSizePolicy"></a>

```typescript
public readonly targetSizePolicy: DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyList">DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyList</a>

---

##### `targetStoppedSize`<sup>Required</sup> <a name="targetStoppedSize" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.targetStoppedSize"></a>

```typescript
public readonly targetStoppedSize: number;
```

- *Type:* number

---

##### `targetSuspendedSize`<sup>Required</sup> <a name="targetSuspendedSize" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.targetSuspendedSize"></a>

```typescript
public readonly targetSuspendedSize: number;
```

- *Type:* number

---

##### `updatePolicy`<sup>Required</sup> <a name="updatePolicy" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.updatePolicy"></a>

```typescript
public readonly updatePolicy: DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyList">DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyList</a>

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.version"></a>

```typescript
public readonly version: DataGoogleComputeRegionInstanceGroupManagerVersionList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionList">DataGoogleComputeRegionInstanceGroupManagerVersionList</a>

---

##### `waitForInstances`<sup>Required</sup> <a name="waitForInstances" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.waitForInstances"></a>

```typescript
public readonly waitForInstances: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `waitForInstancesStatus`<sup>Required</sup> <a name="waitForInstancesStatus" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.waitForInstancesStatus"></a>

```typescript
public readonly waitForInstancesStatus: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `selfLinkInput`<sup>Optional</sup> <a name="selfLinkInput" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.selfLinkInput"></a>

```typescript
public readonly selfLinkInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.selfLink"></a>

```typescript
public readonly selfLink: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManager.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfig <a name="DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfig" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfig.Initializer"></a>

```typescript
import { dataGoogleComputeRegionInstanceGroupManager } from '@cdktn/provider-google'

const dataGoogleComputeRegionInstanceGroupManagerAllInstancesConfig: dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfig = { ... }
```


### DataGoogleComputeRegionInstanceGroupManagerAutoHealingPolicies <a name="DataGoogleComputeRegionInstanceGroupManagerAutoHealingPolicies" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPolicies.Initializer"></a>

```typescript
import { dataGoogleComputeRegionInstanceGroupManager } from '@cdktn/provider-google'

const dataGoogleComputeRegionInstanceGroupManagerAutoHealingPolicies: dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPolicies = { ... }
```


### DataGoogleComputeRegionInstanceGroupManagerConfig <a name="DataGoogleComputeRegionInstanceGroupManagerConfig" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerConfig.Initializer"></a>

```typescript
import { dataGoogleComputeRegionInstanceGroupManager } from '@cdktn/provider-google'

const dataGoogleComputeRegionInstanceGroupManagerConfig: dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/compute_region_instance_group_manager#id DataGoogleComputeRegionInstanceGroupManager#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerConfig.property.name">name</a></code> | <code>string</code> | The name of the instance group manager. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerConfig.property.project">project</a></code> | <code>string</code> | The ID of the project in which the resource belongs. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerConfig.property.region">region</a></code> | <code>string</code> | The region where the managed instance group resides. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerConfig.property.selfLink">selfLink</a></code> | <code>string</code> | The URL of the created resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/compute_region_instance_group_manager#id DataGoogleComputeRegionInstanceGroupManager#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the instance group manager.

Must be 1-63 characters long and comply with RFC1035. Supported characters include lowercase letters, numbers, and hyphens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/compute_region_instance_group_manager#name DataGoogleComputeRegionInstanceGroupManager#name}

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

The ID of the project in which the resource belongs.

If it is not provided, the provider project is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/compute_region_instance_group_manager#project DataGoogleComputeRegionInstanceGroupManager#project}

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

The region where the managed instance group resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/compute_region_instance_group_manager#region DataGoogleComputeRegionInstanceGroupManager#region}

---

##### `selfLink`<sup>Optional</sup> <a name="selfLink" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerConfig.property.selfLink"></a>

```typescript
public readonly selfLink: string;
```

- *Type:* string

The URL of the created resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.43.0/docs/data-sources/compute_region_instance_group_manager#self_link DataGoogleComputeRegionInstanceGroupManager#self_link}

---

### DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicy <a name="DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicy" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicy.Initializer"></a>

```typescript
import { dataGoogleComputeRegionInstanceGroupManager } from '@cdktn/provider-google'

const dataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicy: dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicy = { ... }
```


### DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelections <a name="DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelections" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelections"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelections.Initializer"></a>

```typescript
import { dataGoogleComputeRegionInstanceGroupManager } from '@cdktn/provider-google'

const dataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelections: dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelections = { ... }
```


### DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicy <a name="DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicy" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicy.Initializer"></a>

```typescript
import { dataGoogleComputeRegionInstanceGroupManager } from '@cdktn/provider-google'

const dataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicy: dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicy = { ... }
```


### DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepair <a name="DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepair" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepair"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepair.Initializer"></a>

```typescript
import { dataGoogleComputeRegionInstanceGroupManager } from '@cdktn/provider-google'

const dataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepair: dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepair = { ... }
```


### DataGoogleComputeRegionInstanceGroupManagerNamedPort <a name="DataGoogleComputeRegionInstanceGroupManagerNamedPort" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPort"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPort.Initializer"></a>

```typescript
import { dataGoogleComputeRegionInstanceGroupManager } from '@cdktn/provider-google'

const dataGoogleComputeRegionInstanceGroupManagerNamedPort: dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPort = { ... }
```


### DataGoogleComputeRegionInstanceGroupManagerResourcePolicies <a name="DataGoogleComputeRegionInstanceGroupManagerResourcePolicies" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePolicies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePolicies.Initializer"></a>

```typescript
import { dataGoogleComputeRegionInstanceGroupManager } from '@cdktn/provider-google'

const dataGoogleComputeRegionInstanceGroupManagerResourcePolicies: dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePolicies = { ... }
```


### DataGoogleComputeRegionInstanceGroupManagerStandbyPolicy <a name="DataGoogleComputeRegionInstanceGroupManagerStandbyPolicy" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicy.Initializer"></a>

```typescript
import { dataGoogleComputeRegionInstanceGroupManager } from '@cdktn/provider-google'

const dataGoogleComputeRegionInstanceGroupManagerStandbyPolicy: dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicy = { ... }
```


### DataGoogleComputeRegionInstanceGroupManagerStatefulDisk <a name="DataGoogleComputeRegionInstanceGroupManagerStatefulDisk" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDisk"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDisk.Initializer"></a>

```typescript
import { dataGoogleComputeRegionInstanceGroupManager } from '@cdktn/provider-google'

const dataGoogleComputeRegionInstanceGroupManagerStatefulDisk: dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDisk = { ... }
```


### DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIp <a name="DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIp" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIp"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIp.Initializer"></a>

```typescript
import { dataGoogleComputeRegionInstanceGroupManager } from '@cdktn/provider-google'

const dataGoogleComputeRegionInstanceGroupManagerStatefulExternalIp: dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIp = { ... }
```


### DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIp <a name="DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIp" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIp"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIp.Initializer"></a>

```typescript
import { dataGoogleComputeRegionInstanceGroupManager } from '@cdktn/provider-google'

const dataGoogleComputeRegionInstanceGroupManagerStatefulInternalIp: dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIp = { ... }
```


### DataGoogleComputeRegionInstanceGroupManagerStatus <a name="DataGoogleComputeRegionInstanceGroupManagerStatus" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatus"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatus.Initializer"></a>

```typescript
import { dataGoogleComputeRegionInstanceGroupManager } from '@cdktn/provider-google'

const dataGoogleComputeRegionInstanceGroupManagerStatus: dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatus = { ... }
```


### DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfig <a name="DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfig" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfig.Initializer"></a>

```typescript
import { dataGoogleComputeRegionInstanceGroupManager } from '@cdktn/provider-google'

const dataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfig: dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfig = { ... }
```


### DataGoogleComputeRegionInstanceGroupManagerStatusStateful <a name="DataGoogleComputeRegionInstanceGroupManagerStatusStateful" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStateful"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStateful.Initializer"></a>

```typescript
import { dataGoogleComputeRegionInstanceGroupManager } from '@cdktn/provider-google'

const dataGoogleComputeRegionInstanceGroupManagerStatusStateful: dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStateful = { ... }
```


### DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigs <a name="DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigs" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigs.Initializer"></a>

```typescript
import { dataGoogleComputeRegionInstanceGroupManager } from '@cdktn/provider-google'

const dataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigs: dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigs = { ... }
```


### DataGoogleComputeRegionInstanceGroupManagerStatusVersionTarget <a name="DataGoogleComputeRegionInstanceGroupManagerStatusVersionTarget" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTarget"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTarget.Initializer"></a>

```typescript
import { dataGoogleComputeRegionInstanceGroupManager } from '@cdktn/provider-google'

const dataGoogleComputeRegionInstanceGroupManagerStatusVersionTarget: dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTarget = { ... }
```


### DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicy <a name="DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicy" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicy.Initializer"></a>

```typescript
import { dataGoogleComputeRegionInstanceGroupManager } from '@cdktn/provider-google'

const dataGoogleComputeRegionInstanceGroupManagerTargetSizePolicy: dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicy = { ... }
```


### DataGoogleComputeRegionInstanceGroupManagerUpdatePolicy <a name="DataGoogleComputeRegionInstanceGroupManagerUpdatePolicy" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicy.Initializer"></a>

```typescript
import { dataGoogleComputeRegionInstanceGroupManager } from '@cdktn/provider-google'

const dataGoogleComputeRegionInstanceGroupManagerUpdatePolicy: dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicy = { ... }
```


### DataGoogleComputeRegionInstanceGroupManagerVersion <a name="DataGoogleComputeRegionInstanceGroupManagerVersion" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersion.Initializer"></a>

```typescript
import { dataGoogleComputeRegionInstanceGroupManager } from '@cdktn/provider-google'

const dataGoogleComputeRegionInstanceGroupManagerVersion: dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersion = { ... }
```


### DataGoogleComputeRegionInstanceGroupManagerVersionTargetSize <a name="DataGoogleComputeRegionInstanceGroupManagerVersionTargetSize" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSize"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSize.Initializer"></a>

```typescript
import { dataGoogleComputeRegionInstanceGroupManager } from '@cdktn/provider-google'

const dataGoogleComputeRegionInstanceGroupManagerVersionTargetSize: dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSize = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigList <a name="DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigList" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigList.Initializer"></a>

```typescript
import { dataGoogleComputeRegionInstanceGroupManager } from '@cdktn/provider-google'

new dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigList.get"></a>

```typescript
public get(index: number): DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference <a name="DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.Initializer"></a>

```typescript
import { dataGoogleComputeRegionInstanceGroupManager } from '@cdktn/provider-google'

new dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.property.labels">labels</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.property.metadata">metadata</a></code> | <code>cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfig">DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `labels`<sup>Required</sup> <a name="labels" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.property.labels"></a>

```typescript
public readonly labels: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.property.metadata"></a>

```typescript
public readonly metadata: StringMap;
```

- *Type:* cdktn.StringMap

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfig;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfig">DataGoogleComputeRegionInstanceGroupManagerAllInstancesConfig</a>

---


### DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesList <a name="DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesList" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesList.Initializer"></a>

```typescript
import { dataGoogleComputeRegionInstanceGroupManager } from '@cdktn/provider-google'

new dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesList.get"></a>

```typescript
public get(index: number): DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference <a name="DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.Initializer"></a>

```typescript
import { dataGoogleComputeRegionInstanceGroupManager } from '@cdktn/provider-google'

new dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.property.healthCheck">healthCheck</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.property.initialDelaySec">initialDelaySec</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPolicies">DataGoogleComputeRegionInstanceGroupManagerAutoHealingPolicies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `healthCheck`<sup>Required</sup> <a name="healthCheck" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.property.healthCheck"></a>

```typescript
public readonly healthCheck: string;
```

- *Type:* string

---

##### `initialDelaySec`<sup>Required</sup> <a name="initialDelaySec" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.property.initialDelaySec"></a>

```typescript
public readonly initialDelaySec: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPoliciesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleComputeRegionInstanceGroupManagerAutoHealingPolicies;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerAutoHealingPolicies">DataGoogleComputeRegionInstanceGroupManagerAutoHealingPolicies</a>

---


### DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsList <a name="DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsList" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsList.Initializer"></a>

```typescript
import { dataGoogleComputeRegionInstanceGroupManager } from '@cdktn/provider-google'

new dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsList.get"></a>

```typescript
public get(index: number): DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference <a name="DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.Initializer"></a>

```typescript
import { dataGoogleComputeRegionInstanceGroupManager } from '@cdktn/provider-google'

new dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.property.machineTypes">machineTypes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.property.rank">rank</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelections">DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelections</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `machineTypes`<sup>Required</sup> <a name="machineTypes" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.property.machineTypes"></a>

```typescript
public readonly machineTypes: string[];
```

- *Type:* string[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `rank`<sup>Required</sup> <a name="rank" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.property.rank"></a>

```typescript
public readonly rank: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelections;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelections">DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelections</a>

---


### DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyList <a name="DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyList" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyList.Initializer"></a>

```typescript
import { dataGoogleComputeRegionInstanceGroupManager } from '@cdktn/provider-google'

new dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyList.get"></a>

```typescript
public get(index: number): DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference <a name="DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference.Initializer"></a>

```typescript
import { dataGoogleComputeRegionInstanceGroupManager } from '@cdktn/provider-google'

new dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference.property.instanceSelections">instanceSelections</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsList">DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicy">DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `instanceSelections`<sup>Required</sup> <a name="instanceSelections" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference.property.instanceSelections"></a>

```typescript
public readonly instanceSelections: DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsList">DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyInstanceSelectionsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicy;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicy">DataGoogleComputeRegionInstanceGroupManagerInstanceFlexibilityPolicy</a>

---


### DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyList <a name="DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyList" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyList.Initializer"></a>

```typescript
import { dataGoogleComputeRegionInstanceGroupManager } from '@cdktn/provider-google'

new dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyList.get"></a>

```typescript
public get(index: number): DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairList <a name="DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairList" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairList.Initializer"></a>

```typescript
import { dataGoogleComputeRegionInstanceGroupManager } from '@cdktn/provider-google'

new dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairList.get"></a>

```typescript
public get(index: number): DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference <a name="DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.Initializer"></a>

```typescript
import { dataGoogleComputeRegionInstanceGroupManager } from '@cdktn/provider-google'

new dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.property.allowChangingZone">allowChangingZone</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepair">DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepair</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allowChangingZone`<sup>Required</sup> <a name="allowChangingZone" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.property.allowChangingZone"></a>

```typescript
public readonly allowChangingZone: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepair;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepair">DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepair</a>

---


### DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference <a name="DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.Initializer"></a>

```typescript
import { dataGoogleComputeRegionInstanceGroupManager } from '@cdktn/provider-google'

new dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.property.defaultActionOnFailure">defaultActionOnFailure</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.property.forceUpdateOnRepair">forceUpdateOnRepair</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.property.onFailedHealthCheck">onFailedHealthCheck</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.property.onRepair">onRepair</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairList">DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicy">DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `defaultActionOnFailure`<sup>Required</sup> <a name="defaultActionOnFailure" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.property.defaultActionOnFailure"></a>

```typescript
public readonly defaultActionOnFailure: string;
```

- *Type:* string

---

##### `forceUpdateOnRepair`<sup>Required</sup> <a name="forceUpdateOnRepair" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.property.forceUpdateOnRepair"></a>

```typescript
public readonly forceUpdateOnRepair: string;
```

- *Type:* string

---

##### `onFailedHealthCheck`<sup>Required</sup> <a name="onFailedHealthCheck" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.property.onFailedHealthCheck"></a>

```typescript
public readonly onFailedHealthCheck: string;
```

- *Type:* string

---

##### `onRepair`<sup>Required</sup> <a name="onRepair" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.property.onRepair"></a>

```typescript
public readonly onRepair: DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairList">DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOnRepairList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicy;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicy">DataGoogleComputeRegionInstanceGroupManagerInstanceLifecyclePolicy</a>

---


### DataGoogleComputeRegionInstanceGroupManagerNamedPortList <a name="DataGoogleComputeRegionInstanceGroupManagerNamedPortList" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortList.Initializer"></a>

```typescript
import { dataGoogleComputeRegionInstanceGroupManager } from '@cdktn/provider-google'

new dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortList.get"></a>

```typescript
public get(index: number): DataGoogleComputeRegionInstanceGroupManagerNamedPortOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleComputeRegionInstanceGroupManagerNamedPortOutputReference <a name="DataGoogleComputeRegionInstanceGroupManagerNamedPortOutputReference" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.Initializer"></a>

```typescript
import { dataGoogleComputeRegionInstanceGroupManager } from '@cdktn/provider-google'

new dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.property.port">port</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPort">DataGoogleComputeRegionInstanceGroupManagerNamedPort</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.property.port"></a>

```typescript
public readonly port: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPortOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleComputeRegionInstanceGroupManagerNamedPort;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerNamedPort">DataGoogleComputeRegionInstanceGroupManagerNamedPort</a>

---


### DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesList <a name="DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesList" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesList.Initializer"></a>

```typescript
import { dataGoogleComputeRegionInstanceGroupManager } from '@cdktn/provider-google'

new dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesList.get"></a>

```typescript
public get(index: number): DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesOutputReference <a name="DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesOutputReference" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesOutputReference.Initializer"></a>

```typescript
import { dataGoogleComputeRegionInstanceGroupManager } from '@cdktn/provider-google'

new dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesOutputReference.property.workloadPolicy">workloadPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePolicies">DataGoogleComputeRegionInstanceGroupManagerResourcePolicies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `workloadPolicy`<sup>Required</sup> <a name="workloadPolicy" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesOutputReference.property.workloadPolicy"></a>

```typescript
public readonly workloadPolicy: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePoliciesOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleComputeRegionInstanceGroupManagerResourcePolicies;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerResourcePolicies">DataGoogleComputeRegionInstanceGroupManagerResourcePolicies</a>

---


### DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyList <a name="DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyList" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyList.Initializer"></a>

```typescript
import { dataGoogleComputeRegionInstanceGroupManager } from '@cdktn/provider-google'

new dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyList.get"></a>

```typescript
public get(index: number): DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference <a name="DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.Initializer"></a>

```typescript
import { dataGoogleComputeRegionInstanceGroupManager } from '@cdktn/provider-google'

new dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.property.initialDelaySec">initialDelaySec</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicy">DataGoogleComputeRegionInstanceGroupManagerStandbyPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `initialDelaySec`<sup>Required</sup> <a name="initialDelaySec" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.property.initialDelaySec"></a>

```typescript
public readonly initialDelaySec: number;
```

- *Type:* number

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleComputeRegionInstanceGroupManagerStandbyPolicy;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStandbyPolicy">DataGoogleComputeRegionInstanceGroupManagerStandbyPolicy</a>

---


### DataGoogleComputeRegionInstanceGroupManagerStatefulDiskList <a name="DataGoogleComputeRegionInstanceGroupManagerStatefulDiskList" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskList.Initializer"></a>

```typescript
import { dataGoogleComputeRegionInstanceGroupManager } from '@cdktn/provider-google'

new dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskList.get"></a>

```typescript
public get(index: number): DataGoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference <a name="DataGoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.Initializer"></a>

```typescript
import { dataGoogleComputeRegionInstanceGroupManager } from '@cdktn/provider-google'

new dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.property.deleteRule">deleteRule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.property.deviceName">deviceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDisk">DataGoogleComputeRegionInstanceGroupManagerStatefulDisk</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deleteRule`<sup>Required</sup> <a name="deleteRule" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.property.deleteRule"></a>

```typescript
public readonly deleteRule: string;
```

- *Type:* string

---

##### `deviceName`<sup>Required</sup> <a name="deviceName" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.property.deviceName"></a>

```typescript
public readonly deviceName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDiskOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleComputeRegionInstanceGroupManagerStatefulDisk;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulDisk">DataGoogleComputeRegionInstanceGroupManagerStatefulDisk</a>

---


### DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpList <a name="DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpList" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpList.Initializer"></a>

```typescript
import { dataGoogleComputeRegionInstanceGroupManager } from '@cdktn/provider-google'

new dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpList.get"></a>

```typescript
public get(index: number): DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference <a name="DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.Initializer"></a>

```typescript
import { dataGoogleComputeRegionInstanceGroupManager } from '@cdktn/provider-google'

new dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.property.deleteRule">deleteRule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.property.interfaceName">interfaceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIp">DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIp</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deleteRule`<sup>Required</sup> <a name="deleteRule" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.property.deleteRule"></a>

```typescript
public readonly deleteRule: string;
```

- *Type:* string

---

##### `interfaceName`<sup>Required</sup> <a name="interfaceName" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.property.interfaceName"></a>

```typescript
public readonly interfaceName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIpOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIp;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIp">DataGoogleComputeRegionInstanceGroupManagerStatefulExternalIp</a>

---


### DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpList <a name="DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpList" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpList.Initializer"></a>

```typescript
import { dataGoogleComputeRegionInstanceGroupManager } from '@cdktn/provider-google'

new dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpList.get"></a>

```typescript
public get(index: number): DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference <a name="DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.Initializer"></a>

```typescript
import { dataGoogleComputeRegionInstanceGroupManager } from '@cdktn/provider-google'

new dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.property.deleteRule">deleteRule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.property.interfaceName">interfaceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIp">DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIp</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `deleteRule`<sup>Required</sup> <a name="deleteRule" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.property.deleteRule"></a>

```typescript
public readonly deleteRule: string;
```

- *Type:* string

---

##### `interfaceName`<sup>Required</sup> <a name="interfaceName" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.property.interfaceName"></a>

```typescript
public readonly interfaceName: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIpOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIp;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIp">DataGoogleComputeRegionInstanceGroupManagerStatefulInternalIp</a>

---


### DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigList <a name="DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigList" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigList.Initializer"></a>

```typescript
import { dataGoogleComputeRegionInstanceGroupManager } from '@cdktn/provider-google'

new dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigList.get"></a>

```typescript
public get(index: number): DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference <a name="DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.Initializer"></a>

```typescript
import { dataGoogleComputeRegionInstanceGroupManager } from '@cdktn/provider-google'

new dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.property.currentRevision">currentRevision</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.property.effective">effective</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfig">DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `currentRevision`<sup>Required</sup> <a name="currentRevision" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.property.currentRevision"></a>

```typescript
public readonly currentRevision: string;
```

- *Type:* string

---

##### `effective`<sup>Required</sup> <a name="effective" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.property.effective"></a>

```typescript
public readonly effective: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfig;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfig">DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfig</a>

---


### DataGoogleComputeRegionInstanceGroupManagerStatusList <a name="DataGoogleComputeRegionInstanceGroupManagerStatusList" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusList.Initializer"></a>

```typescript
import { dataGoogleComputeRegionInstanceGroupManager } from '@cdktn/provider-google'

new dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusList.get"></a>

```typescript
public get(index: number): DataGoogleComputeRegionInstanceGroupManagerStatusOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleComputeRegionInstanceGroupManagerStatusOutputReference <a name="DataGoogleComputeRegionInstanceGroupManagerStatusOutputReference" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusOutputReference.Initializer"></a>

```typescript
import { dataGoogleComputeRegionInstanceGroupManager } from '@cdktn/provider-google'

new dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusOutputReference.property.allInstancesConfig">allInstancesConfig</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigList">DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusOutputReference.property.isStable">isStable</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusOutputReference.property.stateful">stateful</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulList">DataGoogleComputeRegionInstanceGroupManagerStatusStatefulList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusOutputReference.property.versionTarget">versionTarget</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetList">DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatus">DataGoogleComputeRegionInstanceGroupManagerStatus</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allInstancesConfig`<sup>Required</sup> <a name="allInstancesConfig" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusOutputReference.property.allInstancesConfig"></a>

```typescript
public readonly allInstancesConfig: DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigList">DataGoogleComputeRegionInstanceGroupManagerStatusAllInstancesConfigList</a>

---

##### `isStable`<sup>Required</sup> <a name="isStable" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusOutputReference.property.isStable"></a>

```typescript
public readonly isStable: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `stateful`<sup>Required</sup> <a name="stateful" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusOutputReference.property.stateful"></a>

```typescript
public readonly stateful: DataGoogleComputeRegionInstanceGroupManagerStatusStatefulList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulList">DataGoogleComputeRegionInstanceGroupManagerStatusStatefulList</a>

---

##### `versionTarget`<sup>Required</sup> <a name="versionTarget" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusOutputReference.property.versionTarget"></a>

```typescript
public readonly versionTarget: DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetList">DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleComputeRegionInstanceGroupManagerStatus;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatus">DataGoogleComputeRegionInstanceGroupManagerStatus</a>

---


### DataGoogleComputeRegionInstanceGroupManagerStatusStatefulList <a name="DataGoogleComputeRegionInstanceGroupManagerStatusStatefulList" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulList.Initializer"></a>

```typescript
import { dataGoogleComputeRegionInstanceGroupManager } from '@cdktn/provider-google'

new dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulList.get"></a>

```typescript
public get(index: number): DataGoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference <a name="DataGoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.Initializer"></a>

```typescript
import { dataGoogleComputeRegionInstanceGroupManager } from '@cdktn/provider-google'

new dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.property.hasStatefulConfig">hasStatefulConfig</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.property.perInstanceConfigs">perInstanceConfigs</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList">DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStateful">DataGoogleComputeRegionInstanceGroupManagerStatusStateful</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `hasStatefulConfig`<sup>Required</sup> <a name="hasStatefulConfig" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.property.hasStatefulConfig"></a>

```typescript
public readonly hasStatefulConfig: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `perInstanceConfigs`<sup>Required</sup> <a name="perInstanceConfigs" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.property.perInstanceConfigs"></a>

```typescript
public readonly perInstanceConfigs: DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList">DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleComputeRegionInstanceGroupManagerStatusStateful;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStateful">DataGoogleComputeRegionInstanceGroupManagerStatusStateful</a>

---


### DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList <a name="DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList.Initializer"></a>

```typescript
import { dataGoogleComputeRegionInstanceGroupManager } from '@cdktn/provider-google'

new dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList.get"></a>

```typescript
public get(index: number): DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference <a name="DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.Initializer"></a>

```typescript
import { dataGoogleComputeRegionInstanceGroupManager } from '@cdktn/provider-google'

new dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.property.allEffective">allEffective</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigs">DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `allEffective`<sup>Required</sup> <a name="allEffective" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.property.allEffective"></a>

```typescript
public readonly allEffective: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigs;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigs">DataGoogleComputeRegionInstanceGroupManagerStatusStatefulPerInstanceConfigs</a>

---


### DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetList <a name="DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetList" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetList.Initializer"></a>

```typescript
import { dataGoogleComputeRegionInstanceGroupManager } from '@cdktn/provider-google'

new dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetList.get"></a>

```typescript
public get(index: number): DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference <a name="DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.Initializer"></a>

```typescript
import { dataGoogleComputeRegionInstanceGroupManager } from '@cdktn/provider-google'

new dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.property.isReached">isReached</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTarget">DataGoogleComputeRegionInstanceGroupManagerStatusVersionTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `isReached`<sup>Required</sup> <a name="isReached" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.property.isReached"></a>

```typescript
public readonly isReached: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTargetOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleComputeRegionInstanceGroupManagerStatusVersionTarget;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerStatusVersionTarget">DataGoogleComputeRegionInstanceGroupManagerStatusVersionTarget</a>

---


### DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyList <a name="DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyList" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyList.Initializer"></a>

```typescript
import { dataGoogleComputeRegionInstanceGroupManager } from '@cdktn/provider-google'

new dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyList.get"></a>

```typescript
public get(index: number): DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyOutputReference <a name="DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyOutputReference" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyOutputReference.Initializer"></a>

```typescript
import { dataGoogleComputeRegionInstanceGroupManager } from '@cdktn/provider-google'

new dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyOutputReference.property.mode">mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicy">DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyOutputReference.property.mode"></a>

```typescript
public readonly mode: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicy;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicy">DataGoogleComputeRegionInstanceGroupManagerTargetSizePolicy</a>

---


### DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyList <a name="DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyList" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyList.Initializer"></a>

```typescript
import { dataGoogleComputeRegionInstanceGroupManager } from '@cdktn/provider-google'

new dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyList.get"></a>

```typescript
public get(index: number): DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference <a name="DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.Initializer"></a>

```typescript
import { dataGoogleComputeRegionInstanceGroupManager } from '@cdktn/provider-google'

new dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.instanceRedistributionType">instanceRedistributionType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.maxSurgeFixed">maxSurgeFixed</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.maxSurgePercent">maxSurgePercent</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.maxUnavailableFixed">maxUnavailableFixed</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.maxUnavailablePercent">maxUnavailablePercent</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.minimalAction">minimalAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.mostDisruptiveAllowedAction">mostDisruptiveAllowedAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.replacementMethod">replacementMethod</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.type">type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicy">DataGoogleComputeRegionInstanceGroupManagerUpdatePolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `instanceRedistributionType`<sup>Required</sup> <a name="instanceRedistributionType" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.instanceRedistributionType"></a>

```typescript
public readonly instanceRedistributionType: string;
```

- *Type:* string

---

##### `maxSurgeFixed`<sup>Required</sup> <a name="maxSurgeFixed" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.maxSurgeFixed"></a>

```typescript
public readonly maxSurgeFixed: number;
```

- *Type:* number

---

##### `maxSurgePercent`<sup>Required</sup> <a name="maxSurgePercent" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.maxSurgePercent"></a>

```typescript
public readonly maxSurgePercent: number;
```

- *Type:* number

---

##### `maxUnavailableFixed`<sup>Required</sup> <a name="maxUnavailableFixed" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.maxUnavailableFixed"></a>

```typescript
public readonly maxUnavailableFixed: number;
```

- *Type:* number

---

##### `maxUnavailablePercent`<sup>Required</sup> <a name="maxUnavailablePercent" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.maxUnavailablePercent"></a>

```typescript
public readonly maxUnavailablePercent: number;
```

- *Type:* number

---

##### `minimalAction`<sup>Required</sup> <a name="minimalAction" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.minimalAction"></a>

```typescript
public readonly minimalAction: string;
```

- *Type:* string

---

##### `mostDisruptiveAllowedAction`<sup>Required</sup> <a name="mostDisruptiveAllowedAction" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.mostDisruptiveAllowedAction"></a>

```typescript
public readonly mostDisruptiveAllowedAction: string;
```

- *Type:* string

---

##### `replacementMethod`<sup>Required</sup> <a name="replacementMethod" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.replacementMethod"></a>

```typescript
public readonly replacementMethod: string;
```

- *Type:* string

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.type"></a>

```typescript
public readonly type: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleComputeRegionInstanceGroupManagerUpdatePolicy;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerUpdatePolicy">DataGoogleComputeRegionInstanceGroupManagerUpdatePolicy</a>

---


### DataGoogleComputeRegionInstanceGroupManagerVersionList <a name="DataGoogleComputeRegionInstanceGroupManagerVersionList" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionList.Initializer"></a>

```typescript
import { dataGoogleComputeRegionInstanceGroupManager } from '@cdktn/provider-google'

new dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionList.get"></a>

```typescript
public get(index: number): DataGoogleComputeRegionInstanceGroupManagerVersionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleComputeRegionInstanceGroupManagerVersionOutputReference <a name="DataGoogleComputeRegionInstanceGroupManagerVersionOutputReference" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionOutputReference.Initializer"></a>

```typescript
import { dataGoogleComputeRegionInstanceGroupManager } from '@cdktn/provider-google'

new dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionOutputReference.property.instanceTemplate">instanceTemplate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionOutputReference.property.targetSize">targetSize</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeList">DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersion">DataGoogleComputeRegionInstanceGroupManagerVersion</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `instanceTemplate`<sup>Required</sup> <a name="instanceTemplate" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionOutputReference.property.instanceTemplate"></a>

```typescript
public readonly instanceTemplate: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `targetSize`<sup>Required</sup> <a name="targetSize" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionOutputReference.property.targetSize"></a>

```typescript
public readonly targetSize: DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeList">DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeList</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleComputeRegionInstanceGroupManagerVersion;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersion">DataGoogleComputeRegionInstanceGroupManagerVersion</a>

---


### DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeList <a name="DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeList" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeList.Initializer"></a>

```typescript
import { dataGoogleComputeRegionInstanceGroupManager } from '@cdktn/provider-google'

new dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeList.get"></a>

```typescript
public get(index: number): DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference <a name="DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.Initializer"></a>

```typescript
import { dataGoogleComputeRegionInstanceGroupManager } from '@cdktn/provider-google'

new dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.property.fixed">fixed</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.property.percent">percent</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSize">DataGoogleComputeRegionInstanceGroupManagerVersionTargetSize</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `fixed`<sup>Required</sup> <a name="fixed" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.property.fixed"></a>

```typescript
public readonly fixed: number;
```

- *Type:* number

---

##### `percent`<sup>Required</sup> <a name="percent" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.property.percent"></a>

```typescript
public readonly percent: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSizeOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleComputeRegionInstanceGroupManagerVersionTargetSize;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeRegionInstanceGroupManager.DataGoogleComputeRegionInstanceGroupManagerVersionTargetSize">DataGoogleComputeRegionInstanceGroupManagerVersionTargetSize</a>

---



