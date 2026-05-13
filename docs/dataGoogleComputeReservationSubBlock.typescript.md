# `dataGoogleComputeReservationSubBlock` Submodule <a name="`dataGoogleComputeReservationSubBlock` Submodule" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleComputeReservationSubBlock <a name="DataGoogleComputeReservationSubBlock" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/data-sources/compute_reservation_sub_block google_compute_reservation_sub_block}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.Initializer"></a>

```typescript
import { dataGoogleComputeReservationSubBlock } from '@cdktn/provider-google'

new dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock(scope: Construct, id: string, config: DataGoogleComputeReservationSubBlockConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockConfig">DataGoogleComputeReservationSubBlockConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockConfig">DataGoogleComputeReservationSubBlockConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.resetZone">resetZone</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetId` <a name="resetId" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetZone` <a name="resetZone" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.resetZone"></a>

```typescript
public resetZone(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleComputeReservationSubBlock resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.isConstruct"></a>

```typescript
import { dataGoogleComputeReservationSubBlock } from '@cdktn/provider-google'

dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.isTerraformElement"></a>

```typescript
import { dataGoogleComputeReservationSubBlock } from '@cdktn/provider-google'

dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.isTerraformDataSource"></a>

```typescript
import { dataGoogleComputeReservationSubBlock } from '@cdktn/provider-google'

dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.generateConfigForImport"></a>

```typescript
import { dataGoogleComputeReservationSubBlock } from '@cdktn/provider-google'

dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataGoogleComputeReservationSubBlock resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleComputeReservationSubBlock to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleComputeReservationSubBlock that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/data-sources/compute_reservation_sub_block#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleComputeReservationSubBlock to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.creationTimestamp">creationTimestamp</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.healthInfo">healthInfo</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoList">DataGoogleComputeReservationSubBlockHealthInfoList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.inUseCount">inUseCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.kind">kind</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.physicalTopology">physicalTopology</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyList">DataGoogleComputeReservationSubBlockPhysicalTopologyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.reservationSubBlockMaintenance">reservationSubBlockMaintenance</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceList">DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.resourceId">resourceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.selfLink">selfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.selfLinkWithId">selfLinkWithId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.subBlockCount">subBlockCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.nameInput">nameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.reservationBlockInput">reservationBlockInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.reservationInput">reservationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.zoneInput">zoneInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.reservation">reservation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.reservationBlock">reservationBlock</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.zone">zone</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `creationTimestamp`<sup>Required</sup> <a name="creationTimestamp" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.creationTimestamp"></a>

```typescript
public readonly creationTimestamp: string;
```

- *Type:* string

---

##### `healthInfo`<sup>Required</sup> <a name="healthInfo" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.healthInfo"></a>

```typescript
public readonly healthInfo: DataGoogleComputeReservationSubBlockHealthInfoList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoList">DataGoogleComputeReservationSubBlockHealthInfoList</a>

---

##### `inUseCount`<sup>Required</sup> <a name="inUseCount" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.inUseCount"></a>

```typescript
public readonly inUseCount: number;
```

- *Type:* number

---

##### `kind`<sup>Required</sup> <a name="kind" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.kind"></a>

```typescript
public readonly kind: string;
```

- *Type:* string

---

##### `physicalTopology`<sup>Required</sup> <a name="physicalTopology" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.physicalTopology"></a>

```typescript
public readonly physicalTopology: DataGoogleComputeReservationSubBlockPhysicalTopologyList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyList">DataGoogleComputeReservationSubBlockPhysicalTopologyList</a>

---

##### `reservationSubBlockMaintenance`<sup>Required</sup> <a name="reservationSubBlockMaintenance" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.reservationSubBlockMaintenance"></a>

```typescript
public readonly reservationSubBlockMaintenance: DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceList">DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceList</a>

---

##### `resourceId`<sup>Required</sup> <a name="resourceId" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.resourceId"></a>

```typescript
public readonly resourceId: string;
```

- *Type:* string

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.selfLink"></a>

```typescript
public readonly selfLink: string;
```

- *Type:* string

---

##### `selfLinkWithId`<sup>Required</sup> <a name="selfLinkWithId" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.selfLinkWithId"></a>

```typescript
public readonly selfLinkWithId: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `subBlockCount`<sup>Required</sup> <a name="subBlockCount" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.subBlockCount"></a>

```typescript
public readonly subBlockCount: number;
```

- *Type:* number

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.nameInput"></a>

```typescript
public readonly nameInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `reservationBlockInput`<sup>Optional</sup> <a name="reservationBlockInput" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.reservationBlockInput"></a>

```typescript
public readonly reservationBlockInput: string;
```

- *Type:* string

---

##### `reservationInput`<sup>Optional</sup> <a name="reservationInput" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.reservationInput"></a>

```typescript
public readonly reservationInput: string;
```

- *Type:* string

---

##### `zoneInput`<sup>Optional</sup> <a name="zoneInput" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.zoneInput"></a>

```typescript
public readonly zoneInput: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `reservation`<sup>Required</sup> <a name="reservation" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.reservation"></a>

```typescript
public readonly reservation: string;
```

- *Type:* string

---

##### `reservationBlock`<sup>Required</sup> <a name="reservationBlock" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.reservationBlock"></a>

```typescript
public readonly reservationBlock: string;
```

- *Type:* string

---

##### `zone`<sup>Required</sup> <a name="zone" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlock.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleComputeReservationSubBlockConfig <a name="DataGoogleComputeReservationSubBlockConfig" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockConfig.Initializer"></a>

```typescript
import { dataGoogleComputeReservationSubBlock } from '@cdktn/provider-google'

const dataGoogleComputeReservationSubBlockConfig: dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockConfig.property.name">name</a></code> | <code>string</code> | The name of the reservation sub-block. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockConfig.property.reservation">reservation</a></code> | <code>string</code> | The name of the parent reservation. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockConfig.property.reservationBlock">reservationBlock</a></code> | <code>string</code> | The name of the parent reservation block. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/data-sources/compute_reservation_sub_block#id DataGoogleComputeReservationSubBlock#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockConfig.property.project">project</a></code> | <code>string</code> | The project in which the resource belongs. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockConfig.property.zone">zone</a></code> | <code>string</code> | The zone where the reservation sub-block resides. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockConfig.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

The name of the reservation sub-block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/data-sources/compute_reservation_sub_block#name DataGoogleComputeReservationSubBlock#name}

---

##### `reservation`<sup>Required</sup> <a name="reservation" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockConfig.property.reservation"></a>

```typescript
public readonly reservation: string;
```

- *Type:* string

The name of the parent reservation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/data-sources/compute_reservation_sub_block#reservation DataGoogleComputeReservationSubBlock#reservation}

---

##### `reservationBlock`<sup>Required</sup> <a name="reservationBlock" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockConfig.property.reservationBlock"></a>

```typescript
public readonly reservationBlock: string;
```

- *Type:* string

The name of the parent reservation block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/data-sources/compute_reservation_sub_block#reservation_block DataGoogleComputeReservationSubBlock#reservation_block}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/data-sources/compute_reservation_sub_block#id DataGoogleComputeReservationSubBlock#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

The project in which the resource belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/data-sources/compute_reservation_sub_block#project DataGoogleComputeReservationSubBlock#project}

---

##### `zone`<sup>Optional</sup> <a name="zone" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockConfig.property.zone"></a>

```typescript
public readonly zone: string;
```

- *Type:* string

The zone where the reservation sub-block resides.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/7.32.0/docs/data-sources/compute_reservation_sub_block#zone DataGoogleComputeReservationSubBlock#zone}

---

### DataGoogleComputeReservationSubBlockHealthInfo <a name="DataGoogleComputeReservationSubBlockHealthInfo" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfo.Initializer"></a>

```typescript
import { dataGoogleComputeReservationSubBlock } from '@cdktn/provider-google'

const dataGoogleComputeReservationSubBlockHealthInfo: dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfo = { ... }
```


### DataGoogleComputeReservationSubBlockPhysicalTopology <a name="DataGoogleComputeReservationSubBlockPhysicalTopology" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopology"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopology.Initializer"></a>

```typescript
import { dataGoogleComputeReservationSubBlock } from '@cdktn/provider-google'

const dataGoogleComputeReservationSubBlockPhysicalTopology: dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopology = { ... }
```


### DataGoogleComputeReservationSubBlockReservationSubBlockMaintenance <a name="DataGoogleComputeReservationSubBlockReservationSubBlockMaintenance" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenance"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenance.Initializer"></a>

```typescript
import { dataGoogleComputeReservationSubBlock } from '@cdktn/provider-google'

const dataGoogleComputeReservationSubBlockReservationSubBlockMaintenance: dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenance = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleComputeReservationSubBlockHealthInfoList <a name="DataGoogleComputeReservationSubBlockHealthInfoList" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoList.Initializer"></a>

```typescript
import { dataGoogleComputeReservationSubBlock } from '@cdktn/provider-google'

new dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoList.get"></a>

```typescript
public get(index: number): DataGoogleComputeReservationSubBlockHealthInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleComputeReservationSubBlockHealthInfoOutputReference <a name="DataGoogleComputeReservationSubBlockHealthInfoOutputReference" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.Initializer"></a>

```typescript
import { dataGoogleComputeReservationSubBlock } from '@cdktn/provider-google'

new dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.property.degradedHostCount">degradedHostCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.property.degradedInfraCount">degradedInfraCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.property.healthStatus">healthStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.property.healthyHostCount">healthyHostCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.property.healthyInfraCount">healthyInfraCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfo">DataGoogleComputeReservationSubBlockHealthInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `degradedHostCount`<sup>Required</sup> <a name="degradedHostCount" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.property.degradedHostCount"></a>

```typescript
public readonly degradedHostCount: number;
```

- *Type:* number

---

##### `degradedInfraCount`<sup>Required</sup> <a name="degradedInfraCount" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.property.degradedInfraCount"></a>

```typescript
public readonly degradedInfraCount: number;
```

- *Type:* number

---

##### `healthStatus`<sup>Required</sup> <a name="healthStatus" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.property.healthStatus"></a>

```typescript
public readonly healthStatus: string;
```

- *Type:* string

---

##### `healthyHostCount`<sup>Required</sup> <a name="healthyHostCount" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.property.healthyHostCount"></a>

```typescript
public readonly healthyHostCount: number;
```

- *Type:* number

---

##### `healthyInfraCount`<sup>Required</sup> <a name="healthyInfraCount" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.property.healthyInfraCount"></a>

```typescript
public readonly healthyInfraCount: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfoOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleComputeReservationSubBlockHealthInfo;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockHealthInfo">DataGoogleComputeReservationSubBlockHealthInfo</a>

---


### DataGoogleComputeReservationSubBlockPhysicalTopologyList <a name="DataGoogleComputeReservationSubBlockPhysicalTopologyList" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyList.Initializer"></a>

```typescript
import { dataGoogleComputeReservationSubBlock } from '@cdktn/provider-google'

new dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyList.get"></a>

```typescript
public get(index: number): DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference <a name="DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.Initializer"></a>

```typescript
import { dataGoogleComputeReservationSubBlock } from '@cdktn/provider-google'

new dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.property.block">block</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.property.cluster">cluster</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.property.subBlock">subBlock</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopology">DataGoogleComputeReservationSubBlockPhysicalTopology</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `block`<sup>Required</sup> <a name="block" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.property.block"></a>

```typescript
public readonly block: string;
```

- *Type:* string

---

##### `cluster`<sup>Required</sup> <a name="cluster" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.property.cluster"></a>

```typescript
public readonly cluster: string;
```

- *Type:* string

---

##### `subBlock`<sup>Required</sup> <a name="subBlock" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.property.subBlock"></a>

```typescript
public readonly subBlock: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopologyOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleComputeReservationSubBlockPhysicalTopology;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockPhysicalTopology">DataGoogleComputeReservationSubBlockPhysicalTopology</a>

---


### DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceList <a name="DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceList" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceList.Initializer"></a>

```typescript
import { dataGoogleComputeReservationSubBlock } from '@cdktn/provider-google'

new dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceList.get"></a>

```typescript
public get(index: number): DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference <a name="DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.Initializer"></a>

```typescript
import { dataGoogleComputeReservationSubBlock } from '@cdktn/provider-google'

new dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.property.instanceMaintenanceOngoingCount">instanceMaintenanceOngoingCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.property.instanceMaintenancePendingCount">instanceMaintenancePendingCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.property.maintenanceOngoingCount">maintenanceOngoingCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.property.maintenancePendingCount">maintenancePendingCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.property.schedulingType">schedulingType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.property.subblockInfraMaintenanceOngoingCount">subblockInfraMaintenanceOngoingCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.property.subblockInfraMaintenancePendingCount">subblockInfraMaintenancePendingCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenance">DataGoogleComputeReservationSubBlockReservationSubBlockMaintenance</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `instanceMaintenanceOngoingCount`<sup>Required</sup> <a name="instanceMaintenanceOngoingCount" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.property.instanceMaintenanceOngoingCount"></a>

```typescript
public readonly instanceMaintenanceOngoingCount: number;
```

- *Type:* number

---

##### `instanceMaintenancePendingCount`<sup>Required</sup> <a name="instanceMaintenancePendingCount" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.property.instanceMaintenancePendingCount"></a>

```typescript
public readonly instanceMaintenancePendingCount: number;
```

- *Type:* number

---

##### `maintenanceOngoingCount`<sup>Required</sup> <a name="maintenanceOngoingCount" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.property.maintenanceOngoingCount"></a>

```typescript
public readonly maintenanceOngoingCount: number;
```

- *Type:* number

---

##### `maintenancePendingCount`<sup>Required</sup> <a name="maintenancePendingCount" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.property.maintenancePendingCount"></a>

```typescript
public readonly maintenancePendingCount: number;
```

- *Type:* number

---

##### `schedulingType`<sup>Required</sup> <a name="schedulingType" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.property.schedulingType"></a>

```typescript
public readonly schedulingType: string;
```

- *Type:* string

---

##### `subblockInfraMaintenanceOngoingCount`<sup>Required</sup> <a name="subblockInfraMaintenanceOngoingCount" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.property.subblockInfraMaintenanceOngoingCount"></a>

```typescript
public readonly subblockInfraMaintenanceOngoingCount: number;
```

- *Type:* number

---

##### `subblockInfraMaintenancePendingCount`<sup>Required</sup> <a name="subblockInfraMaintenancePendingCount" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.property.subblockInfraMaintenancePendingCount"></a>

```typescript
public readonly subblockInfraMaintenancePendingCount: number;
```

- *Type:* number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenanceOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleComputeReservationSubBlockReservationSubBlockMaintenance;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeReservationSubBlock.DataGoogleComputeReservationSubBlockReservationSubBlockMaintenance">DataGoogleComputeReservationSubBlockReservationSubBlockMaintenance</a>

---



