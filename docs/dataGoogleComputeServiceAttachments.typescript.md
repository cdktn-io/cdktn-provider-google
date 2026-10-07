# `dataGoogleComputeServiceAttachments` Submodule <a name="`dataGoogleComputeServiceAttachments` Submodule" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataGoogleComputeServiceAttachments <a name="DataGoogleComputeServiceAttachments" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/compute_service_attachments google_compute_service_attachments}.

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.Initializer"></a>

```typescript
import { dataGoogleComputeServiceAttachments } from '@cdktn/provider-google'

new dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments(scope: Construct, id: string, config?: DataGoogleComputeServiceAttachmentsConfig)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.Initializer.parameter.id">id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsConfig">DataGoogleComputeServiceAttachmentsConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsConfig">DataGoogleComputeServiceAttachmentsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.resetFilter">resetFilter</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.resetProject">resetProject</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.resetRegion">resetRegion</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.with"></a>

```typescript
public with(mixins: ...IMixin[]): IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.with.parameter.mixins"></a>

- *Type:* ...constructs.IMixin[]

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.addOverride"></a>

```typescript
public addOverride(path: string, value: any): void
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.addOverride.parameter.path"></a>

- *Type:* string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.addOverride.parameter.value"></a>

- *Type:* any

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.overrideLogicalId"></a>

```typescript
public overrideLogicalId(newLogicalId: string): void
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.resetOverrideLogicalId"></a>

```typescript
public resetOverrideLogicalId(): void
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.toHclTerraform"></a>

```typescript
public toHclTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.toMetadata"></a>

```typescript
public toMetadata(): any
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.toTerraform"></a>

```typescript
public toTerraform(): any
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `resetFilter` <a name="resetFilter" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.resetFilter"></a>

```typescript
public resetFilter(): void
```

##### `resetId` <a name="resetId" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.resetId"></a>

```typescript
public resetId(): void
```

##### `resetProject` <a name="resetProject" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.resetProject"></a>

```typescript
public resetProject(): void
```

##### `resetRegion` <a name="resetRegion" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.resetRegion"></a>

```typescript
public resetRegion(): void
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataGoogleComputeServiceAttachments resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.isConstruct"></a>

```typescript
import { dataGoogleComputeServiceAttachments } from '@cdktn/provider-google'

dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.isConstruct(x: any)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.isTerraformElement"></a>

```typescript
import { dataGoogleComputeServiceAttachments } from '@cdktn/provider-google'

dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.isTerraformElement(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.isTerraformElement.parameter.x"></a>

- *Type:* any

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.isTerraformDataSource"></a>

```typescript
import { dataGoogleComputeServiceAttachments } from '@cdktn/provider-google'

dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.isTerraformDataSource(x: any)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.isTerraformDataSource.parameter.x"></a>

- *Type:* any

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.generateConfigForImport"></a>

```typescript
import { dataGoogleComputeServiceAttachments } from '@cdktn/provider-google'

dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: TerraformProvider)
```

Generates CDKTN code for importing a DataGoogleComputeServiceAttachments resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the DataGoogleComputeServiceAttachments to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing DataGoogleComputeServiceAttachments that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/compute_service_attachments#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the DataGoogleComputeServiceAttachments to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.cdktfStack">cdktfStack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>{[ key: string ]: any}</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.terraformResourceType">terraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.dependsOn">dependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.serviceAttachments">serviceAttachments</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsList">DataGoogleComputeServiceAttachmentsServiceAttachmentsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.filterInput">filterInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.idInput">idInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.projectInput">projectInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.regionInput">regionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.filter">filter</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.region">region</a></code> | <code>string</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.cdktfStack"></a>

```typescript
public readonly cdktfStack: TerraformStack;
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.friendlyUniqueId"></a>

```typescript
public readonly friendlyUniqueId: string;
```

- *Type:* string

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.terraformMetaArguments"></a>

```typescript
public readonly terraformMetaArguments: {[ key: string ]: any};
```

- *Type:* {[ key: string ]: any}

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.terraformResourceType"></a>

```typescript
public readonly terraformResourceType: string;
```

- *Type:* string

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.terraformGeneratorMetadata"></a>

```typescript
public readonly terraformGeneratorMetadata: TerraformProviderGeneratorMetadata;
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.dependsOn"></a>

```typescript
public readonly dependsOn: string[];
```

- *Type:* string[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `serviceAttachments`<sup>Required</sup> <a name="serviceAttachments" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.serviceAttachments"></a>

```typescript
public readonly serviceAttachments: DataGoogleComputeServiceAttachmentsServiceAttachmentsList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsList">DataGoogleComputeServiceAttachmentsServiceAttachmentsList</a>

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.filterInput"></a>

```typescript
public readonly filterInput: string;
```

- *Type:* string

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.idInput"></a>

```typescript
public readonly idInput: string;
```

- *Type:* string

---

##### `projectInput`<sup>Optional</sup> <a name="projectInput" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.projectInput"></a>

```typescript
public readonly projectInput: string;
```

- *Type:* string

---

##### `regionInput`<sup>Optional</sup> <a name="regionInput" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.regionInput"></a>

```typescript
public readonly regionInput: string;
```

- *Type:* string

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.filter"></a>

```typescript
public readonly filter: string;
```

- *Type:* string

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.tfResourceType">tfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachments.property.tfResourceType"></a>

```typescript
public readonly tfResourceType: string;
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### DataGoogleComputeServiceAttachmentsConfig <a name="DataGoogleComputeServiceAttachmentsConfig" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsConfig.Initializer"></a>

```typescript
import { dataGoogleComputeServiceAttachments } from '@cdktn/provider-google'

const dataGoogleComputeServiceAttachmentsConfig: dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsConfig = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsConfig.property.count">count</a></code> | <code>number \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsConfig.property.dependsOn">dependsOn</a></code> | <code>cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsConfig.property.forEach">forEach</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsConfig.property.provisioners">provisioners</a></code> | <code>cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsConfig.property.filter">filter</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/compute_service_attachments#filter DataGoogleComputeServiceAttachments#filter}. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsConfig.property.id">id</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/compute_service_attachments#id DataGoogleComputeServiceAttachments#id}. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsConfig.property.project">project</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/compute_service_attachments#project DataGoogleComputeServiceAttachments#project}. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsConfig.property.region">region</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/compute_service_attachments#region DataGoogleComputeServiceAttachments#region}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsConfig.property.connection"></a>

```typescript
public readonly connection: SSHProvisionerConnection | WinrmProvisionerConnection;
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsConfig.property.count"></a>

```typescript
public readonly count: number | TerraformCount;
```

- *Type:* number | cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsConfig.property.dependsOn"></a>

```typescript
public readonly dependsOn: ITerraformDependable[];
```

- *Type:* cdktn.ITerraformDependable[]

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsConfig.property.forEach"></a>

```typescript
public readonly forEach: ITerraformIterator;
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsConfig.property.lifecycle"></a>

```typescript
public readonly lifecycle: TerraformResourceLifecycle;
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsConfig.property.provider"></a>

```typescript
public readonly provider: TerraformProvider;
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsConfig.property.provisioners"></a>

```typescript
public readonly provisioners: (FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner)[];
```

- *Type:* cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner[]

---

##### `filter`<sup>Optional</sup> <a name="filter" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsConfig.property.filter"></a>

```typescript
public readonly filter: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/compute_service_attachments#filter DataGoogleComputeServiceAttachments#filter}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsConfig.property.id"></a>

```typescript
public readonly id: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/compute_service_attachments#id DataGoogleComputeServiceAttachments#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `project`<sup>Optional</sup> <a name="project" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsConfig.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/compute_service_attachments#project DataGoogleComputeServiceAttachments#project}.

---

##### `region`<sup>Optional</sup> <a name="region" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsConfig.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/google/8.6.0/docs/data-sources/compute_service_attachments#region DataGoogleComputeServiceAttachments#region}.

---

### DataGoogleComputeServiceAttachmentsServiceAttachments <a name="DataGoogleComputeServiceAttachmentsServiceAttachments" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachments"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachments.Initializer"></a>

```typescript
import { dataGoogleComputeServiceAttachments } from '@cdktn/provider-google'

const dataGoogleComputeServiceAttachmentsServiceAttachments: dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachments = { ... }
```


### DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpoints <a name="DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpoints" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpoints"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpoints.Initializer"></a>

```typescript
import { dataGoogleComputeServiceAttachments } from '@cdktn/provider-google'

const dataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpoints: dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpoints = { ... }
```


### DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptLists <a name="DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptLists" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptLists"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptLists.Initializer"></a>

```typescript
import { dataGoogleComputeServiceAttachments } from '@cdktn/provider-google'

const dataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptLists: dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptLists = { ... }
```


### DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentId <a name="DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentId" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentId"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentId.Initializer"></a>

```typescript
import { dataGoogleComputeServiceAttachments } from '@cdktn/provider-google'

const dataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentId: dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentId = { ... }
```


## Classes <a name="Classes" id="Classes"></a>

### DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList <a name="DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList.Initializer"></a>

```typescript
import { dataGoogleComputeServiceAttachments } from '@cdktn/provider-google'

new dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList.get"></a>

```typescript
public get(index: number): DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference <a name="DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.Initializer"></a>

```typescript
import { dataGoogleComputeServiceAttachments } from '@cdktn/provider-google'

new dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.property.consumerNetwork">consumerNetwork</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.property.endpoint">endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.property.natIps">natIps</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.property.propagatedConnectionCount">propagatedConnectionCount</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.property.pscConnectionId">pscConnectionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.property.status">status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpoints">DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpoints</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `consumerNetwork`<sup>Required</sup> <a name="consumerNetwork" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.property.consumerNetwork"></a>

```typescript
public readonly consumerNetwork: string;
```

- *Type:* string

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.property.endpoint"></a>

```typescript
public readonly endpoint: string;
```

- *Type:* string

---

##### `natIps`<sup>Required</sup> <a name="natIps" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.property.natIps"></a>

```typescript
public readonly natIps: string[];
```

- *Type:* string[]

---

##### `propagatedConnectionCount`<sup>Required</sup> <a name="propagatedConnectionCount" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.property.propagatedConnectionCount"></a>

```typescript
public readonly propagatedConnectionCount: number;
```

- *Type:* number

---

##### `pscConnectionId`<sup>Required</sup> <a name="pscConnectionId" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.property.pscConnectionId"></a>

```typescript
public readonly pscConnectionId: string;
```

- *Type:* string

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.property.status"></a>

```typescript
public readonly status: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpoints;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpoints">DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpoints</a>

---


### DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList <a name="DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList.Initializer"></a>

```typescript
import { dataGoogleComputeServiceAttachments } from '@cdktn/provider-google'

new dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList.get"></a>

```typescript
public get(index: number): DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference <a name="DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.Initializer"></a>

```typescript
import { dataGoogleComputeServiceAttachments } from '@cdktn/provider-google'

new dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.property.connectionLimit">connectionLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.property.endpointUrl">endpointUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.property.networkUrl">networkUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.property.projectIdOrNum">projectIdOrNum</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptLists">DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptLists</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `connectionLimit`<sup>Required</sup> <a name="connectionLimit" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.property.connectionLimit"></a>

```typescript
public readonly connectionLimit: number;
```

- *Type:* number

---

##### `endpointUrl`<sup>Required</sup> <a name="endpointUrl" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.property.endpointUrl"></a>

```typescript
public readonly endpointUrl: string;
```

- *Type:* string

---

##### `networkUrl`<sup>Required</sup> <a name="networkUrl" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.property.networkUrl"></a>

```typescript
public readonly networkUrl: string;
```

- *Type:* string

---

##### `projectIdOrNum`<sup>Required</sup> <a name="projectIdOrNum" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.property.projectIdOrNum"></a>

```typescript
public readonly projectIdOrNum: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptLists;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptLists">DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptLists</a>

---


### DataGoogleComputeServiceAttachmentsServiceAttachmentsList <a name="DataGoogleComputeServiceAttachmentsServiceAttachmentsList" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsList.Initializer"></a>

```typescript
import { dataGoogleComputeServiceAttachments } from '@cdktn/provider-google'

new dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsList.get"></a>

```typescript
public get(index: number): DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference <a name="DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.Initializer"></a>

```typescript
import { dataGoogleComputeServiceAttachments } from '@cdktn/provider-google'

new dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.connectedEndpoints">connectedEndpoints</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList">DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.connectionPreference">connectionPreference</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.consumerAcceptLists">consumerAcceptLists</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList">DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.consumerRejectLists">consumerRejectLists</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.deletionPolicy">deletionPolicy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.description">description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.domainNames">domainNames</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.enableProxyProtocol">enableProxyProtocol</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.fingerprint">fingerprint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.name">name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.natIpsPerEndpoint">natIpsPerEndpoint</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.natSubnets">natSubnets</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.project">project</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.propagatedConnectionLimit">propagatedConnectionLimit</a></code> | <code>number</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.pscServiceAttachmentId">pscServiceAttachmentId</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList">DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.reconcileConnections">reconcileConnections</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.region">region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.selfLink">selfLink</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.sendPropagatedConnectionLimitIfZero">sendPropagatedConnectionLimitIfZero</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.showNatIps">showNatIps</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.targetService">targetService</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachments">DataGoogleComputeServiceAttachmentsServiceAttachments</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `connectedEndpoints`<sup>Required</sup> <a name="connectedEndpoints" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.connectedEndpoints"></a>

```typescript
public readonly connectedEndpoints: DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList">DataGoogleComputeServiceAttachmentsServiceAttachmentsConnectedEndpointsList</a>

---

##### `connectionPreference`<sup>Required</sup> <a name="connectionPreference" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.connectionPreference"></a>

```typescript
public readonly connectionPreference: string;
```

- *Type:* string

---

##### `consumerAcceptLists`<sup>Required</sup> <a name="consumerAcceptLists" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.consumerAcceptLists"></a>

```typescript
public readonly consumerAcceptLists: DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList">DataGoogleComputeServiceAttachmentsServiceAttachmentsConsumerAcceptListsList</a>

---

##### `consumerRejectLists`<sup>Required</sup> <a name="consumerRejectLists" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.consumerRejectLists"></a>

```typescript
public readonly consumerRejectLists: string[];
```

- *Type:* string[]

---

##### `deletionPolicy`<sup>Required</sup> <a name="deletionPolicy" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.deletionPolicy"></a>

```typescript
public readonly deletionPolicy: string;
```

- *Type:* string

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.description"></a>

```typescript
public readonly description: string;
```

- *Type:* string

---

##### `domainNames`<sup>Required</sup> <a name="domainNames" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.domainNames"></a>

```typescript
public readonly domainNames: string[];
```

- *Type:* string[]

---

##### `enableProxyProtocol`<sup>Required</sup> <a name="enableProxyProtocol" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.enableProxyProtocol"></a>

```typescript
public readonly enableProxyProtocol: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `fingerprint`<sup>Required</sup> <a name="fingerprint" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.fingerprint"></a>

```typescript
public readonly fingerprint: string;
```

- *Type:* string

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.name"></a>

```typescript
public readonly name: string;
```

- *Type:* string

---

##### `natIpsPerEndpoint`<sup>Required</sup> <a name="natIpsPerEndpoint" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.natIpsPerEndpoint"></a>

```typescript
public readonly natIpsPerEndpoint: number;
```

- *Type:* number

---

##### `natSubnets`<sup>Required</sup> <a name="natSubnets" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.natSubnets"></a>

```typescript
public readonly natSubnets: string[];
```

- *Type:* string[]

---

##### `project`<sup>Required</sup> <a name="project" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.project"></a>

```typescript
public readonly project: string;
```

- *Type:* string

---

##### `propagatedConnectionLimit`<sup>Required</sup> <a name="propagatedConnectionLimit" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.propagatedConnectionLimit"></a>

```typescript
public readonly propagatedConnectionLimit: number;
```

- *Type:* number

---

##### `pscServiceAttachmentId`<sup>Required</sup> <a name="pscServiceAttachmentId" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.pscServiceAttachmentId"></a>

```typescript
public readonly pscServiceAttachmentId: DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList">DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList</a>

---

##### `reconcileConnections`<sup>Required</sup> <a name="reconcileConnections" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.reconcileConnections"></a>

```typescript
public readonly reconcileConnections: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `region`<sup>Required</sup> <a name="region" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.region"></a>

```typescript
public readonly region: string;
```

- *Type:* string

---

##### `selfLink`<sup>Required</sup> <a name="selfLink" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.selfLink"></a>

```typescript
public readonly selfLink: string;
```

- *Type:* string

---

##### `sendPropagatedConnectionLimitIfZero`<sup>Required</sup> <a name="sendPropagatedConnectionLimitIfZero" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.sendPropagatedConnectionLimitIfZero"></a>

```typescript
public readonly sendPropagatedConnectionLimitIfZero: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `showNatIps`<sup>Required</sup> <a name="showNatIps" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.showNatIps"></a>

```typescript
public readonly showNatIps: IResolvable;
```

- *Type:* cdktn.IResolvable

---

##### `targetService`<sup>Required</sup> <a name="targetService" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.targetService"></a>

```typescript
public readonly targetService: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleComputeServiceAttachmentsServiceAttachments;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachments">DataGoogleComputeServiceAttachmentsServiceAttachments</a>

---


### DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList <a name="DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList.Initializer"></a>

```typescript
import { dataGoogleComputeServiceAttachments } from '@cdktn/provider-google'

new dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList(terraformResource: IInterpolatingParent, terraformAttribute: string, wrapsSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList.Initializer.parameter.wrapsSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList.allWithMapKey"></a>

```typescript
public allWithMapKey(mapKeyAttributeName: string): DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList.get"></a>

```typescript
public get(index: number): DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList.get.parameter.index"></a>

- *Type:* number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdList.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---


### DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference <a name="DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.Initializer"></a>

```typescript
import { dataGoogleComputeServiceAttachments } from '@cdktn/provider-google'

new dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference(terraformResource: IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.computeFqn"></a>

```typescript
public computeFqn(): string
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.getAnyMapAttribute"></a>

```typescript
public getAnyMapAttribute(terraformAttribute: string): {[ key: string ]: any}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.getBooleanAttribute"></a>

```typescript
public getBooleanAttribute(terraformAttribute: string): IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.getBooleanMapAttribute"></a>

```typescript
public getBooleanMapAttribute(terraformAttribute: string): {[ key: string ]: boolean}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.getListAttribute"></a>

```typescript
public getListAttribute(terraformAttribute: string): string[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.getNumberAttribute"></a>

```typescript
public getNumberAttribute(terraformAttribute: string): number
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.getNumberListAttribute"></a>

```typescript
public getNumberListAttribute(terraformAttribute: string): number[]
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.getNumberMapAttribute"></a>

```typescript
public getNumberMapAttribute(terraformAttribute: string): {[ key: string ]: number}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.getStringAttribute"></a>

```typescript
public getStringAttribute(terraformAttribute: string): string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.getStringMapAttribute"></a>

```typescript
public getStringMapAttribute(terraformAttribute: string): {[ key: string ]: string}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.interpolationForAttribute"></a>

```typescript
public interpolationForAttribute(property: string): IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `resolve` <a name="resolve" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.resolve"></a>

```typescript
public resolve(_context: IResolveContext): any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.toString"></a>

```typescript
public toString(): string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.property.creationStack">creationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.property.fqn">fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.property.high">high</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.property.low">low</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentId">DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentId</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.property.creationStack"></a>

```typescript
public readonly creationStack: string[];
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.property.fqn"></a>

```typescript
public readonly fqn: string;
```

- *Type:* string

---

##### `high`<sup>Required</sup> <a name="high" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.property.high"></a>

```typescript
public readonly high: string;
```

- *Type:* string

---

##### `low`<sup>Required</sup> <a name="low" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.property.low"></a>

```typescript
public readonly low: string;
```

- *Type:* string

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentIdOutputReference.property.internalValue"></a>

```typescript
public readonly internalValue: DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentId;
```

- *Type:* <a href="#@cdktn/provider-google.dataGoogleComputeServiceAttachments.DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentId">DataGoogleComputeServiceAttachmentsServiceAttachmentsPscServiceAttachmentId</a>

---



